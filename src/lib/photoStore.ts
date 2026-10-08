/**
 * Photos are big (data URLs from phone cameras), so they do NOT fit in
 * sessionStorage/localStorage (~5MB limit) — that was causing the whole form
 * draft to be lost on mobile reload. IndexedDB has no such small limit.
 */
const DB_NAME = "fbm-biodata";
const STORE = "kv";
const KEY = "photos";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") return reject(new Error("no idb"));
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function savePhotos(photos: string[]): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      if (photos.length) tx.objectStore(STORE).put({ photos, at: Date.now() }, KEY);
      else tx.objectStore(STORE).delete(KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    /* private mode etc. — ignore */
  }
}

const MAX_AGE_MS = 24 * 60 * 60 * 1000;

export async function loadPhotos(): Promise<string[]> {
  try {
    const db = await openDb();
    const val = await new Promise<{ photos?: string[]; at?: number } | undefined>((resolve, reject) => {
      const req = db.transaction(STORE, "readonly").objectStore(STORE).get(KEY);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (!val?.photos || (val.at && Date.now() - val.at > MAX_AGE_MS)) return [];
    return val.photos.filter(Boolean).slice(0, 3);
  } catch {
    return [];
  }
}

export async function clearPhotos(): Promise<void> {
  await savePhotos([]);
}
