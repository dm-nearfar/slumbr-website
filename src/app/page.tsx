"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Accent from "@/components/Accent";
import FeatureBand from "@/components/FeatureBand";
import PhoneFrame from "@/components/PhoneFrame";
import PostCard from "@/components/PostCard";
import SocialProof from "@/components/SocialProof";
import StoreBadges from "@/components/StoreBadges";
import { latestPost } from "@/content/blog/posts";
import { fadeUp, reveal, stagger } from "@/lib/motion";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c.7 5.5 4.5 9.3 10 10-5.5.7-9.3 4.5-10 10-.7-5.5-4.5-9.3-10-10 5.5-.7 9.3-4.5 10-10z" />
    </svg>
  );
}

/* A handful of sparkles around the hero headline, on top of the body-level
   starfield, so the first viewport always reads as a night sky. */
function HeroStars() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60%]">
      <span className="absolute left-[12%] top-[22%] h-1 w-1 rounded-full bg-white opacity-80" />
      <span className="absolute left-[24%] top-[36%] h-0.5 w-0.5 rounded-full bg-white opacity-50" />
      <span className="absolute left-[38%] top-[16%] h-0.5 w-0.5 rounded-full bg-white opacity-60" />
      <span className="absolute right-[30%] top-[20%] h-1 w-1 rounded-full bg-white opacity-40" />
      <span className="absolute right-[18%] top-[42%] h-0.5 w-0.5 rounded-full bg-white opacity-70" />
      <span className="absolute right-[8%] top-[30%] h-1.5 w-1.5 rounded-full bg-white opacity-30" />
      <span className="absolute left-[6%] top-[52%] h-0.5 w-0.5 rounded-full bg-white opacity-60" />
    </div>
  );
}

/* Faint constellation in the analysis band's upper corner: a few stars joined
   by hairlines, drawn once as inline SVG. */
function Constellation() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 160"
      className="pointer-events-none absolute right-6 top-6 w-[180px] opacity-50 md:right-16 md:top-10 md:w-[240px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#B3BCF5" strokeWidth="0.75" strokeOpacity="0.55" fill="none">
        <path d="M22 118 L74 64 L128 84 L176 30 L222 52" />
        <path d="M128 84 L150 132" />
      </g>
      <g fill="#FFFFFF">
        <circle cx="22" cy="118" r="1.6" fillOpacity="0.9" />
        <circle cx="74" cy="64" r="2.2" fillOpacity="0.95" />
        <circle cx="128" cy="84" r="1.4" fillOpacity="0.8" />
        <circle cx="176" cy="30" r="2" fillOpacity="0.9" />
        <circle cx="222" cy="52" r="1.3" fillOpacity="0.7" />
        <circle cx="150" cy="132" r="1.5" fillOpacity="0.75" />
      </g>
    </svg>
  );
}

