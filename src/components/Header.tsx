"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5dfd4] bg-[#faf8f5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-[#1a1625]"
          aria-label="FreeBiodataMaker home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#c4a35a] to-[#8a7340] text-[10px] font-bold text-white shadow-sm">
            BD
          </span>
          <span className="text-[15px]">
            Free<span className="text-[#c4a35a]">Biodata</span>Maker
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Main">
          <a href="#create" className="rounded-md px-3 py-1.5 text-[#6b645c] transition hover:bg-[#f0ebe3] hover:text-[#1a1625]">
            Create
          </a>
          <a href="#templates" className="rounded-md px-3 py-1.5 text-[#6b645c] transition hover:bg-[#f0ebe3] hover:text-[#1a1625]">
            Templates
          </a>
          <a href="#faq" className="rounded-md px-3 py-1.5 text-[#6b645c] transition hover:bg-[#f0ebe3] hover:text-[#1a1625]">
            FAQ
          </a>
        </nav>

        <a
          href="#create"
          className="rounded-full bg-[#1a1625] px-4 py-1.5 text-sm font-semibold text-[#e8d5a3] shadow-sm transition hover:bg-[#2a2438]"
        >
          Create
        </a>
      </div>
    </header>
  );
}
