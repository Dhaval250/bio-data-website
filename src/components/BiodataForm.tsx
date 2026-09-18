"use client";

import { useState, useRef, useCallback } from "react";
import { BiodataFormData } from "@/lib/types";
import TemplateSelector from "./TemplateSelector";
import BiodataPreview from "./BiodataPreview";
import { cn } from "@/lib/utils";
import { generateBiodataPdf } from "@/lib/generatePdf";
import { captureElementToPdf } from "@/lib/capturePreviewPdf";

const LANGS = [
  { id: "en", label: "EN" },
  { id: "mr", label: "मराठी" },
  { id: "hi", label: "हिंदी" },
  { id: "gu", label: "ગુજરાતી" },
  { id: "te", label: "తెలుగు" },
  { id: "bn", label: "বাংলা" },
] as const;

/** Multi-word labels (EN + GU) */
const L = {
  en: {
    personal: "Personal Details",
    name: "Full Name",
    dob: "Date of Birth",
    height: "Height",
    place: "Birth Place",
    religion: "Religion",
    caste: "Caste / Community",
    education: "Education",
    work: "Occupation",
    family: "Family Details",
    father: "Father Name",
    fatherWork: "Father Occupation",
    mother: "Mother Name",
    motherWork: "Mother Occupation",
    siblings: "Siblings",
    contact: "Contact Details",
    phone: "Mobile Number",
    email: "Email Address",
    address: "Full Address",
    photo: "Choose your photo",
    tips: "Photo Tips",
    next: "Next Step",
    back: "Go Back",
    reset: "Reset Form",
    preview: "Preview Biodata",
    download: "Download PDF",
    include: "Include",
  },
  gu: {
    personal: "વ્યક્તિગત વિગતો",
    name: "પૂરું નામ",
    dob: "જન્મ તારીખ",
    height: "ઊંચાઈ",
    place: "જન્મ સ્થળ",
    religion: "ધર્મ",
    caste: "જાતિ / સમુદાય",
    education: "ઉચ્ચ શિક્ષણ",
    work: "નોકરી / વ્યવસાય",
    family: "કુટુંબની વિગતો",
    father: "પિતાનું નામ",
    fatherWork: "પિતાનો વ્યવસાય",
    mother: "માતાનું નામ",
    motherWork: "માતાનો વ્યવસાય",
    siblings: "ભાઈ-બહેન",
    contact: "સંપર્ક વિગતો",
    phone: "મોબાઇલ નંબર",
    email: "ઈમેલ એડ્રેસ",
    address: "સંપૂર્ણ સરનામું",
    photo: "તમારો ફોટો પસંદ કરો",
    tips: "ફોટો ટિપ્સ",
    next: "આગળનું પગલું",
    back: "પાછા જાઓ",
    reset: "ફોર્મ રીસેટ",
    preview: "બાયોડેટા પ્રીવ્યૂ",
    download: "PDF ડાઉનલોડ",
    include: "શામેલ",
  },
} as const;

const CHIPS = [
  { key: "rashi", label: "Rashi" },
  { key: "nakshatra", label: "Nakshatra" },
  { key: "manglik", label: "Manglik" },
  { key: "gotra", label: "Gotra" },
  { key: "blood", label: "Blood" },
  { key: "weight", label: "Weight" },
  { key: "diet", label: "Diet" },
  { key: "hobbies", label: "Hobbies" },
];


const fieldClass =
  "w-full rounded-xl border border-stone-200/80 bg-white/90 px-3.5 py-2.5 text-sm text-stone-800 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600/50 focus:ring-2 focus:ring-amber-500/15";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-stone-600">{label}</label>
      {children}
    </div>
  );
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
  customFields: [],
};

const STEPS = ["Info", "Family", "Contact"];

