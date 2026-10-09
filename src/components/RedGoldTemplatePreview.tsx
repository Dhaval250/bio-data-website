"use client";

import { forwardRef, useEffect, useRef, useState, type CSSProperties } from "react";
import { BiodataFormData } from "@/lib/types";

interface Props {
  data: BiodataFormData;
}

const BG = "/templates/red-gold.bg.png";
const PAGE_RATIO = 1024 / 731;

function customValue(data: BiodataFormData, labels: string[]) {
  const wanted = labels.map((x) => x.trim().toLowerCase());
  const row = (data.customFields || []).find((f) => {
    if (!f.label?.trim() || !f.value?.trim()) return false;
    return wanted.includes(f.label.trim().toLowerCase());
  });
  return row?.value?.trim() || "";
}

function religionLabel(value: string) {
  const map: Record<string, string> = {
    hindu: "Hindu",
    muslim: "Muslim",
    christian: "Christian",
    sikh: "Sikh",
    buddhist: "Buddhist",
    jain: "Jain",
    other: "Other",
  };
  return map[value] || value;
}

const RedGoldTemplatePreview = forwardRef<HTMLDivElement, Props>(function RedGoldTemplatePreview(
  { data },
  ref
) {
  const photos = (Array.isArray(data.photoDataUrls) ? data.photoDataUrls.filter(Boolean) : data.photoDataUrl ? [data.photoDataUrl] : []).slice(0, 3);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const setRefs = (node: HTMLDivElement | null) => {
    cardRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  const subCaste = customValue(data, ["Sub Caste", "Sub-Caste", "Subcaste"]);
  const complexion = customValue(data, ["Complexion", "Skin Tone"]);
  const brothers = customValue(data, ["No. Of Brother", "No. of Brother", "Brothers", "Brother"]);
  const sisters = customValue(data, ["No. Of Sister", "No. of Sister", "Sisters", "Sister"]);

  const personalRows = [
    ["Date of Birth", data.dob],
    ["Place of Birth", data.nativePlace],
    ["Rashi", data.rashi],
    ["Religion", religionLabel(data.religion)],
    ["Caste", data.caste],
    ["Sub Caste", subCaste],
    ["Gotra", data.gotra],
    ["Complexion", complexion],
    ["Height", data.height],
    ["Education", data.education],
    ["Occupation", data.occupation],
  ].filter(([, value]) => value && String(value).trim()) as [string, string][];

  const familyRows = [
    ["Father's Name", data.fatherName],
    ["Occupation", data.fatherOccupation],
    ["Mother's Name", data.motherName],
    ["Occupation", data.motherOccupation],
    ["No. Of Brother", brothers || (!sisters && data.siblings ? data.siblings : "")],
    ["No. Of Sister", sisters],
  ].filter(([, value]) => value && String(value).trim()) as [string, string][];

  const contactRows = [
    ["Phone no.", data.phone],
    ["Address", data.address],
  ].filter(([, value]) => value && String(value).trim()) as [string, string][];

  useEffect(() => {
    const recalc = () => {
      const card = cardRef.current;
      if (!card) return;
      const w = card.getBoundingClientRect().width;
      if (!w) return;
      const h = w * PAGE_RATIO;
      const body = card.querySelector<HTMLElement>("[data-red-gold-body]");
      if (!body) return;
      const available = h * 0.79;
      const needed = body.scrollHeight;
      const next = needed > available ? Math.max(0.58, available / needed) : 1;
      setScale((old) => Math.abs(old - next) < 0.005 ? old : next);
    };
    recalc();
    const ro = cardRef.current && typeof ResizeObserver !== "undefined" ? new ResizeObserver(recalc) : null;
    if (ro && cardRef.current) ro.observe(cardRef.current);
    return () => ro?.disconnect();
  }, [data, personalRows.length, familyRows.length, contactRows.length]);

  const rowStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "26.5cqw 2.2cqw minmax(0,1fr)",
    fontSize: "2.45cqw",
    lineHeight: "4.05cqw",
    color: "#f2c98a",
    fontWeight: 500,
  };

  const headingStyle: CSSProperties = {
    fontSize: "2.95cqw",
    lineHeight: "4.8cqw",
    fontWeight: 700,
    color: "#f6d18a",
    textDecoration: "underline",
    textUnderlineOffset: "0.35cqw",
  };

  const section = (title: string | null, rows: [string, string][]) => (
    <section>
      {title ? <div style={headingStyle}>{title}</div> : null}
      {rows.map(([label, value], index) => (
        <div key={`${label}-${index}`} style={rowStyle}>
          <span>{label}</span>
          <span>:</span>
          <span style={{ minWidth: 0, overflowWrap: "anywhere" }}>{value}</span>
        </div>
      ))}
    </section>
  );

  return (
    <div
      ref={setRefs}
      data-biodata-preview
      data-extra-photo-1={photos[1] || ""}
      data-extra-photo-2={photos[2] || ""}
      data-page-bg={BG}
      id="biodata-preview-card"
      className="relative mx-auto w-full max-w-[480px] overflow-hidden shadow-xl"
      style={{
        containerType: "inline-size",
        aspectRatio: "731 / 1024",
        fontFamily: "var(--font-mukta), 'Noto Sans Devanagari', 'Segoe UI', sans-serif",
      }}
    >
      {/* Text-free artwork generated from the supplied reference. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BG} alt="" draggable={false} style={{ display: "block", width: "100%", height: "auto" }} />

      <div id="biodata-print-inner" style={{ position: "absolute", inset: 0 }}>
        {/* Name replaces the sample name in the supplied design. */}
        <div
          style={{
            position: "absolute",
            left: "7.9%",
            top: "12.3%",
            width: "61%",
            fontSize: "4.05cqw",
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#ffd37e",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {data.fullName || "Your Name"}
        </div>

        {/* Dynamic text body */}
        <div
          data-red-gold-body
          style={{
            position: "absolute",
            left: "7.9%",
            top: "17.1%",
            width: "62%",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2.0cqw" }}>
            {section(null, personalRows)}
            {familyRows.length > 0 && section("Family Details", familyRows)}
            {contactRows.length > 0 && section("Contact Details", contactRows)}
          </div>
        </div>

        {/* Main profile photo */}
        <div
          style={{
            position: "absolute",
            left: "72.2%",
            top: "14.75%",
            width: "22.05cqw",
            height: "21.1cqw",
            overflow: "hidden",
            background: "rgba(60,10,20,.22)",
            boxSizing: "border-box",
          }}
        >
          {photos[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photos[0]}
              alt={`${data.fullName || "Profile"} photo`}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }}
            />
          ) : (
            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#f2c98a", fontSize: "2cqw", opacity: 0.8 }}>
              PHOTO
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default RedGoldTemplatePreview;
