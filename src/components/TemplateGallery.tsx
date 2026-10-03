"use client";

import { TEMPLATES, templateImageSrc } from "@/lib/templates";

export default function TemplateGallery() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TEMPLATES.map((t) => (
        <a
          key={t.id}
          href="#create"
          className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-[#c4a35a] hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f0e8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={templateImageSrc(t.id)}
              alt={t.name}
              className="h-full max-h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
            {t.id === "elegant-profile" ? (
              <span className="absolute right-2 top-2 rounded-md bg-[#c4a35a] px-2 py-0.5 text-[10px] font-bold text-white shadow">
                Classic
              </span>
            ) : (
              <span className="absolute right-2 top-2 rounded-md bg-[#1c1917]/85 px-2 py-0.5 text-[10px] font-bold text-[#e8d5a3] shadow">
                Premium
              </span>
            )}
          </div>
          <p className="border-t border-stone-100 px-3 py-2.5 text-center text-sm font-semibold text-stone-800">
            {t.name}
          </p>
        </a>
      ))}
    </div>
  );
}
