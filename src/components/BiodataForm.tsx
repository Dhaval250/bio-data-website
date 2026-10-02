"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { BiodataFormData, FormFieldRow, Language } from "@/lib/types";
import TemplateSelector from "./TemplateSelector";
import BiodataPreview from "./BiodataPreview";
import { cn } from "@/lib/utils";
import { generateBiodataPdf } from "@/lib/generatePdf";
import { t, fieldLabel, fieldPlaceholder } from "@/lib/i18n";

const LANGS = [
  { id: "en", label: "EN" },
  { id: "mr", label: "मराठी" },
  { id: "hi", label: "हिंदी" },
  { id: "gu", label: "ગુજરાતી" },
  { id: "te", label: "తెలుగు" },
  { id: "bn", label: "বাংলা" },
] as const;

const GOD_IMAGES = [
  { id: "ganesh1", emoji: "🕉️", label: "Om / Ganesha" },
  { id: "ganesh2", emoji: "🐘", label: "Ganesha" },
  { id: "lakshmi", emoji: "🪷", label: "Lakshmi" },
  { id: "krishna", emoji: "🪈", label: "Krishna" },
  { id: "shiva", emoji: "🔱", label: "Shiva" },
  { id: "durga", emoji: "⚔️", label: "Durga" },
  { id: "hanuman", emoji: "🙏", label: "Hanuman" },
  { id: "sai", emoji: "✨", label: "Sai Baba" },
  { id: "om", emoji: "ॐ", label: "Om" },
  { id: "swastik", emoji: "卐", label: "Swastik" },
  { id: "ram", emoji: "🏹", label: "Ram" },
  { id: "vishnu", emoji: "🌀", label: "Vishnu" },
];

/** Optional chips — same as freebiodatamaker.com */
const OPTIONAL_CHIPS = [
  { key: "maritalStatus", label: "Marital Status" },
  { key: "rashi", label: "Rashi" },
  { key: "nakshatra", label: "Nakshatra" },
  { key: "manglik", label: "Manglik" },
  { key: "gotra", label: "Gotra" },
  { key: "gana", label: "Gan" },
  { key: "diet", label: "Diet" },
  { key: "disability", label: "Disability" },
  { key: "complexion", label: "Complexion" },
  { key: "blood", label: "Blood Group" },
  { key: "salary", label: "Salary" },
  { key: "nativePlaceExtra", label: "Native Place" },
  { key: "hobbies", label: "Hobbies & Interests" },
  { key: "expectations", label: "Expectations" },
] as const;

const fieldClass =
  "w-full min-h-[44px] rounded-xl border border-[#e7e5e4] bg-white px-3.5 py-2.5 text-base text-[#1c1917] shadow-sm outline-none transition placeholder:text-[#78716c]/60 focus:border-[#c4a35a] focus:ring-2 focus:ring-[#c4a35a]/25 sm:text-sm touch-manipulation";

