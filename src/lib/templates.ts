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
  photo: { left: number; top: number; w: number; h: number }; // %, %, cqw, cqw
  header: { y: number; stacked?: boolean; iconY?: number; mantraY?: number; iconSize: number; titleFont: number; circleIcon?: boolean };
  color: { title: string; heading: string; label: string; text: string; photoBorder: string };
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
};

export function getArtLayout(id: string): ArtLayout | null {
  return ART_LAYOUTS[id] || null;
}
