"use client";

import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Best-effort protection for the on-screen biodata preview.
 *
 * IMPORTANT: a web page can never fully block OS/hardware screenshots
 * (Android/iOS power+volume, Win+Shift+S, Mac Cmd+Shift+4, phone camera, etc.).
 * So this uses layers:
 *  1. Visible tiled watermark over the preview  -> any screenshot is unusable
 *  2. Content is hidden (blurred) when the tab/window loses focus or is hidden
 *     (most snipping tools / screen recorders / app-switchers trigger this)
 *  3. Blocks common shortcuts, right click, long-press save, drag, copy, print
 *  4. Clears the clipboard after PrintScreen
 *
 * The PDF download is unaffected: the watermark/blur live OUTSIDE the preview
 * card element that gets captured into the PDF.
 */

const WATERMARK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="180">
     <text x="130" y="90" text-anchor="middle" transform="rotate(-28 130 90)"
       font-family="Arial, sans-serif" font-size="20" font-weight="700"
       fill="rgba(60,60,60,0.22)">PREVIEW ONLY</text>
     <text x="130" y="114" text-anchor="middle" transform="rotate(-28 130 114)"
       font-family="Arial, sans-serif" font-size="11"
       fill="rgba(60,60,60,0.22)">Download Biodata for clean PDF</text>
   </svg>`
);

export default function PreviewProtection({ children }: Props) {
  const [hidden, setHidden] = useState(false);
  const [captureWarning, setCaptureWarning] = useState(false);

  useEffect(() => {
    const warn = () => {
      setCaptureWarning(true);
      window.setTimeout(() => setCaptureWarning(false), 1800);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isMacShot = event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key);
      const isWinSnip = (event.metaKey || event.getModifierState?.("Meta")) && event.shiftKey && key === "s";
      const blocked =
        key === "printscreen" ||
        isMacShot ||
        isWinSnip ||
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c", "s"].includes(key)) ||
        (event.ctrlKey && ["p", "s", "u"].includes(key)) ||
        (event.metaKey && ["p", "s"].includes(key));

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
        setHidden(true);
        warn();
        if (key === "printscreen") {
          try {
            void navigator.clipboard?.writeText("Preview protected");
          } catch {
            /* ignore */
          }
        }
        window.setTimeout(() => setHidden(document.visibilityState === "hidden"), 1200);
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "PrintScreen") {
        try {
          void navigator.clipboard?.writeText("Preview protected");
        } catch {
          /* ignore */
        }
        warn();
      }
    };

    // Hide content when page is not actively focused/visible (snipping tools, recorders, app switcher)
    const onVisibility = () => setHidden(document.visibilityState === "hidden");
    const onBlur = () => setHidden(true);
    const onFocus = () => setHidden(false);
    const onPageHide = () => setHidden(true);

    const stop = (event: Event) => event.preventDefault();

    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    window.addEventListener("pagehide", onPageHide);
    document.addEventListener("contextmenu", stop, true);
    document.addEventListener("dragstart", stop, true);
    document.addEventListener("selectstart", stop, true);
    document.addEventListener("copy", stop, true);
    document.addEventListener("cut", stop, true);

    // Hide preview when printing / "Save as PDF" from browser menu
    const onBeforePrint = () => setHidden(true);
    const onAfterPrint = () => setHidden(document.visibilityState === "hidden");
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("keyup", onKeyUp, true);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("pagehide", onPageHide);
      document.removeEventListener("contextmenu", stop, true);
      document.removeEventListener("dragstart", stop, true);
      document.removeEventListener("selectstart", stop, true);
      document.removeEventListener("copy", stop, true);
      document.removeEventListener("cut", stop, true);
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return (
    <div
      className="preview-protected relative select-none"
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <style>{`
        @media print { .preview-protected { display: none !important; } }
        .preview-protected img { -webkit-user-drag: none; -webkit-touch-callout: none; pointer-events: none; }
      `}</style>

      <div
        style={{
          filter: hidden ? "blur(28px) brightness(0.6)" : "none",
          transition: "filter 0.05s linear",
        }}
      >
        {children}
      </div>

      {/* Watermark: sits above the preview (outside the captured card) so screenshots are marked */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${WATERMARK_SVG}")`,
          backgroundRepeat: "repeat",
        }}
      />

      {(hidden || captureWarning) && (
        <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 text-center text-white">
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
