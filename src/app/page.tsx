"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
    </svg>
  );
}

function PlayMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="6,3 6,16 17,16" fill="#00C853" />
      <polygon points="6,29 6,16 17,16" fill="#00A0FF" />
      <polygon points="6,3 26,16 17,16" fill="#FF3A2F" />
      <polygon points="6,29 26,16 17,16" fill="#FFD400" />
    </svg>
  );
}

function StoreBadges() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="flex items-center gap-3 rounded-xl bg-white px-8 py-3 text-black transition-all hover:bg-white/90 active:scale-95"
      >
        <AppleLogo className="h-7 w-7" />
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
        aria-label="Get it on Google Play"
        className="flex items-center gap-3 rounded-xl border border-[#2A2940] bg-[#1A1929] px-8 py-3 text-white transition-all hover:bg-[#232238] active:scale-95"
      >
        <PlayMark className="h-7 w-7" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">
            Get it on
          </span>
          <span className="block text-[18px] font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

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

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2940] bg-[#0F0E1A]/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-16">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Slumbr logo" width={32} height={32} />
          <span className="font-display text-[24px] font-semibold tracking-tight text-white">
            Slumbr
          </span>
        </a>
        <div className="hidden items-center gap-8 text-[14px] font-semibold tracking-[0.05em] md:flex">
          <a
            href="#how-it-works"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Pricing
          </a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-[#3D3B8E] px-6 py-2.5 text-[14px] font-semibold tracking-[0.05em] text-[#E5E9FF] transition hover:opacity-85 active:scale-95"
        >
          Get the App
        </a>
      </div>
    </nav>
  );
}

