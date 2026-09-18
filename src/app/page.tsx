import Header from "@/components/Header";
import BiodataForm from "@/components/BiodataForm";
import TemplateGallery from "@/components/TemplateGallery";

const shell = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

export default function Home() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <Header />

      {/* HERO — full bleed */}
      <section className="hero-gradient w-full text-white">
        <div className={`${shell} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Free Marriage Biodata
              <br className="hidden sm:block" />
              Maker For All Formats
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-[15px]">
              Create beautiful bio data for marriage in Marathi, Hindi, English,
              Gujarati, Telugu, Bengali and more within minutes. Free biodata
              maker available in PDF and Word formats.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#create"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-950 shadow-lg transition hover:bg-amber-400"
              >
                Create Biodata Now →
              </a>
              <a
                href="#templates"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Templates
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-400">
              <span>● 191,800+ Biodatas Created</span>
              <span>● 100% Free Basic Templates</span>
            </div>
          </div>

          <div className="relative hidden min-h-[280px] justify-center lg:flex">
            <div className="relative h-72 w-64">
              <div className="absolute left-0 top-4 h-56 w-40 rotate-[-8deg] rounded-xl bg-gradient-to-br from-red-800 to-red-950 p-3 shadow-2xl">
                <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-amber-200/30" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-white/25" />
                  <div className="h-1.5 w-3/4 rounded bg-white/20" />
                  <div className="h-1.5 w-full rounded bg-white/15" />
                </div>
              </div>
              <div className="absolute right-0 top-0 h-60 w-44 rotate-[6deg] rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 p-3 shadow-2xl">
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

      {/* CREATE FORM — full width */}
      <section id="create" className="form-section-bg w-full scroll-mt-14 py-10 sm:py-14 lg:py-16">
        <div className={shell}>
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Create Marriage Biodata
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-stone-500">
              Fill in your details, upload your photo, choose a template and download a print-ready PDF in under 5 minutes.
            </p>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-amber-600" />
          </div>
          <BiodataForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-stone-900 sm:text-2xl">
            What Our Users Say
          </h2>
          <p className="mt-1 text-center text-sm text-stone-500">
            Thousands of happy users have created their perfect marriage biodata with us.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "I created my marriage biodata in Hindi within minutes. The templates were beautiful and professional.", name: "Rahul Patel", place: "Delhi" },
              { quote: "The Marathi biodata templates were exactly what I needed. My parents were very impressed.", name: "Anjali Joshi", place: "Mumbai" },
              { quote: "As a Muslim, I found the culturally appropriate templates very helpful.", name: "Faisal Khan", place: "Hyderabad" },
            ].map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-stone-100 bg-stone-50 p-5">
                <div className="mb-2 text-amber-500">★★★★★</div>
                <p className="text-sm leading-relaxed text-stone-600">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold text-stone-900">
                  {t.name} <span className="font-normal text-stone-400">· {t.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="w-full bg-stone-50 py-12">
        <div className={`${shell} text-center`}>
          <h2 className="text-xl font-bold text-stone-900">Create Biodata in Your Language</h2>
          <p className="mt-1 text-sm text-stone-500">Choose your language and create a beautiful marriage biodata in minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["मराठी", "हिंदी", "ગુજરાતી", "తెలుగు", "বাংলা", "English"].map((l) => (
              <a key={l} href="#create" className="rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 shadow-sm transition hover:border-amber-300 hover:shadow">
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-stone-900 sm:text-2xl">Why Choose Our Biodata Maker?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Multi-language", desc: "Marathi, Hindi, English, Gujarati, Telugu, Bengali and more." },
              { title: "Beautiful Templates", desc: "Professionally designed templates that make your biodata stand out." },
              { title: "Multiple Formats", desc: "Download PDF, Word, or image. Share digitally or print." },
              { title: "All Communities", desc: "Templates for Hindu, Muslim, Christian, Sikh, Buddhist and Jain." },
              { title: "Data Privacy", desc: "Your personal information is secure." },
              { title: "Easy Customization", desc: "Add, edit or remove sections. Create a personalized profile." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-stone-100 p-5">
                <h3 className="font-semibold text-stone-900">{f.title}</h3>
                <p className="mt-1 text-sm text-stone-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates" className="w-full scroll-mt-14 bg-stone-50 py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-stone-900 sm:text-2xl">Choose Your Perfect Template</h2>
          <p className="mt-1 text-center text-sm text-stone-500">Select from our collection of professionally designed biodata templates.</p>
          <TemplateGallery />
          <div className="mt-8 text-center">
            <a href="#create" className="inline-flex rounded-full bg-stone-900 px-6 py-2.5 text-sm font-semibold text-amber-50 transition hover:bg-stone-800">View All Templates →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full scroll-mt-14 bg-white py-12 sm:py-16">
        <div className={`${shell} max-w-3xl`}>
          <h2 className="text-center text-xl font-bold text-stone-900 sm:text-2xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {[
              ["Is your biodata maker really free?", "Yes, basic templates are completely free. Premium formats (PDF/Word) are available for a small fee."],
              ["What formats can I download?", "PDF, Word document, or high-quality image."],
              ["What languages do you support?", "English, Hindi, Marathi, Gujarati, Telugu, and Bengali."],
              ["Do I need to sign up?", "No registration required. Fill details and download directly."],
              ["Is my data secure?", "Yes. Information is processed securely and not shared with third parties."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-stone-200 bg-stone-50 open:bg-white">
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-stone-800">
                  <span className="flex items-center justify-between gap-3">
                    <span>{q}</span>
                    <span className="shrink-0 text-stone-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="border-t border-stone-100 px-5 py-3 text-sm text-stone-500">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full bleed */}
      <section className="hero-gradient w-full py-14 text-center text-white sm:py-16">
        <div className={shell}>
          <h2 className="text-2xl font-bold sm:text-3xl">Create Your Perfect Marriage Biodata Today</h2>
          <p className="mx-auto mt-2 max-w-xl text-stone-300">Join over 191,800 satisfied users who created their marriage biodata with us.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#create" className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-950 transition hover:bg-amber-400">Create Biodata Now →</a>
            <a href="#templates" className="rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Templates</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-stone-950 py-10 text-stone-400">
        <div className={`${shell} grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
          <div>
            <h3 className="font-semibold text-stone-100">Free Biodata Maker</h3>
            <p className="mt-2 text-xs leading-relaxed">Create beautiful, professional marriage biodata in minutes. Trusted by 191,800+ users across India.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-100">Languages</h4>
            <ul className="mt-2 space-y-1 text-xs">
              <li>Marathi · Hindi · Gujarati · English</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-100">Quick Links</h4>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <li><a href="#create" className="hover:text-white">Create</a></li>
              <li><a href="#templates" className="hover:text-white">Templates</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-[11px] text-stone-600">© 2026 FreeBiodataMaker.com · Not a matchmaking service</p>
      </footer>
    </div>
  );
}
