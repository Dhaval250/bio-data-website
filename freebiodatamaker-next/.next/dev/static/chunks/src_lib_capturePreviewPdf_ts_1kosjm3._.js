(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/capturePreviewPdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "captureElementToPdf",
    ()=>captureElementToPdf
]);
/**
 * Preview → PDF without Tailwind lab() crash.
 * Strategy: build an iframe with ZERO stylesheets, paste a clone
 * that only has inline RGB styles from getComputedStyle (resolved).
 */ function loadScript(src) {
    return new Promise((resolve, reject)=>{
        if (document.querySelector(`script[data-pdf-lib="${src}"]`)) {
            resolve();
            return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.dataset.pdfLib = src;
        s.onload = ()=>resolve();
        s.onerror = ()=>reject(new Error(`Failed ${src}`));
        document.head.appendChild(s);
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getHtml2Canvas() {
    try {
        const mod = await __turbopack_context__.A("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript, async loader)");
        return mod.default;
    } catch  {
        await loadScript("/vendor/html2canvas.min.js");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fn = window.html2canvas;
        if (!fn) throw new Error("html2canvas missing");
        return fn;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getJsPDF() {
    try {
        const mod = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
        return mod.jsPDF;
    } catch  {
        await loadScript("/vendor/jspdf.umd.min.js");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window;
        const JsPDF = w.jspdf?.jsPDF || w.jsPDF;
        if (!JsPDF) throw new Error("jspdf missing");
        return JsPDF;
    }
}
function isBad(v) {
    return /lab\(|oklch\(|oklab\(|lch\(|color\(/.test(v);
}
function toSafeColor(value, ctx) {
    if (!value || value === "transparent") return "rgba(0,0,0,0)";
    if (!isBad(value) && (value.startsWith("#") || value.startsWith("rgb"))) {
        return value;
    }
    try {
        ctx.fillStyle = "#000";
        ctx.fillStyle = value;
        const r = String(ctx.fillStyle);
        if (r.startsWith("#") || r.startsWith("rgb")) return r;
    } catch  {
    /* ignore */ }
    // Fallbacks for biodata palette
    if (value.includes("250") || value.includes("faf")) return "#faf8f5";
    return "#2c2825";
}
/** Copy resolved visual styles from live node → target as inline only */ function inlineComputedTree(source, target, ctx) {
    const cs = window.getComputedStyle(source);
    // Comprehensive visual props (no lab after resolve in modern browsers)
    const props = [
        "display",
        "position",
        "boxSizing",
        "width",
        "height",
        "maxWidth",
        "maxHeight",
        "minWidth",
        "minHeight",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "fontStyle",
        "lineHeight",
        "letterSpacing",
        "textAlign",
        "textDecoration",
        "textTransform",
        "whiteSpace",
        "overflow",
        "overflowX",
        "overflowY",
        "verticalAlign",
        "opacity",
        "visibility",
        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
        "borderTopStyle",
        "borderRightStyle",
        "borderBottomStyle",
        "borderLeftStyle",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomRightRadius",
        "borderBottomLeftRadius",
        "flexDirection",
        "flexWrap",
        "justifyContent",
        "alignItems",
        "alignContent",
        "alignSelf",
        "flex",
        "flexGrow",
        "flexShrink",
        "flexBasis",
        "gap",
        "rowGap",
        "columnGap",
        "gridTemplateColumns",
        "gridTemplateRows",
        "gridColumn",
        "gridRow",
        "objectFit",
        "objectPosition",
        "zIndex",
        "top",
        "right",
        "bottom",
        "left",
        "transform",
        "transformOrigin"
    ];
    for (const p of props){
        try {
            const val = cs.getPropertyValue(p.replace(/[A-Z]/g, (m)=>"-" + m.toLowerCase()));
            if (val) {
                target.style.setProperty(p.replace(/[A-Z]/g, (m)=>"-" + m.toLowerCase()), val);
            }
        } catch  {
        /* ignore */ }
    }
    // Colors — force safe
    const colorProps = [
        "color",
        "background-color",
        "border-top-color",
        "border-right-color",
        "border-bottom-color",
        "border-left-color",
        "outline-color",
        "text-decoration-color"
    ];
    for (const p of colorProps){
        const raw = cs.getPropertyValue(p);
        target.style.setProperty(p, toSafeColor(raw || "#2c2825", ctx), "important");
    }
    // background-image often none; skip gradients with lab
    const bgImage = cs.backgroundImage;
    if (!bgImage || bgImage === "none" || isBad(bgImage)) {
        target.style.setProperty("background-image", "none", "important");
    }
    target.style.setProperty("box-shadow", "none", "important");
    target.style.setProperty("text-shadow", "none", "important");
    target.style.setProperty("filter", "none", "important");
    // Children
    const srcChildren = Array.from(source.children);
    const dstChildren = Array.from(target.children);
    for(let i = 0; i < srcChildren.length; i++){
        const s = srcChildren[i];
        const d = dstChildren[i];
        if (s instanceof HTMLElement && d instanceof HTMLElement) {
            inlineComputedTree(s, d, ctx);
        }
    }
}
function buildSafeClone(element) {
    const rect = element.getBoundingClientRect();
    const width = Math.max(1, Math.ceil(element.scrollWidth || rect.width));
    const height = Math.max(1, Math.ceil(element.scrollHeight || rect.height));
    const iframe = document.createElement("iframe");
    iframe.style.cssText = `position:fixed;left:-10000px;top:0;width:${width}px;height:${height}px;border:0;opacity:0;pointer-events:none;`;
    document.body.appendChild(iframe);
    const idoc = iframe.contentDocument;
    idoc.open();
    idoc.write(`<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background:#faf8f5;"></body></html>`);
    idoc.close();
    const clone = element.cloneNode(true);
    // Sync images
    const srcImgs = element.querySelectorAll("img");
    const dstImgs = clone.querySelectorAll("img");
    srcImgs.forEach((src, i)=>{
        if (dstImgs[i] && src.src) {
            dstImgs[i].src = src.src;
            dstImgs[i].style.objectFit = "cover";
        }
    });
    const ctx = document.createElement("canvas").getContext("2d");
    inlineComputedTree(element, clone, ctx);
    clone.style.width = `${width}px`;
    clone.style.height = `${height}px`;
    clone.style.margin = "0";
    clone.style.maxWidth = "none";
    clone.style.boxShadow = "none";
    clone.style.backgroundColor = "#faf8f5";
    idoc.body.appendChild(clone);
    return {
        host: iframe,
        clone,
        width,
        height
    };
}
async function captureElementToPdf(element, fileName) {
    const html2canvas = await getHtml2Canvas();
    const JsPDF = await getJsPDF();
    await document.fonts?.ready?.catch?.(()=>undefined);
    const imgs = Array.from(element.querySelectorAll("img"));
    await Promise.all(imgs.map((img)=>img.complete && img.naturalHeight > 0 ? Promise.resolve() : new Promise((res)=>{
            img.onload = ()=>res();
            img.onerror = ()=>res();
        })));
    const { host, clone, width, height } = buildSafeClone(element);
    try {
        // Wait layout in iframe
        await new Promise((r)=>setTimeout(r, 50));
        const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#faf8f5",
            logging: false,
            width,
            height,
            windowWidth: width,
            windowHeight: height,
            scrollX: 0,
            scrollY: 0
        });
        const imgData = canvas.toDataURL("image/jpeg", 0.97);
        const pdf = new JsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
            compress: true
        });
        pdf.setFillColor(250, 248, 245);
        pdf.rect(0, 0, 210, 297, "F");
        pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "FAST");
        const name = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;
        pdf.save(name);
    } finally{
        host.remove();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_capturePreviewPdf_ts_1kosjm3._.js.map