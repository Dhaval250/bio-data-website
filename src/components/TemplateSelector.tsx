"use client";

import { useState } from "react";
import { TEMPLATES, templateImageSrc } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface Props {
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function TemplateSelector({ selectedId, onSelect }: Props) {
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <div>
      <div className="mb-3">
        <h2 className="text-sm font-semibold tracking-wide text-stone-800">
          Choose a Template
        </h2>
        <p className="mt-0.5 text-xs text-stone-500">
          Select a design for your biodata. Add images in{" "}
          <code className="rounded bg-stone-100 px-1">public/templates/</code>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {TEMPLATES.map((t) => {
          const isSelected = selectedId === t.id;
          const showImg = !broken[t.id];
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t.id)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl border-2 text-left transition-all",
                isSelected
                  ? "border-amber-700 shadow-md ring-1 ring-amber-700/20"
                  : "border-stone-200 hover:border-stone-400 hover:shadow-sm"
              )}
            >
              <div
                className={cn(
                  "relative flex h-28 items-center justify-center overflow-hidden border-b sm:h-32",
                  t.previewClass
                )}
              >
                {showImg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={templateImageSrc(t.id)}
                    alt={t.name}
                    className="h-full w-full object-cover object-top"
                    onError={() =>
                      setBroken((prev) => ({ ...prev, [t.id]: true }))
                    }
                  />
                ) : (
                  <div
                    className="flex w-[75%] gap-1 rounded border bg-white/90 p-1.5 shadow-sm"
                    style={{ borderColor: t.borderColor }}
                  >
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div
                        className="h-1 w-8 rounded"
                        style={{ background: t.accent }}
                      />
                      <div className="h-0.5 w-full rounded bg-stone-300/80" />
                      <div className="h-0.5 w-3/4 rounded bg-stone-300/60" />
                      <div className="h-0.5 w-full rounded bg-stone-300/60" />
                    </div>
                    <div
                      className="h-8 w-6 shrink-0 rounded-sm border bg-stone-100"
                      style={{ borderColor: t.borderColor }}
                    />
                  </div>
                )}
              </div>

              <div className="p-2.5">
                <span className="text-[13px] font-medium leading-tight text-stone-900">
                  {t.name}
                </span>
                <span className="mt-0.5 line-clamp-2 block text-[11px] leading-snug text-stone-500">
                  {t.description}
                </span>
              </div>

              {isSelected && (
                <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[10px] font-bold text-white">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
