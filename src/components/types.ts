export type Language = "en" | "mr" | "hi" | "gu" | "te" | "bn";

export type Religion =
  | "hindu"
  | "muslim"
  | "christian"
  | "sikh"
  | "buddhist"
  | "jain"
  | "other"
  | "";

export type Manglik = "yes" | "no" | "anshik" | "";

export interface CustomField {
  id: string;
  label: string;
  value: string;
  include?: boolean;
  /** Step the field was added in, so the preview/PDF can show it in the same section */
  section?: "personal" | "family" | "contact";
}

/** Single form row: editable label, value, include, order */
export interface FormFieldRow {
  id: string;
  key: string; // maps to BiodataFormData key or custom
  label: string;
  value: string;
  include: boolean;
  type?: "text" | "date" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
  required?: boolean;
  section: "personal" | "family" | "contact";
}

export interface BiodataFormData {
  language: Language;
  fullName: string;
  dob: string;
  gender: "male" | "female" | "";
  height: string;
  religion: Religion;
  caste: string;
  rashi: string;
  nakshatra: string;
  gotra: string;
  manglik: Manglik;
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
  templateId: string;
  biodataTitle?: string;
  mantra?: string;
  photoDataUrl?: string;
  godImage?: string; // emoji or data URL
  customFields: CustomField[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  accent: string;
  headerBg: string;
  borderColor: string;
  previewClass: string;
}
