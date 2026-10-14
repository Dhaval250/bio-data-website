import Link from "next/link";

const NAV = [
  ["#create", "Create"],
  ["#templates", "Templates"],
  ["#how-to", "How it works"],
  ["#faq", "FAQ"],
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#faf8f5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-2 px-3 sm:h-[72px] sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#1c1917]"
          aria-label="Marriage Biodata – FreeBiodataMaker home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
  src="/logo-marks.webp"
  alt=""
  width={169}
  height={112}
  fetchPriority="high"
  decoding="async"
  className="site-logo"
/>
         
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Main">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-stone-600 transition hover:bg-[#f0ebe3] hover:text-[#1c1917]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#create"
          className="shrink-0 rounded-full bg-[#1c1917] px-4 py-2 text-xs font-semibold text-[#e8d5a3] shadow-sm transition hover:bg-[#0c0a09] sm:px-5 sm:text-sm"
        >
          Create
        </a>
      </div>
    </header>
  );
}
