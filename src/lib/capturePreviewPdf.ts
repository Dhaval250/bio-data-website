/**
 * Preview card -> real PDF file, downloaded directly (no print dialog).
 *
 * Rendering is done by `html-to-image` (SVG <foreignObject>), i.e. by the
 * browser's OWN layout/text engine. That keeps line breaks, letter spacing and
 * fonts identical to the preview. (html2canvas re-implements text drawing and
 * produced wrapped, overlapping labels on mobile.)
 *
 * Needs:  npm i html-to-image
 */
import { toCanvas } from "html-to-image";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-pdf-lib="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.dataset.pdfLib = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getJsPDF(): Promise<any> {
  try {
    const mod = await import("jspdf");
    return mod.jsPDF;
  } catch {
    await loadScript("/vendor/jspdf.umd.min.js");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const JsPDF = w.jspdf?.jsPDF || w.jsPDF;
    if (!JsPDF) throw new Error("jsPDF missing");
    return JsPDF;
  }
}

function isSafari(): boolean {
  const ua = navigator.userAgent;
  return /safari/i.test(ua) && !/chrome|chromium|crios|fxios|android/i.test(ua);
}

/** Fixed render width (CSS px). Layout uses cqw units, so any width gives the same design,
 *  but a big width means normal-sized fonts (no tiny 8px text on phones) -> sharp output. */
const RENDER_W = 1050;

/** Off-screen full-size copy of the card, unaffected by the phone's screen width. */
function makeOffscreenClone(element: HTMLElement): { host: HTMLElement; node: HTMLElement } {
  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.cssText =
    `position:fixed;left:-20000px;top:0;width:${RENDER_W}px;pointer-events:none;` +
    "-webkit-text-size-adjust:100%;text-size-adjust:100%;";

  const node = element.cloneNode(true) as HTMLElement;
  node.removeAttribute("id");
  node.style.setProperty("width", `${RENDER_W}px`, "important");
  node.style.setProperty("max-width", "none", "important");
  node.style.setProperty("min-width", "0", "important");
  node.style.setProperty("margin", "0", "important");
  node.style.setProperty("border-radius", "0", "important");
  node.style.setProperty("box-shadow", "none", "important");
  node.style.setProperty("transform", "none", "important");
  node.querySelectorAll("img").forEach((img) => {
    img.loading = "eager";
    img.decoding = "sync";
  });

  host.appendChild(node);
  document.body.appendChild(host);
  return { host, node };
}

async function waitForImages(root: HTMLElement) {
  await Promise.all(
    Array.from(root.querySelectorAll("img")).map((img) =>
      img.complete && img.naturalHeight > 0
        ? Promise.resolve()
        : new Promise<void>((res) => {
            img.onload = () => res();
            img.onerror = () => res();
          })
    )
  );
}

export async function captureElementToPdf(
  element: HTMLElement,
  fileName: string
): Promise<void> {
  const JsPDF = await getJsPDF();

  try {
    await document.fonts?.ready;
  } catch {
    /* ignore */
  }

  const { host, node } = makeOffscreenClone(element);
  let canvas: HTMLCanvasElement;
  try {
    await waitForImages(node);
    // let the clone lay out (fit-to-page scaling inside the card re-measures on resize)
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(null))));
    await new Promise((r) => setTimeout(r, 150));

    const makeOptions = (pixelRatio: number) => ({
      pixelRatio,
      backgroundColor: "#ffffff",
      cacheBust: false,
    });

    // 2x of 1050px = 2100px wide (~254dpi on A4). Fall back to lower ratios on weak devices.
    const ratios = [2, 1.5, 1];
    let lastErr: unknown;
    canvas = undefined as unknown as HTMLCanvasElement;
    for (const ratio of ratios) {
      try {
        if (isSafari()) {
          try {
            await toCanvas(node, makeOptions(ratio)); // Safari warm-up render
          } catch {
            /* ignore */
          }
        }
        canvas = await toCanvas(node, makeOptions(ratio));
        if (canvas.width > 0 && canvas.height > 0) break;
      } catch (e) {
        lastErr = e;
      }
    }
    if (!canvas || canvas.width === 0) {
      throw lastErr instanceof Error ? lastErr : new Error("Could not render biodata");
    }
  } finally {
    host.remove();
  }

  const imgData = canvas.toDataURL("image/jpeg", 0.92);

  const pdf = new JsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const PAGE_W = 210;
  const PAGE_H = 297;

  // Fill page with the card's own edge color (matters for cards shorter than A4)
  const px = canvas.getContext("2d")!.getImageData(2, 2, 1, 1).data;
  pdf.setFillColor(px[0], px[1], px[2]);
  pdf.rect(0, 0, PAGE_W, PAGE_H, "F");

  // Fit onto ONE page, keep aspect ratio
  let w = PAGE_W;
  let h = (PAGE_W * canvas.height) / canvas.width;
  if (h > PAGE_H) {
    h = PAGE_H;
    w = (PAGE_H * canvas.width) / canvas.height;
  }
  pdf.addImage(imgData, "JPEG", (PAGE_W - w) / 2, 0, w, h, undefined, "FAST");

  const name = fileName.toLowerCase().endsWith(".pdf") ? fileName : `${fileName}.pdf`;
  pdf.save(name);
}
