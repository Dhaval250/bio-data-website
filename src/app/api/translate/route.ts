import { NextRequest, NextResponse } from "next/server";

/** Map app language codes → MyMemory / ISO pairs */
const LANG_MAP: Record<string, string> = {
  en: "en",
  gu: "gu",
  hi: "hi",
  mr: "mr",
  te: "te",
  bn: "bn",
};

/**
 * Free translation via MyMemory (no API key required for light use).
 * POST { text, to }  →  { translated }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = String(body?.text ?? "").trim();
    const to = LANG_MAP[String(body?.to ?? "en")] || "en";
    const from = LANG_MAP[String(body?.from ?? "en")] || "en";

    if (!text) {
      return NextResponse.json({ translated: "" });
    }
    if (to === "en" && from === "en") {
      return NextResponse.json({ translated: text });
    }
    // Skip pure numbers / phone-like
    if (/^[\d\s+\-().]{3,}$/.test(text)) {
      return NextResponse.json({ translated: text });
    }

    const pair = `${from}|${to}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(pair)}`;

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { translated: text, error: `Upstream ${res.status}` },
        { status: 200 }
      );
    }

    const data = await res.json();
    const translated =
      data?.responseData?.translatedText?.trim() || text;

    // MyMemory sometimes returns same text or error messages
    if (
      translated.toLowerCase().includes("invalid") ||
      translated.toLowerCase().includes("query length")
    ) {
      return NextResponse.json({ translated: text });
    }

    return NextResponse.json({ translated });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "translate failed";
    return NextResponse.json({ translated: "", error: msg }, { status: 500 });
  }
}
