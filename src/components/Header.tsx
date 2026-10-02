"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#faf8f5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-[#1c1917]"
          aria-label="FreeBiodataMaker home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#c4a35a] to-[#9a7b3c] text-[10px] font-bold text-white shadow-sm">
            BD
          </span>
          <span className="text-[15px]">
            Free<span className="text-[#c4a35a]">Biodata</span>Maker
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Main">
          <a href="#create" className="rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]">
            Create
          </a>
          <a href="#templates" className="rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]">
            Templates
          </a>
          <a href="#how-to" className="rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]">
            How it works
          </a>
          <a href="#faq" className="rounded-md px-3 py-1.5 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]">
            FAQ
          </a>
        </nav>

        <a
          href="#create"
          className="rounded-full bg-[#1c1917] px-4 py-1.5 text-sm font-semibold text-[#e8d5a3] shadow-sm transition hover:bg-[#0c0a09]"
        >
          Create
        </a>
      </div>
    </header>
  );
}
