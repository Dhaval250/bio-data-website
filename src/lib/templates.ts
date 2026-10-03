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
