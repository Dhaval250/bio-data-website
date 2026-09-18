"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-800/80 bg-stone-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-stone-50"
          aria-label="FreeBiodataMaker home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-600 text-[10px] font-bold text-stone-950">
            BD
          </span>
          <span className="text-[15px]">
            Free<span className="text-amber-500/90">Biodata</span>Maker
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Main">
          <a href="#create" className="rounded-md px-3 py-1.5 text-stone-400 transition hover:bg-white/5 hover:text-stone-100">
            Create
          </a>
          <a href="#templates" className="rounded-md px-3 py-1.5 text-stone-400 transition hover:bg-white/5 hover:text-stone-100">
            Templates
          </a>
          <a href="#faq" className="rounded-md px-3 py-1.5 text-stone-400 transition hover:bg-white/5 hover:text-stone-100">
            FAQ
          </a>
        </nav>

        <a
          href="#create"
          className="rounded-full bg-amber-600 px-4 py-1.5 text-sm font-semibold text-stone-950 shadow-sm transition hover:bg-amber-500"
        >
          Create
        </a>
      </div>
    </header>
  );
}
