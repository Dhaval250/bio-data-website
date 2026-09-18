import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * POST { html, css?, fileName? }
 * Exact A4 PDF — content scaled to FILL page (no empty bottom space).
 */
export async function POST(req: NextRequest) {
  let browser;
  try {
    const body = await req.json();
    const html = typeof body.html === "string" ? body.html : "";
    const css = typeof body.css === "string" ? body.css : "";
    const fileName =
      typeof body.fileName === "string" && body.fileName.trim()
        ? body.fileName.trim()
        : "marriage-biodata.pdf";

    if (!html || html.length < 20) {
      return NextResponse.json({ error: "Missing html" }, { status: 400 });
    }

    const puppeteer = await import("puppeteer");

    browser = await puppeteer.default.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();
    // A4 @ 96dpi — scale 1.5 keeps quality without 25MB files
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.5 });

    const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    @page { size: A4 portrait; margin: 0; }
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      box-sizing: border-box;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 794px !important;
      height: 1123px !important;
      background: #faf8f5 !important;
      overflow: hidden !important;
    }
    #sheet {
      width: 794px !important;
      height: 1123px !important;
      margin: 0 !important;
      padding: 0 !important;
      background: #faf8f5 !important;
      overflow: hidden !important;
      position: relative;
    }
    #sheet > #biodata-preview-card,
    #sheet > [data-biodata-preview],
    #sheet > * {
      width: 794px !important;
      max-width: 794px !important;
      height: 1123px !important;
      min-height: 1123px !important;
      aspect-ratio: auto !important;
      margin: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      overflow: hidden !important;
      display: flex !important;
      flex-direction: column !important;
      background: #faf8f5 !important;
    }
    #biodata-print-inner {
      flex: 1 1 auto !important;
      display: flex !important;
      flex-direction: column !important;
      height: 100% !important;
      min-height: 100% !important;
      padding: 36px 42px !important;
      box-sizing: border-box !important;
    }
    #biodata-print-inner > div:last-of-type {
      flex: 1 1 auto !important;
    }
    img { max-width: 100%; height: auto; display: block; object-fit: cover; }
  </style>
  <style id="app-styles">
${css}
  </style>
</head>
<body>
  <div id="sheet">${html}</div>
</body>
</html>`;

    await page.setContent(fullHtml, {
      waitUntil: ["load", "domcontentloaded"],
      timeout: 45000,
    });

    await page.evaluate(async () => {
      const imgs = Array.from(document.images);
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
    });

    // Scale content so it FILLS the A4 height (removes empty bottom space)
    await page.evaluate(() => {
      const PAGE_H = 1123;
      const card =
        document.querySelector("#biodata-preview-card") ||
        document.querySelector("[data-biodata-preview]") ||
        document.querySelector("#sheet > *");
      const inner = document.querySelector(
        "#biodata-print-inner"
      ) as HTMLElement | null;
      if (!inner || !card) return;

      // Measure natural content height (without forced stretch)
      inner.style.height = "auto";
      inner.style.minHeight = "0";
      (card as HTMLElement).style.height = "auto";
      (card as HTMLElement).style.minHeight = "0";

      const contentH = Math.max(inner.scrollHeight, (card as HTMLElement).scrollHeight, 1);
      // Scale up so content reaches full page (cap at 1.45× to avoid extreme stretch)
      const scale = Math.min(Math.max(PAGE_H / contentH, 1), 1.45);

      (card as HTMLElement).style.height = `${PAGE_H}px`;
      (card as HTMLElement).style.minHeight = `${PAGE_H}px`;
      (card as HTMLElement).style.width = "794px";
      (card as HTMLElement).style.overflow = "hidden";

      inner.style.transformOrigin = "top center";
      inner.style.transform = `scale(${scale})`;
      inner.style.width = `${100 / scale}%`;
      // Keep visual height filling page
      inner.style.height = `${PAGE_H / scale}px`;
      inner.style.minHeight = `${PAGE_H / scale}px`;
      inner.style.padding = "28px 36px";
      inner.style.boxSizing = "border-box";
      inner.style.display = "flex";
      inner.style.flexDirection = "column";
    });

    await new Promise((r) => setTimeout(r, 200));

    const pdfBuffer = await page.pdf({
      width: "210mm",
      height: "297mm",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
      preferCSSPageSize: true,
      pageRanges: "1",
    });

    await browser.close();
    browser = undefined;

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName.replace(/[^\w.\-]+/g, "_")}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Puppeteer PDF error:", err);
    if (browser) {
      try {
        await browser.close();
      } catch {
        /* ignore */
      }
    }
    const message = err instanceof Error ? err.message : "PDF generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