const steps = [
  {
    number: 1,
    text: "Record your dream",
    subtitle: "Text or voice. Capture it before it fades.",
  },
  {
    number: 2,
    text: "Get instant AI analysis",
    subtitle: "Themes, emotions, and hidden meanings revealed",
  },
  {
    number: 3,
    text: "Watch your dream come to life",
    subtitle: "A cinematic AI video of your dream world",
  },
];

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <main className="relative">
        {/* Hero. At least one viewport tall, growing as needed so the whole
            phone is in view with room beneath it before How it works. */}
        <section
          id="top"
          className="relative flex min-h-[100svh] flex-col items-center px-6 pb-16 pt-36 text-center md:px-16 md:pb-24 md:pt-44"
        >
          <HeroStars />
          <motion.div
            className="relative z-10 flex w-full max-w-5xl flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="mb-5 text-balance text-[52px] font-bold leading-[1.02] tracking-[-0.02em] text-white md:text-[88px]"
            >
              <span className="block md:inline">Unlock your </span>
              <Accent>dreams.</Accent>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-2xl text-[19px] leading-[1.6] text-white/70 md:text-[22px]"
            >
              Record, decode, and relive your dreams.
            </motion.p>
            <motion.div variants={fadeUp} id="download">
              <StoreBadges />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative z-10 mx-auto mt-14 w-full max-w-[320px] md:mt-16 md:max-w-[420px]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div aria-hidden className="glow -inset-x-32 -inset-y-16 md:-inset-x-48 md:-inset-y-24" />
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame
                src="/screenshots/shot1-journal-home.webp"
                alt="Slumbr's My Journal screen listing recent dreams such as Rooftop Garden at Midnight and Flying Over The City"
                sizes="(max-width: 768px) 320px, 420px"
                priority
                glow={false}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              className="mb-14 text-center text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:mb-16 md:text-[56px]"
              {...reveal}
            >
              How it <Accent>works.</Accent>
            </motion.h2>
            {/* Steps: a chip-left row per step on mobile with the connector
                running vertically through the chip column; three centred
                columns from md with the connector running between the outer
                chips. */}
            <div className="relative mx-auto flex w-full max-w-[380px] flex-col gap-10 md:max-w-none md:flex-row md:items-start md:justify-between md:gap-0">
              {/* One wide, very soft glow behind the whole step row, weaker
                  than a phone glow */}
              <div aria-hidden className="glow -inset-x-16 -inset-y-10 opacity-60 md:-inset-x-24" />
              <div
                aria-hidden
                className="absolute bottom-[32px] left-[31px] top-[32px] w-px bg-accent/60 shadow-[0_0_8px_rgba(179,188,245,0.35)] md:hidden"
              />
              <div
                aria-hidden
                className="absolute left-[calc(16.67%+36px)] right-[calc(16.67%+36px)] top-[36px] hidden h-px bg-accent/60 shadow-[0_0_8px_rgba(179,188,245,0.35)] md:block"
              />
              {steps.map((s) => (
                <motion.div
                  key={s.number}
                  className="relative z-10 flex flex-1 items-start gap-5 text-left md:flex-col md:items-center md:gap-0 md:text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: s.number * 0.15 }}
                >
                  <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-glow text-[24px] font-bold text-white shadow-[0_0_36px_rgba(139,92,246,0.6)] md:mb-6 md:h-[72px] md:w-[72px] md:text-[26px]">
                    {s.number}
                  </div>
                  <div className="pt-4 md:pt-0">
                    <p className="mb-2 text-[22px] font-bold text-white md:text-[24px]">
                      {s.text}
                    </p>
                    <p className="max-w-[280px] text-balance text-[17px] leading-[1.5] text-white/70">
                      {s.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capture band */}
        <FeatureBand
          headline={
            <>
              Capture dreams before they <Accent>fade.</Accent>
            </>
          }
          subline="Type it, or just speak it. Half-awake works."
          src="/screenshots/shot3-recording-waveform.webp"
          alt="Slumbr's Add Dream screen recording a voice note, with a live waveform and a Tap to Stop Recording button"
        />

        {/* Analysis band, mirrored: phone left, text right */}
        <FeatureBand
          mirrored
          headline={
            <>
              Discover what it <Accent>means.</Accent>
            </>
          }
          subline="The symbols, the themes, and what they say about you."
          body="Record a dream and Slumbr analyses it in seconds, surfacing the themes, emotions, and symbols woven through it. Over time, recurring patterns your waking mind misses come into focus, and Slumbr matches you to your dream archetype."
          src="/screenshots/shot4-analysis-nans-kitchen.webp"
          alt="Slumbr's Your Dream screen showing an AI analysis of a dream about a grandmother's kitchen"
          decoration={<Constellation />}
          phoneOverlay={
            <Image
              src="/screenshots/archetype-card.webp"
              alt="Slumbr's dream archetype card: Navigator, a strong match"
              width={640}
              height={172}
              sizes="(max-width: 768px) 220px, 300px"
              className="absolute -right-6 bottom-[16%] w-[220px] rounded-2xl shadow-[0_24px_60px_-16px_rgba(0,0,0,0.65)] md:-right-16 md:w-[300px]"
            />
          }
        />

        {/* Dream films band: full width, the most dramatic section, with the
            strongest glow on the page */}
        <section className="relative px-6 py-20 md:px-16 md:py-32">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div className="mb-12 md:mb-16" {...reveal}>
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.28em] text-accent">
                DREAM FILMS
              </p>
              <h2 className="mb-5 text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[64px]">
                Watch your dreams come <Accent>alive.</Accent>
              </h2>
              <p className="mx-auto max-w-xl text-[19px] leading-[1.6] text-white/70 md:text-[21px]">
                Turn last night&apos;s dream into a short film.
              </p>
            </motion.div>
            <motion.div className="relative w-[300px] md:w-[420px]" {...reveal}>
              <div
                aria-hidden
                className="glow glow-strong -inset-x-40 -inset-y-20 md:-inset-x-64 md:-inset-y-32"
              />
              <PhoneFrame
                src="/screenshots/shot2-feed-rooftop-garden.webp"
                alt="Slumbr's Visualise feed playing a dream film of a rooftop garden at midnight under a full moon"
                sizes="(max-width: 768px) 300px, 420px"
                glow={false}
              />
            </motion.div>
          </div>
        </section>


        {/* Social proof: gated behind SHOW_SOCIAL_PROOF in the component,
            renders nothing until real review quotes are in place */}
        <SocialProof />

        {/* Pricing. Every plan fact, price, chip, tagline and button label is
            carried verbatim from the previous markup; only the styling and
            the "Free forever" line under the Free card are new. */}
        <section id="pricing" className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div className="mb-14 text-center md:mb-16" {...reveal}>
              <h2 className="mb-4 text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[56px]">
                Choose your <Accent>path.</Accent>
              </h2>
              <p className="text-[19px] leading-[1.6] text-white/70 md:text-[21px]">
                Start free. Go Pro for the full dreamscape.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Free: dark glass. Second on mobile, first from md. */}
              <motion.div
                variants={fadeUp}
                className="order-last flex flex-col items-start rounded-[32px] border border-white/10 bg-indigo-deep/50 p-10 backdrop-blur-xl transition-colors duration-500 hover:border-white/20 md:order-first"
              >
                <span className="mb-6 rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white">
                  Free
                </span>
                <h3 className="mb-2 text-[40px] font-bold text-white">£0</h3>
                <p className="mb-8 text-[17px] text-white/70">
                  Everything you need to start.
                </p>
                <ul className="mb-12 space-y-4">
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    1 free video token on sign-up
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    3 AI dream analyses per month
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    Purchase video tokens from £1.49
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    5-second cinematic dream videos
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    Ad-supported
                  </li>
                </ul>
                <div className="mt-auto flex w-full flex-col gap-3">
                  <a
                    href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl border border-white/25 py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-white/10 motion-safe:hover:-translate-y-0.5"
                  >
                    Download Free on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl border border-white/25 py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-white/10 motion-safe:hover:-translate-y-0.5"
                  >
                    Download Free on Android
                  </a>
                  <p className="mt-2 text-center text-[14px] text-white/70">
                    Free forever. No card required.
                  </p>
                </div>
              </motion.div>

              {/* Pro: glowing violet border. First on mobile. */}
              <motion.div
                variants={fadeUp}
                className="group relative flex flex-col items-start overflow-hidden rounded-[32px] border border-glow bg-indigo-deep/60 p-10 shadow-[0_0_48px_rgba(139,92,246,0.35)] backdrop-blur-xl"
              >
                <div aria-hidden className="absolute right-0 top-0 p-8">
                  <SparkleIcon className="h-[96px] w-[96px] rotate-12 text-glow/30 transition-transform duration-1000 group-hover:rotate-45" />
                </div>
                <div className="relative z-10 mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-glow/30 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-accent">
                    Pro
                  </span>
                  <span className="rounded-full border border-glow/60 bg-glow/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                    Best value
                  </span>
                  <span className="rounded-full border border-glow/60 bg-glow/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                    7-day free trial
                  </span>
                </div>
                <h3 className="relative z-10 mb-2 text-[40px] font-bold text-white">
                  £5.99
                  <span className="text-[24px] font-semibold text-white/70">
                    /mo
                  </span>
                </h3>
                <p className="relative z-10 mb-8 text-[17px] text-white/70">
                  or £39.99/yr. For the serious dreamer.
                </p>
                <ul className="relative z-10 mb-12 space-y-4">
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    Up to 10 AI dream analyses per day
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    2 video tokens with every renewal
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    10-second cinematic dream videos
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-white">
                    <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                    No ads
                  </li>
                </ul>
                <div className="relative z-10 mt-auto flex w-full flex-col gap-3">
                  <a
                    href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl bg-violet py-4 text-center font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_28px_rgba(139,92,246,0.6)] motion-safe:hover:-translate-y-0.5"
                  >
                    Start Free Trial on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl bg-violet py-4 text-center font-semibold text-white transition-all duration-200 hover:shadow-[0_8px_28px_rgba(139,92,246,0.6)] motion-safe:hover:-translate-y-0.5"
                  >
                    Start Free Trial on Android
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* From the blog */}
        <section className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              className="mb-10 text-center text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[56px]"
              {...reveal}
            >
              From the <Accent>blog.</Accent>
            </motion.h2>
            <motion.div {...reveal}>
              <PostCard post={latestPost} />
            </motion.div>
          </div>
        </section>


        {/* Closing CTA. Positioned above the footer's mountain base, which
            rises from the sky directly beneath this section. */}
        <section className="relative z-10 px-6 pb-8 pt-16 text-center md:pb-10 md:pt-24">
          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="mb-5 text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-[72px]"
            >
              Your dreams, <Accent>kept.</Accent>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-10 max-w-xl text-[19px] leading-[1.6] text-white/70 md:text-[21px]"
            >
              Free forever. No card required.
            </motion.p>
            <motion.div variants={fadeUp}>
              <StoreBadges />
            </motion.div>
          </motion.div>
        </section>
        </main>
      </div>
    </MotionConfig>
  );
}