function makeId() {
  return `f-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function defaultPersonalFields(): FormFieldRow[] {
  return [
    { id: makeId(), key: "fullName", label: "Full Name", value: "", include: true, required: true, section: "personal", placeholder: "Enter your full name" },
    { id: makeId(), key: "dob", label: "Date of Birth", value: "", include: true, type: "date", section: "personal" },
    { id: makeId(), key: "gender", label: "Gender", value: "", include: true, type: "select", options: ["Male", "Female"], section: "personal" },
    { id: makeId(), key: "height", label: "Height", value: "", include: true, section: "personal", placeholder: "5'8\"" },
    { id: makeId(), key: "nativePlace", label: "Place of Birth", value: "", include: true, section: "personal", placeholder: "e.g. Mumbai, Maharashtra" },
    { id: makeId(), key: "religion", label: "Religion", value: "", include: true, section: "personal", placeholder: "e.g. Hindu / Muslim / Christian" },
    { id: makeId(), key: "caste", label: "Caste", value: "", include: true, section: "personal", placeholder: "e.g. your community" },
    { id: makeId(), key: "education", label: "Highest Qualification", value: "", include: true, section: "personal", placeholder: "e.g. B.Tech Computer Science" },
    { id: makeId(), key: "occupation", label: "Profession", value: "", include: true, section: "personal", placeholder: "e.g. Software Engineer at TCS" },
  ];
}

function defaultFamilyFields(): FormFieldRow[] {
  return [
    { id: makeId(), key: "fatherName", label: "Father's Name", value: "", include: true, section: "family" },
    { id: makeId(), key: "fatherOccupation", label: "Father's Occupation", value: "", include: true, section: "family" },
    { id: makeId(), key: "motherName", label: "Mother's Name", value: "", include: true, section: "family" },
    { id: makeId(), key: "motherOccupation", label: "Mother's Occupation", value: "", include: true, section: "family" },
    { id: makeId(), key: "siblings", label: "Siblings (Brothers/Sisters)", value: "", include: true, section: "family", placeholder: "e.g. 1 Brother, 1 Sister" },
  ];
}

function defaultContactFields(): FormFieldRow[] {
  return [
    { id: makeId(), key: "phone", label: "Mobile No.", value: "", include: true, section: "contact", placeholder: "10-digit mobile" },
    { id: makeId(), key: "email", label: "Email ID", value: "", include: true, section: "contact", placeholder: "name@email.com" },
    { id: makeId(), key: "address", label: "Present Address", value: "", include: true, type: "textarea", section: "contact", placeholder: "House, area, city, state, PIN" },
  ];
}

const initialData: BiodataFormData = {
  language: "en",
  fullName: "",
  dob: "",
  gender: "",
  height: "",
  religion: "",
  caste: "",
  rashi: "",
  nakshatra: "",
  gotra: "",
  manglik: "",
  education: "",
  occupation: "",
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  siblings: "",
  nativePlace: "",
  familyDetails: "",
  phone: "",
  email: "",
  address: "",
  partnerPreferences: "",
  templateId: "abstract-orange",
  biodataTitle: "Biodata",
  mantra: "|| Shri Ganeshaya Namah ||",
  godImage: "🕉️",
  customFields: [],
};

const STEP_KEYS = ["stepInfo", "stepFamily", "stepContact"] as const;

/** Fields that should never be auto-translated */
const SKIP_TRANSLATE_KEYS = new Set([
  "dob",
  "gender",
  "height",
  "phone",
  "email",
]);

/** Latin letters → likely English (or romanized) text worth translating */
function looksLatin(text: string): boolean {
  return /[A-Za-z]{2,}/.test(text);
}

/** Field row: label + Include + input + up/down — aligned like original */
function FieldRow({
  field,
  onChange,
  onMove,
  onRemove,
  isFirst,
  isLast,
  includeText = "Include",
  selectText = "Select",
  language = "en",
  onTranslateValue,
}: {
  field: FormFieldRow;
  onChange: (id: string, patch: Partial<FormFieldRow>) => void;
  onMove: (id: string, dir: -1 | 1) => void;
  onRemove?: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
  includeText?: string;
  selectText?: string;
  language?: Language;
  onTranslateValue?: (id: string, value: string) => void;
}) {
  const [editingLabel, setEditingLabel] = useState(false);
  const [translating, setTranslating] = useState(false);

  const tryAutoTranslate = async () => {
    if (!onTranslateValue) return;
    if (language === "en") return;
    if (SKIP_TRANSLATE_KEYS.has(field.key)) return;
    if (field.type === "date" || field.type === "select") return;
    const v = field.value?.trim();
    if (!v || !looksLatin(v)) return;

    setTranslating(true);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: v, from: "en", to: language }),
      });
      const data = await res.json();
      const translated = String(data?.translated || "").trim();
      if (translated && translated !== v) {
        onTranslateValue(field.id, translated);
      }
    } catch {
      // keep original on failure
    } finally {
      setTranslating(false);
    }
  };

  const btnMove =
    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c4a35a] text-white shadow-sm transition hover:bg-[#9a7b3c] disabled:opacity-30 touch-manipulation sm:h-8 sm:w-8";

  return (
    <div className="rounded-xl border border-[#e7e5e4] bg-white p-3 shadow-sm sm:p-3.5">
      {/* Label + Include */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          {editingLabel ? (
            <input
              autoFocus
              className="min-w-0 flex-1 rounded-lg border border-[#c4a35a] bg-white px-2 py-1.5 text-base font-semibold text-stone-800 outline-none focus:ring-2 focus:ring-[#e7e5e4] sm:text-sm"
              value={field.label}
              onChange={(e) => onChange(field.id, { label: e.target.value })}
              onBlur={() => setEditingLabel(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditingLabel(false)}
            />
          ) : (
            <>
              <span className="truncate text-sm font-semibold text-stone-700">
                {field.label}
                {field.required && <span className="text-[#c4a35a]"> *</span>}
              </span>
              <button
                type="button"
                title="Edit label"
                onClick={() => setEditingLabel(true)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-stone-400 touch-manipulation hover:bg-[#faf6eb] hover:text-[#c4a35a]"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              {translating && (
                <span className="text-[10px] font-medium text-[#9a7b3c]">…</span>
              )}
            </>
          )}
        </div>
        <label className="flex shrink-0 cursor-pointer items-center gap-1.5 text-xs font-medium text-[#9a7b3c] touch-manipulation">
          <input
            type="checkbox"
            checked={field.include}
            onChange={(e) => onChange(field.id, { include: e.target.checked })}
            className="h-4 w-4 rounded border-[#c4a35a] text-[#c4a35a] focus:ring-[#c4a35a]"
          />
          <span className="hidden xs:inline sm:inline">{includeText}</span>
        </label>
      </div>

      {/* Input — full width, never squeezed by side buttons */}
      <div className="w-full min-w-0">
        {field.type === "select" ? (
          <select
            className={fieldClass}
            value={field.value}
            onChange={(e) => onChange(field.id, { value: e.target.value })}
          >
            <option value="">{selectText}</option>
            {field.key === "gender" ? (
              <>
                <option value="male">{(field.options && field.options[0]) || "Male"}</option>
                <option value="female">{(field.options && field.options[1]) || "Female"}</option>
              </>
            ) : (
              (field.options || []).map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))
            )}
          </select>
        ) : field.type === "textarea" ? (
          <textarea
            className={cn(fieldClass, "min-h-[88px] resize-y")}
            value={field.value}
            onChange={(e) => onChange(field.id, { value: e.target.value })}
            onBlur={() => void tryAutoTranslate()}
            placeholder={field.placeholder}
            rows={3}
          />
        ) : (
          <input
            type={field.type === "date" ? "date" : "text"}
            className={fieldClass}
            value={field.value}
            onChange={(e) => onChange(field.id, { value: e.target.value })}
            onBlur={() => void tryAutoTranslate()}
            placeholder={field.placeholder}
          />
        )}
      </div>

      {/* Actions under input — roomy on mobile, compact on desktop */}
      <div className="mt-2 flex items-center justify-end gap-1.5">
        <button
          type="button"
          disabled={isFirst}
          onClick={() => onMove(field.id, -1)}
          className={btnMove}
          title="Move up"
          aria-label="Move field up"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 12l5-5 5 5H5z" />
          </svg>
        </button>
        <button
          type="button"
          disabled={isLast}
          onClick={() => onMove(field.id, 1)}
          className={btnMove}
          title="Move down"
          aria-label="Move field down"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 8l5 5 5-5H5z" />
          </svg>
        </button>
        {onRemove && (
          <button
            type="button"
            onClick={() => onRemove(field.id)}
            className="inline-flex h-10 min-w-[40px] items-center justify-center rounded-lg px-2 text-sm font-medium text-red-600 touch-manipulation hover:bg-red-50 sm:h-8"
            title="Remove field"
            aria-label="Remove field"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default function BiodataForm() {
  const [data, setData] = useState<BiodataFormData>(initialData);
  const [step, setStep] = useState(0);
  const [personalFields, setPersonalFields] = useState<FormFieldRow[]>(defaultPersonalFields);
  const [familyFields, setFamilyFields] = useState<FormFieldRow[]>(defaultFamilyFields);
  const [contactFields, setContactFields] = useState<FormFieldRow[]>(defaultContactFields);
  const [showGodModal, setShowGodModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const update = useCallback(
    <K extends keyof BiodataFormData>(key: K, value: BiodataFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const lang = data.language as Language;

  /** Apply translated labels + placeholders when language changes */
  const applyLangToFields = useCallback((list: FormFieldRow[], language: Language) => {
    return list.map((f) => {
      const translated = fieldLabel(language, f.key);
      const ph = fieldPlaceholder(language, f.key);
      return {
        ...f,
        label: translated && translated !== f.key ? translated : f.label,
        placeholder: f.key === "dob" || f.key === "gender" ? f.placeholder : ph,
        // Display labels in language; values stay male/female via FieldRow
        options:
          f.key === "gender"
            ? [t(language, "male"), t(language, "female")]
            : f.options,
      };
    });
  }, []);

  /** Translate one field value via API (English → selected language) */
  const translateText = useCallback(async (text: string, to: Language) => {
    if (!text.trim() || to === "en" || !looksLatin(text)) return text;
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, from: "en", to }),
      });
      const data = await res.json();
      return String(data?.translated || text).trim() || text;
    } catch {
      return text;
    }
  }, []);

  const translateFieldList = useCallback(
    async (list: FormFieldRow[], to: Language) => {
      if (to === "en") return applyLangToFields(list, to);
      const next = await Promise.all(
        list.map(async (f) => {
          const labeled = applyLangToFields([f], to)[0];
          if (SKIP_TRANSLATE_KEYS.has(f.key) || f.type === "date" || f.type === "select") {
            return labeled;
          }
          if (!f.value?.trim() || !looksLatin(f.value)) return labeled;
          const translated = await translateText(f.value, to);
          return { ...labeled, value: translated };
        })
      );
      return next;
    },
    [applyLangToFields, translateText]
  );

  const setLanguage = useCallback(
    (next: Language) => {
      setData((prev) => ({ ...prev, language: next }));
      // Labels first, then translate English-typed values → selected language
      setPersonalFields((prev) => {
        const labeled = applyLangToFields(prev, next);
        void translateFieldList(prev, next).then(setPersonalFields);
        return labeled;
      });
      setFamilyFields((prev) => {
        const labeled = applyLangToFields(prev, next);
        void translateFieldList(prev, next).then(setFamilyFields);
        return labeled;
      });
      setContactFields((prev) => {
        const labeled = applyLangToFields(prev, next);
        void translateFieldList(prev, next).then(setContactFields);
        return labeled;
      });
    },
    [applyLangToFields, translateFieldList]
  );

  // Keep labels in sync on first mount for default language
  useEffect(() => {
    setPersonalFields((prev) => applyLangToFields(prev, lang));
    setFamilyFields((prev) => applyLangToFields(prev, lang));
    setContactFields((prev) => applyLangToFields(prev, lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("photoDataUrl", reader.result as string);
    reader.readAsDataURL(file);
  };

  const setFieldsForStep = (section: FormFieldRow["section"], next: FormFieldRow[]) => {
    if (section === "personal") setPersonalFields(next);
    else if (section === "family") setFamilyFields(next);
    else setContactFields(next);
  };

  const getFields = (section: FormFieldRow["section"]) => {
    if (section === "personal") return personalFields;
    if (section === "family") return familyFields;
    return contactFields;
  };

  const onFieldChange = (section: FormFieldRow["section"], id: string, patch: Partial<FormFieldRow>) => {
    const list = getFields(section);
    const next = list.map((f) => (f.id === id ? { ...f, ...patch } : f));
    setFieldsForStep(section, next);

    const row = next.find((f) => f.id === id);
    if (row && row.key in initialData) {
      const k = row.key as keyof BiodataFormData;
      if (k === "gender") {
        update("gender", (row.value === "male" || row.value === "female" ? row.value : "") as BiodataFormData["gender"]);
      } else if (typeof (initialData as unknown as Record<string, unknown>)[k] === "string") {
        update(k, row.value as never);
      }
    }
  };

  const onFieldMove = (section: FormFieldRow["section"], id: string, dir: -1 | 1) => {
    const list = [...getFields(section)];
    const i = list.findIndex((f) => f.id === id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= list.length) return;
    [list[i], list[j]] = [list[j], list[i]];
    setFieldsForStep(section, list);
  };

  const onFieldRemove = (section: FormFieldRow["section"], id: string) => {
    setFieldsForStep(
      section,
      getFields(section).filter((f) => f.id !== id)
    );
  };

  const addField = (section: FormFieldRow["section"], preset?: { key: string; label: string }) => {
    const list = getFields(section);
    if (preset && list.some((f) => f.key === preset.key)) {
      return; // already added
    }
    const key = preset?.key || `custom-${Date.now()}`;
    const row: FormFieldRow = {
      id: makeId(),
      key,
      label: preset ? fieldLabel(lang, preset.key) || preset.label : t(lang, "newField"),
      value: "",
      include: true,
      section,
      placeholder: t(lang, "enterValue"),
    };
    setFieldsForStep(section, [...list, row]);
  };

  const addChip = (chip: (typeof OPTIONAL_CHIPS)[number]) => {
    // Map known keys to data fields + personal section
    const knownMap: Record<string, keyof BiodataFormData> = {
      rashi: "rashi",
      nakshatra: "nakshatra",
      manglik: "manglik",
      gotra: "gotra",
    };
    addField("personal", { key: chip.key, label: chip.label });
    if (knownMap[chip.key]) {
      // ensure data key exists
    }
  };

  const buildDataFromFields = useCallback((): BiodataFormData => {
    const all = [...personalFields, ...familyFields, ...contactFields];
    const next: BiodataFormData = { ...data };
    const customs: BiodataFormData["customFields"] = [];

    for (const f of all) {
      if (!f.include) continue;
      const known =
        f.key in initialData &&
        !f.key.startsWith("custom-") &&
        !["maritalStatus", "gana", "diet", "disability", "complexion", "blood", "salary", "nativePlaceExtra", "hobbies", "expectations"].includes(f.key);

      if (f.key === "rashi" || f.key === "nakshatra" || f.key === "gotra") {
        (next as unknown as Record<string, unknown>)[f.key] = f.value;
      } else if (f.key === "manglik") {
        next.manglik = (f.value as BiodataFormData["manglik"]) || "";
      } else if (known) {
        const k = f.key as keyof BiodataFormData;
        if (k === "gender") {
          next.gender = f.value === "male" || f.value === "female" ? f.value : "";
        } else if (typeof next[k] === "string" || next[k] === undefined) {
          (next as unknown as Record<string, unknown>)[k] = f.value;
        }
      } else if (f.label.trim() && f.value.trim()) {
        customs.push({ id: f.id, label: f.label, value: f.value, include: true });
      }
    }
    next.customFields = customs;
    next.fullName = personalFields.find((f) => f.key === "fullName")?.value || data.fullName;
    return next;
  }, [data, personalFields, familyFields, contactFields]);

  const next = () => {
    setError("");
    const name = personalFields.find((f) => f.key === "fullName")?.value?.trim();
    if (step === 0 && !name) {
      setError(t(data.language as Language, "nameRequired"));
      return;
    }
    if (step < 2) setStep(step + 1);
    else {
      setData(buildDataFromFields());
      setShowPreview(true);
    }
  };

  const prev = () => {
    if (showPreview) {
      setShowPreview(false);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const downloadPdf = async () => {
    setIsGenerating(true);
    setError("");
    try {
      const d = buildDataFromFields();
      setData(d);
      await generateBiodataPdf({
        fullName: d.fullName,
        dob: d.dob,
        gender: d.gender,
        height: d.height,
        religion: d.religion,
        caste: d.caste,
        rashi: d.rashi,
        nakshatra: d.nakshatra,
        gotra: d.gotra,
        manglik: d.manglik,
        education: d.education,
        occupation: d.occupation,
        fatherName: d.fatherName,
        fatherOccupation: d.fatherOccupation,
        motherName: d.motherName,
        motherOccupation: d.motherOccupation,
        siblings: d.siblings,
        nativePlace: d.nativePlace,
        familyDetails: d.familyDetails,
        phone: d.phone,
        email: d.email,
        address: d.address,
        partnerPreferences: d.partnerPreferences,
        photoDataUrl: d.photoDataUrl,
        biodataTitle: d.biodataTitle,
        mantra: d.mantra,
        customFields: (d.customFields || []).filter((f) => f.label.trim() && f.value.trim()),
      });
    } catch (err) {
      console.error(err);
      setError("PDF failed: " + (err instanceof Error ? err.message : "unknown"));
    } finally {
      setIsGenerating(false);
    }
  };

  const currentSection: FormFieldRow["section"] =
    step === 0 ? "personal" : step === 1 ? "family" : "contact";
  const currentFields = getFields(currentSection);

  const usedChipKeys = new Set(personalFields.map((f) => f.key));

  const previewData = useMemo(() => {
    if (!showPreview) return data;
    return buildDataFromFields();
  }, [showPreview, data, buildDataFromFields]);

  return (
    <div className="mx-auto w-full max-w-5xl px-0">
      {!showPreview && (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8">
          {STEP_KEYS.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => setStep(i)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition",
                step === i
                  ? "bg-stone-900 text-white shadow-md"
                  : step > i
                    ? "bg-[#f0ebe3] text-[#1c1917]"
                    : "bg-stone-100 text-stone-400"
              )}
            >
              {i + 1}. {t(lang, key)}
            </button>
          ))}
        </div>
      )}

      {!showPreview ? (
        <div className="overflow-hidden rounded-2xl border border-[#e7e5e4]/80 bg-[#faf8f5] shadow-xl shadow-[#f0ebe3]/40">
          <div className="h-1 bg-gradient-to-r from-[#c4a35a] via-[#c4a35a] to-[#c4a35a]" />

          <div className="p-3 sm:p-6 lg:p-8">
            {step === 0 && (
              <div className="mb-6 space-y-5">
                {/* Languages */}
                <div className="flex flex-wrap gap-2">
                  {LANGS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setLanguage(l.id as Language)}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-medium transition",
                        data.language === l.id
                          ? "bg-[#1c1917] text-[#e8d5a3]"
                          : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                {/* Title + God + Mantra — aligned row */}
                <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-stone-600">{t(lang, "title")}</label>
                    <input
                      className={fieldClass}
                      value={data.biodataTitle || ""}
                      onChange={(e) => update("biodataTitle", e.target.value)}
                      placeholder="Biodata"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowGodModal(true)}
                    className="mx-auto flex flex-col items-center gap-1 rounded-xl border border-dashed border-[#c4a35a] bg-[#faf6eb]/50 px-5 py-2.5 transition hover:bg-[#faf6eb]"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f0ebe3] to-[#f0ebe3]/30 text-3xl ring-2 ring-[#f0ebe3]">
                      {data.godImage || "🕉️"}
                    </span>
                    <span className="text-xs font-semibold text-[#9a7b3c] underline">
                      {t(lang, "changeGod")}
                    </span>
                  </button>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-stone-600">{t(lang, "mantra")}</label>
                    <input
                      className={fieldClass}
                      value={data.mantra || ""}
                      onChange={(e) => update("mantra", e.target.value)}
                      placeholder="|| Shri Ganeshaya Namah ||"
                    />
                  </div>
                </div>

                {/* Profile photo */}
                <div className="rounded-xl border border-dashed border-[#c4a35a]/70 bg-gradient-to-br from-[#f0ebe3]/30/80 to-stone-50 p-4">
                  <p className="mb-3 text-sm font-semibold text-stone-700">{t(lang, "choosePhoto")}</p>
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-stone-200/80">
                      {data.photoDataUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={data.photoDataUrl} alt="Profile" className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-3xl text-stone-400">👤</span>
                      )}
                    </div>
                    <div>
                      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="rounded-lg bg-[#c4a35a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1c1917]"
                      >
                        {t(lang, "upload")}
                      </button>
                      <p className="mt-1 text-xs text-stone-500">{t(lang, "photoHint")}</p>
                      {data.photoDataUrl && (
                        <button
                          type="button"
                          onClick={() => update("photoDataUrl", undefined)}
                          className="mt-1 text-xs font-medium text-red-600 hover:underline"
                        >
                          {t(lang, "remove")}
                        </button>
                      )}
                    </div>
                    <div className="min-w-[180px] flex-1 rounded-lg border border-[#e7e5e4] bg-white/80 p-3 text-xs text-stone-600">
                      <p className="mb-1 font-semibold text-stone-700">{t(lang, "photoTips")}</p>
                      <ul className="list-inside list-disc space-y-0.5">
                        <li>{t(lang, "tip1")}</li>
                        <li>{t(lang, "tip2")}</li>
                        <li>{t(lang, "tip3")}</li>
                        <li>{t(lang, "tip4")}</li>
                        <li>{t(lang, "tip5")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fields — 2-column grid on desktop for proper alignment */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wide text-stone-700">
                {step === 0
                  ? t(lang, "personalDetails")
                  : step === 1
                    ? t(lang, "familyDetails")
                    : t(lang, "contactDetails")}
              </h3>

              <div
                className={cn(
                  "grid gap-3 sm:gap-4",
                  currentSection === "contact"
                    ? "grid-cols-1"
                    : "grid-cols-1 lg:grid-cols-2"
                )}
              >
                {currentFields.map((f, idx) => (
                  <div
                    key={f.id}
                    className={cn(
                      f.type === "textarea" || f.key === "fullName" ? "md:col-span-2" : ""
                    )}
                  >
                    <FieldRow
                      field={f}
                      onChange={(id, patch) => onFieldChange(currentSection, id, patch)}
                      onMove={(id, dir) => onFieldMove(currentSection, id, dir)}
                      onRemove={
                        f.key.startsWith("custom-") ||
                        OPTIONAL_CHIPS.some((c) => c.key === f.key) ||
                        !["fullName", "phone"].includes(f.key)
                          ? (id) => onFieldRemove(currentSection, id)
                          : undefined
                      }
                      isFirst={idx === 0}
                      isLast={idx === currentFields.length - 1}
                      includeText={t(lang, "include")}
                      selectText={t(lang, "select")}
                      language={lang}
                      onTranslateValue={(id, value) =>
                        onFieldChange(currentSection, id, { value })
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Optional chips — only on personal step */}
              {step === 0 && (
                <div className="mt-5 rounded-xl border border-[#e7e5e4] bg-[#faf6eb]/30 p-4">
                  <p className="mb-3 text-sm font-medium text-stone-600">
                    {t(lang, "addMore")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {OPTIONAL_CHIPS.map((chip) => {
                      const added = usedChipKeys.has(chip.key);
                      return (
                        <button
                          key={chip.key}
                          type="button"
                          disabled={added}
                          onClick={() => addChip(chip)}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                            added
                              ? "border-stone-200 bg-stone-100 text-stone-400"
                              : "border-[#c4a35a] bg-white text-[#9a7b3c] hover:bg-[#faf6eb]"
                          )}
                        >
                          + {fieldLabel(lang, chip.key)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Add blank custom field */}
              <button
                type="button"
                onClick={() => addField(currentSection)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#c4a35a] bg-[#faf6eb]/40 py-3 text-sm font-semibold text-[#9a7b3c] transition hover:bg-[#faf6eb]"
              >
                <span className="text-lg leading-none">+</span>
                {t(lang, "addField")}
              </button>
            </div>

            {step === 2 && (
              <div className="mt-6">
                <TemplateSelector
                  selectedId={data.templateId}
                  onSelect={(id) => update("templateId", id)}
                />
              </div>
            )}

            {error && (
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
            )}

            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
              <button
                type="button"
                onClick={prev}
                disabled={step === 0}
                className="order-3 min-h-[44px] w-full rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 touch-manipulation disabled:opacity-40 hover:bg-stone-50 sm:order-1 sm:w-auto"
              >
                {t(lang, "goBack")}
              </button>
              <div className="order-1 flex w-full flex-col gap-2 sm:order-2 sm:w-auto sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => addField(currentSection)}
                  className="min-h-[44px] w-full rounded-xl border border-[#c4a35a] bg-white px-4 py-2.5 text-sm font-semibold text-[#9a7b3c] touch-manipulation hover:bg-[#faf6eb] sm:w-auto"
                >
                  {t(lang, "customField")}
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="min-h-[48px] w-full rounded-xl bg-gradient-to-r from-[#c4a35a] to-[#9a7b3c] px-6 py-3 text-sm font-bold text-white shadow-md touch-manipulation hover:from-[#9a7b3c] hover:to-[#c4a35a] sm:w-auto sm:py-2.5"
                >
                  {step < 2 ? t(lang, "nextStep") : t(lang, "previewBiodata")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <BiodataPreview data={previewData} />

          {/* Action buttons — same style as freebiodatamaker.com */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2d3748] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1a202c]"
            >
              <span aria-hidden>✎</span> Edit Biodata
            </button>
            <button
              type="button"
              onClick={downloadPdf}
              disabled={isGenerating}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f5a623] to-[#e67e22] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:from-[#e67e22] hover:to-[#d35400] disabled:opacity-60"
            >
              <span aria-hidden>↓</span>{" "}
              {isGenerating ? t(lang, "generating") : "Download Biodata"}
            </button>
          </div>
          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <p className="text-center text-sm text-stone-500">
            Having trouble downloading or accessing an older biodata?{" "}
            <a
              href="#support"
              className="font-semibold text-[#e67e22] underline-offset-2 hover:underline"
            >
              Click here
            </a>
          </p>

          {/* Support section */}
          <div
            id="support"
            className="mx-auto max-w-lg scroll-mt-20 rounded-2xl border border-[#f5d78e] bg-gradient-to-b from-[#fffbf0] to-[#fff8e7] p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-center text-xl font-bold text-[#1c1917] sm:text-2xl">
              How can we support you?
            </h3>
            <p className="mt-1 text-center text-sm text-stone-600">
              किसी भी सवाल या समस्या के लिए हमसे संपर्क करें।
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:manikbiradar365@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-[#f0e6c8] bg-white px-4 py-3.5 shadow-sm transition hover:border-[#e67e22]/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff3e0] text-xl">
                  ✉️
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-stone-500">Email Support:</p>
                  <p className="truncate text-sm font-semibold text-[#e67e22] sm:text-base">
                    manikbiradar365@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919998667073"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[#f0e6c8] bg-white px-4 py-3.5 shadow-sm transition hover:border-[#25d366]/50 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef] text-xl">
                  💬
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-stone-500">WhatsApp Support:</p>
                  <p className="text-sm font-semibold text-[#25d366] sm:text-base">
                    +919998667073
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {showGodModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setShowGodModal(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-auto rounded-2xl bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-bold text-stone-800">{t(lang, "selectGod")}</h3>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              {GOD_IMAGES.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    update("godImage", g.emoji);
                    setShowGodModal(false);
                  }}
                  className={cn(
                    "flex aspect-square flex-col items-center justify-center rounded-xl border-2 bg-[#faf6eb]/50 text-3xl transition hover:border-[#c4a35a] hover:bg-[#faf6eb]",
                    data.godImage === g.emoji
                      ? "border-[#c4a35a] ring-2 ring-[#f0ebe3]"
                      : "border-stone-100"
                  )}
                  title={g.label}
                >
                  {g.emoji}
                </button>
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowGodModal(false)}
                className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50"
              >
                {t(lang, "close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
