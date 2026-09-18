/**
 * Convert LIVE preview template (with data) → PDF
 * Same DOM = same design. freebiodatamaker-style: image full A4.
 */

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
    s.onerror = () => reject(new Error(`Failed ${src}`));
    document.head.appendChild(s);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getHtml2Canvas(): Promise<any> {
  try {
    const mod = await import("html2canvas");
    return mod.default;
  } catch {
    await loadScript("/vendor/html2canvas.min.js");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fn = (window as any).html2canvas;
    if (!fn) throw new Error("html2canvas unavailable");
    return fn;
  }
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
    if (!JsPDF) throw new Error("jsPDF unavailable");
    return JsPDF;
  }
}

export async function captureElementToPdf(
  element: HTMLElement,
  fileName: string
): Promise<void> {
  const html2canvas = await getHtml2Canvas();
  const JsPDF = await getJsPDF();

  // Use the REAL on-screen template (same data + same design)
  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#faf8f5",
    logging: false,
    scrollX: 0,
    scrollY: 0,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.95);
  const pdf = new JsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  // Full A4 page — same as freebiodatamaker.com
  pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "FAST");

  const name = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;
  pdf.save(name);
}
