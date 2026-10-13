import { TEMPLATES } from "./templates";

/** Single source of truth for site-wide SEO values. Change the brand/domain here only. */
export const SITE_URL = "https://freebiodatamaker.com";
export const SITE_NAME = "FreeBiodataMaker";
export const BRAND_NAME = "Marriage Biodata";

export const SITE_TITLE = "Free Marriage Biodata Maker – Create PDF Biodata Online";
export const SITE_DESCRIPTION = `Create a marriage biodata online in minutes. Pick from ${TEMPLATES.length} templates, fill in your details in 6 languages and download a print-ready PDF. No signup needed.`;

export const LANGUAGES = [
  { code: "mr", label: "मराठी" },
  { code: "hi", label: "हिंदी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "te", label: "తెలుగు" },
  { code: "bn", label: "বাংলা" },
  { code: "en", label: "English" },
] as const;

export const FAQS: ReadonlyArray<readonly [string, string]> = [
  ["Is your biodata maker really free?", "Yes, basic templates are completely free. Premium formats (PDF/Word) are available for a small fee."],
  ["What formats can I download?", "PDF, Word document, or high-quality image."],
  ["What languages do you support?", "English, Hindi, Marathi, Gujarati, Telugu, and Bengali."],
  ["Do I need to sign up?", "No registration required. Fill details and download directly."],
  ["Is my data secure?", "Yes. Information is processed securely and not shared with third parties."],
];
