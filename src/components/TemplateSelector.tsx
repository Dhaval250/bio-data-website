"use client";

import { TEMPLATES, templateImageSrc } from "@/lib/templates";
import { cn } from "@/lib/utils";

export default function TemplateSelector({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-bold text-stone-900 sm:text-lg">
          Choose a Template
        </h3>
        <p className="mt-0.5 text-xs text-stone-500 sm:text-sm">
          Select a design for your biodata
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((tpl) => {
          const active = selectedId === tpl.id;
          const src = templateImageSrc(tpl.id);
          return (
            <button
              key={tpl.id}
              type="button"
              onClick={() => onSelect(tpl.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border-2 bg-white text-left transition touch-manipulation",
                active
                  ? "border-[#c4a35a] shadow-lg shadow-[#c4a35a]/25 ring-2 ring-[#c4a35a]/30"
                  : "border-stone-200 hover:border-[#c4a35a]/50 hover:shadow-md"
              )}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f5f0e8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={tpl.name}
                  className="h-full max-h-full w-full object-contain object-center"
                  loading="eager"
                />
                {active && (
                  <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a35a] text-white shadow-md">
                    ✓
                  </span>
                )}
                {tpl.id !== "elegant-profile" && (
                  <span className="absolute left-2.5 top-2.5 rounded-md bg-stone-900/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-200">
                    Premium
                  </span>
                )}
              </div>
              <div className="border-t border-stone-100 px-3 py-2.5">
                <p className="text-sm font-bold text-stone-900">{tpl.name}</p>
                {tpl.description && (
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-stone-500">
                    {tpl.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
