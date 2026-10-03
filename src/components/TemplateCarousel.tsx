"use client";

import { useEffect, useRef } from "react";
import { TEMPLATES, templateImageSrc } from "@/lib/templates";
import { cn } from "@/lib/utils";

/**
 * Horizontal, scrollable template strip shown under the preview.
 * - swipe / scroll on mobile, arrow buttons on desktop
 * - selected template is highlighted and scrolled into view
 */
export default function TemplateCarousel({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Keep the active template visible
  useEffect(() => {
    const el = trackRef.current?.querySelector<HTMLElement>(
      `[data-tpl="${selectedId}"]`
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selectedId]);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <button
        type="button"
        aria-label="Previous templates"
        onClick={() => scrollBy(-1)}
        className="absolute left-1 top-[42%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5a623] text-xl font-bold text-white shadow-md transition hover:bg-[#e67e22] sm:flex"
      >
        ‹
      </button>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
      >
        {TEMPLATES.map((tpl) => {
          const active = tpl.id === selectedId;
          return (
            <button
              key={tpl.id}
              type="button"
              data-tpl={tpl.id}
              onClick={() => onSelect(tpl.id)}
              aria-pressed={active}
              className="w-[112px] shrink-0 snap-center text-center touch-manipulation sm:w-[128px]"
            >
              <div
                className={cn(
                  "aspect-[3/4] w-full overflow-hidden rounded-lg border-2 bg-[#f5f0e8] transition",
                  active
                    ? "border-[#f5a623] shadow-md"
                    : "border-transparent hover:border-stone-300"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={templateImageSrc(tpl.id)}
                  alt={tpl.name}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p
                className={cn(
                  "mt-2 line-clamp-2 text-xs font-semibold",
                  active ? "text-[#e67e22]" : "text-stone-600"
                )}
              >
                {tpl.name}
              </p>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Next templates"
        onClick={() => scrollBy(1)}
        className="absolute right-1 top-[42%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5a623] text-xl font-bold text-white shadow-md transition hover:bg-[#e67e22] sm:flex"
      >
        ›
      </button>
    </div>
  );
}
