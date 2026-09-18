/**
 * Same method as freebiodatamaker.com:
 * 1. Draw full biodata on high-res A4 canvas (2382×3369 = 3× 794×1123)
 * 2. JPEG → jsPDF addImage(0,0,210,297)
 * No DOM capture → no empty space bugs.
 */

export interface PdfBiodataInput {
  fullName: string;
  dob: string;
  gender: string;
  height: string;
  religion: string;
  caste: string;
  rashi: string;
  nakshatra: string;
  gotra: string;
  manglik: string;
  education: string;
  occupation: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  nativePlace: string;
  familyDetails: string;
  phone: string;
  email: string;
  address: string;
  partnerPreferences: string;
  photoDataUrl?: string;
  biodataTitle?: string;
  mantra?: string;
  customFields?: { label: string; value: string }[];
}

// Base design size (same as freebiodatamaker.com)
const BW = 794;
const BH = 1123;
const SCALE = 3; // export at 2382×3369

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
async function getJsPDF(): Promise<any> {
  try {
    const mod = await import("jspdf");
    return mod.jsPDF;
  } catch {
    await loadScript("/vendor/jspdf.umd.min.js");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const JsPDF = w.jspdf?.jsPDF || w.jsPDF;
    if (!JsPDF) throw new Error("jsPDF unavailable — refresh page");
    return JsPDF;
  }
}

async function loadImage(src: string): Promise<HTMLImageElement | null> {
  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej();
      img.src = src;
    });
    return img;
  } catch {
    return null;
  }
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

type Row = [string, string];

function filterRows(rows: Row[]): Row[] {
  return rows.filter(([, v]) => v && String(v).trim());
}

/** Draw wrapped text, return y after last line */
function drawWrap(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxW: number,
  lineH: number
): number {
  const words = String(text).split(/\s+/);
  let line = "";
  let cy = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, cy);
      cy += lineH;
      line = word;
    } else {
      line = test;
    }
  }
  if (line) {
    ctx.fillText(line, x, cy);
    cy += lineH;
  }
  return cy;
}

function drawSectionTitle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  icon: string,
  title: string
): number {
  const h = 24;
  ctx.font = "bold 11px Georgia, 'Times New Roman', serif";
  const tw = ctx.measureText(title).width;
  const w = tw + 36;
  ctx.fillStyle = "#ebe4d8";
  roundRect(ctx, x, y, w, h, 12);
  ctx.fill();
  ctx.fillStyle = "#3f3a34";
  ctx.font = "12px serif";
  ctx.fillText(`${icon}  ${title}`, x + 10, y + 16);
  return y + h + 14;
}

function drawFieldRows(
  ctx: CanvasRenderingContext2D,
  rows: Row[],
  x: number,
  y: number,
  colW: number,
  lineH: number
): number {
  let cy = y;
  const labelW = colW * 0.45;
  const valueX = x + labelW + 8;
  const valueW = colW - labelW - 12;
  for (const [label, value] of rows) {
    ctx.font = "12px Georgia, serif";
    ctx.fillStyle = "#5c564e";
    ctx.fillText(label, x, cy);
    ctx.fillStyle = "#9a9288";
    ctx.fillText(":", x + labelW - 4, cy);
    ctx.font = "600 12px Georgia, serif";
    ctx.fillStyle = "#2c2825";
    const nextY = drawWrap(ctx, value, valueX, cy, valueW, lineH * 0.9);
    cy = Math.max(cy + lineH, nextY + 2);
  }
  return cy;
}


/** Decorative leaf (matches preview corners) */
function drawLeaf(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rot: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((rot * Math.PI) / 180);
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#c4b5a0";
  ctx.beginPath();
  // simple leaf shape
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size * 0.3, size * 0.2, size * 0.5, size * 0.6, 0, size);
  ctx.bezierCurveTo(-size * 0.5, size * 0.6, -size * 0.3, size * 0.2, 0, 0);
  ctx.fill();
  ctx.strokeStyle = "#b8a990";
  ctx.globalAlpha = 0.45;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, size * 0.1);
  ctx.quadraticCurveTo(size * 0.15, size * 0.5, 0, size * 0.9);
  ctx.stroke();
  ctx.restore();
}

