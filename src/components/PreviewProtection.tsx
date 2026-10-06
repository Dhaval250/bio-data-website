"use client";

import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Best-effort browser protection for the on-screen biodata preview.
 * Browsers/OSes do not expose a reliable API that can completely prevent
 * screenshots, so this blocks common browser actions and reacts to PrintScreen
 * when the browser exposes that key event. PDF download is unaffected because
 * the protection wrapper is outside the actual preview card.
 */
export default function PreviewProtection({ children }: Props) {
  const [captureWarning, setCaptureWarning] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const blocked =
        key === "printscreen" ||
        event.key === "f12" ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        (event.ctrlKey && ["p", "s", "u"].includes(key));

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
        if (key === "printscreen") {
          setCaptureWarning(true);
          window.setTimeout(() => setCaptureWarning(false), 1600);
        }
      }
    };

    const onContextMenu = (event: MouseEvent) => event.preventDefault();
    const onDragStart = (event: DragEvent) => event.preventDefault();
    const onSelectStart = (event: Event) => event.preventDefault();

    window.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("contextmenu", onContextMenu, true);
    document.addEventListener("dragstart", onDragStart, true);
    document.addEventListener("selectstart", onSelectStart, true);

    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("contextmenu", onContextMenu, true);
      document.removeEventListener("dragstart", onDragStart, true);
      document.removeEventListener("selectstart", onSelectStart, true);
    };
  }, []);

  return (
    <div
      className="relative select-none"
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      style={{ WebkitTouchCallout: "none" }}
    >
      {children}
      {captureWarning && (
        <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-6 text-center text-white">
          <div className="rounded-2xl border border-white/20 bg-black/80 px-8 py-6 shadow-2xl backdrop-blur-sm">
            <div className="text-3xl">🔒</div>
            <p className="mt-2 text-lg font-bold">Preview protected</p>
            <p className="mt-1 text-sm text-white/75">Please use Download Biodata to save the PDF.</p>
          </div>
        </div>
      )}
    </div>
  );
}
