"use client";

/* TEMPORARY route for display-typeface comparison — remove before merge. */

import {
  Cormorant_Garamond,
  Fraunces,
  Karla,
  Marcellus,
  Mulish,
  Outfit,
} from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const candidates = [
  {
    id: 1,
    display: "Fraunces",
    body: "Outfit",
    displayFamily: fraunces.style.fontFamily,
    bodyFamily: outfit.style.fontFamily,
    displayWeight: 500,
    why: "A soft 'wonky' old-style serif with gooey terminals and optical sizing. Warm and slightly surreal — premium with personality, never fashion-sharp. Outfit keeps the UI modern and rounded-geometric.",
  },
  {
    id: 2,
    display: "Cormorant Garamond",
    body: "Mulish",
    displayFamily: cormorant.style.fontFamily,
    bodyFamily: mulish.style.fontFamily,
    displayWeight: 500,
    why: "Ethereal, light-stroke Garamond — the most moonlit and dreamlike of the three. Reads like candlelight. Needs larger sizes to breathe (it is delicate), balanced by Mulish's sturdy humanist body.",
  },
  {
    id: 3,
    display: "Marcellus",
    body: "Karla",
    displayFamily: marcellus.style.fontFamily,
    bodyFamily: karla.style.fontFamily,
    displayWeight: 400,
    why: "Calm Roman inscriptional letterforms — serene, timeless, night-sky stillness. The quietest and most 'premium sleep brand' option. Karla adds a touch of warmth so the pairing never feels cold.",
  },
];

function HeroSample({ c }: { c: (typeof candidates)[number] }) {
  return (
    <section className="relative overflow-hidden border-b border-[#2A2940] px-6 py-24 text-center md:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-[#3D3B8E] opacity-20 blur-[100px]"
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 inline-block rounded-full border border-[#2A2940] bg-[#1A1929] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#D4A843]">
          Candidate {c.id} — {c.display} + {c.body}
        </div>
        <p
          className="mx-auto mb-12 max-w-2xl text-[15px] leading-[1.6] text-[#9090A0]"
          style={{ fontFamily: c.bodyFamily }}
        >
          {c.why}
        </p>

        {/* Hero replica */}
        <h1
          className="mb-6 text-[48px] leading-[1.1] tracking-[-0.01em] text-white md:text-[80px]"
          style={{ fontFamily: c.displayFamily, fontWeight: c.displayWeight }}
        >
          Unlock Your Dreams.
        </h1>
        <p
          className="mx-auto mb-12 max-w-2xl text-[18px] leading-[1.6] tracking-[0.01em] text-[#9090A0]"
          style={{ fontFamily: c.bodyFamily }}
        >
          Dive deeper into your subconscious. AI-powered analysis reveals what
          your dreams really mean, then brings them to life as cinematic
          videos.
        </p>
        <div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ fontFamily: c.bodyFamily }}
        >
          <a
            href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-white px-8 py-3 text-black transition-all hover:bg-white/90 active:scale-95"
          >
            <span className="text-left leading-tight">
              <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">
                Download on the
              </span>
              <span className="block text-[18px] font-bold">App Store</span>
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-[#2A2940] bg-[#1A1929] px-8 py-3 text-white transition-all hover:bg-[#232238] active:scale-95"
          >
            <span className="text-left leading-tight">
              <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">
                Get it on
              </span>
              <span className="block text-[18px] font-bold">Google Play</span>
            </span>
          </a>
        </div>

        {/* Type-scale specimen */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[#2A2940] bg-[#1A1929] p-8 text-left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6B6B7B]">
            Scale specimen
          </p>
          <p
            className="mb-3 text-[32px] leading-[1.2] text-white"
            style={{ fontFamily: c.displayFamily, fontWeight: c.displayWeight }}
          >
            AI Dream Analysis
          </p>
          <p
            className="mb-3 text-[16px] leading-[1.5] text-[#9090A0]"
            style={{ fontFamily: c.bodyFamily }}
          >
            Uncover the hidden meanings, themes, and emotions buried in your
            subconscious with clinical precision.
          </p>
          <p
            className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#D4A843]"
            style={{ fontFamily: c.bodyFamily }}
          >
            Standout Feature
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FontPreview() {
  return (
    <main className="min-h-screen bg-[#0F0E1A]">
      <div className="px-6 pb-4 pt-10 text-center">
        <h1 className="text-[20px] font-bold text-white">
          Display typeface candidates
        </h1>
        <p className="text-[14px] text-[#9090A0]">
          Temporary preview — compare the hero in each pairing, then pick one.
        </p>
      </div>
      {candidates.map((c) => (
        <HeroSample key={c.id} c={c} />
      ))}
    </main>
  );
}
