/**
 * Preview card -> real PDF file, downloaded directly (no print dialog).
 *
 * Uses html2canvas on the LIVE card (so fonts/stylesheets are identical),
 * then jsPDF to place it on one A4 page and save().
 *
 * html2canvas 1.4.x cannot parse modern CSS colors (lab/oklch/oklab/color-mix)
 * that Tailwind v4 emits. In `onclone` we convert every such computed color to
 * plain rgb() before html2canvas reads it.
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
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
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
    if (!fn) throw new Error("html2canvas missing");
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
    if (!JsPDF) throw new Error("jsPDF missing");
    return JsPDF;
  }
}

const BAD_COLOR = /(oklab|oklch|lab|lch|color-mix)\(|color\(/;

/** Convert ANY css color (lab, oklch, color(), …) to rgb()/rgba() via 1px canvas. */
function makeColorConverter() {
  const c = document.createElement("canvas");
  c.width = c.height = 1;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  const cache = new Map<string, string>();
  return (value: string): string => {
    const hit = cache.get(value);
    if (hit) return hit;
    let out = "rgba(0,0,0,0)";
    try {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = "#000";
      ctx.fillStyle = value;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      out = `rgba(${r},${g},${b},${(a / 255).toFixed(3)})`;
    } catch {
      /* keep transparent */
    }
    cache.set(value, out);
    return out;
  };
}

const COLOR_PROPS = [
  "color",
  "background-color",
  "border-top-color",
  "border-right-color",
  "border-bottom-color",
  "border-left-color",
  "outline-color",
  "text-decoration-color",
  "column-rule-color",
  "caret-color",
  "fill",
  "stroke",
];

function sanitizeSubtree(root: HTMLElement, view: Window) {
  const toRgb = makeColorConverter();
  const all: HTMLElement[] = [root, ...Array.from(root.querySelectorAll<HTMLElement>("*"))];

  for (const el of all) {
    const cs = view.getComputedStyle(el);

    for (const p of COLOR_PROPS) {
      const v = cs.getPropertyValue(p);
      if (v && BAD_COLOR.test(v)) el.style.setProperty(p, toRgb(v), "important");
    }

    const bg = cs.backgroundImage;
    if (bg && bg !== "none" && BAD_COLOR.test(bg)) {
      el.style.setProperty("background-image", "none", "important");
    }
    const sh = cs.boxShadow;
    if (sh && sh !== "none") el.style.setProperty("box-shadow", "none", "important");
    const ts = cs.textShadow;
    if (ts && ts !== "none") el.style.setProperty("text-shadow", "none", "important");
  }

  // html2canvas ignores object-fit on <img>; emulate with a background image.
  root.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
    const cs = view.getComputedStyle(img);
    if (cs.objectFit === "cover" || cs.objectFit === "contain") {
      const d = img.ownerDocument.createElement("div");
      d.style.cssText =
        `width:${cs.width};height:${cs.height};display:block;` +
        `background-image:url("${img.src}");background-size:${cs.objectFit};` +
        `background-position:center;background-repeat:no-repeat;`;
      img.replaceWith(d);
    }
  });
}

export async function captureElementToPdf(
  element: HTMLElement,
  fileName: string
): Promise<void> {
  const html2canvas = await getHtml2Canvas();
  const JsPDF = await getJsPDF();

  await document.fonts?.ready?.catch?.(() => undefined);

  // Make sure every image in the card is loaded
  const imgs = Array.from(element.querySelectorAll("img"));
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalHeight > 0
        ? Promise.resolve()
        : new Promise<void>((res) => {
            img.onload = () => res();
            img.onerror = () => res();
          })
    )
  );

  const rect = element.getBoundingClientRect();
  const cssW = Math.max(1, Math.round(rect.width));
  // ~1800px wide output (≈220dpi on A4), between 2x and 4x
  const scale = Math.min(4, Math.max(2, 1800 / cssW));

  const canvas: HTMLCanvasElement = await html2canvas(element, {
    scale,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    logging: false,
    onclone: (clonedDoc: Document) => {
      const view = clonedDoc.defaultView;
      const root =
        clonedDoc.getElementById("biodata-preview-card") ||
        clonedDoc.querySelector<HTMLElement>("[data-biodata-preview]");
      if (!view || !root) return;

      // Flat export: no rounded corners / shadow / auto margins
      root.style.setProperty("border-radius", "0", "important");
      root.style.setProperty("box-shadow", "none", "important");
      root.style.setProperty("margin", "0", "important");

      // Pseudo-elements can't be styled inline; neutralise their colors.
      const st = clonedDoc.createElement("style");
      st.textContent =
        "*::before,*::after{box-shadow:none!important;background-image:none!important;border-color:transparent!important;}";
      clonedDoc.head.appendChild(st);

      sanitizeSubtree(root, view);
    },
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.95);

  const pdf = new JsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const PAGE_W = 210;
  const PAGE_H = 297;

  // Fill page with the card's own edge color (matters for short cards like Elegant)
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