function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
      <div className="absolute left-[15%] top-20 h-0.5 w-0.5 rounded-full bg-white" />
      <div className="absolute left-[45%] top-40 h-1 w-1 rounded-full bg-white opacity-60" />
      <div className="absolute right-[20%] top-60 h-0.5 w-0.5 rounded-full bg-white opacity-30" />
      <div className="absolute bottom-40 left-[30%] h-1 w-1 rounded-full bg-white opacity-50" />
      <div className="absolute right-[10%] top-[15%] h-0.5 w-0.5 rounded-full bg-white" />
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[48px] border-8 border-[#1A1929] bg-[#1A1929] shadow-2xl shadow-[#3D3B8E]/20 ring-1 ring-white/10">
      <Image
        src={src}
        alt={alt}
        width={1170}
        height={2532}
        unoptimized
        priority={priority}
        className="h-auto w-full rounded-[40px] object-cover"
      />
    </div>
  );
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#3D3B8E]/30 blur-[120px] motion-safe:animate-pulse" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#3D3B8E]/15 blur-[100px] motion-safe:animate-pulse [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#D4A843]/8 blur-[80px] motion-safe:animate-pulse [animation-delay:4s]" />
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
      <Nav />
      <main>
        {/* Hero */}
        <section
          id="top"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-36 text-center md:px-16"
        >
          <Starfield />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#3D3B8E] opacity-25 blur-[80px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-[#3D3B8E] opacity-25 blur-[80px]"
          />
          <motion.div
            className="relative z-10 w-full max-w-5xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="font-display mb-6 text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[80px]"
            >
              Unlock Your Dreams.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-12 max-w-2xl text-[18px] leading-[1.6] tracking-[0.01em] text-[#9090A0]"
            >
              Dive deeper into your subconscious. AI-powered analysis reveals
              what your dreams really mean, then brings them to life as
              cinematic videos.
            </motion.p>
            <motion.div variants={fadeUp} id="download">
              <StoreBadges />
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="relative mx-auto mt-20 w-full max-w-[320px] md:max-w-[400px]"
            >
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-[#3D3B8E]/40 blur-[100px]"
              />
              <motion.div
                className="relative z-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneFrame
                  src="/screenshots/placeholder-hero-app.svg"
                  alt="Slumbr app dream journal screen"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* AI Dream Analysis */}
        <section className="overflow-hidden px-6 py-20 md:px-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row md:gap-24">
            <motion.div
              className="order-2 flex-1 text-center md:order-1 md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display mb-6 text-[32px] font-semibold leading-[1.2] text-white md:text-[48px]">
                AI Dream Analysis
              </h2>
              <p className="text-[18px] leading-[1.6] tracking-[0.01em] text-[#9090A0]">
                Uncover the hidden meanings, themes, and emotions buried in
                your subconscious with clinical precision.
              </p>
            </motion.div>
            <motion.div
              className="relative order-1 flex flex-1 justify-center md:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                aria-hidden
                className="absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-[#3D3B8E]/40 blur-[80px]"
              />
              <div className="relative w-[280px] md:w-[320px]">
                <PhoneFrame
                  src="/screenshots/placeholder-ai-analysis.svg"
                  alt="Slumbr app AI dream analysis screen"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cinematic Dream Videos */}
        <section className="overflow-hidden px-6 py-20 md:px-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row md:gap-24">
            <motion.div
              className="relative order-1 flex flex-1 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                aria-hidden
                className="absolute inset-0 m-auto rounded-full bg-[#3D3B8E]/50 blur-[100px]"
              />
              <motion.div
                className="relative w-[320px] md:w-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <PhoneFrame
                  src="/screenshots/placeholder-dream-video.svg"
                  alt="Slumbr app cinematic dream video screen"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="order-2 flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-block rounded-full border border-[#D4A843]/20 bg-[#D4A843]/10 px-4 py-1.5 text-sm font-bold tracking-wide text-[#D4A843]">
                STANDOUT FEATURE
              </div>
              <h2 className="font-display mb-6 text-[32px] font-semibold leading-tight text-white md:text-[56px]">
                Cinematic Dream Videos
              </h2>
              <p className="text-[18px] leading-[1.6] tracking-[0.01em] text-[#9090A0] md:text-xl">
                Watch your dreams come alive. Experience your subconscious
                narratives as cinematic AI-generated videos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="relative px-6 py-20 md:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-display mb-16 text-center text-[32px] font-semibold leading-[1.2] text-white md:text-[48px]"
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
                  <div className="w-[56px] h-[56px] rounded-full bg-[#E5E9FF] flex items-center justify-center text-[#0F0E1A] text-xl font-bold mb-5 shadow-[0_0_20px_rgba(229,233,255,0.2)]">
                    {s.number}
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">{s.text}</p>
                  <p className="text-[#9090A0] text-sm max-w-[220px]">{s.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative px-6 py-20 md:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <motion.h2
                className="font-display mb-4 text-[32px] font-semibold leading-[1.2] text-white md:text-[48px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Choose Your Path
              </motion.h2>
              <p className="text-[16px] leading-[1.5] text-[#9090A0]">
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
                <span className="mb-6 rounded-full bg-[#2A2940] px-4 py-1 text-[14px] font-semibold tracking-[0.05em] text-white">
                  Free
                </span>
                <h3 className="font-display mb-2 text-[40px] font-bold text-white">
                  £0
                </h3>
                <p className="mb-8 text-[#9090A0]">
                  Everything you need to start.
                </p>
                <ul className="mb-12 space-y-4">
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" /> 3
                    AI dream analyses per month
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    Purchase video tokens from £1.49
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    10-second cinematic dream videos
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    Ad-supported
                  </li>
                </ul>
                <div className="mt-auto flex w-full flex-col gap-3">
                  <a
                    href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl border border-[#2A2940] py-4 text-center font-bold text-white transition-colors hover:bg-white/5"
                  >
                    Download Free on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl border border-[#2A2940] py-4 text-center font-bold text-white transition-colors hover:bg-white/5"
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
                  <SparkleIcon className="h-[120px] w-[120px] rotate-12 text-[#3D3B8E]/40 transition-transform duration-1000 group-hover:rotate-45" />
                </div>
                <div className="relative z-10 mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#3D3B8E]/20 px-4 py-1 text-[14px] font-semibold tracking-[0.05em] text-[#E5E9FF]">
                    Pro
                  </span>
                  <span className="rounded-full bg-[#3D3B8E] px-4 py-1 text-[12px] font-bold text-white">
                    BEST VALUE
                  </span>
                  <span className="rounded-full bg-[#3D3B8E] px-4 py-1 text-[12px] font-bold text-white">
                    7-day free trial
                  </span>
                </div>
                <h3 className="font-display relative z-10 mb-2 text-[40px] font-bold text-white">
                  £5.99
                  <span className="text-[24px] font-medium text-[#9090A0]">
                    /mo
                  </span>
                </h3>
                <p className="relative z-10 mb-8 text-[#9090A0]">
                  or £39.99/yr. For the serious dreamer.
                </p>
                <ul className="relative z-10 mb-12 space-y-4">
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    Unlimited AI dream analysis
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" /> 2
                    video tokens included every month
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" />{" "}
                    10-second cinematic dream videos
                  </li>
                  <li className="flex items-center gap-3 text-[16px] text-[#E5E9FF]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-[#3D3B8E]" /> No
                    ads
                  </li>
                </ul>
                <div className="relative z-10 mt-auto flex w-full flex-col gap-3">
                  <a
                    href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl bg-[#3D3B8E] py-4 text-center font-bold text-[#E5E9FF] transition-opacity hover:opacity-90"
                  >
                    Start Free Trial on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-2xl bg-[#3D3B8E] py-4 text-center font-bold text-[#E5E9FF] transition-opacity hover:opacity-90"
                  >
                    Start Free Trial on Android
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-6 text-center">
          <AuroraBackground />
          <motion.div
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              What did you dream last night?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <StoreBadges />
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2A2940] py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6B6B7B]">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Slumbr logo" width={24} height={24} />
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>&middot;</span>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
                <span>&middot;</span>
                <Link href="/delete-account" className="hover:text-white transition-colors">
                  Delete account
                </Link>
                <span>&middot;</span>
                <a
                  href="mailto:contact@slumbr.ai"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <p>&copy; 2026 Slumbr LTD. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
