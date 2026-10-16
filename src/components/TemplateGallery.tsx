"use client";

import { useRef, useState } from "react";
import { TEMPLATES, TEMPLATE_CATEGORIES, templateImageSrc } from "@/lib/templates";
import type { TemplateCategory } from "@/lib/types";

export const PREFERRED_TEMPLATE_KEY = "fbm-preferred-template";
export const TEMPLATE_SELECT_EVENT = "fbm-template-select";

type Tab = "all" | TemplateCategory;

const TABS: { id: Tab; label: string; count: number }[] = [
  { id: "all", label: "All", count: TEMPLATES.length },
  ...TEMPLATE_CATEGORIES.map((c) => ({
    ...c,
    count: TEMPLATES.filter((t) => t.category === c.id).length,
  })),
];

export default function TemplateGallery() {
  const [tab, setTab] = useState<Tab>("all");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const visible = tab === "all" ? TEMPLATES : TEMPLATES.filter((t) => t.category === tab);

  const onTabKey = (e: React.KeyboardEvent, index: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  const pick = (id: string) => {
    try {
      sessionStorage.setItem(PREFERRED_TEMPLATE_KEY, id);
    } catch {
      /* ignore */
    }
    // Notify form on same page (already mounted)
    try {
      window.dispatchEvent(
        new CustomEvent(TEMPLATE_SELECT_EVENT, { detail: { templateId: id } })
      );
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="mt-8">
      <div
        role="tablist"
        aria-label="Template categories"
        className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      >
        {TABS.map((c, i) => {
          const active = tab === c.id;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tpl-tab-${c.id}`}
              aria-selected={active}
              aria-controls="tpl-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => setTab(c.id)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={
                "inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition " +
                (active
                  ? "border-[#1c1917] bg-[#1c1917] text-[#e8d5a3] shadow"
                  : "border-stone-300 bg-white text-stone-700 hover:border-[#7a5c14] hover:text-[#7a5c14]")
              }
            >
              {c.label}
              <span
                className={
                  "rounded-full px-2 py-0.5 text-[11px] font-bold " +
                  (active ? "bg-white/15 text-[#e8d5a3]" : "bg-stone-100 text-stone-600")
                }
              >
                {c.count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="tpl-panel"
        role="tabpanel"
        aria-labelledby={`tpl-tab-${tab}`}
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
      {visible.map((t) => (
        <a
          key={t.id}
          href="#create"
          onClick={() => pick(t.id)}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:border-[#c4a35a] hover:shadow-xl"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-[#faf6eb] to-[#f0ebe3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={templateImageSrc(t.id)}
              alt={`${t.name} marriage biodata template`}
              width={600}
              height={848}
              className="h-full max-h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
            {t.id === "elegant-profile" ? (
              <span className="absolute right-3 top-3 rounded-md bg-[#7a5c14] px-2.5 py-1 text-[11px] font-bold text-white shadow">
                Classic
              </span>
            ) : (
              <span className="absolute right-3 top-3 rounded-md bg-[#1c1917]/90 px-2.5 py-1 text-[11px] font-bold text-[#e8d5a3] shadow">
                Premium
              </span>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-12 opacity-0 transition group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                Select &amp; fill form →
              </span>
            </div>
          </div>
          <div className="border-t border-stone-100 px-4 py-3 text-center">
            <p className="text-sm font-bold text-stone-900 sm:text-base">{t.name}</p>
            {t.description && (
              <p className="mt-1 line-clamp-2 text-xs text-stone-500">{t.description}</p>
            )}
          </div>
        </a>
      ))}
      </div>
    </div>
  );
}
