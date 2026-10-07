"use client";

import { BiodataFormData } from "@/lib/types";
import { getArtLayout } from "@/lib/templates";

/**
 * Page 2 preview: additional profile photos (2nd and 3rd) exactly as they will
 * appear in the downloaded PDF (A4 page split into two equal halves, photo fitted
 * inside each half without cropping).
 *
 * This lives OUTSIDE the main preview card (#biodata-preview-card), so the PDF
 * capture of page 1 is not affected. The PDF builder reads the same photos from
 * the card's data-extra-photo-* attributes.
 */
export default function ExtraPhotosPreview({ data }: { data: BiodataFormData }) {
  const all = Array.isArray(data.photoDataUrls) ? data.photoDataUrls.filter(Boolean) : [];
  const extra = all.slice(1, 3);
  if (!extra.length) return null;
  const bg = getArtLayout(data.templateId)?.bg;

  return (
    <div className="mx-auto mt-6 w-full max-w-[480px]">
      <p className="mb-2 text-center text-xs font-semibold tracking-wide text-stone-500">
        PAGE 2 — ADDITIONAL PHOTOS
      </p>
      <div
        className="grid overflow-hidden border border-stone-200 bg-white shadow-xl"
        style={{
          aspectRatio: "210 / 297",
          gridTemplateRows: "1fr 1fr",
          padding: bg ? "11.5% 10.5%" : 0,
          backgroundImage: bg ? `url(${bg})` : undefined,
          backgroundSize: "100% 100%",
        }}
      >
        {[0, 1].map((i) => (
          <div key={i} className={`flex items-center justify-center overflow-hidden ${bg ? "" : "bg-white"}`}>
            {extra[i] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={extra[i]}
                alt={`Photo ${i + 2}`}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="max-h-full max-w-full select-none object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
