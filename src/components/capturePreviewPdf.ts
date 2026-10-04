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

export async function captureElementToPdf(
  element: HTMLElement,
  fileName: string
): Promise<void> {
  const JsPDF = await getJsPDF();

  // Fonts + images must be ready, otherwise the first render can be blank / fallback font
  try {
    await document.fonts?.ready;
  } catch {
    /* ignore */
  }
  await Promise.all(
    Array.from(element.querySelectorAll("img")).map((img) =>
      img.complete && img.naturalHeight > 0
        ? Promise.resolve()
        : new Promise<void>((res) => {
            img.onload = () => res();
            img.onerror = () => res();
          })
    )
  );

  const cssW = Math.max(1, element.offsetWidth);
  // ~1600px wide output (≈190dpi on A4). Capped so phones don't run out of canvas memory.
  const pixelRatio = Math.min(4, Math.max(2, 1600 / cssW));

  const options = {
    pixelRatio,
    backgroundColor: "#ffffff",
    cacheBust: false,
    // flat export: no rounded corners / shadow / margin / transforms on the card itself
    style: {
      margin: "0",
      borderRadius: "0",
      boxShadow: "none",
      transform: "none",
    } as Partial<CSSStyleDeclaration>,
  };

  // Safari quirk: first foreignObject render can come out without images/fonts.
  if (isSafari()) {
    try {
      await toCanvas(element, options);
    } catch {
      /* warm-up only */
    }
  }
  const canvas = await toCanvas(element, options);

  const imgData = canvas.toDataURL("image/jpeg", 0.95);

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