export default function BiodataForm() {
  const [data, setData] = useState<BiodataFormData>(initialData);
  const [step, setStep] = useState(0);
  const [extraFields, setExtraFields] = useState<string[]>([]);
  const [chipValues, setChipValues] = useState<Record<string, string>>({});

  const addCustomField = () => {
    const id = `custom-${Date.now()}`;
    setData((prev) => ({
      ...prev,
      customFields: [
        ...(prev.customFields || []),
        { id, label: "", value: "" },
      ],
    }));
  };

  const updateCustomField = (id: string, key: "label" | "value", val: string) => {
    setData((prev) => ({
      ...prev,
      customFields: (prev.customFields || []).map((f) =>
        f.id === id ? { ...f, [key]: val } : f
      ),
    }));
  };

  const removeCustomField = (id: string) => {
    setData((prev) => ({
      ...prev,
      customFields: (prev.customFields || []).filter((f) => f.id !== id),
    }));
  };
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const t = data.language === "gu" ? L.gu : L.en;

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

  const next = () => {
    setError("");
    if (step === 0 && !data.fullName.trim()) {
      setError(data.language === "gu" ? "નામ જરૂરી" : "Name required");
      return;
    }
    if (step < 2) setStep(step + 1);
    else setShowPreview(true);
  };

  const prev = () => {
    if (showPreview) {
      setShowPreview(false);
      return;
    }
    if (step > 0) setStep(step - 1);
  };


  /** Collect computed stylesheet text so Puppeteer matches Tailwind preview */
  const collectPageCss = () => {
    const chunks: string[] = [];
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (!rules) continue;
        for (const rule of Array.from(rules)) {
          chunks.push(rule.cssText);
        }
      } catch {
        // cross-origin sheets — skip
      }
    }
    return chunks.join("\n");
  };

  const downloadPdf = async () => {
    setIsGenerating(true);
    setError("");
    const safeName = (data.fullName || data.biodataTitle || "biodata")
      .replace(/[^a-z0-9]+/gi, "-")
      .toLowerCase()
      .slice(0, 40);
    const fileName = `${safeName}-marriage-biodata.pdf`;

    try {
      const root = previewRef.current;
      if (!root) throw new Error("Preview not ready");

      // JE TEMPLATE SCREEN PAR CHE (data sathe) → e j PDF
      const card =
        (document.getElementById("biodata-preview-card") as HTMLElement) ||
        (root.id === "biodata-preview-card" ? root : null) ||
        (root.querySelector("#biodata-preview-card") as HTMLElement) ||
        (root.querySelector("[data-biodata-preview]") as HTMLElement) ||
        root;

      await captureElementToPdf(card, fileName);
    } catch (err) {
      console.error(err);
      setError(
        "PDF failed: " + (err instanceof Error ? err.message : "unknown")
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Steps */}
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
                  ? "bg-stone-900 text-amber-50 shadow-md shadow-stone-900/20"
                  : step > i
                    ? "bg-amber-100 text-amber-900"
                    : "bg-stone-100 text-stone-400"
              )}
            >
              {i + 1}. {label}
            </button>
          ))}
        </div>
      )}

      {!showPreview ? (
        <div className="overflow-hidden rounded-2xl border border-stone-200/60 bg-gradient-to-b from-white to-stone-50 shadow-xl shadow-stone-200/50">
          {/* Gold accent bar */}
          <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />

          <div className="p-6 sm:p-8">
            {step === 0 && (
              <div className="space-y-6">
                {/* Language */}
                <div className="flex flex-wrap gap-2">
                  {LANGS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() =>
                        update("language", l.id as BiodataFormData["language"])
                      }
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-medium transition",
                        data.language === l.id
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                {/* Title + God */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <Field label="Title">
                    <input className={fieldClass} value={data.biodataTitle || ""} onChange={(e) => update("biodataTitle", e.target.value)} placeholder="Biodata title" />
                  </Field>
                  <div className="flex flex-col items-center justify-end gap-1">
                    <span className="text-3xl" aria-hidden>🕉️</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-amber-800">God</span>
                  </div>
                  <Field label="Mantra">
                    <input className={fieldClass} value={data.mantra || ""} onChange={(e) => update("mantra", e.target.value)} placeholder="|| Shri Ganeshaya Namah ||" />
                  </Field>
                </div>

                {/* Photo upload — screenshot style */}
                <div className="rounded-xl border border-dashed border-amber-300/70 bg-gradient-to-br from-amber-50/80 to-stone-50 p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-sm font-semibold text-amber-900">{t.photo}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-stone-200/80 ring-1 ring-stone-300/50">
                          {data.photoDataUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={data.photoDataUrl}
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span className="text-3xl text-stone-400" aria-hidden>
                              👤
                            </span>
                          )}
                        </div>
                        <div>
                          <input
                            ref={fileRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhoto}
                          />
                          <button
                            type="button"
                            onClick={() => fileRef.current?.click()}
                            className="rounded-lg bg-amber-800 px-4 py-2 text-sm font-semibold text-amber-50 shadow-sm transition hover:bg-amber-900"
                          >
                            Upload
                          </button>
                          <p className="mt-1.5 max-w-[140px] text-[11px] leading-snug text-stone-500">
                            Clear face photo recommended
                          </p>
                          {data.photoDataUrl && (
                            <button
                              type="button"
                              onClick={() => update("photoDataUrl", undefined)}
                              className="mt-1 text-[11px] font-medium text-red-600 hover:underline"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-amber-200/60 bg-white/70 p-3">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-amber-900">
                        <span aria-hidden>📷</span> {t.tips}
                      </p>
                      <ul className="space-y-1 text-[11px] leading-relaxed text-amber-900/80">
                        <li>• Clear, recent photo</li>
                        <li>• Face centered</li>
                        <li>• No group shots</li>
                        <li>• Formal attire</li>
                        <li>• Auto 4:5 crop</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Personal fields — short labels */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-stone-800">
                    {t.personal}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t.name}>
                      <input
                        className={fieldClass}
                        value={data.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </Field>
                    <Field label={t.dob}>
                      <input
                        type="date"
                        className={fieldClass}
                        value={data.dob}
                        onChange={(e) => update("dob", e.target.value)}
                      />
                    </Field>
                    <Field label="Gender">
                      <select
                        className={fieldClass}
                        value={data.gender}
                        onChange={(e) =>
                          update("gender", e.target.value as BiodataFormData["gender"])
                        }
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </Field>
                    <Field label={t.height}>
                      <input
                        className={fieldClass}
                        value={data.height}
                        onChange={(e) => update("height", e.target.value)}
                        placeholder="5'8&quot;"
                      />
                    </Field>
                    <Field label={t.place}>
                      <input
                        className={fieldClass}
                        value={data.nativePlace}
                        onChange={(e) => update("nativePlace", e.target.value)}
                        placeholder="e.g. Mumbai, Maharashtra"
                      />
                    </Field>
                    <Field label={t.religion}>
                      <input
                        className={fieldClass}
                        value={data.religion}
                        onChange={(e) =>
                          update("religion", e.target.value as BiodataFormData["religion"])
                        }
                        placeholder="e.g. Hindu / Muslim / Christian"
                      />
                    </Field>
                    <Field label={t.caste}>
                      <input
                        className={fieldClass}
                        value={data.caste}
                        onChange={(e) => update("caste", e.target.value)}
                        placeholder="e.g. your community"
                      />
                    </Field>
                    <Field label={t.education}>
                      <input
                        className={fieldClass}
                        value={data.education}
                        onChange={(e) => update("education", e.target.value)}
                        placeholder="e.g. B.Tech Computer Science"
                      />
                    </Field>
                    <Field label={t.work}>
                      <input
                        className={fieldClass}
                        value={data.occupation}
                        onChange={(e) => update("occupation", e.target.value)}
                        placeholder="e.g. Software Engineer at TCS"
                      />
                    </Field>
                  </div>
                </div>

                {/* Optional chips */}
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                    Add
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CHIPS.filter((c) => !extraFields.includes(c.key)).map((c) => (
                      <button
                        key={c.key}
                        type="button"
                        onClick={() => setExtraFields((p) => [...p, c.key])}
                        className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-medium text-amber-900 transition hover:bg-amber-50"
                      >
                        + {c.label}
                      </button>
                    ))}
                  </div>
                  {extraFields.length > 0 && (
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {extraFields.map((key) => {
                        const chip = CHIPS.find((c) => c.key === key);
                        return (
                          <Field key={key} label={chip?.label || key}>
                            <input
                              className={fieldClass}
                              placeholder={`Enter ${chip?.label || key}`}
                              value={chipValues[key] || ""}
                              onChange={(e) =>
                                setChipValues((p) => ({ ...p, [key]: e.target.value }))
                              }
                            />
                          </Field>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wide text-stone-800">
                  {t.family}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.father}>
                    <input
                      className={fieldClass}
                      value={data.fatherName}
                      onChange={(e) => update("fatherName", e.target.value)}
                      placeholder="Enter full name"
                    />
                  </Field>
                  <Field label={t.fatherWork}>
                    <input
                      className={fieldClass}
                      value={data.fatherOccupation}
                      onChange={(e) => update("fatherOccupation", e.target.value)}
                      placeholder="e.g. Business / Service"
                    />
                  </Field>
                  <Field label={t.mother}>
                    <input
                      className={fieldClass}
                      value={data.motherName}
                      onChange={(e) => update("motherName", e.target.value)}
                      placeholder="Enter full name"
                    />
                  </Field>
                  <Field label={t.motherWork}>
                    <input
                      className={fieldClass}
                      value={data.motherOccupation}
                      onChange={(e) => update("motherOccupation", e.target.value)}
                      placeholder="e.g. Homemaker / Teacher"
                    />
                  </Field>
                  <Field label={t.siblings}>
                    <input
                      className={fieldClass}
                      value={data.siblings}
                      onChange={(e) => update("siblings", e.target.value)}
                      placeholder="e.g. 1 Brother (Married), 1 Sister"
                    />
                  </Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold tracking-wide text-stone-800">
                    {t.contact}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t.phone}>
                      <input
                        className={fieldClass}
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </Field>
                    <Field label={t.email}>
                      <input
                        type="email"
                        className={fieldClass}
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label={t.address}>
                        <textarea
                          className={cn(fieldClass, "min-h-[72px] resize-y")}
                          value={data.address}
                          onChange={(e) => update("address", e.target.value)}
                          placeholder="e.g. Mumbai, Maharashtra"
                        />
                      </Field>
                    </div>
                  </div>
                </div>
                <TemplateSelector
                  selectedId={data.templateId}
                  onSelect={(id) => update("templateId", id)}
                />
              </div>
            )}

            {/* Custom fields (all steps) */}
            <div className="mt-6 space-y-3 border-t border-stone-100 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-stone-800">
                  {data.language === "gu" ? "કસ્ટમ ફીલ્ડ" : "Custom Fields"}
                </h3>
                <button
                  type="button"
                  onClick={addCustomField}
                  className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900 transition hover:bg-amber-100"
                >
                  + {data.language === "gu" ? "નવું ફીલ્ડ ઉમેરો" : "Add Custom Field"}
                </button>
              </div>
              {(data.customFields || []).length === 0 && (
                <p className="text-xs text-stone-400">
                  {data.language === "gu"
                    ? "જરૂર હોય તો તમારું પોતાનું લેબલ અને વેલ્યૂ ઉમેરો"
                    : "Add your own label and value if needed"}
                </p>
              )}
              <div className="space-y-3">
                {(data.customFields || []).map((f) => (
                  <div
                    key={f.id}
                    className="grid gap-2 rounded-xl border border-stone-200 bg-white p-3 sm:grid-cols-[1fr_1.4fr_auto]"
                  >
                    <input
                      className={fieldClass}
                      placeholder={data.language === "gu" ? "લેબલ (દા.ત. હોબી)" : "Label (e.g. Hobbies)"}
                      value={f.label}
                      onChange={(e) => updateCustomField(f.id, "label", e.target.value)}
                    />
                    <input
                      className={fieldClass}
                      placeholder={data.language === "gu" ? "વેલ્યૂ લખો" : "Enter value"}
                      value={f.value}
                      onChange={(e) => updateCustomField(f.id, "value", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeCustomField(f.id)}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
                      aria-label="Remove field"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Nav */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-6">
              <button
                type="button"
                onClick={() => {
                  if (step === 0) {
                    setData(initialData);
                    setExtraFields([]);
                    setChipValues({});
                    update("photoDataUrl", undefined);
                  } else prev();
                }}
                className="text-sm font-medium text-stone-500 transition hover:text-stone-800"
              >
                {step === 0 ? t.reset : `← ${t.back}`}
              </button>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={addCustomField}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
                >
                  + {data.language === "gu" ? "કસ્ટમ ફીલ્ડ" : "Custom Field"}
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-xl bg-stone-900 px-6 py-2.5 text-sm font-semibold text-amber-50 shadow-lg shadow-stone-900/20 transition hover:bg-stone-800 active:scale-[0.98]"
                >
                  {step === 2 ? `${t.preview} →` : `${t.next} →`}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-stone-900">{t.preview}</h3>
              <p className="text-sm text-stone-500">Review & save PDF</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
              >
                ← {t.back}
              </button>
              <button
                type="button"
                onClick={downloadPdf}
                disabled={isGenerating}
                className="rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-semibold text-amber-50 shadow-lg transition hover:bg-stone-800 disabled:opacity-60"
              >
                {isGenerating ? "…" : `↓ ${t.download}`}
              </button>
            </div>
          </div>
          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          )}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-stone-50/80 p-4 sm:p-6">
            <BiodataPreview ref={previewRef} data={data} />
          </div>
        </div>
      )}
    </div>
  );
}
