import React from "react";
import { motion } from "framer-motion";

const BRAND_NAME = "KELP";
const BRAND_SUBTITLE = "A part of Polymertrade Group";
const HERO_TITLE = "Buy and sell waste. Faster, smarter, greener.";
const HERO_COPY =
  "KELP turns a traditionally manual market into an instant digital marketplace. List material, find verified counterparties and move from waste to value without days of phone calls.";

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    arrowRight: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    leaf: (
      <svg {...common}>
        <path d="M5 21c8-2 13-8 14-17-8 1-15 6-17 14" />
        <path d="M5 21c2-5 6-9 11-12" />
      </svg>
    ),
    mapPin: (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    recycle: (
      <svg {...common}>
        <path d="m7 19 2-3H5.5a3.5 3.5 0 0 1-3-5.3L4 8" />
        <path d="m17 19-2-3h3.5a3.5 3.5 0 0 0 3-5.3L20 8" />
        <path d="M8 5h4l-2-3" />
        <path d="m12 5-2-3-2 3" />
        <path d="m16 5-2 3h4a3.5 3.5 0 0 1 3 1.8" />
      </svg>
    ),
    search: (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    upload: (
      <svg {...common}>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M20 16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

const listings = [
  {
    type: "Mixed plastic",
    quantity: "25 tonnes",
    location: "Bergen",
    status: "For sale",
    image:
      "linear-gradient(135deg, rgba(6,43,38,0.9), rgba(16,185,129,0.18)), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), transparent 10%), radial-gradient(circle at 65% 42%, rgba(255,255,255,0.35), transparent 9%), radial-gradient(circle at 42% 70%, rgba(255,255,255,0.3), transparent 8%)",
  },
  {
    type: "Clean timber",
    quantity: "200-500 tonnes",
    location: "Oslo region",
    status: "Wanted",
    image:
      "linear-gradient(135deg, rgba(92,52,22,0.85), rgba(217,119,6,0.24)), repeating-linear-gradient(35deg, rgba(255,255,255,0.28) 0 8px, transparent 8px 18px)",
  },
  {
    type: "Metal scrap",
    quantity: "500 tonnes",
    location: "Drammen",
    status: "For sale",
    image:
      "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(148,163,184,0.35)), repeating-linear-gradient(120deg, rgba(255,255,255,0.24) 0 5px, transparent 5px 14px)",
  },
];

const steps = [
  {
    title: "List material",
    text: "Add waste type, quality, quantity, location and availability in minutes.",
    icon: "upload",
  },
  {
    title: "Get matched",
    text: "KELP connects you with relevant verified buyers or sellers immediately.",
    icon: "search",
  },
  {
    title: "Close the deal",
    text: "Agree terms, coordinate logistics and document the transaction in one flow.",
    icon: "check",
  },
];

const benefits = [
  {
    title: "Immediate market access",
    text: "Replace phone chains with live demand and supply.",
    icon: "clock",
  },
  {
    title: "Verified counterparties",
    text: "Trade with companies that meet quality and compliance standards.",
    icon: "shield",
  },
  {
    title: "Circular value creation",
    text: "Turn waste streams into resources with higher reuse and recycling rates.",
    icon: "leaf",
  },
];

function runContentTests() {
  const landingPageContent = {
    brandName: BRAND_NAME,
    brandSubtitle: BRAND_SUBTITLE,
    heroTitle: HERO_TITLE,
    heroCopy: HERO_COPY,
    listings,
    steps,
    benefits,
  };

  const contentText = JSON.stringify(landingPageContent);
  const requiredTexts = [BRAND_NAME, BRAND_SUBTITLE, HERO_TITLE];

  requiredTexts.forEach((text) => {
    if (!contentText.includes(text)) {
      throw new Error(`Missing required landing page text: ${text}`);
    }
  });

  if (listings.length < 3) throw new Error("Expected at least three marketplace listings.");
  if (steps.length !== 3) throw new Error("Expected exactly three how-it-works steps.");
  if (benefits.length !== 3) throw new Error("Expected exactly three benefit cards.");

  listings.forEach((listing) => {
    if (!listing.type || !listing.quantity || !listing.location || !listing.status) {
      throw new Error("Each listing must include type, quantity, location and status.");
    }
  });

  steps.forEach((step) => {
    if (!step.title || !step.text || !step.icon) {
      throw new Error("Each step must include title, text and icon.");
    }
  });

  benefits.forEach((benefit) => {
    if (!benefit.title || !benefit.text || !benefit.icon) {
      throw new Error("Each benefit must include title, text and icon.");
    }
  });
}

runContentTests();

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-[#082f2a]">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#073f35] text-white shadow-sm">
              <Icon name="recycle" className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">{BRAND_NAME}</div>
              <div className="text-xs font-medium text-emerald-950/55">{BRAND_SUBTITLE}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-emerald-950/75 md:flex">
            <a href="#marketplace" className="hover:text-emerald-800">Marketplace</a>
            <a href="#how" className="hover:text-emerald-800">How it works</a>
            <a href="#trust" className="hover:text-emerald-800">Why KELP</a>
            <a href="#contact" className="hover:text-emerald-800">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl border border-emerald-950/20 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50 sm:block">
              Log in
            </button>
            <button className="rounded-xl bg-[#073f35] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b5a4b]">
              Join KELP
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(52,211,153,0.22),transparent_34%),linear-gradient(115deg,rgba(247,250,246,1)_0%,rgba(247,250,246,0.92)_45%,rgba(218,237,229,0.86)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Digital waste trading for professional operators
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#062b26] md:text-7xl">
              {HERO_TITLE}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-950/70 md:text-xl">
              {HERO_COPY}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/list-material"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-[#073f35] px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:bg-[#0b5a4b]"
            >
                List material
                <Icon
                    name="arrowRight"
                className="h-5 w-5 transition group-hover:translate-x-1"
             />
            </a>
                            <button className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-950/15 bg-white px-7 py-4 text-base font-bold text-emerald-950 shadow-sm transition hover:bg-emerald-50">
                Explore marketplace
              </button>
            </div>

            <div className="mt-11 grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3 rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-emerald-950/5 backdrop-blur">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-emerald-950/60">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -right-12 -top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#073f35] p-4 shadow-2xl shadow-emerald-950/20">
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#164e43,#0f2f2a_55%,#d9f99d)]">
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0))]" />
                <div className="absolute right-8 top-8 rounded-3xl border border-white/20 bg-white/10 p-8 text-right text-white backdrop-blur-sm">
                  <div className="text-5xl font-black">{BRAND_NAME}</div>
                  <div className="mt-2 text-xl font-bold text-emerald-100">Waste to resource</div>
                </div>
                <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-emerald-300/30 blur-2xl" />
              </div>
              <div className="space-y-4 p-5 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-100/80">Live match</p>
                    <h2 className="mt-1 text-2xl font-black">Mixed plastic · 25 tonnes</h2>
                  </div>
                  <div className="rounded-2xl bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">12 sec</div>
                </div>
                <div className="rounded-2xl bg-white p-4 text-emerald-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-emerald-950/55">Matched buyer</div>
                      <div className="font-black">Nordic Circular Materials AS</div>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">Verified</div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-emerald-950/65">
                    <Icon name="mapPin" className="h-4 w-4" /> Oslo · Available pickup this week
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="marketplace" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="-mt-16 rounded-[1.75rem] bg-[#073f35] p-4 shadow-xl shadow-emerald-950/15 md:p-6">
          <div className="mb-4 text-lg font-black text-white">Find material or buyers now</div>
          <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
            <input className="rounded-2xl border-0 bg-white px-5 py-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-slate-400" placeholder="Waste type, e.g. plastic, metal, paper" />
            <select className="rounded-2xl border-0 bg-white px-5 py-4 text-sm outline-none">
              <option>Category</option>
              <option>Plastic</option>
              <option>Metal</option>
              <option>Wood</option>
              <option>Construction waste</option>
            </select>
            <input className="rounded-2xl border-0 bg-white px-5 py-4 text-sm outline-none placeholder:text-slate-400" placeholder="Location" />
            <button className="rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-black text-white transition hover:bg-emerald-400">Search</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">Marketplace</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Current opportunities</h2>
          </div>
          <a href="#contact" className="hidden items-center gap-2 font-bold text-emerald-800 sm:flex">
            See all listings <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {listings.map((item) => (
            <article key={item.type} className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-emerald-950/8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
              <div className="relative h-44 bg-cover bg-center" style={{ backgroundImage: item.image }}>
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-900 backdrop-blur">{item.status}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black">{item.type}</h3>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-emerald-950/65">
                  <span>{item.quantity}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Icon name="mapPin" className="h-4 w-4" /> {item.location}</span>
                </div>
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-950/10 px-5 py-3 font-bold text-emerald-950 transition hover:bg-emerald-50">
                  View details <Icon name="arrowRight" className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-950/8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">How it works</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">From phone calls to instant matches.</h2>
              <p className="mt-5 text-lg leading-8 text-emerald-950/65">
                KELP gives waste producers, recyclers and brokers one shared market view, making fragmented material flows easier to price, trade and document.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] bg-[#f2f7f1] p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-800 shadow-sm">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-black text-emerald-700">0{index + 1}</div>
                  <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-emerald-950/60">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] bg-[#073f35] p-8 text-white md:col-span-2">
            <h2 className="text-4xl font-black tracking-tight">Built for the professional waste market.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/75">
              KELP is designed around real-world trading workflows: material quality, volume, geography, transport windows, buyer confidence and transparent documentation.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-emerald-100 p-8">
            <div className="text-5xl font-black text-emerald-950">30+ yrs</div>
            <p className="mt-4 text-lg font-bold text-emerald-950">Industry experience brought into a digital platform.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="mt-16 bg-[#062b26] px-6 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-3xl font-black">{BRAND_NAME}</div>
            <div className="mt-1 text-sm text-emerald-50/60">{BRAND_SUBTITLE}</div>
            <p className="mt-5 max-w-lg text-emerald-50/70">A digital marketplace for buying and selling waste as a resource.</p>
          </div>
          <button className="rounded-2xl bg-white px-7 py-4 font-black text-emerald-950 transition hover:bg-emerald-50">
            Request early access
          </button>
        </div>
      </footer>
    </main>
  );
}
