import Header from "@/components/Header";
import BiodataForm from "@/components/BiodataForm";
import TemplateGallery from "@/components/TemplateGallery";

const shell = "mx-auto w-full max-w-[1400px] px-3 sm:px-6 lg:px-10";

const HOW_STEPS = [
  {
    n: "1",
    title: "Choose a Template",
    desc: "Select from our variety of culturally appropriate and professionally designed templates.",
  },
  {
    n: "2",
    title: "Fill Your Details",
    desc: "Enter your personal information, family details, education, and preferences in our simple form.",
  },
  {
    n: "3",
    title: "Download & Share",
    desc: "Preview, download, and share your biodata in PDF, Word, or image format.",
  },
];

const COMMUNITIES = [
  {
    name: "Hindu",
    desc: "Includes gotra, rashi, nakshatra and manglik fields alongside personal and family details.",
  },
  {
    name: "Muslim",
    desc: "Covers family background, sect and religious details alongside education and profession.",
  },
  {
    name: "Christian",
    desc: "Straightforward personal, family and career sections without astrology fields.",
  },
  {
    name: "Sikh",
    desc: "Includes family gotra and background details alongside personal and career information.",
  },
  {
    name: "Buddhist",
    desc: "Clean personal and family sections suited to Buddhist community conventions.",
  },
  {
    name: "Jain",
    desc: "Includes gotra and family background fields alongside personal and career details.",
  },
];

const INCLUDE_FIELDS = [
  {
    title: "Rashi (Moon Sign)",
    desc: "Your Vedic astrology moon sign, used by many families for horoscope matching. For example: Simha (Leo). Leave this blank if your family doesn't follow astrology.",
  },
  {
    title: "Nakshatra",
    desc: "One of the 27 lunar constellations in Vedic astrology, often used alongside Rashi for compatibility matching. For example: Rohini.",
  },
  {
    title: "Gotra",
    desc: "Your family's ancestral lineage, common in Hindu, Sikh and Jain biodata. Some families check that both sides have different gotras before proceeding. For example: Kashyap.",
  },
  {
    title: "Manglik Status",
    desc: "Whether Mars (Mangal) is placed in a specific position in your birth chart. Many families match Manglik status between prospective partners. Options: Yes, No, or Anshik (partial).",
  },
  {
    title: "Complexion",
    desc: "A physical detail some biodata formats include, ranging from very fair to dark. It's entirely optional to add.",
  },
  {
    title: "Family Details",
    desc: "Parents' names and occupations, and the number of married and unmarried siblings. Helps the other family understand your background and support system.",
  },
];

const TIPS = [
  {
    title: "The Best Muslim Biodata Maker: Tools to Create Your Perfect Profile",
    desc: "Looking to find the best Muslim biodata maker available online? Here's a roundup of the top tools to help you create a stunning profile.",
  },
  {
    title: "Marriage Biodata Format: Tips, Tricks, and Templates",
    desc: "Looking to find the best marriage biodata format available online? Here's a roundup of the top tools to help you create a stunning biodata.",
  },
  {
    title: "How to Create Perfect Marriage Biodata Photo Poses for Boys",
    desc: "It is essential to choose the right poses that showcase your best features and create a positive first impression.",
  },
];

