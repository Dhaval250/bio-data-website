import { Template } from "./types";

/** Only templates that have real preview images in /public/templates */
export const TEMPLATES: Template[] = [
  {
    id: "abstract-orange",
    name: "Abstract Orange",
    description: "Floral cream frame, orange headers, photo right",
    accent: "#e67e22",
    headerBg: "#fffaf5",
    borderColor: "#f0c078",
    previewClass: "bg-[#fffaf5] border-[#f0c078]",
  },
  {
    id: "abstract-lotus",
    name: "Abstract Lotus",
    description: "Soft pink lotus corners, burgundy titles, cream page",
    accent: "#9b2c2c",
    headerBg: "#fff5f5",
    borderColor: "#f8b4b4",
    previewClass: "bg-[#fff5f5] border-[#f8b4b4]",
  },
  {
    id: "abstract-red-velvet",
    name: "Abstract Red Velvet",
    description: "Deep red velvet frame, white center, traditional look",
    accent: "#9b1c1c",
    headerBg: "#ffffff",
    borderColor: "#7f1d1d",
    previewClass: "bg-white border-red-800",
  },
  {
    id: "abstract-rose",
    name: "Abstract Rose",
    description: "Rich magenta rose with gold ornaments",
    accent: "#f5d76e",
    headerBg: "#6b0f3a",
    borderColor: "#f5d76e",
    previewClass: "bg-[#6b0f3a] border-[#f5d76e]",
  },
  {
    id: "abstract-blue",
    name: "Abstract Blue",
    description: "Navy blue premium with gold accents",
    accent: "#f5d76e",
    headerBg: "#0a1628",
    borderColor: "#c9a227",
    previewClass: "bg-[#0a1628] border-[#c9a227]",
  },
  {
    id: "classic-cream",
    name: "Classic Cream",
    description: "Cream damask page, Ganesha calligraphy, brown text",
    accent: "#834b11",
    headerBg: "#fbf7ef",
    borderColor: "#b5651d",
    previewClass: "bg-[#fbf7ef] border-[#b5651d]",
  },
  {
    id: "maroon-gold",
    name: "Maroon Gold",
    description: "Textured maroon with gold border and Ganesha watermark",
    accent: "#f6c291",
    headerBg: "#4a1420",
    borderColor: "#e7c98d",
    previewClass: "bg-[#4a1420] border-[#e7c98d]",
  },
  {
    id: "royal-purple",
    name: "Royal Purple",
    description: "Deep purple gradient with gold ornaments",
    accent: "#f3c196",
    headerBg: "#2a1a4a",
    borderColor: "#e8b88c",
    previewClass: "bg-[#2a1a4a] border-[#e8b88c]",
  },
  {
    id: "royal-elephant",
    name: "Royal Elephant",
    description: "Red arch with elephants, marigold garlands, round photo",
    accent: "#a01418",
    headerBg: "#b01c2e",
    borderColor: "#f39c1f",
    previewClass: "bg-[#b01c2e] border-[#f39c1f]",
  },
  {
    id: "royal-leaf",
    name: "Royal Leaf Maroon",
    description: "Deep maroon with gold leaf borders and Ganesha calligraphy",
    accent: "#f7b538",
    headerBg: "#5a0000",
    borderColor: "#f7b538",
    previewClass: "bg-[#5a0000] border-[#f7b538]",
  },
  {
    id: "festive-border",
    name: "Festive Border",
    description: "White page, ornate orange and magenta border, serif text",
    accent: "#a21f6d",
    headerBg: "#ffffff",
    borderColor: "#cf6b2b",
    previewClass: "bg-white border-[#cf6b2b]",
  },
  {
    id: "abstract-ganesha",
    name: "Abstract Ganesha",
    description: "White page, maroon border, Ganesha watermark, photo right",
    accent: "#7b2313",
    headerBg: "#ffffff",
    borderColor: "#7a2a1c",
    previewClass: "bg-white border-[#7a2a1c]",
  },
  {
    id: "royal-gold-maroon",
    name: "Royal Gold Maroon",
    description: "Burgundy with golden scroll corners and mandala sides",
    accent: "#f3be5f",
    headerBg: "#5a0a24",
    borderColor: "#d6a64a",
    previewClass: "bg-[#5a0a24] border-[#d6a64a]",
  },
  {
    id: "rose-floral",
    name: "Rose Floral",
    description: "Soft peach page, gold frame, pink flowers, romantic backdrop",
    accent: "#a4823a",
    headerBg: "#fdf1e6",
    borderColor: "#c3a24f",
    previewClass: "bg-[#fdf1e6] border-[#c3a24f]",
  },
  {
    id: "elegant-profile",
    name: "Elegant Profile",
    description: "Soft cream two-column personal profile with photo",
    accent: "#3f3a34",
    headerBg: "#faf8f5",
    borderColor: "#d6cfc4",
    previewClass: "bg-[#faf8f5] border-[#d6cfc4]",
  },
];