export async function generateBiodataPdf(data: PdfBiodataInput): Promise<void> {
  // High-res canvas like freebiodatamaker.com (2382×3369)
  const canvas = document.createElement("canvas");
  canvas.width = BW * SCALE;
  canvas.height = BH * SCALE;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(SCALE, SCALE);

  // Full-page cream background
  ctx.fillStyle = "#faf8f5";
  ctx.fillRect(0, 0, BW, BH);

  // Soft border
  ctx.strokeStyle = "#e5dfd4";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(18, 18, BW - 36, BH - 36);

  const M = 42;
  const title = (data.biodataTitle || data.fullName || "Biodata").trim();
  const mantra = (data.mantra || "|| Shri Ganeshaya Namah ||").trim();

  // ——— Header ———
  let y = M + 12;
  ctx.fillStyle = "#2c2825";
  ctx.font = "bold 40px Georgia, 'Times New Roman', serif";
  ctx.fillText(title, M, y + 32);

  // Photo top-right
  const photoW = 105;
  const photoH = 126;
  const photoX = BW - M - photoW;
  const photoY = M + 4;
  ctx.fillStyle = "#f0ebe3";
  ctx.strokeStyle = "#d6cfc4";
  ctx.lineWidth = 1;
  roundRect(ctx, photoX, photoY, photoW, photoH, 4);
  ctx.fill();
  ctx.stroke();

  if (data.photoDataUrl) {
    const img = await loadImage(data.photoDataUrl);
    if (img) {
      ctx.save();
      roundRect(ctx, photoX, photoY, photoW, photoH, 4);
      ctx.clip();
      const ir = img.width / img.height;
      const pr = photoW / photoH;
      let sx = 0,
        sy = 0,
        sw = img.width,
        sh = img.height;
      if (ir > pr) {
        sw = img.height * pr;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width / pr;
        sy = (img.height - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, photoX, photoY, photoW, photoH);
      ctx.restore();
      ctx.strokeStyle = "#d6cfc4";
      roundRect(ctx, photoX, photoY, photoW, photoH, 4);
      ctx.stroke();
    }
  } else {
    ctx.fillStyle = "#c4b5a0";
    ctx.font = "26px serif";
    ctx.textAlign = "center";
    ctx.fillText("👤", photoX + photoW / 2, photoY + photoH / 2 - 6);
    ctx.font = "9px Georgia, serif";
    ctx.fillText("PHOTO HERE", photoX + photoW / 2, photoY + photoH / 2 + 14);
    ctx.textAlign = "left";
  }

  y += 48;
  ctx.font = "13px Georgia, serif";
  ctx.fillStyle = "#6b645c";
  ctx.fillText("🕉️  " + mantra, M, y);

  y += 12;
  ctx.strokeStyle = "#c4b5a0";
  ctx.beginPath();
  ctx.moveTo(M, y);
  ctx.lineTo(M + 44, y);
  ctx.stroke();

  y += 16;
  ctx.font = "italic 11px Georgia, serif";
  ctx.fillStyle = "#8a8278";
  ctx.fillText("A simple introduction to a better tomorrow…", M, y);

  y = Math.max(y + 30, photoY + photoH + 28);

  // Sections data
  const leftPersonal = filterRows([
    ["Name", data.fullName],
    ["Date of Birth", data.dob],
    ["Gender", data.gender],
    ["Place of Birth", data.nativePlace],
    ["Height", data.height],
    ["Religion", data.religion],
    ["Caste", data.caste],
    ["Rashi", data.rashi],
    ["Nakshatra", data.nakshatra],
    ["Gotra", data.gotra],
    ["Manglik", data.manglik],
  ]);
  const leftEdu = filterRows([["Highest Qualification", data.education]]);
  const leftOcc = filterRows([["Profession", data.occupation]]);
  const leftAddr = filterRows([["Present Address", data.address]]);
  const rightFam = filterRows([
    ["Father's Name", data.fatherName],
    ["Mother's Name", data.motherName],
    ["Father's Occupation", data.fatherOccupation],
    ["Mother's Occupation", data.motherOccupation],
    ["Siblings (Brothers/Sisters)", data.siblings],
    ["Family Background", data.familyDetails],
  ]);
  const rightExp = filterRows([
    ["Partner's Preference", data.partnerPreferences],
  ]);
  const rightCustom = filterRows(
    (data.customFields || []).map((f) => [f.label, f.value] as Row)
  );
  const rightContact = filterRows([
    ["Mobile No.", data.phone],
    ["Email ID", data.email],
  ]);

  const totalLines =
    leftPersonal.length +
    leftEdu.length +
    leftOcc.length +
    leftAddr.length +
    rightFam.length +
    rightExp.length +
    rightCustom.length +
    rightContact.length +
    8;

  const footerY = BH - 40;
  const availH = footerY - y - 16;
  // Spread content to fill page height
  const lineH = Math.min(26, Math.max(15, availH / Math.max(totalLines, 10)));

  const colGap = 32;
  const colW = (BW - M * 2 - colGap) / 2;
  const leftX = M;
  const rightX = M + colW + colGap;

  // Left column
  let ly = y;
  ly = drawSectionTitle(ctx, leftX, ly, "👤", "PERSONAL DETAILS");
  ly = drawFieldRows(ctx, leftPersonal, leftX, ly, colW, lineH);
  ly += 12;
  ly = drawSectionTitle(ctx, leftX, ly, "🎓", "EDUCATION");
  ly = drawFieldRows(ctx, leftEdu, leftX, ly, colW, lineH);
  ly += 12;
  ly = drawSectionTitle(ctx, leftX, ly, "💼", "OCCUPATION");
  ly = drawFieldRows(ctx, leftOcc, leftX, ly, colW, lineH);
  ly += 12;
  ly = drawSectionTitle(ctx, leftX, ly, "🏠", "ADDRESS");
  ly = drawFieldRows(ctx, leftAddr, leftX, ly, colW, lineH);

  // Right column
  let ry = y;
  ry = drawSectionTitle(ctx, rightX, ry, "👨‍👩‍👧", "FAMILY DETAILS");
  ry = drawFieldRows(ctx, rightFam, rightX, ry, colW, lineH);
  ry += 12;
  ry = drawSectionTitle(ctx, rightX, ry, "♥", "EXPECTATIONS");
  ry = drawFieldRows(ctx, rightExp, rightX, ry, colW, lineH);
  if (rightCustom.length) {
    ry += 12;
    ry = drawSectionTitle(ctx, rightX, ry, "★", "HOBBIES & INTERESTS");
    ry = drawFieldRows(ctx, rightCustom, rightX, ry, colW, lineH);
  }
  ry += 12;
  ry = drawSectionTitle(ctx, rightX, ry, "💬", "CONTACT DETAILS");
  ry = drawFieldRows(ctx, rightContact, rightX, ry, colW, lineH);

  // Footer under content (same as preview) + corner leaves
  const contentBottom = Math.max(ly, ry) + 28;
  const footerTextY = Math.min(contentBottom, footerY);

  ctx.font = "italic 11px Georgia, serif";
  ctx.fillStyle = "#8a8278";
  ctx.textAlign = "center";
  ctx.fillText(
    "Looking forward to a meaningful journey together...",
    BW / 2,
    footerTextY
  );
  ctx.textAlign = "left";

  // Corner leaves (same as screen preview)
  drawLeaf(ctx, 28, 22, 55, -15);
  drawLeaf(ctx, BW - 70, BH - 90, 55, 165);

  // ——— Same as freebiodatamaker.com export ———
  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const JsPDF = await getJsPDF();
  const pdf = new JsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  // Full-bleed A4 — zero margins, zero empty strip
  pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "FAST");

  const safe = (data.fullName || data.biodataTitle || "biodata")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase()
    .slice(0, 40);
  pdf.save(`${safe || "biodata"}-marriage-biodata.pdf`);
}