export default function Home() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-[#faf8f5]">
      <Header />

      {/* Hero */}
      <section className="hero-gradient w-full text-white">
        <div className={`${shell} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c4a35a]">
              Premium Marriage Biodata
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Free Marriage Biodata
              <br className="hidden sm:block" />
              Maker For All Formats
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
              Create beautiful bio data for marriage in Marathi, Hindi, English,
              Gujarati, Telugu, Bengali and more within minutes. Free biodata
              maker available in PDF and Word formats.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#create"
                className="inline-flex items-center gap-2 rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-bold text-[#1c1917] shadow-lg shadow-black/20 transition hover:bg-[#e8d5a3]"
              >
                Create Biodata Now →
              </a>
              <a
                href="#templates"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c4a35a] hover:bg-white/5"
              >
                View Templates
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/50">
              <span>● 191,800+ Biodatas Created</span>
              <span>● 100% Free Basic Templates</span>
            </div>
          </div>

          <div className="relative hidden min-h-[280px] justify-center lg:flex">
            <div className="relative h-72 w-64">
              <div className="absolute left-0 top-4 h-56 w-40 rotate-[-8deg] rounded-xl border border-[#c4a35a]/30 bg-gradient-to-br from-[#2a2438] to-[#1c1917] p-3 shadow-2xl">
                <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-[#c4a35a]/25" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-white/15" />
                  <div className="h-1.5 w-3/4 rounded bg-white/10" />
                  <div className="h-1.5 w-full rounded bg-white/10" />
                </div>
              </div>
              <div className="absolute right-0 top-0 h-60 w-44 rotate-[6deg] rounded-xl border border-[#c4a35a]/40 bg-gradient-to-br from-[#c4a35a] to-[#9a7b3c] p-3 shadow-2xl">
                <div className="mx-auto mb-2 h-14 w-14 rounded-full bg-white/25" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-white/35" />
                  <div className="h-1.5 w-4/5 rounded bg-white/25" />
                  <div className="h-1.5 w-full rounded bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create form */}
      <section id="create" className="form-section-bg w-full scroll-mt-14 py-10 sm:py-14 lg:py-16">
        <div className={shell}>
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-[#1c1917] sm:text-3xl">
              Create Marriage Biodata
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#78716c]">
              Fill in your details, upload your photo, choose a template and download a print-ready PDF in under 5 minutes.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-[#c4a35a]" />
          </div>
          <BiodataForm />
        </div>
      </section>

      {/* How to Create — 3 steps */}
      <section id="how-to" className="w-full bg-[#f5f0e8] py-14 sm:py-20">
        <div className={shell}>
          <h2 className="text-center text-2xl font-bold text-[#1c1917] sm:text-3xl">
            How to Create Your Marriage Biodata
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-stone-600 sm:text-base">
            Creating your perfect marriage biodata is simple with our easy-to-use platform. Follow these steps:
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {HOW_STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1c1917] text-2xl font-bold text-[#e8d5a3] shadow-lg shadow-black/20">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#1c1917]">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#create"
              className="inline-flex items-center gap-2 rounded-xl bg-[#facc15] px-7 py-3.5 text-sm font-bold text-[#1c1917] shadow-md transition hover:bg-[#fde047]"
            >
              Create Your Biodata Now →
            </a>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section id="communities" className="w-full bg-white py-14 sm:py-20">
        <div className={shell}>
          <h2 className="text-center text-2xl font-bold text-[#1c1917] sm:text-3xl">
            Biodata For All Communities
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-stone-600 sm:text-base">
            We offer specialized biodata formats that respect cultural traditions and preferences for various communities.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {COMMUNITIES.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm transition hover:border-[#e8d5a3] hover:shadow-md"
              >
                <h3 className="text-base font-bold text-[#1c1917]">{c.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section id="what-to-include" className="w-full bg-[#f5f0e8] py-14 sm:py-20">
        <div className={shell}>
          <h2 className="text-center text-2xl font-bold text-[#1c1917] sm:text-3xl">
            What to Include in Your Marriage Biodata
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-stone-600 sm:text-base">
            Not sure what some of these fields mean? Here&apos;s a quick guide to the personal and cultural details commonly included in a marriage biodata.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDE_FIELDS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-base font-bold text-[#1c1917]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="w-full bg-white py-12">
        <div className={`${shell} text-center`}>
          <h2 className="text-xl font-bold text-[#1c1917] sm:text-2xl">Create Biodata in Your Language</h2>
          <p className="mt-1 text-sm text-[#78716c]">Choose your language and create a beautiful marriage biodata in minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["मराठी", "हिंदी", "ગુજરાતી", "తెలుగు", "বাংলা", "English"].map((l) => (
              <a
                key={l}
                href="#create"
                className="rounded-xl border border-[#e7e5e4] bg-[#faf8f5] px-5 py-3 text-sm font-medium text-[#1c1917] shadow-sm transition hover:border-[#c4a35a] hover:shadow"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="w-full scroll-mt-14 bg-gradient-to-b from-[#faf6eb] via-[#f0ebe3]/50 to-white py-16 sm:py-20">
        <div className={shell}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4a35a]">Templates</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1c1917] sm:text-3xl lg:text-4xl">
              Choose Your Perfect Template
            </h2>
            <p className="mt-3 text-sm text-[#78716c] sm:text-base">
              Browse full designs below. Click any template to start the form — you can change it again at the bottom after filling your details.
            </p>
          </div>
          <TemplateGallery />
          <div className="mt-10 text-center">
            <a
              href="#create"
              className="inline-flex items-center gap-2 rounded-full bg-[#1c1917] px-8 py-3 text-sm font-semibold text-[#e8d5a3] shadow-lg transition hover:bg-[#2a2438]"
            >
              Fill form &amp; select template →
            </a>
          </div>
        </div>
      </section>

      {/* Tips & Guides */}
      <section id="tips" className="w-full bg-white py-14 sm:py-20">
        <div className={shell}>
          <h2 className="text-center text-2xl font-bold text-[#1c1917] sm:text-3xl">
            Biodata Tips &amp; Guides
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-stone-600 sm:text-base">
            Practical advice for creating a marriage biodata that makes a great first impression.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIPS.map((tip) => (
              <article
                key={tip.title}
                className="flex flex-col rounded-2xl border border-stone-200 bg-[#faf6eb] p-6 transition hover:border-[#e8d5a3] hover:shadow-md"
              >
                <h3 className="text-base font-bold leading-snug text-[#1c1917]">{tip.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{tip.desc}</p>
                <a href="#create" className="mt-4 text-sm font-semibold text-[#c4a35a] hover:underline">
                  Read More →
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#tips" className="text-sm font-semibold text-[#c4a35a] hover:underline">
              View All Articles →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-[#faf8f5] py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-[#1c1917] sm:text-2xl">What Our Users Say</h2>
          <p className="mt-1 text-center text-sm text-[#78716c]">Thousands of happy users have created their perfect marriage biodata with us.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "I created my marriage biodata in Hindi within minutes. The templates were beautiful and professional.",
                name: "Rahul Patel",
                place: "Delhi",
              },
              {
                quote: "The Marathi biodata templates were exactly what I needed. My parents were very impressed.",
                name: "Anjali Joshi",
                place: "Mumbai",
              },
              {
                quote: "As a Muslim, I found the culturally appropriate templates very helpful.",
                name: "Faisal Khan",
                place: "Hyderabad",
              },
            ].map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-[#e7e5e4] bg-white p-5">
                <div className="mb-2 text-[#c4a35a]">★★★★★</div>
                <p className="text-sm leading-relaxed text-[#78716c]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold text-[#1c1917]">
                  {t.name} <span className="font-normal text-[#78716c]">· {t.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full scroll-mt-14 bg-white py-12 sm:py-16">
        <div className={`${shell} max-w-3xl`}>
          <h2 className="text-center text-xl font-bold text-[#1c1917] sm:text-2xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {[
              ["Is your biodata maker really free?", "Yes, basic templates are completely free. Premium formats (PDF/Word) are available for a small fee."],
              ["What formats can I download?", "PDF, Word document, or high-quality image."],
              ["What languages do you support?", "English, Hindi, Marathi, Gujarati, Telugu, and Bengali."],
              ["Do I need to sign up?", "No registration required. Fill details and download directly."],
              ["Is my data secure?", "Yes. Information is processed securely and not shared with third parties."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-[#e7e5e4] bg-[#faf8f5] open:bg-white">
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-[#1c1917]">
                  <span className="flex items-center justify-between gap-3">
                    <span>{q}</span>
                    <span className="shrink-0 text-[#c4a35a] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="border-t border-[#e7e5e4] px-5 py-3 text-sm text-[#78716c]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support-home" className="w-full bg-[#faf8f5] py-12 sm:py-16">
        <div className={`${shell} flex justify-center`}>
          <div className="w-full max-w-lg rounded-2xl border border-[#f5d78e] bg-gradient-to-b from-[#fffbf0] to-[#fff8e7] p-6 shadow-sm sm:p-8">
            <h2 className="text-center text-xl font-bold text-[#1c1917] sm:text-2xl">
              How can we support you?
            </h2>
            <p className="mt-1 text-center text-sm text-stone-600">
              किसी भी सवाल या समस्या के लिए हमसे संपर्क करें।
            </p>
            <div className="mt-5 space-y-3">
              <a
                href="mailto:Pankajahir526@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-[#f0e6c8] bg-white px-4 py-3.5 shadow-sm transition hover:border-[#e67e22]/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff3e0] text-xl">
                  ✉️
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-stone-500">Email Support:</p>
                  <p className="truncate text-sm font-semibold text-[#e67e22] sm:text-base">
                    Pankajahir526@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/919773424517"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[#f0e6c8] bg-white px-4 py-3.5 shadow-sm transition hover:border-[#25d366]/50 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef] text-xl">
                  💬
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-stone-500">WhatsApp Support:</p>
                  <p className="text-sm font-semibold text-[#25d366] sm:text-base">
                    +91 9773424517
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Purple CTA banner */}
      <section className="w-full bg-gradient-to-r from-[#0c0a09] via-[#1c1917] to-[#292524] py-16 text-center text-white sm:py-20">
        <div className={shell}>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Create Your Perfect Marriage Biodata Today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            Join over 191,800 satisfied users who created their marriage biodata with us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#create"
              className="inline-flex items-center gap-2 rounded-xl bg-[#facc15] px-7 py-3.5 text-sm font-bold text-[#1c1917] shadow-lg transition hover:bg-[#fde047]"
            >
              Create Biodata Now →
            </a>
            <a
              href="#templates"
              className="inline-flex items-center rounded-xl border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Biodata Templates
            </a>
          </div>
          <div className="mx-auto mt-10 max-w-2xl border-t border-white/25 pt-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90 sm:gap-10">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#facc15]">✓</span> 100% Free Basic Templates
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#facc15]">♥</span> Used by 191,800+ People
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#facc15]">◎</span> Multiple Languages
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#e7e5e4] bg-[#1c1917] py-10 text-white">
        <div className={`${shell} grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
          <div>
            <p className="font-semibold">
              Free<span className="text-[#c4a35a]">Biodata</span>Maker
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/50">
              Free online marriage biodata maker for India. Create beautiful biodata in minutes.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#c4a35a]">Product</p>
            <ul className="mt-2 space-y-1 text-sm text-white/60">
              <li>
                <a href="#create" className="hover:text-[#c4a35a]">
                  Create
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[#c4a35a]">
                  Templates
                </a>
              </li>
              <li>
                <a href="#how-to" className="hover:text-[#c4a35a]">
                  How it works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#c4a35a]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#c4a35a]">Languages</p>
            <ul className="mt-2 space-y-1 text-sm text-white/60">
              <li>English · हिंदी · मराठी</li>
              <li>ગુજરાતી · తెలుగు · বাংলা</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#c4a35a]">Support</p>
            <ul className="mt-2 space-y-1 text-sm text-white/60">
              <li>
                <a href="mailto:Pankajahir526@gmail.com" className="hover:text-[#c4a35a]">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919773424517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c4a35a]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#support-home" className="hover:text-[#c4a35a]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} FreeBiodataMaker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