export function templateImageSrc(id: string): string {
  // All previews as PNG so every browser shows full image
  return `/templates/${id}.png`;
}

export function getTemplate(id: string): Template {
  return TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
}

export type ClassicTheme = {
  pageBg: string;
  panelBg: string;
  titleColor: string;
  sectionColor: string;
  textColor: string;
  labelColor: string;
  photoBorder: string;
  frame?: string;
  dark?: boolean;
};

export function getClassicTheme(id: string): ClassicTheme | null {
  const themes: Record<string, ClassicTheme> = {
    "abstract-orange": {
      pageBg: "linear-gradient(180deg,#fff9f3,#fffefb)",
      panelBg: "transparent",
      titleColor: "#e67e22",
      sectionColor: "#e67e22",
      textColor: "#3d3429",
      labelColor: "#5c5348",
      photoBorder: "#e8b86d",
      frame: "#e8b86d",
    },
    "abstract-lotus": {
      pageBg: "linear-gradient(180deg,#fff8f5,#ffffff)",
      panelBg: "transparent",
      titleColor: "#9b1c1c",
      sectionColor: "#9b1c1c",
      textColor: "#3f3a34",
      labelColor: "#5c5348",
      photoBorder: "#e8a0a0",
    },
    "abstract-red-velvet": {
      pageBg: "linear-gradient(180deg,#5c0a0a,#7f1d1d 30%,#5c0a0a)",
      panelBg: "#ffffff",
      titleColor: "#7f1d1d",
      sectionColor: "#9b1c1c",
      textColor: "#3f3a34",
      labelColor: "#5c5348",
      photoBorder: "#c4a35a",
      frame: "#7f1d1d",
    },
    "abstract-rose": {
      pageBg: "linear-gradient(160deg,#4a0a2a,#6b0f3a 40%,#3d0620)",
      panelBg: "transparent",
      titleColor: "#f5d76e",
      sectionColor: "#f5d76e",
      textColor: "#faf5f0",
      labelColor: "#f0e6d8",
      photoBorder: "#f5d76e",
      dark: true,
    },
    "abstract-blue": {
      pageBg: "linear-gradient(160deg,#061018,#0a1628 40%,#050d18)",
      panelBg: "transparent",
      titleColor: "#f5d76e",
      sectionColor: "#f5d76e",
      textColor: "#f1f5f9",
      labelColor: "#cbd5e1",
      photoBorder: "#c9a227",
      dark: true,
    },
  };
  return themes[id] || null;
}


/**
 * Layouts for the 5 "art" templates. The live preview draws the user's data on top of
 * /templates/<id>.bg.webp (the real template artwork with the sample text removed), so the
 * preview always matches the design the user picked in the gallery.
 *
 * Units: `left`, `photo.left` are % of page width; `*Y` / `photo.top` are % of page height;
 * everything else is cqw (1cqw = 1% of page width) so the page scales on screen and in print.
 */
