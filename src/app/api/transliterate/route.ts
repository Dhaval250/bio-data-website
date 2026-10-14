import { NextRequest, NextResponse } from "next/server";

/** Google Input Tools transliteration codes (phonetic Roman -> native script) */
const ITC: Record<string, string> = {
  hi: "hi-t-i0-und",
  mr: "mr-t-i0-und",
  gu: "gu-t-i0-und",
  te: "te-t-i0-und",
  bn: "bn-t-i0-und",
};

const cache = new Map<string, string>();
const LATIN = /^[A-Za-z]+$/;

async function transliterateWord(word: string, to: string): Promise<string> {
  const key = `${to}:${word.toLowerCase()}`;
  const hit = cache.get(key);
  if (hit) return hit;
  try {
    const url =
      "https://inputtools.google.com/request?" +
      new URLSearchParams({
        text: word,
        itc: ITC[to],
        num: "1",
        cp: "0",
        cs: "1",
        ie: "utf-8",
        oe: "utf-8",
        app: "test",
      }).toString();
    const res = await fetch(url, { signal: AbortSignal.timeout(4000), cache: "no-store" });
    if (!res.ok) return word;
    const data = await res.json();
    const out = data?.[0] === "SUCCESS" ? String(data?.[1]?.[0]?.[1]?.[0] || "") : "";
    if (!out) return word;
    if (cache.size > 2000) cache.clear();
    cache.set(key, out);
    return out;
  } catch {
    return word;
  }
}

/**
 * POST { text, to } -> { text }
 * Converts Latin-letter words to the target script by SOUND (Upleta -> उपलेटा).
 * Digits, punctuation and words already in a native script are left untouched.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = String(body?.text ?? "").slice(0, 300);
    const to = String(body?.to ?? "");
    if (!text.trim() || !ITC[to]) return NextResponse.json({ text });

    const parts = text.split(/(\s+|[,;/()])/);
    const out = await Promise.all(
      parts.map((p) => (LATIN.test(p) ? transliterateWord(p, to) : Promise.resolve(p)))
    );
    return NextResponse.json({ text: out.join("") });
  } catch {
    return NextResponse.json({ text: "" }, { status: 200 });
  }
}
