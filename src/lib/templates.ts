import { Template } from "./types";

export const TEMPLATES: Template[] = [
  {
    id: "elegant-profile",
    name: "Elegant Profile",
    description: "Soft cream two-column personal profile with photo",
    accent: "#3f3a34",
    headerBg: "#faf8f5",
    borderColor: "#d6cfc4",
    previewClass: "bg-[#faf8f5] border-[#d6cfc4]",
  },
  {
    id: "abstract-temple",
    name: "Abstract Temple",
    description: "Traditional cream card with temple borders & photo",
    accent: "#8B4513",
    headerBg: "#F5E6C8",
    borderColor: "#C4A35A",
    previewClass: "bg-[#F5E6C8] border-[#C4A35A]",
  },
  {
    id: "classic-ivory",
    name: "Classic Ivory",
    description: "Clean ivory background with gold accents",
    accent: "#b8860b",
    headerBg: "#faf8f5",
    borderColor: "#d4af37",
    previewClass: "bg-amber-50 border-amber-300",
  },
  {
    id: "royal-maroon",
    name: "Royal Maroon",
    description: "Traditional maroon with elegant borders",
    accent: "#7f1d1d",
    headerBg: "#fef2f2",
    borderColor: "#991b1b",
    previewClass: "bg-red-50 border-red-700",
  },
  {
    id: "temple-saffron",
    name: "Temple Saffron",
    description: "Warm saffron traditional style",
    accent: "#c2410c",
    headerBg: "#fff7ed",
    borderColor: "#ea580c",
    previewClass: "bg-orange-50 border-orange-600",
  },
  {
    id: "heritage-gold",
    name: "Heritage Gold",
    description: "Rich gold borders with cream paper feel",
    accent: "#a16207",
    headerBg: "#fefce8",
    borderColor: "#ca8a04",
    previewClass: "bg-yellow-50 border-yellow-600",
  },
  {
    id: "modern-slate",
    name: "Modern Slate",
    description: "Minimal slate and white professional look",
    accent: "#334155",
    headerBg: "#f8fafc",
    borderColor: "#64748b",
    previewClass: "bg-slate-50 border-slate-400",
  },
  {
    id: "sapphire-blue",
    name: "Sapphire Blue",
    description: "Deep blue professional template",
    accent: "#1e40af",
    headerBg: "#eff6ff",
    borderColor: "#2563eb",
    previewClass: "bg-blue-50 border-blue-600",
  },
  {
    id: "lotus-pink",
    name: "Lotus Pink",
    description: "Soft pink with lotus-inspired elegance",
    accent: "#be185d",
    headerBg: "#fdf2f8",
    borderColor: "#db2777",
    previewClass: "bg-pink-50 border-pink-600",
  },
  {
    id: "pearl-white",
    name: "Pearl White",
    description: "Ultra-minimal pure white & charcoal",
    accent: "#18181b",
    headerBg: "#ffffff",
    borderColor: "#a1a1aa",
    previewClass: "bg-white border-zinc-400",
  },
];

/** Preview image path — put files in /public/templates/{id}.png */
export function templateImageSrc(id: string): string {
  return `/templates/${id}.png`;
}

export function getTemplate(id: string): Template {
  return TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
}
