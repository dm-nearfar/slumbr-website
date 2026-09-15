"use client";

import { motion, MotionConfig } from "framer-motion";
import Accent from "@/components/Accent";
import PhoneFrame from "@/components/PhoneFrame";
import PostCard from "@/components/PostCard";
import StoreBadges from "@/components/StoreBadges";
import { latestPost } from "@/content/blog/posts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const reveal = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-80px" },
  variants: fadeUp,
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

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
        {/* Hero. The phone rises from the bottom edge of the first viewport
            and is cropped by it: the section is one viewport tall with
            overflow hidden, the phone is pushed to the section's bottom and
            carries a negative bottom margin. Its glow sits inside the same
            clip, which is the one deliberate crop of a glow on the site. */}
        <section
          id="top"
          className="relative flex min-h-[100svh] flex-col items-center overflow-hidden px-6 pt-36 text-center md:px-16 md:pt-44"
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
            className="relative z-10 mx-auto mt-14 -mb-[150px] w-full max-w-[320px] md:mt-auto md:-mb-[280px] md:max-w-[420px]"
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

        {/* AI Dream Analysis */}
        <section className="px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-20">
            <motion.div
              className="flex-1 text-center md:order-1 md:text-left"
              {...reveal}
            >
              <div className="mb-6 inline-block rounded-full border border-[#3D3B8E]/40 bg-[#3D3B8E]/15 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#C2C1FF]">
                Understand your dreams
              </div>
              <h2 className="font-display mb-6 text-[32px] font-medium leading-[1.15] text-white md:text-[48px]">
                AI Dream Analysis
              </h2>
              <p className="text-[20px] leading-[1.6] tracking-[0.01em] text-[#9090A0]">
                Record a dream and Slumbr analyses it in seconds — surfacing
                the themes, emotions, and symbols woven through it, and
                explaining the psychology behind them. Over time, recurring
                patterns your waking mind misses come into focus.
              </p>
              <p className="mt-6 text-[15px] text-[#6B6B7B]">
                3 analyses a month free — unlimited on Pro.
              </p>
            </motion.div>
            <motion.div
              className="relative order-last flex flex-1 justify-center md:order-2"
              {...reveal}
            >
              <div className="relative w-[280px] md:w-[320px]">
                <PhoneFrame
                  src="/screenshots/ai-analysis.png"
                  alt="Slumbr app AI dream analysis screen"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cinematic Dream Videos */}
        <section className="px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-20">
            <motion.div
              className="relative order-last flex flex-1 justify-center md:order-1"
              {...reveal}
            >
              <motion.div
                className="relative w-[320px] md:w-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <PhoneFrame
                  src="/screenshots/dream-video.png"
                  alt="Slumbr app cinematic dream video screen"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="order-first flex-1 text-center md:order-2 md:text-left"
              {...reveal}
            >
              <div className="mb-6 inline-block rounded-full border border-[#D4A843]/20 bg-[#D4A843]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#D4A843]">
                Watch your dreams back
              </div>
              <h2 className="font-display mb-6 text-balance text-[32px] font-medium leading-[1.1] text-white md:text-[56px]">
                Cinematic Dream Videos
              </h2>
              <p className="text-[20px] leading-[1.6] tracking-[0.01em] text-[#9090A0]">
                Watch your dreams come alive. Slumbr turns a dream entry into
                a cinematic, AI-generated video — a surreal moment
                of your subconscious you can watch, save, and share.
              </p>
              <p className="mt-6 text-[15px] text-[#6B6B7B]">
                Every video is generated from your own dream entry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-display mb-16 text-center text-[32px] font-medium leading-[1.15] text-white md:text-[48px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
            <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-0">
              {/* Gradient connector line, desktop only */}
              <div className="hidden md:block absolute top-[28px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[3px] bg-gradient-to-r from-[#E5E9FF] via-[#B8BDE8] to-[#D4A843] rounded-full" />

              {steps.map((s) => (
                <motion.div
                  key={s.number}
                  className="flex flex-col items-center text-center flex-1 relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: s.number * 0.15 }}
                >
                  <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#E5E9FF] font-sans text-[22px] font-medium text-[#0F0E1A] shadow-[0_0_20px_rgba(229,233,255,0.2)]">
                    {s.number}
                  </div>
                  <p className="mb-2 text-[20px] font-semibold text-white">
                    {s.text}
                  </p>
                  <p className="max-w-[260px] text-balance text-[16px] leading-[1.5] text-[#9090A0]">
                    {s.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <motion.h2
                className="font-display mb-4 text-[32px] font-medium leading-[1.15] text-white md:text-[48px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Choose Your Path
              </motion.h2>
              <p className="text-[18px] leading-[1.5] text-[#9090A0]">
                Start free. Go Pro for the full dreamscape.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Free */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-start rounded-[32px] border border-[#2A2940] bg-[#1A1929] p-10 transition-all duration-500 hover:border-[#3D3B8E]/40"
              >
                <span className="mb-6 rounded-full bg-[#2A2940] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#E5E9FF]">
                  Free
                </span>
                <h3 className="font-sans mb-2 text-[40px] font-medium text-white">
                  £0
                </h3>
                <p className="mb-8 text-[17px] text-[#9090A0]">
                  Everything you need to start.
                </p>
                <ul className="mb-12 space-y-4">
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    1 free video token on sign-up
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" /> 3
                    AI dream analyses per month
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    Purchase video tokens from £1.49
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    5-second cinematic dream videos
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    Ad-supported
                  </li>
                </ul>
                <div className="mt-auto flex w-full flex-col gap-3">
                  <a
                    href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl border border-[#2A2940] py-4 text-center font-semibold text-white transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-white/5"
                  >
                    Download Free on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl border border-[#2A2940] py-4 text-center font-semibold text-white transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-white/5"
                  >
                    Download Free on Android
                  </a>
                </div>
              </motion.div>

              {/* Pro */}
              <motion.div
                variants={fadeUp}
                className="group relative flex flex-col items-start overflow-hidden rounded-[32px] border border-[#3D3B8E] bg-[#1A1929] p-10 shadow-[0_0_40px_rgba(61,59,142,0.1)]"
              >
                <div aria-hidden className="absolute right-0 top-0 p-8">
                  <SparkleIcon className="h-[96px] w-[96px] rotate-12 text-[#3D3B8E]/25 transition-transform duration-1000 group-hover:rotate-45" />
                </div>
                <div className="relative z-10 mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#3D3B8E]/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#C2C1FF]">
                    Pro
                  </span>
                  <span className="rounded-full border border-[#3D3B8E]/60 bg-[#3D3B8E]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C2C1FF]">
                    Best value
                  </span>
                  <span className="rounded-full border border-[#3D3B8E]/60 bg-[#3D3B8E]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C2C1FF]">
                    7-day free trial
                  </span>
                </div>
                <h3 className="font-sans relative z-10 mb-2 text-[40px] font-medium text-white">
                  £5.99
                  <span className="text-[24px] font-medium text-[#9090A0]">
                    /mo
                  </span>
                </h3>
                <p className="relative z-10 mb-8 text-[17px] text-[#9090A0]">
                  or £39.99/yr. For the serious dreamer.
                </p>
                <ul className="relative z-10 mb-12 space-y-4">
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    Up to 10 AI dream analyses per day
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" /> 2
                    video tokens with every renewal
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    10-second cinematic dream videos
                  </li>
                  <li className="flex items-center gap-3 text-[17px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" /> No
                    ads
                  </li>
                </ul>
                <div className="relative z-10 mt-auto flex w-full flex-col gap-3">
                  <a
                    href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl bg-[#3D3B8E] py-4 text-center font-semibold text-[#E5E9FF] transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(61,59,142,0.5)]"
                  >
                    Start Free Trial on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl bg-[#3D3B8E] py-4 text-center font-semibold text-[#E5E9FF] transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(61,59,142,0.5)]"
                  >
                    Start Free Trial on Android
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-16 md:px-16 md:py-24">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[48px] border border-[#2A2940] bg-[#1A1929] p-12 text-center md:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3D3B8E]/15 via-transparent to-[#3D3B8E]/10"
            />
            <motion.div
              className="relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display mb-6 text-balance text-[32px] font-medium leading-[1.1] text-white md:text-[56px]"
              >
                What did you <em className="italic">dream</em> last night?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mx-auto mb-10 max-w-xl text-[20px] leading-[1.6] tracking-[0.01em] text-[#9090A0]"
              >
                Your subconscious has stories to tell. Listen to them tonight.
              </motion.p>
              <motion.div variants={fadeUp}>
                <StoreBadges />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* From the blog */}
        <section className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div className="mb-10 text-center" {...reveal}>
              <div className="mb-4 inline-block rounded-full border border-[#3D3B8E]/40 bg-[#3D3B8E]/15 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#C2C1FF]">
                Behind the Dream
              </div>
              <h2 className="font-display text-[32px] font-medium leading-[1.15] text-white md:text-[48px]">
                From the Blog
              </h2>
            </motion.div>
            <motion.div {...reveal}>
              <PostCard post={latestPost} />
            </motion.div>
          </div>
        </section>

        </main>
      </div>
    </MotionConfig>
  );
}
