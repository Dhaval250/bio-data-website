/**
 * Template-aware PDF:
 * - abstract-orange / lotus / red-velvet / rose / blue → classic single-column (matches preview)
 * - elegant-profile / others → elegant 2-column
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
  godImage?: string;
  templateId?: string;
  customFields?: { label: string; value: string }[];
}

const BW = 794;
const BH = 1123;
const SCALE = 3;

type Theme = {
  pageBg: string;
  titleColor: string;
  sectionColor: string;
  textColor: string;
  labelColor: string;
  photoBorder: string;
  dark?: boolean;
  floral?: boolean;
};

const CLASSIC: Record<string, Theme> = {
  "abstract-orange": {
    pageBg: "#fff9f3",
    titleColor: "#c45c1a",
    sectionColor: "#c45c1a",
    textColor: "#3d3429",
    labelColor: "#6b5f52",
    photoBorder: "#e8b86d",
    floral: true,
  },
  "abstract-lotus": {
    pageBg: "#fff8f5",
    titleColor: "#9b1c1c",
    sectionColor: "#9b1c1c",
    textColor: "#3f3a34",
    labelColor: "#5c5348",
    photoBorder: "#e8a0a0",
    floral: true,
  },
  "abstract-red-velvet": {
    pageBg: "#fffefb",
    titleColor: "#7f1d1d",
    sectionColor: "#9b1c1c",
    textColor: "#3f3a34",
    labelColor: "#5c5348",
    photoBorder: "#c4a35a",
  },
  "abstract-rose": {
    pageBg: "#3d0620",
    titleColor: "#f5d76e",
    sectionColor: "#f5d76e",
    textColor: "#faf5f0",
    labelColor: "#f0e6d8",
    photoBorder: "#f5d76e",
    dark: true,
  },
  "classic-cream": {
    pageBg: "#fbf7ef",
    titleColor: "#874708",
    sectionColor: "#834b11",
    textColor: "#6b4118",
    labelColor: "#845e36",
    photoBorder: "#b5651d",
  },
  "maroon-gold": {
    pageBg: "#3a0f1a",
    titleColor: "#f6c291",
    sectionColor: "#f6c291",
    textColor: "#f4d0b8",
    labelColor: "#e9b99c",
    photoBorder: "#e7c98d",
    dark: true,
  },
  "royal-purple": {
    pageBg: "#2a1a4a",
    titleColor: "#f3c196",
    sectionColor: "#f3c196",
    textColor: "#f4d0b8",
    labelColor: "#e2b9a6",
    photoBorder: "#e8b88c",
    dark: true,
  },
  "royal-elephant": {
    pageBg: "#fffefb",
    titleColor: "#a01418",
    sectionColor: "#a01418",
    textColor: "#2b1710",
    labelColor: "#3a2418",
    photoBorder: "#a01418",
  },
  "royal-leaf": {
    pageBg: "#5a0000",
    titleColor: "#f7b538",
    sectionColor: "#f7b538",
    textColor: "#fbeee0",
    labelColor: "#ffffff",
    photoBorder: "#f7b538",
    dark: true,
  },
  "festive-border": {
    pageBg: "#ffffff",
    titleColor: "#a21f6d",
    sectionColor: "#cf6b2b",
    textColor: "#1a1a1a",
    labelColor: "#a21f6d",
    photoBorder: "#a21f6d",
  },
  "abstract-ganesha": {
    pageBg: "#ffffff",
    titleColor: "#7b2313",
    sectionColor: "#7b2313",
    textColor: "#222222",
    labelColor: "#222222",
    photoBorder: "#7a2a1c",
  },
  "royal-gold-maroon": {
    pageBg: "#4a0a1e",
    titleColor: "#f9c58a",
    sectionColor: "#f3be5f",
    textColor: "#f2b9a0",
    labelColor: "#f5cc78",
    photoBorder: "#e8a53c",
    dark: true,
  },
  "rose-floral": {
    pageBg: "#fdf1e6",
    titleColor: "#a4823a",
    sectionColor: "#a4823a",
    textColor: "#3a3a3a",
    labelColor: "#1a1a1a",
    photoBorder: "#c3a24f",
  },
  "abstract-blue": {
    pageBg: "#061018",
    titleColor: "#f5d76e",
    sectionColor: "#f5d76e",
    textColor: "#f1f5f9",
    labelColor: "#cbd5e1",
    photoBorder: "#c9a227",
    dark: true,
  },
};

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
  const flush = () => {
    if (!line) return;
    ctx.fillText(line, x, cy);
    cy += lineH;
    line = "";
  };
  for (const word of words) {
    if (ctx.measureText(word).width > maxW) {
      flush();
      let chunk = "";
      for (const ch of word) {
        const t = chunk + ch;
        if (ctx.measureText(t).width > maxW && chunk) {
          ctx.fillText(chunk, x, cy);
          cy += lineH;
          chunk = ch;
        } else chunk = t;
      }
      line = chunk;
      continue;
    }
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxW && line) {
      flush();
      line = word;
    } else line = test;
  }
  flush();
  return cy;
}

async function drawPhoto(
  ctx: CanvasRenderingContext2D,
  dataUrl: string | undefined,
  x: number,
  y: number,
  w: number,
  h: number,
  border: string,
  fillBg: string
) {
  ctx.fillStyle = fillBg;
  ctx.strokeStyle = border;
  ctx.lineWidth = 2.5;
  roundRect(ctx, x, y, w, h, 4);
  ctx.fill();
  ctx.stroke();
  if (dataUrl) {
    const img = await loadImage(dataUrl);
    if (img) {
      ctx.save();
      roundRect(ctx, x, y, w, h, 4);
      ctx.clip();
      const ir = img.width / img.height;
      const pr = w / h;
      // Contain: show the entire profile image without cropping or stretching.
      let dw = w;
      let dh = h;
      if (ir > pr) {
        dh = w / ir;
      } else {
        dw = h * ir;
      }
      const dx = x + (w - dw) / 2;
      const dy = y + (h - dh) / 2;
      ctx.drawImage(img, 0, 0, img.width, img.height, dx, dy, dw, dh);
      ctx.restore();
      ctx.strokeStyle = border;
      ctx.lineWidth = 2.5;
      roundRect(ctx, x, y, w, h, 4);
      ctx.stroke();
      return;
    }
  }
  ctx.fillStyle = "#a8a29e";
  ctx.font = "36px serif";
  ctx.textAlign = "center";
  ctx.fillText("👤", x + w / 2, y + h / 2 - 4);
  ctx.font = "9px Georgia, serif";
  ctx.fillText("PHOTO", x + w / 2, y + h / 2 + 16);
  ctx.textAlign = "left";
}

function drawFloralSoft(ctx: CanvasRenderingContext2D, color: string) {
  ctx.save();
  ctx.globalAlpha = 0.22;
  const blobs = [
    [80, 60, 90],
    [BW - 60, 80, 70],
    [50, BH - 80, 80],
    [BW - 70, BH - 60, 90],
  ];
  for (const [x, y, r] of blobs) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

/** Classic template = same layout as screen preview (Personal / Family / Contact + photo right) */
async function drawClassic(
  ctx: CanvasRenderingContext2D,
  data: PdfBiodataInput,
  theme: Theme
) {
  // Card background
  ctx.fillStyle = theme.pageBg;
  ctx.fillRect(0, 0, BW, BH);

  if (theme.floral) {
    drawFloralSoft(ctx, theme.titleColor === "#c45c1a" ? "#f9c4c0" : "#f5d0c8");
  }

  // Soft card panel
  const pad = 36;
  if (!theme.dark) {
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    roundRect(ctx, 28, 28, BW - 56, BH - 56, 12);
    ctx.fill();
  }

  const M = pad + 16;
  const contentW = BW - M * 2;
  const photoW = 118;
  const photoH = 142;
  const photoX = BW - M - photoW;
  const photoY = M + 52;

  const title = (data.biodataTitle || "Biodata").trim();
  const mantra = (data.mantra || "|| Shri Ganeshaya Namah ||").trim();

  // Header row: Title + Om badge + Mantra (centered like preview)
  let y = M + 8;
  ctx.textAlign = "center";
  ctx.fillStyle = theme.titleColor;
  ctx.font = "bold 28px Georgia, 'Times New Roman', serif";
  const titleW = ctx.measureText(title).width;
  const badgeR = 18;
  const gap = 12;
  const mantraFont = "600 16px Georgia, serif";
  ctx.font = mantraFont;
  const mantraW = ctx.measureText(mantra).width;
  const totalW = titleW + gap + badgeR * 2 + gap + mantraW;
  let hx = (BW - totalW) / 2;

  ctx.font = "bold 28px Georgia, 'Times New Roman', serif";
  ctx.textAlign = "left";
  ctx.fillStyle = theme.titleColor;
  ctx.fillText(title, hx, y + 22);
  hx += titleW + gap;

  // Om circle badge
  ctx.beginPath();
  ctx.arc(hx + badgeR, y + 12, badgeR, 0, Math.PI * 2);
  ctx.fillStyle = theme.dark ? "rgba(255,255,255,0.12)" : "#fff8e7";
  ctx.fill();
  ctx.strokeStyle = theme.photoBorder;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.font = "18px serif";
  ctx.textAlign = "center";
  ctx.fillStyle = theme.titleColor;
  ctx.fillText(data.godImage || "ॐ", hx + badgeR, y + 18);
  hx += badgeR * 2 + gap;

  ctx.font = mantraFont;
  ctx.textAlign = "left";
  ctx.fillStyle = theme.titleColor;
  ctx.fillText(mantra, hx, y + 18);
  ctx.textAlign = "left";

  y = M + 56;

  // Photo top-right
  await drawPhoto(
    ctx,
    data.photoDataUrl,
    photoX,
    photoY,
    photoW,
    photoH,
    theme.photoBorder,
    theme.dark ? "rgba(0,0,0,0.25)" : "#f5ebe0"
  );

  const leftW = photoX - M - 28;
  const lineH = 22;
  const labelW = 150;

  const drawSection = (heading: string, rows: Row[]) => {
    if (!rows.length) return;
    ctx.font = "bold 18px Georgia, serif";
    ctx.fillStyle = theme.sectionColor;
    ctx.fillText(heading, M, y);
    y += 26;
    for (const [label, value] of rows) {
      ctx.font = "13px Georgia, serif";
      ctx.fillStyle = theme.labelColor;
      ctx.fillText(label, M, y);
      ctx.fillStyle = theme.labelColor;
      ctx.globalAlpha = 0.5;
      ctx.fillText(":", M + labelW, y);
      ctx.globalAlpha = 1;
      ctx.font = "600 13px Georgia, serif";
      ctx.fillStyle = theme.textColor;
      const next = drawWrap(ctx, value, M + labelW + 14, y, leftW - labelW - 14, lineH * 0.9);
      y = Math.max(y + lineH, next + 2);
    }
    y += 16;
  };

  drawSection(
    "Personal Details",
    filterRows([
      ["Full Name", data.fullName],
      ["Date of Birth", data.dob],
      ["Height", data.height],
      ["Place of Birth", data.nativePlace],
      ["Religion", data.religion],
      ["Caste", data.caste],
      ["Zodiac Sign", data.rashi],
      ["Nakshatra", data.nakshatra],
      ["Manglik", data.manglik],
      ["Gotra", data.gotra],
      ["Higher Education", data.education],
      ["Occupation", data.occupation],
      ...(data.customFields || []).map((f) => [f.label, f.value] as Row),
    ])
  );

  // After photo area, use full width
  if (y < photoY + photoH + 20) y = photoY + photoH + 20;

  drawSection(
    "Family Details",
    filterRows([
      ["Father's Name", data.fatherName],
      ["Father's Occupation", data.fatherOccupation],
      ["Mother's Name", data.motherName],
      ["Mother's Occupation", data.motherOccupation],
      ["Brothers / Sisters", data.siblings],
      ["Family Background", data.familyDetails],
    ])
  );

  drawSection(
    "Contact Details",
    filterRows([
      ["Mobile Number", data.phone],
      ["Email", data.email],
      ["Address", data.address],
    ])
  );
}

