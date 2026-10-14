import type { Language } from "./types";

/**
 * Deterministic translations for COMMON short answers (religion, diet, rashi, yes/no ...).
 * Free machine-translation APIs return garbage for 1-2 word values and cannot translate
 * names/places at all, so anything NOT in this list is left exactly as the user typed it.
 */
type Entry = { en: string; hi: string; mr: string; gu: string; te: string; bn: string; alt?: string[] };

const E: Entry[] = [
  { en: "Yes", hi: "हाँ", mr: "होय", gu: "હા", te: "అవును", bn: "হ্যাঁ" },
  { en: "No", hi: "नहीं", mr: "नाही", gu: "ના", te: "కాదు", bn: "না" },
  { en: "None", hi: "कोई नहीं", mr: "काहीही नाही", gu: "કંઈ નહીં", te: "ఏదీ లేదు", bn: "কিছু নেই", alt: ["nothing", "nil", "na", "n/a", "not applicable"] },
  { en: "Hindu", hi: "हिंदू", mr: "हिंदू", gu: "હિંદુ", te: "హిందూ", bn: "হিন্দু" },
  { en: "Muslim", hi: "मुस्लिम", mr: "मुस्लिम", gu: "મુસ્લિમ", te: "ముస్లిం", bn: "মুসলিম" },
  { en: "Christian", hi: "ईसाई", mr: "ख्रिश्चन", gu: "ખ્રિસ્તી", te: "క్రైస్తవ", bn: "খ্রিস্টান" },
  { en: "Sikh", hi: "सिख", mr: "शीख", gu: "શીખ", te: "సిక్కు", bn: "শিখ" },
  { en: "Jain", hi: "जैन", mr: "जैन", gu: "જૈન", te: "జైన", bn: "জৈন" },
  { en: "Buddhist", hi: "बौद्ध", mr: "बौद्ध", gu: "બૌદ્ધ", te: "బౌద్ధ", bn: "বৌদ্ধ" },
  { en: "Vegetarian", hi: "शाकाहारी", mr: "शाकाहारी", gu: "શાકાહારી", te: "శాకాహారి", bn: "নিরামিষ", alt: ["veg", "pure veg", "pure vegetarian"] },
  { en: "Non-Vegetarian", hi: "मांसाहारी", mr: "मांसाहारी", gu: "માંસાહારી", te: "మాంసాహారి", bn: "আমিষ", alt: ["non vegetarian", "non veg", "nonveg"] },
  { en: "Farmer", hi: "किसान", mr: "शेतकरी", gu: "ખેડૂત", te: "రైతు", bn: "কৃষক", alt: ["farmers", "farming", "agriculture"] },
  { en: "Housewife", hi: "गृहिणी", mr: "गृहिणी", gu: "ગૃહિણી", te: "గృహిణి", bn: "গৃহিণী", alt: ["house wife", "homemaker", "home maker"] },
  { en: "Business", hi: "व्यवसाय", mr: "व्यवसाय", gu: "વ્યવસાય", te: "వ్యాపారం", bn: "ব্যবসা", alt: ["businessman", "own business"] },
  { en: "Service", hi: "नौकरी", mr: "नोकरी", gu: "નોકરી", te: "ఉద్యోగం", bn: "চাকরি", alt: ["job", "private job"] },
  { en: "Government Job", hi: "सरकारी नौकरी", mr: "सरकारी नोकरी", gu: "સરકારી નોકરી", te: "ప్రభుత్వ ఉద్యోగం", bn: "সরকারি চাকরি", alt: ["govt job", "government service"] },
  { en: "Teacher", hi: "शिक्षक", mr: "शिक्षक", gu: "શિક્ષક", te: "ఉపాధ్యాయుడు", bn: "শিক্ষক" },
  { en: "Doctor", hi: "डॉक्टर", mr: "डॉक्टर", gu: "ડૉક્ટર", te: "వైద్యుడు", bn: "ডাক্তার" },
  { en: "Engineer", hi: "इंजीनियर", mr: "इंजिनिअर", gu: "એન્જિનિયર", te: "ఇంజనీర్", bn: "ইঞ্জিনিয়ার" },
  { en: "Software Engineer", hi: "सॉफ्टवेयर इंजीनियर", mr: "सॉफ्टवेअर इंजिनिअर", gu: "સોફ્ટવેર એન્જિનિયર", te: "సాఫ్ట్‌వేర్ ఇంజనీర్", bn: "সফটওয়্যার ইঞ্জিনিয়ার" },
  { en: "Unmarried", hi: "अविवाहित", mr: "अविवाहित", gu: "અપરિણીત", te: "అవివాహితుడు", bn: "অবিবাহিত", alt: ["single", "never married"] },
  { en: "Divorced", hi: "तलाकशुदा", mr: "घटस्फोटित", gu: "છૂટાછેડા લીધેલ", te: "విడాకులు తీసుకున్న", bn: "বিবাহবিচ্ছিন্ন" },
  { en: "B.Com", hi: "बी.कॉम.", mr: "बी.कॉम.", gu: "બી.કોમ.", te: "బి.కామ్.", bn: "বি.কম." , alt: ["bcom"] },
  { en: "B.Sc", hi: "बी.एस.सी.", mr: "बी.एस्सी.", gu: "બી.એસસી.", te: "బి.ఎస్సీ.", bn: "বি.এসসি.", alt: ["bsc"] },
  { en: "B.A", hi: "बी.ए.", mr: "बी.ए.", gu: "બી.એ.", te: "బి.ఎ.", bn: "বি.এ.", alt: ["ba"] },
  { en: "B.Tech", hi: "बी.टेक", mr: "बी.टेक", gu: "બી.ટેક", te: "బి.టెక్", bn: "বি.টেক", alt: ["btech"] },
  { en: "MBA", hi: "एम.बी.ए.", mr: "एम.बी.ए.", gu: "એમ.બી.એ.", te: "ఎం.బి.ఎ.", bn: "এম.বি.এ." },
  // Rashi (moon sign) – accepts English, Sanskrit/romanised names; a trailing "rashi" is ignored
  { en: "Aries", hi: "मेष", mr: "मेष", gu: "મેષ", te: "మేషం", bn: "মেষ", alt: ["mesh", "mesha"] },
  { en: "Taurus", hi: "वृषभ", mr: "वृषभ", gu: "વૃષભ", te: "వృషభం", bn: "বৃষ", alt: ["vrishabh", "vrushabh", "vrishabha", "rishabh"] },
  { en: "Gemini", hi: "मिथुन", mr: "मिथुन", gu: "મિથુન", te: "మిథునం", bn: "মিথুন", alt: ["mithun", "mithuna"] },
  { en: "Cancer", hi: "कर्क", mr: "कर्क", gu: "કર્ક", te: "కర్కాటకం", bn: "কর্কট", alt: ["kark", "karka", "karak"] },
  { en: "Leo", hi: "सिंह", mr: "सिंह", gu: "સિંહ", te: "సింహం", bn: "সিংহ", alt: ["simha", "singh", "sinh"] },
  { en: "Virgo", hi: "कन्या", mr: "कन्या", gu: "કન્યા", te: "కన్య", bn: "কন্যা", alt: ["kanya"] },
  { en: "Libra", hi: "तुला", mr: "तूळ", gu: "તુલા", te: "తుల", bn: "তুলা", alt: ["tula", "tul"] },
  { en: "Scorpio", hi: "वृश्चिक", mr: "वृश्चिक", gu: "વૃશ્ચિક", te: "వృశ్చికం", bn: "বৃশ্চিক", alt: ["vrishchik", "vrushchik", "vrischik", "vruschik"] },
  { en: "Sagittarius", hi: "धनु", mr: "धनु", gu: "ધન", te: "ధనుస్సు", bn: "ধনু", alt: ["dhanu", "dhan"] },
  { en: "Capricorn", hi: "मकर", mr: "मकर", gu: "મકર", te: "మకరం", bn: "মকর", alt: ["makar"] },
  { en: "Aquarius", hi: "कुंभ", mr: "कुंभ", gu: "કુંભ", te: "కుంభం", bn: "কুম্ভ", alt: ["kumbh", "kumbha"] },
  { en: "Pisces", hi: "मीन", mr: "मीन", gu: "મીન", te: "మీనం", bn: "মীন", alt: ["meen", "min", "mina"] },
];

