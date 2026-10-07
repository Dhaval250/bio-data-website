import type { BiodataFormData } from "@/lib/types";

export type Section = "personal" | "family" | "contact";
export type KeyedRow = { key: string; label: string; value?: string };
export type Row = [string, string | undefined];

/**
 * Merge built-in rows with the user's custom rows for one section and sort them
 * in the order the user arranged them in the form (data.fieldOrder).
 * Rows missing from fieldOrder keep their default position, after the ordered ones.
 */
export function orderedRows(
  data: BiodataFormData,
  section: Section,
  builtIns: KeyedRow[]
): Row[] {
  const customs: KeyedRow[] = (data.customFields || [])
    .filter((f) => f.label?.trim() && f.value?.trim() && (f.section || "personal") === section)
    .map((f) => ({ key: `custom:${f.id}`, label: f.label, value: f.value }));

  const all = [...builtIns, ...customs];
  const order = data.fieldOrder?.[section];
  if (!order || !order.length) return all.map((r): Row => [r.label, r.value]);

  const idx = new Map(order.map((k, i) => [k, i] as const));
  return all
    .map((r, i) => ({ r, i }))
    .sort((a, b) => (idx.get(a.r.key) ?? 1e6 + a.i) - (idx.get(b.r.key) ?? 1e6 + b.i))
    .map(({ r }): Row => [r.label, r.value]);
}
