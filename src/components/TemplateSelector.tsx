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
    <div className="space-y-5 rounded-2xl border-2 border-[#e8d5a3] bg-gradient-to-b from-[#fffbf0] to-white p-4 shadow-sm sm:p-6">
      <div className="text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-wider text-[#c4a35a]">
          Final step
        </p>
        <h3 className="mt-1 text-lg font-bold text-stone-900 sm:text-xl">
          Choose Your Perfect Template
        </h3>
        <p className="mt-1 text-sm text-stone-500">
          Form details are saved — pick a design below, then preview your biodata.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((tpl) => {
          const active = selectedId === tpl.id;
          return (
            <button
              key={tpl.id}
              type="button"
              onClick={() => onSelect(tpl.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border-2 bg-white text-left transition touch-manipulation",
                active
                  ? "border-[#c4a35a] shadow-lg ring-2 ring-[#c4a35a]/35"
                  : "border-stone-200 hover:border-[#c4a35a]/50 hover:shadow-md"
              )}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f5f0e8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={templateImageSrc(tpl.id)}
                  alt={tpl.name}
                  className="h-full max-h-full w-full object-contain object-center"
                  loading="eager"
                />
                {active && (
                  <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a35a] text-sm font-bold text-white shadow-md">
                    ✓
                  </span>
                )}
                {tpl.id !== "elegant-profile" && (
                  <span className="absolute left-2.5 top-2.5 rounded-md bg-stone-900/80 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-200">
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