export type ArtLayout = {
  bg: string;
  left: number; // left margin (% width)
  labelW: number; // label column width (cqw) -> where the ":" sits
  rowFont: number;
  maxY: number; // text must end above this (fraction of page height)
  pitch: number; // row height
  headFont: number;
  headY: number; // "Personal Details" heading centre (% height)
  headGap: number; // heading centre -> first row centre (cqw)
  secGap: number; // last row centre -> next heading centre (cqw)
  photo: { left: number; top: number; w: number; h: number; round?: boolean }; // %, %, cqw, cqw (round = circular photo, ring is part of the artwork)
  header: { y: number; none?: boolean; stacked?: boolean; iconY?: number; mantraY?: number; iconSize: number; titleFont: number; circleIcon?: boolean };
  color: { title: string; heading: string; label: string; text: string; photoBorder: string; headingBg?: string; headingText?: string };
  /** Section heading drawn as a filled box (e.g. orange bar with white text) */
  headBox?: { inset: number; padX: number; h: number };
  /** bold label column */
  labelBold?: boolean;
  /** false = no ":" between label and value */
  colon?: boolean;
  /** override the page font (e.g. a serif for classic designs) */
  font?: string;
  /** override width (% of page) of the details column */
  bodyW?: number;
  /** margins (mm) used for the extra-photo page 2: left/right, top, bottom */
  page2?: { x: number; top: number; bottom: number };
  defaults: { title: string; mantra: string };
};