const LANGS: Language[] = ["en", "hi", "mr", "gu", "te", "bn"];

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.\-_']/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*(rashi|rasi|raashi|राशि)$/, "")
    .trim();
}

const INDEX = new Map<string, Entry>();
for (const e of E) {
  for (const l of LANGS) INDEX.set(norm(e[l]), e);
  for (const a of e.alt || []) INDEX.set(norm(a), e);
}

/** "B positive" / "AB negative" / "o+" -> "B+" / "AB-" / "O+" (same in every language) */
function bloodGroup(text: string): string | null {
  const m = text.trim().match(/^(ab|a|b|o)\s*(\+|-|positive|negative|pos|neg|ve\+|ve-)?$/i);
  if (!m || !m[2]) return null;
  const sign = /^\+|pos/i.test(m[2]) ? "+" : "-";
  return `${m[1].toUpperCase()}${sign}`;
}

/**
 * Returns the translated value if it is a known common answer (in ANY supported
 * language), the normalised blood group, or null when it should be left untouched.
 */
export function translateKnown(text: string, to: Language): string | null {
  const v = (text || "").trim();
  if (!v) return null;
  const bg = bloodGroup(v);
  if (bg) return bg === v ? null : bg;
  const hit = INDEX.get(norm(v));
  if (!hit) return null;
  const out = hit[to];
  return out === v ? null : out;
}
