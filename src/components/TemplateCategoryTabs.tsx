"use client";

import { useRef } from "react";
import { TEMPLATES, TEMPLATE_CATEGORIES } from "@/lib/templates";
import type { Template, TemplateCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export type TemplateTab = "all" | TemplateCategory;

const TABS: { id: TemplateTab; label: string; count: number }[] = [
  { id: "all", label: "All", count: TEMPLATES.length },
  ...TEMPLATE_CATEGORIES.map((c) => ({
    ...c,
    count: TEMPLATES.filter((t) => t.category === c.id).length,
  })),
];

export function templatesForTab(tab: TemplateTab): Template[] {
  return tab === "all" ? TEMPLATES : TEMPLATES.filter((t) => t.category === tab);
}

/** Id of the tab button, for aria-labelledby on the panel */
export function tabButtonId(idPrefix: string, tab: TemplateTab) {
  return `${idPrefix}-tab-${tab}`;
}

/**
 * Category tabs shared by the landing gallery, the form's template step and the
 * preview slider. Controlled: the parent owns the active tab and renders the panel.
 */
export default function TemplateCategoryTabs({
  value,
  onChange,
  idPrefix,
  panelId,
  compact = false,
  centered = false,
}: {
  value: TemplateTab;
  onChange: (tab: TemplateTab) => void;
  idPrefix: string;
  panelId: string;
  compact?: boolean;
  centered?: boolean;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, index: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    onChange(TABS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Template categories"
      className={cn(
        "flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        centered && "sm:flex-wrap sm:justify-center sm:overflow-visible"
      )}
    >
      {TABS.map((c, i) => {
        const active = value === c.id;
        return (
          <button
            key={c.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={tabButtonId(idPrefix, c.id)}
            aria-selected={active}
            aria-controls={panelId}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(c.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border font-semibold transition touch-manipulation",
              compact ? "min-h-10 px-3 text-xs" : "min-h-11 px-4 text-sm",
              active
                ? "border-[#1c1917] bg-[#1c1917] text-[#e8d5a3] shadow"
                : "border-stone-300 bg-white text-stone-700 hover:border-[#7a5c14] hover:text-[#7a5c14]"
            )}
          >
            {c.label}
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-bold",
                active ? "bg-white/15 text-[#e8d5a3]" : "bg-stone-100 text-stone-600"
              )}
            >
              {c.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