export const ART_LAYOUTS: Record<string, ArtLayout> = {
  "abstract-lotus": {
    bg: "/templates/abstract-lotus.bg.webp",
    left: 8.9, labelW: 20.1, maxY: 0.85, rowFont: 2.25, pitch: 3.29, headFont: 3.2, headY: 20.6, headGap: 3.8, secGap: 4.9,
    photo: { left: 75.3, top: 20.4, w: 22.7, h: 28.6 },
    header: { y: 11.7, iconSize: 7.4, titleFont: 3.6 },
    color: { title: "#a31c3a", heading: "#a31c3a", label: "#1f1f1f", text: "#1f1f1f", photoBorder: "#a31c3a" },
    defaults: { title: "Biodata", mantra: "|| हर हर महादेव ||" },
  },
  "abstract-orange": {
    bg: "/templates/abstract-orange.bg.webp",
    left: 12.6, labelW: 20.1, maxY: 0.84, rowFont: 2.15, pitch: 3.13, headFont: 3.3, headY: 17.8, headGap: 3.9, secGap: 4.8,
    photo: { left: 67.6, top: 16.9, w: 22.8, h: 28.4 },
    header: { y: 9.6, iconSize: 7.2, titleFont: 3.6, circleIcon: true },
    color: { title: "#c0601c", heading: "#c0601c", label: "#26211c", text: "#26211c", photoBorder: "#b5651d" },
    defaults: { title: "Marriage Biodata", mantra: "|| Ganeshaya Namah ||" },
  },
  "abstract-red-velvet": {
    bg: "/templates/abstract-red-velvet.bg.webp",
    left: 12.6, labelW: 20.1, maxY: 0.9, rowFont: 2.3, pitch: 3.38, headFont: 3.4, headY: 17.2, headGap: 3.96, secGap: 5.1,
    photo: { left: 67.6, top: 16.9, w: 22.8, h: 28.4 },
    header: { y: 9.8, iconSize: 7.4, titleFont: 3.5, circleIcon: true },
    color: { title: "#9b1c24", heading: "#9b1c24", label: "#1f1f1f", text: "#1f1f1f", photoBorder: "#8b1a1a" },
    defaults: { title: "बायोडाटा", mantra: "|| श्री गणेशाय नमः ||" },
  },
  "abstract-rose": {
    bg: "/templates/abstract-rose.bg.webp",
    left: 13.9, labelW: 20.1, maxY: 0.91, rowFont: 2.3, pitch: 3.36, headFont: 3.3, headY: 28.8, headGap: 3.8, secGap: 5.1,
    photo: { left: 74.3, top: 29.5, w: 22.9, h: 28.4 },
    header: { y: 10.4, stacked: true, iconY: 15.5, mantraY: 20.5, iconSize: 7.6, titleFont: 3.6 },
    color: { title: "#f7d56e", heading: "#f7d56e", label: "#ffffff", text: "#ffffff", photoBorder: "#f7d56e" },
    defaults: { title: "Marriage Biodata", mantra: "|| श्री गणेशाय नमः ||" },
  },
  "abstract-blue": {
    bg: "/templates/abstract-blue.bg.webp",
    left: 8.9, labelW: 20.1, maxY: 0.9, rowFont: 2.25, pitch: 3.37, headFont: 3.3, headY: 19.9, headGap: 3.8, secGap: 5.1,
    photo: { left: 74.3, top: 20.2, w: 22.6, h: 28.0 },
    header: { y: 9.6, iconSize: 6.2, titleFont: 3.6 },
    color: { title: "#f2ee8c", heading: "#f2ee8c", label: "#ffffff", text: "#ffffff", photoBorder: "#e8e07a" },
    defaults: { title: "Biodata", mantra: "|| नमो बुध्दाय ||" },
  },
  "classic-cream": {
    bg: "/templates/classic-cream.bg.webp",
    left: 4.9, labelW: 27.2, maxY: 0.93, rowFont: 2.5, pitch: 4.1, headFont: 3.4, headY: 15.2, headGap: 4.3, secGap: 5.6,
    photo: { left: 73.0, top: 11.1, w: 24.3, h: 32.3 },
    // Ganesha calligraphy is part of the artwork, so no title/icon/mantra is drawn on top
    header: { y: 0, none: true, iconSize: 0, titleFont: 3.4 },
    color: { title: "#874708", heading: "#834b11", label: "#845e36", text: "#6b4118", photoBorder: "#b5651d" },
    defaults: { title: "Biodata", mantra: "|| श्री गणेशाय नमः ||" },
  },
  "maroon-gold": {
    bg: "/templates/maroon-gold.bg.webp",
    left: 7.8, labelW: 27.5, maxY: 0.92, rowFont: 2.5, pitch: 4.1, headFont: 3.4, headY: 17.6, headGap: 4.4, secGap: 5.6,
    photo: { left: 72.3, top: 14.6, w: 22.2, h: 29.5 },
    header: { y: 14.0, stacked: true, iconY: 5.6, mantraY: 10.9, iconSize: 8.5, titleFont: 3.2 },
    color: { title: "#f6c291", heading: "#f6c291", label: "#e9b99c", text: "#f4d0b8", photoBorder: "#e7c98d" },
    defaults: { title: "Biodata", mantra: "ॐ गणेशाय नमः" },
  },
  "royal-purple": {
    bg: "/templates/royal-purple.bg.webp",
    left: 7.8, labelW: 27.5, maxY: 0.92, rowFont: 2.5, pitch: 4.1, headFont: 3.4, headY: 17.6, headGap: 4.4, secGap: 5.6,
    photo: { left: 68.0, top: 11.5, w: 25.5, h: 34.0 },
    header: { y: 14.0, stacked: true, iconY: 5.6, mantraY: 10.9, iconSize: 8.5, titleFont: 3.0 },
    color: { title: "#f3c196", heading: "#f3c196", label: "#e2b9a6", text: "#f4d0b8", photoBorder: "#e8b88c" },
    defaults: { title: "Biodata", mantra: "ॐ गणेशाय नमः" },
  },
  "royal-elephant": {
    bg: "/templates/royal-elephant.bg.webp",
    left: 16.2, labelW: 28.0, maxY: 0.95, rowFont: 2.4, pitch: 3.95, headFont: 3.5, headY: 29.6, headGap: 4.5, secGap: 5.6,
    photo: { left: 67.6, top: 22.7, w: 16.8, h: 16.8, round: true },
    // swastika icon is part of the artwork -> only mantra + title are drawn
    header: { y: 25.4, stacked: true, iconY: 18, mantraY: 22.6, iconSize: 0, titleFont: 3.0 },
    color: { title: "#a01418", heading: "#a01418", label: "#3a2418", text: "#2b1710", photoBorder: "#a01418" },
    bodyW: 52,
    page2: { x: 34, top: 72, bottom: 22 },
    defaults: { title: "Biodata", mantra: "ॐ श्री गणेशाय नमः" },
  },
  "royal-leaf": {
    bg: "/templates/royal-leaf.bg.webp",
    left: 4.1, labelW: 30.0, maxY: 0.88, rowFont: 2.5, pitch: 4.0, headFont: 4.2, headY: 20.5, headGap: 5.6, secGap: 6.4,
    photo: { left: 71.7, top: 17.9, w: 24.4, h: 32.4 },
    header: { y: 0, none: true, iconSize: 0, titleFont: 3.4 },
    color: { title: "#f7b538", heading: "#f7b538", label: "#ffffff", text: "#fbeee0", photoBorder: "rgba(247,181,56,0.0)" },
    page2: { x: 20, top: 52, bottom: 26 },
    defaults: { title: "Biodata", mantra: "|| श्री गणेशाय नमः ||" },
  },
  "festive-border": {
    bg: "/templates/festive-border.bg.webp",
    left: 10.0, labelW: 22.5, maxY: 0.9, rowFont: 2.35, pitch: 3.9, headFont: 3.0, headY: 11.4, headGap: 5.3, secGap: 7.4,
    photo: { left: 64.9, top: 9.8, w: 25.3, h: 35.6 },
    header: { y: 0, none: true, iconSize: 0, titleFont: 3.4 },
    color: { title: "#a21f6d", heading: "#a21f6d", label: "#a21f6d", text: "#1a1a1a", photoBorder: "#a21f6d", headingBg: "#cf6b2b", headingText: "#ffffff" },
    headBox: { inset: 2.0, padX: 2.1, h: 3.7 },
    colon: false,
    font: "Georgia, 'Times New Roman', 'Noto Serif Devanagari', 'Noto Sans Devanagari', serif",
    page2: { x: 24, top: 30, bottom: 30 },
    defaults: { title: "Biodata", mantra: "" },
  },
  "abstract-ganesha": {
    bg: "/templates/abstract-ganesha.bg.webp",
    left: 8.9, labelW: 20.2, maxY: 0.88, rowFont: 2.25, pitch: 3.4, headFont: 3.2, headY: 14.7, headGap: 3.9, secGap: 5.15,
    photo: { left: 75.3, top: 20.6, w: 22.8, h: 28.4 },
    header: { y: 5.7, iconSize: 7.4, titleFont: 3.3 },
    color: { title: "#7b2313", heading: "#7b2313", label: "#222222", text: "#222222", photoBorder: "#7a2a1c" },
    defaults: { title: "Marriage Biodata", mantra: "॥ श्री गणेशाय नमः ॥" },
  },
  "royal-gold-maroon": {
    bg: "/templates/royal-gold-maroon.bg.webp",
    left: 13.8, labelW: 31.0, maxY: 0.88, rowFont: 2.15, pitch: 3.4, headFont: 2.7, headY: 23.3, headGap: 3.8, secGap: 5.3,
    photo: { left: 67.0, top: 16.7, w: 20.2, h: 25.0 },
    header: { y: 15.1, stacked: true, iconY: 10, mantraY: 19.2, iconSize: 0, titleFont: 3.0 },
    color: { title: "#f9c58a", heading: "#f3be5f", label: "#f5cc78", text: "#f2b9a0", photoBorder: "#e8a53c" },
    labelBold: true,
    page2: { x: 26, top: 30, bottom: 32 },
    defaults: { title: "Marriage Biodata", mantra: "" },
  },
  "rose-floral": {
    bg: "/templates/rose-floral.bg.webp",
    left: 12.8, labelW: 31.8, maxY: 0.9, rowFont: 2.2, pitch: 3.85, headFont: 2.8, headY: 19.1, headGap: 4.3, secGap: 6.3,
    photo: { left: 66.8, top: 12.0, w: 19.8, h: 24.7 },
    header: { y: 10.0, stacked: true, iconY: 7, mantraY: 14.6, iconSize: 0, titleFont: 3.0 },
    color: { title: "#a4823a", heading: "#a4823a", label: "#1a1a1a", text: "#3a3a3a", photoBorder: "#c3a24f" },
    labelBold: true,
    page2: { x: 24, top: 36, bottom: 36 },
    defaults: { title: "Marriage Biodata", mantra: "" },
  },
};

export function getArtLayout(id: string): ArtLayout | null {
  return ART_LAYOUTS[id] || null;
}