/** Elegant 2-column (elegant-profile) */
async function drawElegant(ctx: CanvasRenderingContext2D, data: PdfBiodataInput) {
  ctx.fillStyle = "#faf8f5";
  ctx.fillRect(0, 0, BW, BH);
  ctx.strokeStyle = "#e5dfd4";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(18, 18, BW - 36, BH - 36);

  const M = 42;
  const title = (data.biodataTitle || data.fullName || "Biodata").trim();
  const mantra = (data.mantra || "|| Shri Ganeshaya Namah ||").trim();

  let y = M + 12;
  ctx.fillStyle = "#2c2825";
  ctx.font = "bold 36px Georgia, 'Times New Roman', serif";
  ctx.fillText(title, M, y + 28);

  const photoW = 105;
  const photoH = 126;
  const photoX = BW - M - photoW;
  const photoY = M + 4;
  await drawPhoto(ctx, data.photoDataUrl, photoX, photoY, photoW, photoH, "#d6cfc4", "#f0ebe3");

  y += 48;
  ctx.font = "13px Georgia, serif";
  ctx.fillStyle = "#6b645c";
  ctx.fillText((data.godImage || "🕉️") + "  " + mantra, M, y);

  y += 12;
  ctx.strokeStyle = "#c4b5a0";
  ctx.beginPath();
  ctx.moveTo(M, y);
  ctx.lineTo(M + 44, y);
  ctx.stroke();

  y = Math.max(y + 22, photoY + photoH + 24);

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
  const rightContact = filterRows([
    ["Mobile No.", data.phone],
    ["Email ID", data.email],
  ]);

  const lineH = 20;
  const sectionGap = 14;
  const colGap = 24;
  const colW = (BW - M * 2 - colGap) / 2;
  const leftX = M;
  const rightX = M + colW + colGap;

  const drawSectionTitle = (x: number, cy: number, icon: string, t: string) => {
    const h = 24;
    ctx.font = "bold 11px Georgia, serif";
    const tw = ctx.measureText(t).width;
    const w = tw + 36;
    ctx.fillStyle = "#ebe4d8";
    roundRect(ctx, x, cy, w, h, 12);
    ctx.fill();
    ctx.fillStyle = "#3f3a34";
    ctx.font = "12px serif";
    ctx.fillText(`${icon}  ${t}`, x + 10, cy + 16);
    return cy + h + 12;
  };

  const drawFieldRows = (rows: Row[], x: number, cy: number) => {
    const labelW = Math.min(150, colW * 0.48);
    const valueX = x + labelW + 10;
    const valueW = colW - labelW - 14;
    for (const [label, value] of rows) {
      ctx.font = "12px Georgia, serif";
      ctx.fillStyle = "#5c564e";
      ctx.fillText(label, x, cy);
      ctx.fillStyle = "#9a9288";
      ctx.fillText(":", x + labelW, cy);
      ctx.font = "600 12px Georgia, serif";
      ctx.fillStyle = "#2c2825";
      const nextY = drawWrap(ctx, value, valueX, cy, valueW, lineH * 0.85);
      cy = Math.max(cy + lineH, nextY + 4);
    }
    return cy;
  };

  const drawCol = (
    blocks: { icon: string; title: string; rows: Row[] }[],
    x: number,
    startY: number
  ) => {
    let cy = startY;
    blocks.forEach((b, i) => {
      cy = drawSectionTitle(x, cy, b.icon, b.title);
      cy = drawFieldRows(b.rows, x, cy);
      if (i < blocks.length - 1) cy += sectionGap;
    });
    return cy;
  };

  const leftBlocks = [
    { icon: "👤", title: "PERSONAL DETAILS", rows: leftPersonal },
    { icon: "🎓", title: "EDUCATION", rows: leftEdu },
    { icon: "💼", title: "OCCUPATION", rows: leftOcc },
    { icon: "🏠", title: "ADDRESS", rows: leftAddr },
  ].filter((b) => b.rows.length);

  const rightBlocks = [
    { icon: "👨‍👩‍👧", title: "FAMILY DETAILS", rows: rightFam },
    { icon: "💬", title: "CONTACT DETAILS", rows: rightContact },
  ].filter((b) => b.rows.length);

  const ly = drawCol(leftBlocks, leftX, y);
  const ry = drawCol(rightBlocks, rightX, y);
  const contentBottom = Math.max(ly, ry);

  const footerY = Math.min(BH - 28, contentBottom + 22);
  ctx.font = "italic 11px Georgia, serif";
  ctx.fillStyle = "#8a8278";
  ctx.textAlign = "center";
  ctx.fillText(
    "Looking forward to a meaningful journey together...",
    BW / 2,
    footerY
  );
  ctx.textAlign = "left";
}

export async function generateBiodataPdf(data: PdfBiodataInput): Promise<void> {
  const canvas = document.createElement("canvas");
  canvas.width = BW * SCALE;
  canvas.height = BH * SCALE;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(SCALE, SCALE);

  const tid = data.templateId || "elegant-profile";
  const classic = CLASSIC[tid];

  if (classic) {
    await drawClassic(ctx, data, classic);
  } else {
    await drawElegant(ctx, data);
  }

  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const JsPDF = await getJsPDF();
  const pdf = new JsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "FAST");

  const safe = (data.fullName || data.biodataTitle || "biodata")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase()
    .slice(0, 40);
  pdf.save(`${safe || "biodata"}-marriage-biodata.pdf`);
}
