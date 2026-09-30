"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { BiodataFormData, FormFieldRow } from "@/lib/types";
import TemplateSelector from "./TemplateSelector";
import BiodataPreview from "./BiodataPreview";
import { cn } from "@/lib/utils";
import { generateBiodataPdf } from "@/lib/generatePdf";

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
  "w-full rounded-xl border border-[#e5dfd4] bg-white px-3.5 py-2.5 text-sm text-[#1a1625] shadow-sm outline-none transition placeholder:text-[#6b645c]/60 focus:border-[#c4a35a] focus:ring-2 focus:ring-[#c4a35a]/25";

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
  templateId: "elegant-profile",
  biodataTitle: "Biodata",
  mantra: "|| Shri Ganeshaya Namah ||",
  godImage: "🕉️",
  customFields: [],
};

const STEPS = ["Info", "Family", "Contact"];

/** Field row: label + Include + input + up/down — aligned like original */
function FieldRow({
  field,
  onChange,
  onMove,
  onRemove,
  isFirst,
  isLast,
}: {
  field: FormFieldRow;
  onChange: (id: string, patch: Partial<FormFieldRow>) => void;
  onMove: (id: string, dir: -1 | 1) => void;
  onRemove?: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [editingLabel, setEditingLabel] = useState(false);

  return (
    <div className="rounded-xl border border-[#e5dfd4]/80 bg-white/90 p-3 shadow-sm">
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          {editingLabel ? (
            <input
              autoFocus
              className="min-w-0 flex-1 rounded-lg border border-[#c4a35a] bg-white px-2 py-1 text-sm font-semibold text-stone-800 outline-none focus:ring-2 focus:ring-[#e5dfd4]"
              value={field.label}
              onChange={(e) => onChange(field.id, { label: e.target.value })}
              onBlur={() => setEditingLabel(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditingLabel(false)}
            />
          ) : (
            <>
              <span className="text-sm font-semibold text-stone-700">
                {field.label}
                {field.required && <span className="text-[#c4a35a]"> *</span>}
              </span>
              <button
                type="button"
                title="Edit label"
                onClick={() => setEditingLabel(true)}
                className="rounded p-0.5 text-stone-400 hover:bg-pink-50 hover:text-[#c4a35a]"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </>
          )}
        </div>
        <label className="flex shrink-0 cursor-pointer items-center gap-1.5 text-xs font-medium text-[#8a7340]">
          <input
            type="checkbox"
            checked={field.include}
            onChange={(e) => onChange(field.id, { include: e.target.checked })}
            className="h-3.5 w-3.5 rounded border-[#c4a35a] text-[#c4a35a] focus:ring-[#c4a35a]"
          />
          Include in biodata
        </label>
      </div>
      <div className="flex items-stretch gap-2">
        <div className="min-w-0 flex-1">
          {field.type === "select" ? (
            <select
              className={fieldClass}
              value={field.value}
              onChange={(e) => onChange(field.id, { value: e.target.value })}
            >
              <option value="">Select</option>
              {(field.options || []).map((o) => (
                <option key={o} value={o.toLowerCase()}>
                  {o}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              className={cn(fieldClass, "min-h-[72px] resize-y")}
              value={field.value}
              onChange={(e) => onChange(field.id, { value: e.target.value })}
              placeholder={field.placeholder}
              rows={3}
            />
          ) : (
            <input
              type={field.type === "date" ? "date" : "text"}
              className={fieldClass}
              value={field.value}
              onChange={(e) => onChange(field.id, { value: e.target.value })}
              placeholder={field.placeholder}
            />
          )}
        </div>
        <div className="flex flex-col justify-center gap-0.5">
          <button
            type="button"
            disabled={isFirst}
            onClick={() => onMove(field.id, -1)}
            className="rounded-md bg-pink-500 p-1 text-white shadow-sm disabled:opacity-30 hover:bg-[#c4a35a]"
            title="Move up"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 12l5-5 5 5H5z" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isLast}
            onClick={() => onMove(field.id, 1)}
            className="rounded-md bg-pink-500 p-1 text-white shadow-sm disabled:opacity-30 hover:bg-[#c4a35a]"
            title="Move down"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 8l5 5 5-5H5z" />
            </svg>
          </button>
        </div>
        {onRemove && (
          <button
            type="button"
            onClick={() => onRemove(field.id)}
            className="self-center rounded-md px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
            title="Remove field"
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
      } else if (typeof (initialData as Record<string, unknown>)[k] === "string") {
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
    if (preset && list.some((f) => f.key === preset.key || f.label === preset.label)) {
      return; // already added
    }
    const row: FormFieldRow = {
      id: makeId(),
      key: preset?.key || `custom-${Date.now()}`,
      label: preset?.label || "New Field",
      value: "",
      include: true,
      section,
      placeholder: "Enter value",
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
        (next as Record<string, unknown>)[f.key] = f.value;
      } else if (f.key === "manglik") {
        next.manglik = (f.value as BiodataFormData["manglik"]) || "";
      } else if (known) {
        const k = f.key as keyof BiodataFormData;
        if (k === "gender") {
          next.gender = f.value === "male" || f.value === "female" ? f.value : "";
        } else if (typeof next[k] === "string" || next[k] === undefined) {
          (next as Record<string, unknown>)[k] = f.value;
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
      setError("Full Name is required");
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
    <div className="mx-auto w-full max-w-5xl">
      {!showPreview && (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(i)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition",
                step === i
                  ? "bg-stone-900 text-[#f0ebe3]/30 shadow-md"
                  : step > i
                    ? "bg-[#f0ebe3] text-[#1a1625]"
                    : "bg-stone-100 text-stone-400"
              )}
            >
              {i + 1}. {label}
            </button>
          ))}
        </div>
      )}

      {!showPreview ? (
        <div className="overflow-hidden rounded-2xl border border-[#e5dfd4]/80 bg-[#faf8f5] shadow-xl shadow-[#f0ebe3]/40">
          <div className="h-1 bg-gradient-to-r from-[#c4a35a] via-[#c4a35a] to-[#c4a35a]" />

          <div className="p-5 sm:p-8">
            {step === 0 && (
              <div className="mb-6 space-y-5">
                {/* Languages */}
                <div className="flex flex-wrap gap-2">
                  {LANGS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => update("language", l.id as BiodataFormData["language"])}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-medium transition",
                        data.language === l.id
                          ? "bg-[#1a1625] text-[#e8d5a3]"
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
                    <label className="mb-1.5 block text-xs font-semibold text-stone-600">Title</label>
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
                    className="mx-auto flex flex-col items-center gap-1 rounded-xl border border-dashed border-[#c4a35a] bg-pink-50/50 px-5 py-2.5 transition hover:bg-pink-50"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f0ebe3] to-[#f0ebe3]/30 text-3xl ring-2 ring-[#f0ebe3]">
                      {data.godImage || "🕉️"}
                    </span>
                    <span className="text-xs font-semibold text-[#8a7340] underline">
                      Change God Photo
                    </span>
                  </button>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-stone-600">Mantra</label>
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
                  <div className="flex flex-wrap items-center gap-4">
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
                        className="rounded-lg bg-[#c4a35a] px-4 py-2 text-sm font-semibold text-[#f0ebe3]/30 hover:bg-[#1a1625]"
                      >
                        Upload Photo
                      </button>
                      {data.photoDataUrl && (
                        <button
                          type="button"
                          onClick={() => update("photoDataUrl", undefined)}
                          className="ml-2 text-xs font-medium text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fields — 2-column grid on desktop for proper alignment */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wide text-stone-700">
                {step === 0 ? "Personal Details" : step === 1 ? "Family Details" : "Contact Details"}
              </h3>

              <div
                className={cn(
                  "grid gap-3",
                  currentSection === "contact"
                    ? "grid-cols-1"
                    : "grid-cols-1 md:grid-cols-2"
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
                    />
                  </div>
                ))}
              </div>

              {/* Optional chips — only on personal step */}
              {step === 0 && (
                <div className="mt-5 rounded-xl border border-[#e5dfd4] bg-pink-50/30 p-4">
                  <p className="mb-3 text-sm font-medium text-stone-600">
                    Add more details (optional)
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
                              : "border-[#c4a35a] bg-white text-[#8a7340] hover:bg-pink-50"
                          )}
                        >
                          + {chip.label}
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
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#c4a35a] bg-pink-50/40 py-3 text-sm font-semibold text-[#8a7340] transition hover:bg-pink-50"
              >
                <span className="text-lg leading-none">+</span>
                Add Field
              </button>
            </div>

            {step === 2 && (
              <div className="mt-6">
                <TemplateSelector
                  selected={data.templateId}
                  onSelect={(id) => update("templateId", id)}
                />
              </div>
            )}

            {error && (
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={prev}
                disabled={step === 0}
                className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 disabled:opacity-40 hover:bg-stone-50"
              >
                Go Back
              </button>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => addField(currentSection)}
                  className="rounded-xl border border-[#c4a35a] bg-white px-4 py-2.5 text-sm font-semibold text-[#8a7340] hover:bg-pink-50"
                >
                  + Custom Field
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-xl bg-gradient-to-r from-[#c4a35a] to-[#f0ebe3]/300 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#f0ebe3] hover:from-[#8a7340] hover:to-[#c4a35a]"
                >
                  {step < 2 ? "Next Step →" : "Preview Biodata →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <BiodataPreview data={previewData} />
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 hover:bg-stone-50"
            >
              ← Edit Form
            </button>
            <button
              type="button"
              onClick={downloadPdf}
              disabled={isGenerating}
              className="rounded-xl bg-gradient-to-r from-[#c4a35a] to-[#f0ebe3]/300 px-6 py-2.5 text-sm font-bold text-white shadow-md disabled:opacity-60"
            >
              {isGenerating ? "Generating…" : "↓ Download PDF"}
            </button>
          </div>
          {error && <p className="text-center text-sm text-red-600">{error}</p>}
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
            <h3 className="mb-4 text-lg font-bold text-stone-800">Select God Image</h3>
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
                    "flex aspect-square flex-col items-center justify-center rounded-xl border-2 bg-pink-50/50 text-3xl transition hover:border-[#c4a35a] hover:bg-pink-50",
                    data.godImage === g.emoji
                      ? "border-pink-500 ring-2 ring-[#f0ebe3]"
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
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
