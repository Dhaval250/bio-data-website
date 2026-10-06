"use client";

import {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { BiodataFormData } from "@/lib/types";
import { getArtLayout } from "@/lib/templates";

/**
 * Preview for the artwork templates (Orange, Lotus, Red Velvet, Rose, Blue).
 * The page IS the template artwork (text-free copy of the gallery image) with the user's
 * data placed on top at the same positions, so what you pick is what you get.
 * Everything is sized in cqw (container width units) so screen preview, print/PDF and
 * mobile all render the same layout.
 */

const isImageSrc = (v?: string) => !!v && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));

const PAGE_RATIO = 1414 / 1000; // template artwork height / width

interface Props {
  data: BiodataFormData;
}

const TemplateArtPreview = forwardRef<HTMLDivElement, Props>(function TemplateArtPreview(
  { data },
  ref
) {
  const L = getArtLayout(data.templateId)!;
  const c = L.color;
  const profilePhotos = (Array.isArray(data.photoDataUrls) ? data.photoDataUrls.filter(Boolean) : data.photoDataUrl ? [data.photoDataUrl] : []).slice(0, 3);

  const bodyRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      cardRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as { current: HTMLDivElement | null }).current = node;
    },
    [ref]
  );

  type Row = [string, string | undefined];
  const customRows = (data.customFields || []).filter((f) => f.label?.trim() && f.value?.trim());
  const customIn = (section: "personal" | "family" | "contact"): Row[] =>
    customRows
      .filter((f) => (f.section || "personal") === section)
      .map((f): Row => [f.label, f.value]);

  const personal: Row[] = [
    ["Full Name", data.fullName],
    ["Date of Birth", data.dob],
    ["Height", data.height],
    ["Place of Birth", data.nativePlace],
    ["Religion", data.religion],
    ["Caste", data.caste],
    ["Zodiac Sign", data.rashi],
    ["Nakshatra", data.nakshatra],
    ["Manglik", data.manglik],
    ["Gotra", data.gotra],
    ["Higher Education", data.education],
    ["Occupation", data.occupation],
    ...customIn("personal"),
  ];
  const family: Row[] = [
    ["Father's Name", data.fatherName],
    ["Father's Occupation", data.fatherOccupation],
    ["Mother's Name", data.motherName],
    ["Mother's Occupation", data.motherOccupation],
    ["Brothers / Sisters", data.siblings],
    ["Family Background", data.familyDetails],
    ...customIn("family"),
  ];
  const contact: Row[] = [
    ["Mobile Number", data.phone],
    ["Email", data.email],
    ["Address", data.address],
    ...customIn("contact"),
  ];
  const has = (rows: Row[]) => rows.filter(([, v]) => v && String(v).trim());

  const title = data.biodataTitle?.trim() || L.defaults.title;
  const mantra = data.mantra?.trim() || L.defaults.mantra;

  // If the user filled a lot of fields, shrink the text block so it never runs off the page.
  // Card height is derived from its width (fixed page ratio) so we never measure before the
  // background image has loaded (that made the text shrink to the minimum).
  useLayoutEffect(() => {
    const recalc = () => {
      const card = cardRef.current;
      const body = bodyRef.current;
      if (!card || !body) return;
      const w = card.getBoundingClientRect().width;
      if (!w) return;
      const cardH = w * PAGE_RATIO;
      const topPx = (cardH * L.headY) / 100 - ((2 * L.headGap - L.pitch) / 2) * (w / 100);
      const avail = cardH * L.maxY - topPx;
      const need = body.scrollHeight; // layout height (unaffected by transform)
      const next = need > avail && need > 0 && avail > 0 ? Math.max(0.4, avail / need) : 1;
      setScale((prev) => (Math.abs(prev - next) < 0.005 ? prev : next));
    };
    recalc();
    const card = cardRef.current;
    const ro = typeof ResizeObserver !== "undefined" && card ? new ResizeObserver(recalc) : null;
    if (ro && card) ro.observe(card);
    return () => ro?.disconnect();
  }, [data, L.headY, L.headGap, L.pitch, L.maxY]);

  const colW = L.photo.left - L.left - 2; // % width left for text beside the photo

  const section = (heading: string, rows: Row[], first: boolean): ReactNode => {
    const filled = has(rows);
    if (!filled.length) return null;
    const headLH = 2 * L.headGap - L.pitch;
    const sectionMargin = first ? 0 : L.secGap - L.pitch / 2 - headLH / 2;
    return (
      <div key={heading} style={{ marginTop: `${sectionMargin}cqw` }}>
        <div
          style={{
            fontSize: `${L.headFont}cqw`,
            lineHeight: `${headLH}cqw`,
            fontWeight: 700,
            color: c.heading,
          }}
        >
          {heading}
        </div>
        {filled.map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "grid",
              gridTemplateColumns: `${L.labelW}cqw 1.5cqw minmax(0,1fr)`,
              fontSize: `${L.rowFont}cqw`,
              lineHeight: `${L.pitch}cqw`,
              color: c.text,
            }}
          >
            <span style={{ color: c.label, whiteSpace: "nowrap" }}>{label}</span>
            <span>:</span>
            <span style={{ overflowWrap: "anywhere" }}>{value}</span>
          </div>
        ))}
      </div>
    );
  };

  const godIcon = (size: number) => {
    const g = data.godImage;
    const circle: CSSProperties = L.header.circleIcon
      ? {
          borderRadius: "50%",
          border: `0.35cqw solid ${c.photoBorder}`,
          background: "linear-gradient(#fff8e7,#f5e6c8)",
          overflow: "hidden",
        }
      : {};
    return (
      <span
        style={{
          width: `${size}cqw`,
          height: `${size}cqw`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: `${size * 0.7}cqw`,
          lineHeight: 1,
          ...circle,
        }}
        aria-hidden
      >
        {isImageSrc(g) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={g} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        ) : (
          g || "🕉️"
        )}
      </span>
    );
  };

  const titleStyle: CSSProperties = {
    fontSize: `${L.header.titleFont}cqw`,
    fontWeight: 700,
    color: c.title,
    whiteSpace: "nowrap",
    lineHeight: 1.2,
  };

  return (
    <div
      ref={setRefs}
      data-biodata-preview
      data-extra-photo-1={profilePhotos[1] || ""}
      data-extra-photo-2={profilePhotos[2] || ""}
      id="biodata-preview-card"
      className="relative mx-auto w-full max-w-[480px] overflow-hidden shadow-xl"
      style={{
        containerType: "inline-size",
        aspectRatio: "1000 / 1414",
        fontFamily: "var(--font-mukta), 'Noto Sans Devanagari', 'Segoe UI', sans-serif",
      }}
    >
      {/* Template artwork (text-free). In-flow so the card keeps the exact A4 ratio in print. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={L.bg} alt="" draggable={false} style={{ display: "block", width: "100%", height: "auto" }} />

      <div id="biodata-print-inner" style={{ position: "absolute", inset: 0 }}>
        {/* Header */}
        {L.header.stacked ? (
          <>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `calc(${L.header.y}% - ${L.header.titleFont * 0.6}cqw)`,
                textAlign: "center",
                ...titleStyle,
              }}
            >
              {title}
            </div>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `calc(${L.header.iconY}% - ${L.header.iconSize / 2}cqw)`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {godIcon(L.header.iconSize)}
            </div>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `calc(${L.header.mantraY}% - ${L.header.titleFont * 0.6}cqw)`,
                textAlign: "center",
                ...titleStyle,
              }}
            >
              {mantra}
            </div>
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `calc(${L.header.y}% - ${L.header.iconSize / 2}cqw)`,
              height: `${L.header.iconSize}cqw`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3cqw",
            }}
          >
            <span style={titleStyle}>{title}</span>
            {godIcon(L.header.iconSize)}
            <span style={titleStyle}>{mantra}</span>
          </div>
        )}

        {/* Details */}
        <div
          ref={bodyRef}
          style={{
            position: "absolute",
            left: `${L.left}%`,
            width: `${colW}%`,
            top: `calc(${L.headY}% - ${(2 * L.headGap - L.pitch) / 2}cqw)`,
            transform: scale < 1 ? `scale(${scale})` : undefined,
            transformOrigin: "top left",
          }}
        >
          {(() => {
            let first = true;
            const out: ReactNode[] = [];
            for (const [h, rows] of [
              ["Personal Details", personal],
              ["Family Details", family],
              ["Contact Details", contact],
            ] as [string, Row[]][]) {
              const node = section(h, rows, first);
              if (node) {
                out.push(node);
                first = false;
              }
            }
            return out;
          })()}
        </div>

        {/* Photo */}
        <div
          style={{
            position: "absolute",
            left: `${L.photo.left}%`,
            top: `${L.photo.top}%`,
            width: `${L.photo.w}cqw`,
            height: `${L.photo.h}cqw`,
            border: `0.4cqw solid ${c.photoBorder}`,
            borderRadius: "0.6cqw",
            overflow: "hidden",
            background: "rgba(128,128,128,0.18)",
            boxSizing: "border-box",
          }}
        >
          {profilePhotos.length ? (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* The main profile photo must use the entire photo frame.
                  Additional photos are rendered on the dedicated extra-photo page.
                  The old grid divided this frame into 2/3 rows when multiple photos
                  were selected, making the main image appear unnecessarily tiny. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profilePhotos[0]}
                alt={`${data.fullName || "Photo"} 1`}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                  userSelect: "none",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: c.text,
                opacity: 0.5,
              }}
            >
              <span style={{ fontSize: "7cqw", lineHeight: 1 }}>👤</span>
              <span style={{ fontSize: "1.6cqw", letterSpacing: "0.2em", marginTop: "1cqw" }}>PHOTO</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default TemplateArtPreview;
