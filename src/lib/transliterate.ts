import type { Language } from "./types";

/** True when the text still contains Latin words that can be converted. */
export function hasLatinWords(text: string): boolean {
  return /[A-Za-z]{2,}/.test(text);
}

/** Phonetic conversion via /api/transliterate. Returns null on any failure. */
export async function transliterate(text: string, to: Language): Promise<string | null> {
  if (to === "en" || !hasLatinWords(text)) return null;
  try {
    const res = await fetch("/api/transliterate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, to }),
    });
    const data = await res.json();
    const out = String(data?.text || "").trim();
    return out && out !== text ? out : null;
  } catch {
    return null;
  }
}
