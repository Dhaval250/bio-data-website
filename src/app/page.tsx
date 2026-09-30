import Header from "@/components/Header";
import BiodataForm from "@/components/BiodataForm";
import TemplateGallery from "@/components/TemplateGallery";

const shell = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";

export default function Home() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-[#faf8f5]">
      <Header />

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
                className="inline-flex items-center gap-2 rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-bold text-[#1a1625] shadow-lg shadow-black/20 transition hover:bg-[#e8d5a3]"
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
              <div className="absolute left-0 top-4 h-56 w-40 rotate-[-8deg] rounded-xl border border-[#c4a35a]/30 bg-gradient-to-br from-[#2a2438] to-[#1a1625] p-3 shadow-2xl">
                <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-[#c4a35a]/25" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-white/15" />
                  <div className="h-1.5 w-3/4 rounded bg-white/10" />
                  <div className="h-1.5 w-full rounded bg-white/10" />
                </div>
              </div>
              <div className="absolute right-0 top-0 h-60 w-44 rotate-[6deg] rounded-xl border border-[#c4a35a]/40 bg-gradient-to-br from-[#c4a35a] to-[#8a7340] p-3 shadow-2xl">
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

      <section id="create" className="form-section-bg w-full scroll-mt-14 py-10 sm:py-14 lg:py-16">
        <div className={shell}>
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-[#1a1625] sm:text-3xl">
              Create Marriage Biodata
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6b645c]">
              Fill in your details, upload your photo, choose a template and download a print-ready PDF in under 5 minutes.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-[#c4a35a]" />
          </div>
          <BiodataForm />
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-[#1a1625] sm:text-2xl">What Our Users Say</h2>
          <p className="mt-1 text-center text-sm text-[#6b645c]">Thousands of happy users have created their perfect marriage biodata with us.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "I created my marriage biodata in Hindi within minutes. The templates were beautiful and professional.", name: "Rahul Patel", place: "Delhi" },
              { quote: "The Marathi biodata templates were exactly what I needed. My parents were very impressed.", name: "Anjali Joshi", place: "Mumbai" },
              { quote: "As a Muslim, I found the culturally appropriate templates very helpful.", name: "Faisal Khan", place: "Hyderabad" },
            ].map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-[#e5dfd4] bg-[#faf8f5] p-5">
                <div className="mb-2 text-[#c4a35a]">★★★★★</div>
                <p className="text-sm leading-relaxed text-[#6b645c]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold text-[#1a1625]">
                  {t.name} <span className="font-normal text-[#6b645c]">· {t.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f0ebe3]/60 py-12">
        <div className={`${shell} text-center`}>
          <h2 className="text-xl font-bold text-[#1a1625]">Create Biodata in Your Language</h2>
          <p className="mt-1 text-sm text-[#6b645c]">Choose your language and create a beautiful marriage biodata in minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["मराठी", "हिंदी", "ગુજરાતી", "తెలుగు", "বাংলা", "English"].map((l) => (
              <a key={l} href="#create" className="rounded-xl border border-[#e5dfd4] bg-white px-5 py-3 text-sm font-medium text-[#1a1625] shadow-sm transition hover:border-[#c4a35a] hover:shadow">
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-[#1a1625] sm:text-2xl">Why Choose Our Biodata Maker?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Multi-language", desc: "Marathi, Hindi, English, Gujarati, Telugu, Bengali and more." },
              { title: "Beautiful Templates", desc: "Professionally designed templates that make your biodata stand out." },
              { title: "Multiple Formats", desc: "Download PDF, Word, or image. Share digitally or print." },
              { title: "All Communities", desc: "Templates for Hindu, Muslim, Christian, Sikh, Buddhist and Jain." },
              { title: "Data Privacy", desc: "Your personal information is secure." },
              { title: "Easy Customization", desc: "Add, edit or remove sections. Create a personalized profile." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-[#e5dfd4] bg-[#faf8f5] p-5 transition hover:border-[#c4a35a]/50">
                <h3 className="font-semibold text-[#1a1625]">{f.title}</h3>
                <p className="mt-1 text-sm text-[#6b645c]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="w-full scroll-mt-14 bg-[#f0ebe3]/40 py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-center text-xl font-bold text-[#1a1625] sm:text-2xl">Choose Your Perfect Template</h2>
          <p className="mt-1 text-center text-sm text-[#6b645c]">Select from our collection of professionally designed biodata templates.</p>
          <TemplateGallery />
          <div className="mt-8 text-center">
            <a href="#create" className="inline-flex rounded-full bg-[#1a1625] px-6 py-2.5 text-sm font-semibold text-[#e8d5a3] transition hover:bg-[#2a2438]">
              View All Templates →
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full scroll-mt-14 bg-white py-12 sm:py-16">
        <div className={`${shell} max-w-3xl`}>
          <h2 className="text-center text-xl font-bold text-[#1a1625] sm:text-2xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {[
              ["Is your biodata maker really free?", "Yes, basic templates are completely free. Premium formats (PDF/Word) are available for a small fee."],
              ["What formats can I download?", "PDF, Word document, or high-quality image."],
              ["What languages do you support?", "English, Hindi, Marathi, Gujarati, Telugu, and Bengali."],
              ["Do I need to sign up?", "No registration required. Fill details and download directly."],
              ["Is my data secure?", "Yes. Information is processed securely and not shared with third parties."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-[#e5dfd4] bg-[#faf8f5] open:bg-white">
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-[#1a1625]">
                  <span className="flex items-center justify-between gap-3">
                    <span>{q}</span>
                    <span className="shrink-0 text-[#c4a35a] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="border-t border-[#e5dfd4] px-5 py-3 text-sm text-[#6b645c]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient w-full py-14 text-center text-white sm:py-16">
        <div className={shell}>
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to Create Your Biodata?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
            Join thousands who already made their perfect marriage biodata.
          </p>
          <div className="mt-6">
            <a href="#create" className="rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-bold text-[#1a1625] shadow-lg transition hover:bg-[#e8d5a3]">
              Create Biodata Now →
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-[#e5dfd4] bg-[#1a1625] py-10 text-white">
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
              <li><a href="#create" className="hover:text-[#c4a35a]">Create</a></li>
              <li><a href="#templates" className="hover:text-[#c4a35a]">Templates</a></li>
              <li><a href="#faq" className="hover:text-[#c4a35a]">FAQ</a></li>
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
            <p className="text-sm font-semibold text-[#c4a35a]">Legal</p>
            <ul className="mt-2 space-y-1 text-sm text-white/60">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
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
