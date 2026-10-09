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

  const extraPhotos = [
    element.getAttribute("data-extra-photo-1") || "",
    element.getAttribute("data-extra-photo-2") || "",
  ].filter(Boolean).slice(0, 2);

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

  // Additional profile photos are placed on a fresh A4 page, split into two equal halves.
  if (extraPhotos.length) {
    pdf.addPage();

    // Same template on page 2: paint the template artwork as the page background
    // (non-artwork templates reuse page-1 edge colour, set above).
    const pageBg = element.getAttribute("data-page-bg");
    let hasBg = false;
    if (pageBg) {
      try {
        const bgImg = await new Promise<HTMLImageElement>((resolve, reject) => {
          const im = new Image();
          im.onload = () => resolve(im);
          im.onerror = () => reject(new Error("bg"));
          im.src = pageBg;
        });
        const c = document.createElement("canvas");
        c.width = bgImg.naturalWidth;
        c.height = bgImg.naturalHeight;
        c.getContext("2d")!.drawImage(bgImg, 0, 0);
        // artwork is A4 ratio (1000x1414) -> stretch to fill the page exactly
        pdf.addImage(c.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, PAGE_W, PAGE_H, undefined, "FAST");
        hasBg = true;
      } catch {
        /* fall back to plain colour */
      }
    }
    if (!hasBg) {
      pdf.setFillColor(px[0], px[1], px[2]);
      pdf.rect(0, 0, PAGE_W, PAGE_H, "F");
    }
    // Keep photos inside the decorative frame of the artwork
    // per-template margins (mm) so photos stay inside the artwork frame
    const p2 = (element.getAttribute("data-page2") || "").split(",").map(Number);
    const hasP2 = p2.length === 3 && p2.every((n) => Number.isFinite(n));
    const insetX = hasBg ? (hasP2 ? p2[0] : 22) : 0;
    const insetTop = hasBg ? (hasP2 ? p2[1] : 34) : 0;
    const insetBottom = hasBg ? (hasP2 ? p2[2] : 34) : 0;
    // Page 2 is intentionally split into two exact A4 halves.
    // Each secondary photo gets the complete half-page area with no outer margin/gap.
    const margin = 0;
    const gap = 0;
    const slotH = (PAGE_H - insetTop - insetBottom) / 2;

    const loadPhoto = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Could not load profile photo"));
      img.src = src;
    });

    for (let i = 0; i < extraPhotos.length; i++) {
      try {
        const img = await loadPhoto(extraPhotos[i]);
        const boxX = insetX;
        const boxY = insetTop + i * slotH;
        const boxW = PAGE_W - insetX * 2;
        const ir = img.width / img.height;
        const br = boxW / slotH;

        // Fit the complete photo inside its half-page slot. Do not crop or stretch
        // portrait/landscape images; preserve the original aspect ratio.
        let drawW: number;
        let drawH: number;
        if (ir > br) {
          drawW = boxW;
          drawH = boxW / ir;
        } else {
          drawH = slotH;
          drawW = slotH * ir;
        }

        const x = boxX + (boxW - drawW) / 2;
        const y = boxY + (slotH - drawH) / 2;
        if (!hasBg) {
          pdf.setFillColor(255, 255, 255);
          pdf.rect(boxX, boxY, boxW, slotH, "F");
        }
        const imageFormat = img.src.startsWith("data:image/png") ? "PNG" : "JPEG";
        pdf.addImage(img.src, imageFormat, x, y, drawW, drawH, undefined, "FAST");
      } catch {
        // Skip an invalid secondary photo without failing the complete PDF.
      }
    }
  }

  const name = fileName.toLowerCase().endsWith(".pdf") ? fileName : `${fileName}.pdf`;
  pdf.save(name);
}
