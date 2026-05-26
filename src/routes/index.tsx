import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IdeaSpark — Online Ideathon by HackerRank Campus Crew, IIT Madras" },
      { name: "description", content: "IdeaSpark: an online Ideathon hosted by the HackerRank Campus Crew at IIT Madras. Build ideas that solve real-world problems." },
      { property: "og:title", content: "IdeaSpark — IIT Madras Ideathon" },
      { property: "og:description", content: "Online Ideathon by HackerRank Campus Crew, IIT Madras." },
    ],
  }),
  component: Index,
});

const HACKERRANK_URL = "https://www.hackerrank.com/ideaspark-2026";
const GOOGLE_FORM_URL = "https://forms.gle/eHVFyfgT5VWs24kg7";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#about", "About"], ["#how", "How"], ["#themes", "Themes"], ["#confirmation", "Confirm"], ["#timeline", "Timeline"],
    ["#prizes", "Prizes"], ["#faq", "FAQ"],
  ];
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between font-sans-ui gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-2xl sm:text-3xl tracking-tight">
          <SparkMark className="w-6 h-6 sm:w-7 sm:h-7 text-saffron" />
          <span>IdeaSpark</span>
        </a>
        <div className="hidden md:flex gap-10 text-base sm:text-lg uppercase tracking-widest font-medium">
          {links.map(([h, l]) => (
            <a key={h} href={h} className="hover:text-saffron transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={HACKERRANK_URL} target="_blank" rel="noreferrer"
            className="bg-ink text-cream px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-widest btn-tactile">
            Register
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden border border-ink p-2.5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M3 6 H21 M3 12 H21 M3 18 H21" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/15 bg-cream">
          <div className="flex flex-col px-4 py-6 gap-2 font-sans-ui uppercase tracking-widest text-base">
            {links.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 border-b border-ink/10">{l}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function SparkMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2 L12 8 M12 16 L12 22 M2 12 L8 12 M16 12 L22 12 M5 5 L9 9 M15 15 L19 19 M19 5 L15 9 M9 15 L5 19" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const KEYWORDS = ["INNOVATE", "IDEATE", "PITCH"];

function Marquee() {
  const row = [...KEYWORDS, ...KEYWORDS];
  return (
    <div className="overflow-hidden border-y border-ink/30 bg-ink text-cream">
      <div className="marquee flex gap-32 sm:gap-48 py-3 whitespace-nowrap font-display text-lg sm:text-2xl tracking-wider">
        {row.concat(row).map((k, i) => (
          <span key={i}>
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8 md:pt-24 md:pb-16">


        <div className="grid md:grid-cols-12 gap-6 items-end">
          <h1 className="md:col-span-9 font-display font-black tracking-tight text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5rem] xl:text-[8.5rem] leading-[0.85] text-ink whitespace-nowrap">
            Idea<span className="text-saffron">Spark</span>
            <span className="inline-block align-top text-amber">.</span>
          </h1>
          <div className="md:col-span-3 md:pb-6">
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl leading-snug">
              Build ideas that solve <span className="underline decoration-saffron decoration-4 underline-offset-4">real-world</span> problems.
            </p>
          </div>
        </div>

        <div className="rule my-8 md:my-10" />

        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed">
            An Ideathon for the curious, the relentless, and the
            quietly ambitious. Pitch the idea you can&apos;t stop thinking about —
            and let it find its sparring partners.
          </div>
          <div className="md:col-span-4 font-sans-ui">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">When</div>
            <div className="font-display text-2xl sm:text-3xl">27 – 31 May 2026</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-4 sm:mt-6 mb-2">Where</div>
            <div className="font-display text-2xl sm:text-3xl">Online · HackerRank</div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3">
            <a href={HACKERRANK_URL} target="_blank" rel="noreferrer"
              className="bg-saffron text-cream text-center font-sans-ui uppercase tracking-widest text-xs sm:text-sm py-4 btn-tactile border border-ink">
              Register on HackerRank →
            </a>
            <a href="#about"
              className="border border-ink text-ink text-center font-sans-ui uppercase tracking-widest text-xs sm:text-sm py-4 btn-tactile">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-4">
          <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-saffron mb-4">§ 01 · About</div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl text-ink">What&apos;s an<br />Ideathon?</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed space-y-5">
          <p>
            Not a hackathon. Not a pitch competition. An <em>Ideathon</em> is
            the space between — where the idea matters more than the polish,
            and the argument for it matters most of all.
          </p>
          <p>
            Over a single online weekend, you&apos;ll respond to a problem
            statement, sketch a solution, and submit a focused pitch.
            No frameworks worship. No demo theatre. Just clear thinking,
            shipped on time.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 font-sans-ui">
            {[
              ["27 May", "to 31 May"],
              ["1–4", "Team size"],
              ["₹0", "Entry fee"],
            ].map(([n, l]) => (
              <div key={l} className="border-t border-ink pt-3">
                <div className="font-display text-3xl sm:text-5xl text-forest">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Register & Pitch", d: "Sign up with your team, choose your theme, and submit a concise concept pitch deck." },
  { n: "02", t: "Shortlist", d: "Judges review pitch decks. Only the top selected ideas advance to the building phase." },
  { n: "03", t: "Build & Demo", d: "Shortlisted teams build working prototypes and submit a 3-minute video demo." },
  { n: "04", t: "Final Results", d: "Expert panel evaluates the final prototypes. Winners and certificates announced live." },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-ink text-cream grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 md:mb-16 flex-wrap gap-6">
          <div>
            <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-amber mb-4">§ 02 · How it works</div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">Four moves.<br />One weekend.</h2>
          </div>
          <p className="font-serif italic max-w-sm opacity-80 text-base sm:text-lg">
            No fluff. The format is built to reward clarity over volume.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-cream/20 border border-cream/20">
          {STEPS.map(s => (
            <div key={s.n} className="bg-ink p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 min-h-[220px] sm:min-h-[280px]">
              <div className="font-display text-[5rem] sm:text-[7rem] leading-none text-amber">{s.n}</div>
              <div>
                <div className="font-display text-2xl sm:text-3xl uppercase tracking-wider">{s.t}</div>
                <p className="font-serif mt-3 opacity-80 leading-relaxed text-base sm:text-lg">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const THEMES = [
  { title: "AI & Automation", desc: "Build intelligent systems, agentic workflows, and automated solutions to unlock new possibilities." },
  { title: "Sustainability", desc: "Create ideas that address climate change, renewable energy, eco-friendly tech, or waste management." },
  { title: "Healthcare", desc: "Design systems for remote patient care, diagnostic intelligence, medical accessibility, or wellness tracking." },
  { title: "FinTech", desc: "Reimagine personal finance, decentralized ledgers, secure payments, or automated wealth management." },
  { title: "Smart India", desc: "Solve unique localized challenges for rural development, urban transit, and public administration." },
  { title: "Accessibility", desc: "Ensure digital and physical spaces are fully inclusive for individuals with diverse physical abilities." },
  { title: "Open Innovation", desc: "Have a brilliant concept that breaks traditional domain barriers? Pitch your wild card idea here." },
];

function Themes() {
  return (
    <section id="themes" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-ink/15">
      <div className="grid md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-4">
          <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-saffron mb-4">§ 03 · Themes</div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl text-ink">Explore<br />the domains.</h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {THEMES.map(t => (
              <div key={t.title} className="bg-cream border border-ink/20 p-6 sm:p-8 flex flex-col gap-3 hover:border-saffron hover:-translate-y-1 transition-all duration-300">
                <div className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-saffron">{t.title}</div>
                <p className="font-serif text-base sm:text-lg leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConfirmRegistration() {
  return (
    <section id="confirmation" className="bg-saffron/10 border-y border-ink/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7">
            <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-saffron mb-4">§ 04 · Mandatory Step</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-ink leading-tight">
              Confirm Your<br />Registration.
            </h2>
            <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed mt-6 text-muted-foreground">
              Registering on HackerRank is only half the battle. To officially secure your team&apos;s spot and select your theme, you <strong className="text-ink underline decoration-saffron decoration-4 underline-offset-2">must</strong> fill out the Google Confirmation Form. Unconfirmed teams will not be evaluated.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="bg-cream border border-ink p-6 sm:p-8 flex flex-col gap-4 btn-tactile">
              <div className="font-sans-ui text-xs uppercase tracking-widest text-muted-foreground">Verification Form</div>
              <div className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-ink">Google Form</div>
              <p className="font-serif text-base text-muted-foreground">
                Ensure your HackerRank team name matches the team name submitted in the Google Form.
              </p>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer"
                className="bg-ink text-cream text-center font-sans-ui uppercase tracking-widest text-xs sm:text-sm py-4 btn-tactile border border-ink mt-2">
                Fill Google Form (Mandatory) →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { date: "27 May 2026 | 10:00 AM – 11:59 PM IST", label: "Register & Pitch" },
  { date: "28 May 2026 | 5:00 PM IST", label: "Shortlist Announcement" },
  { date: "29 May 2026, 12:00 AM IST – 30 May 2026, 11:59 PM IST", label: "Build & Demo" },
  { date: "31 May 2026 | 5:00 PM – 6:00 PM IST", label: "Final Results" },
];

function Timeline() {
  return (
    <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-saffron mb-4">§ 05 · Timeline</div>
      <h2 className="font-display text-5xl sm:text-6xl md:text-8xl mb-10 md:mb-16">Key dates,<br /><span className="italic font-serif font-normal text-forest">in order.</span></h2>
      <ol className="divide-y divide-ink/30 border-y border-ink/30">
        {TIMELINE.map((t, i) => (
          <li key={i} className="grid grid-cols-12 gap-3 sm:gap-6 py-6 sm:py-8 items-baseline group">
            <div className="col-span-2 font-display text-4xl sm:text-6xl md:text-8xl text-saffron tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-10 sm:col-span-6 font-display text-xl sm:text-2xl md:text-4xl uppercase tracking-wider">
              {t.label}
            </div>
            <div className="col-span-12 sm:col-span-4 sm:text-right font-sans-ui text-xs sm:text-sm md:text-base uppercase tracking-widest text-muted-foreground">
              {t.date}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PRIZES = [
  { tier: "Gold", rank: "1st Place", color: "text-gold", note: "Gold Certificate · HackerRank feature" },
  { tier: "Silver", rank: "2nd Place", color: "text-silver", note: "Silver Certificate" },
  { tier: "Bronze", rank: "3rd Place", color: "text-bronze", note: "Bronze Certificate" },
];

function Prizes() {
  return (
    <section id="prizes" className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-16">
          <div className="md:col-span-7">
            <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-amber mb-4">§ 06 · Prizes</div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">Think bold.<br />Earn your badge of honour.</h2>
          </div>
          <p className="md:col-span-5 font-serif italic text-lg sm:text-xl md:text-2xl opacity-90">
            Every participant receives a verified Participation Certificate from
            the HackerRank Campus Crew, IIT Madras. Tiered honours for the top three.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRIZES.map((p, i) => (
            <div key={p.tier} className={`bg-cream text-ink p-6 sm:p-8 border border-ink/20 ${i === 0 ? "md:-translate-y-6" : ""}`}>
              <div className={`font-display text-6xl sm:text-7xl md:text-8xl ${p.color}`}>{p.tier}</div>
              <div className="rule my-4 sm:my-6 bg-ink" />
              <div className="font-display text-xl sm:text-2xl uppercase tracking-wider">{p.rank}</div>
              <p className="font-serif mt-3 text-muted-foreground text-base sm:text-lg">{p.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 text-center font-sans-ui text-xs sm:text-sm uppercase tracking-widest opacity-70">
          + Participation Certificate for every submitting team
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Who can participate?", a: "Open to students with a valid college ID. IIT Madras students get priority access." },
  { q: "Solo or team?", a: "Solo entries are welcome; teams may have up to four members." },
  { q: "Is there a registration fee?", a: "No. IdeaSpark is free to enter. You just need a HackerRank account." },
  { q: "What do I submit?", a: "A pitch deck (PDF, max 8 slides) and a 3-minute walkthrough video pitch link. You will be judged by the video pitch" },
  { q: "How are submissions judged?", a: "On clarity of problem, originality of idea, feasibility, and quality of pitch — in that order." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-4">
          <div className="font-sans-ui text-xs uppercase tracking-[0.25em] text-saffron mb-4">§ 07 · FAQ</div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl">Asked, &amp;<br />answered.</h2>
        </div>
        <div className="md:col-span-8">
          <ul className="border-t border-ink/30">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-b border-ink/30">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-baseline justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left"
                  >
                    <span className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-wider">{f.q}</span>
                    <span className="font-display text-2xl sm:text-3xl text-saffron shrink-0">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out font-serif text-lg sm:text-xl leading-relaxed"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 max-w-2xl text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-saffron text-cream grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">

        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">Bring the idea.<br /><span className="italic font-serif font-normal">We&apos;ll bring the room.</span></h2>
        <a href={HACKERRANK_URL} target="_blank" rel="noreferrer"
          className="inline-block mt-8 sm:mt-12 bg-ink text-cream px-6 sm:px-10 py-4 sm:py-5 font-sans-ui uppercase tracking-widest text-xs sm:text-sm btn-tactile border border-ink">
          Register on HackerRank →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-display text-2xl sm:text-3xl">
              <SparkMark className="w-6 h-6 sm:w-7 sm:h-7 text-amber" />
              IdeaSpark
            </div>
            <p className="font-serif italic mt-4 opacity-80 max-w-sm text-base sm:text-lg">
              An online Ideathon by the HackerRank Campus Crew at IIT Madras,
              BS in Data Science and Applications.
            </p>
          </div>
          <div className="md:col-span-3 font-sans-ui text-sm">
            <a href="https://linkedin.com/in/shankhabuilds" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest opacity-60 mb-3 hover:text-amber block">Contact</a>
          </div>
          <div className="md:col-span-4 font-sans-ui text-sm">
            <div className="text-xs uppercase tracking-widest opacity-60 mb-3">Follow</div>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="[INSTAGRAM HANDLE]" className="hover:text-amber">Instagram</a>
              <a href="https://www.linkedin.com/company/hackerrank-campus-crew-iitm/" target="_blank" rel="noreferrer" className="hover:text-amber">LinkedIn</a>
              <a href={HACKERRANK_URL} className="hover:text-amber">HackerRank</a>
            </div>
          </div>
        </div>
        <div className="rule bg-cream/40 my-8 md:my-10" />
        <div className="flex flex-wrap justify-between gap-3 font-sans-ui text-[10px] sm:text-xs uppercase tracking-widest opacity-60">
          <span>© {new Date().getFullYear()} IdeaSpark · IIT Madras Campus Crew</span>
          <span>Made with ❤️ by IIT Madras</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("fade-up");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Nav />
      <Hero />
      <About />
      <HowItWorks />
      <Themes />
      <ConfirmRegistration />
      <Timeline />
      <Prizes />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
