"use client";

import { useState } from "react";
import { TEMPLATES, templateImageSrc } from "@/lib/templates";

export default function TemplateGallery() {
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {TEMPLATES.map((t) => {
        const showImg = !broken[t.id];
        return (
          <a
            key={t.id}
            href="#create"
            className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:border-amber-400 hover:shadow-md"
          >
            <div
              className="relative flex h-36 items-center justify-center overflow-hidden border-b border-stone-100 sm:h-40"
              style={{ background: t.headerBg }}
            >
              {showImg ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={templateImageSrc(t.id)}
                  alt={t.name}
                  className="h-full w-full object-cover object-top transition group-hover:scale-[1.02]"
                  onError={() =>
                    setBroken((prev) => ({ ...prev, [t.id]: true }))
                  }
                />
              ) : (
                <div
                  className="flex w-[78%] gap-1.5 rounded-md border bg-white/90 p-2 shadow-sm"
                  style={{ borderColor: t.borderColor }}
                >
                  <div className="min-w-0 flex-1 space-y-1">
                    <div
                      className="h-1.5 w-10 rounded"
                      style={{ background: t.accent }}
                    />
                    <div className="h-0.5 w-full rounded bg-stone-300/80" />
                    <div className="h-0.5 w-4/5 rounded bg-stone-300/60" />
                    <div className="h-0.5 w-full rounded bg-stone-300/60" />
                    <div className="h-0.5 w-2/3 rounded bg-stone-300/50" />
                  </div>
                  <div
                    className="h-12 w-9 shrink-0 rounded-sm border bg-stone-100"
                    style={{ borderColor: t.borderColor }}
                  />
                </div>
              )}
              {(t.id === "elegant-profile" || t.id === "abstract-temple") && (
                <span className="absolute right-1.5 top-1.5 rounded bg-amber-600 px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {t.id === "elegant-profile" ? "New" : "Temple"}
                </span>
              )}
            </div>
            <p className="p-2.5 text-center text-xs font-medium text-stone-700 group-hover:text-amber-900">
              {t.name}
            </p>
          </a>
        );
      })}
    </div>
  );
}
