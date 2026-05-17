"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <svg
        viewBox="0 0 120 40"
        className="h-[50px] w-auto"
        role="img"
        aria-label="Download on the App Store"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <rect
          width="119"
          height="39"
          x="0.5"
          y="0.5"
          rx="5.5"
          stroke="#a6a6a6"
          strokeWidth="1"
          fill="none"
        />
        <text
          x="65"
          y="15"
          textAnchor="middle"
          fill="#fff"
          fontSize="6"
          fontFamily="system-ui, sans-serif"
        >
          Download on the
        </text>
        <text
          x="65"
          y="28"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          App Store
        </text>
        <text
          x="22"
          y="25"
          textAnchor="middle"
          fill="#fff"
          fontSize="16"
          fontFamily="-apple-system, system-ui, sans-serif"
        >
          &#xF8FF;
        </text>
      </svg>
    </a>
  );
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#3D3B8E]/30 blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#3D3B8E]/15 blur-[100px] animate-pulse [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#D4A843]/8 blur-[80px] animate-pulse [animation-delay:4s]" />
    </div>
  );
}

const features = [
  {
    icon: "📖",
    title: "Dream Journal",
    description:
      "Capture every detail with text or voice notes. Your private dream diary, beautifully organised.",
  },
  {
    icon: "🧠",
    title: "AI Analysis",
    description:
      "Uncover patterns, themes, and meaning in your dreams with AI-powered interpretations.",
  },
  {
    icon: "🎬",
    title: "Dream Videos",
    description:
      "Turn your dreams into cinematic AI-generated videos you can watch, save, and share.",
  },
  {
    icon: "📊",
    title: "Dream Patterns",
    description:
      "Track recurring themes, symbols, and emotions across your dreams. Spot patterns your waking mind misses.",
  },
];

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
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <AuroraBackground />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Slumbr app icon - AI dream journal"
              width={80}
              height={80}
              className="drop-shadow-[0_0_30px_rgba(61,59,142,0.4)]"
              priority
            />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Unlock Your Dreams
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#9090A0] mb-10 max-w-2xl mx-auto"
          >
            Dive deeper into your subconscious. AI-powered analysis reveals what
            your dreams really mean, then brings them to life as cinematic videos.
          </motion.p>
          <motion.div variants={fadeUp}>
            <AppStoreBadge />
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why <span className="text-[#D4A843]">Slumbr</span>?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-[#2A2940] bg-[#1A1929] p-8 text-center transition-all hover:border-[#3D3B8E]/60 hover:shadow-[0_0_30px_rgba(61,59,142,0.15)]"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-[#9090A0] text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-[#1A1929]/40">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
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
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Simple <span className="text-[#D4A843]">Pricing</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Free */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#2A2940] bg-[#1A1929] p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-[#9090A0] text-sm mb-6">
                Everything you need to start
              </p>
              <ul className="space-y-3 text-[#9090A0] text-sm mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#9090A0] mt-0.5">&#10003;</span> 3 AI dream analyses per month
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9090A0] mt-0.5">&#10003;</span> Purchase video tokens from £1.49
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9090A0] mt-0.5">&#10003;</span> 10-second cinematic dream videos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9090A0] mt-0.5">&#10003;</span> Ad-supported
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center border border-[#E5E9FF] text-[#E5E9FF] font-semibold py-3 px-6 rounded-xl hover:bg-[#E5E9FF] hover:text-[#0F0E1A] transition-colors"
                >
                  Download Free
                </a>
              </div>
            </motion.div>

            {/* Pro */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border border-[#3D3B8E]/50 bg-[#1A1929] p-8 shadow-[0_0_40px_rgba(61,59,142,0.1)] flex flex-col"
            >
              <div className="absolute -top-3 right-6 flex gap-2">
                <span className="bg-[#3D3B8E] text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
                <span className="bg-[#3D3B8E] text-white text-xs font-bold px-3 py-1 rounded-full">
                  7-day free trial
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Pro</h3>
              <p className="text-[#E5E9FF] text-lg font-semibold mb-1">
                £5.99/mo{" "}
                <span className="text-[#9090A0] text-sm font-normal">
                  or £39.99/yr
                </span>
              </p>
              <p className="text-[#9090A0] text-sm mb-6">
                For the serious dreamer
              </p>
              <ul className="space-y-3 text-[#9090A0] text-sm mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5E9FF] mt-0.5">&#10003;</span> Unlimited AI dream analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5E9FF] mt-0.5">&#10003;</span> 2 video tokens included every month
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5E9FF] mt-0.5">&#10003;</span> 10-second cinematic dream videos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5E9FF] mt-0.5">&#10003;</span> No ads
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#3D3B8E] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#4D4B9E] transition-colors"
                >
                  Start Free Trial
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
            <AppStoreBadge />
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
  );
}
