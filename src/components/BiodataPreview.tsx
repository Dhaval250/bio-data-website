"use client";

import { forwardRef } from "react";
import { BiodataFormData } from "@/lib/types";
import { getTemplate } from "@/lib/templates";

interface Props {
  data: BiodataFormData;
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} width="64" height="80" viewBox="0 0 64 80" fill="none" aria-hidden>
      <path d="M32 8c-2 12-14 22-22 28 10 2 20 2 28-2-2 10-2 20 2 30 8-12 16-24 18-36-10 2-18-4-26-20z" fill="#c4b5a0" opacity="0.35" />
      <path d="M30 12c0 16 8 28 16 36" stroke="#b8a990" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

function SectionBar({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="mb-2 mt-4 flex items-center gap-2 first:mt-0">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ebe4d8] text-[11px]">
        {icon}
      </span>
      <span className="rounded-full bg-[#ebe4d8] px-3 py-0.5 text-[10px] font-bold tracking-[0.12em] text-[#3f3a34]">
        {title}
      </span>
    </div>
  );
}

function Line({ label, value }: { label: string; value?: string }) {
  if (!value || !String(value).trim()) return null;
  return (
    <div className="grid grid-cols-[1fr_auto_1.2fr] gap-x-1 text-[11px] leading-[1.7] text-[#3f3a34]">
      <span className="text-[#5c564e]">{label}</span>
      <span className="text-[#9a9288]">:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

const BiodataPreview = forwardRef<HTMLDivElement, Props>(function BiodataPreview(
  { data },
  ref
) {
  const template = getTemplate(data.templateId);
  const isElegant =
    template.id === "elegant-profile" || template.id === "pearl-white";
  const isTemple =
    template.id === "abstract-temple" ||
    template.id === "temple-saffron" ||
    template.id === "heritage-gold" ||
    template.id === "classic-ivory";

  const customRows = (data.customFields || []).filter(
    (f) => f.label?.trim() && f.value?.trim()
  );

  // ——— ELEGANT PROFILE (A4 full-page, no empty space) ———
  if (isElegant) {
    return (
      <div
        ref={ref}
        data-biodata-preview
        id="biodata-preview-card"
        className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-sm border border-[#e5dfd4] bg-[#faf8f5] shadow-lg sm:max-w-[480px]"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          aspectRatio: "210 / 297",
          minHeight: "620px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Leaf className="pointer-events-none absolute left-2 top-2 opacity-80" />
        <Leaf className="pointer-events-none absolute bottom-2 right-2 rotate-180 opacity-80" />

        <div
          id="biodata-print-inner"
          className="relative z-[1] flex h-full min-h-full flex-1 flex-col p-5 sm:p-7"
        >
          {/* Header + photo */}
          <div className="flex shrink-0 items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#2c2825] sm:text-4xl">
                {data.biodataTitle?.trim() || data.fullName || "Biodata"}
              </h1>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xl leading-none" aria-hidden>
                  {data.godImage || "🕉️"}
                </span>
                <p className="text-[12px] font-medium tracking-wide text-[#6b645c]">
                  {data.mantra?.trim() || "|| Shri Ganeshaya Namah ||"}
                </p>
              </div>
              <div className="mt-2 h-px w-10 bg-[#c4b5a0]" />
              <p className="mt-2 max-w-[220px] text-[11px] italic text-[#8a8278]">
                A simple introduction to a better tomorrow…
              </p>
            </div>
            <div className="flex h-[110px] w-[92px] shrink-0 flex-col items-center justify-center overflow-hidden rounded border border-[#d6cfc4] bg-[#f0ebe3]">
              {data.photoDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.photoDataUrl}
                  alt={data.fullName || "Photo"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <span className="text-3xl text-[#c4b5a0]">👤</span>
                  <span className="mt-1 text-[8px] tracking-wider text-[#a39e94]">
                    PHOTO HERE
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Two columns — flex-1 fills remaining A4 height */}
          <div className="mt-5 grid flex-1 grid-cols-1 content-start gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <SectionBar icon="👤" title="PERSONAL DETAILS" />
              <Line label="Name" value={data.fullName} />
              <Line label="Date of Birth" value={data.dob} />
              <Line label="Gender" value={data.gender} />
              <Line label="Place of Birth" value={data.nativePlace} />
              <Line label="Height" value={data.height} />
              <Line label="Religion" value={data.religion} />
              <Line label="Caste" value={data.caste} />
              <Line label="Rashi" value={data.rashi} />
              <Line label="Nakshatra" value={data.nakshatra} />
              <Line label="Gotra" value={data.gotra} />
              <Line label="Manglik" value={data.manglik} />

              <SectionBar icon="🎓" title="EDUCATION" />
              <Line label="Highest Qualification" value={data.education} />

              <SectionBar icon="💼" title="OCCUPATION" />
              <Line label="Profession" value={data.occupation} />

              <SectionBar icon="🏠" title="ADDRESS" />
              <Line label="Present Address" value={data.address} />
            </div>

            <div className="flex flex-col">
              <SectionBar icon="👨‍👩‍👧" title="FAMILY DETAILS" />
              <Line label="Father's Name" value={data.fatherName} />
              <Line label="Mother's Name" value={data.motherName} />
              <Line label="Father's Occupation" value={data.fatherOccupation} />
              <Line label="Mother's Occupation" value={data.motherOccupation} />
              <Line label="Siblings (Brothers/Sisters)" value={data.siblings} />
              <Line label="Family Background" value={data.familyDetails} />

              <SectionBar icon="♥" title="EXPECTATIONS" />
              <Line
                label="Partner's Preference"
                value={data.partnerPreferences}
              />

              {customRows.length > 0 && (
                <>
                  <SectionBar icon="★" title="HOBBIES & INTERESTS" />
                  {customRows.map((f) => (
                    <Line key={f.id} label={f.label} value={f.value} />
                  ))}
                </>
              )}

              <SectionBar icon="💬" title="CONTACT DETAILS" />
              <Line label="Mobile No." value={data.phone} />
              <Line label="Email ID" value={data.email} />

              <p className="mt-auto pt-8 text-center text-[10px] italic text-[#8a8278]">
                Looking forward to a meaningful journey together…
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ——— ABSTRACT TEMPLE ———
  if (isTemple) {
    return (
      <div
        ref={ref}
        data-biodata-preview
        className="relative mx-auto w-full max-w-[420px]"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        <div
          className="relative overflow-hidden rounded-sm p-[3px]"
          style={{
            background: "linear-gradient(135deg, #C4A35A, #8B6914, #C4A35A)",
            boxShadow: "0 8px 32px rgba(139,69,19,0.18)",
          }}
        >
          <div
            className="relative border-[3px] px-5 pb-6 pt-4"
            style={{ background: template.headerBg, borderColor: "#D4AF37" }}
          >
            <div className="mb-3 text-center">
              <div className="text-2xl text-amber-800">🕉️</div>
              <p className="text-[11px] font-medium" style={{ color: template.accent }}>
                {data.mantra?.trim() || "|| श्री गणेशाय नमः ||"}
              </p>
              <h2 className="mt-1 text-lg font-bold" style={{ color: "#5c3310" }}>
                {data.biodataTitle?.trim() || "Marriage Biodata"}
              </h2>
            </div>
            <div className="flex gap-3">
              <div className="min-w-0 flex-1 space-y-1 text-[12px]">
                {[
                  ["Name", data.fullName],
                  ["Date of Birth", data.dob],
                  ["Height", data.height],
                  ["Religion", data.religion],
                  ["Caste", data.caste],
                  ["Education", data.education],
                  ["Occupation", data.occupation],
                  ["Father", data.fatherName],
                  ["Mother", data.motherName],
                  ["Mobile", data.phone],
                  ["Email", data.email],
                  ["Address", data.address],
                ]
                  .filter(([, v]) => v && String(v).trim())
                  .map(([l, v]) => (
                    <div key={l as string} className="grid grid-cols-[100px_1fr] gap-1">
                      <span className="font-semibold text-stone-700">{l}</span>
                      <span className="text-stone-800">: {v}</span>
                    </div>
                  ))}
              </div>
              <div
                className="h-[120px] w-[96px] shrink-0 overflow-hidden border-2 bg-white"
                style={{ borderColor: template.borderColor }}
              >
                {data.photoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={data.photoDataUrl} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-3xl text-stone-300">
                    👤
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-[11px] text-stone-500">{template.name}</p>
      </div>
    );
  }

  // ——— Modern fallback ———
  return (
    <div
      ref={ref}
      data-biodata-preview
      className="mx-auto w-full max-w-[420px] overflow-hidden rounded-xl border-2 bg-white shadow-lg"
      style={{ borderColor: template.borderColor }}
    >
      <div className="px-5 py-4 text-center text-white" style={{ background: template.accent }}>
        <p className="text-xs tracking-widest opacity-90">MARRIAGE BIODATA</p>
        <h2 className="text-xl font-bold">{data.fullName || "Your Name"}</h2>
      </div>
      <div className="flex gap-4 p-5" style={{ background: template.headerBg }}>
        <div className="min-w-0 flex-1 space-y-2 text-sm">
          {[
            ["Name", data.fullName],
            ["DOB", data.dob],
            ["Height", data.height],
            ["Education", data.education],
            ["Work", data.occupation],
            ["Phone", data.phone],
            ["Email", data.email],
          ]
            .filter(([, v]) => v)
            .map(([l, v]) => (
              <div key={l as string} className="flex gap-2">
                <span className="w-24 text-stone-500">{l}</span>
                <span>{v}</span>
              </div>
            ))}
        </div>
        {data.photoDataUrl && (
          <div className="h-28 w-24 overflow-hidden rounded-lg border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.photoDataUrl} alt="" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
});

export default BiodataPreview;
