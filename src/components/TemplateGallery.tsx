"use client";

import { useState } from "react";
import { templateImageSrc } from "@/lib/templates";
import TemplateCategoryTabs, { templatesForTab, tabButtonId, type TemplateTab } from "./TemplateCategoryTabs";

export const PREFERRED_TEMPLATE_KEY = "fbm-preferred-template";
export const TEMPLATE_SELECT_EVENT = "fbm-template-select";

export default function TemplateGallery() {
  const [tab, setTab] = useState<TemplateTab>("all");
  const visible = templatesForTab(tab);

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
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0">
        <TemplateCategoryTabs value={tab} onChange={setTab} idPrefix="tpl" panelId="tpl-panel" centered />
      </div>

      <div
        id="tpl-panel"
        role="tabpanel"
        aria-labelledby={tabButtonId("tpl", tab)}
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
