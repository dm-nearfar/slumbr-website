"use client";

import { motion } from "framer-motion";
import Accent from "./Accent";
import { fadeUp, reveal, stagger } from "@/lib/motion";

// Quotes are verbatim five-star App Store reviews, added 2026-09-15.
export const SHOW_SOCIAL_PROOF = true;

type Review = {
  quote: string;
  attribution: string;
  source: "App Store" | "Google Play";
};

const REVIEWS: Review[] = [
  {
    quote:
      "I loved how easy the app is to use and much insight there is to understanding my dreams",
    attribution: "mel 11 mel",
    source: "App Store",
  },
  {
    quote:
      "I've been looking for something like this to track my dreams for ages, before I always used forget to write them down in the morning but now it's part of my daily routine",
    attribution: "Dnzm__",
    source: "App Store",
  },
  {
    quote:
      "It's so powerful to be able to get insight into my dreams, love this app and it's design",
    attribution: "hish98",
    source: "App Store",
  },
];

function Stars() {
  return (
    <div className="mb-5 flex gap-1" aria-label="Five out of five stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 text-accent"
          fill="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.8L12 17.7 6 21l1.3-6.8-5-4.7 6.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  if (!SHOW_SOCIAL_PROOF) return null;
  return (
    <section className="relative px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-14 text-center text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:mb-16 md:text-[56px]"
          {...reveal}
        >
          Loved by <Accent>dreamers.</Accent>
        </motion.h2>
        <motion.ul
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {REVIEWS.map((review) => (
            <motion.li
              key={review.quote}
              variants={fadeUp}
              className="flex flex-col rounded-[32px] border border-white/10 bg-indigo-deep/50 p-8 backdrop-blur-xl"
            >
              <Stars />
              <blockquote className="mb-6 text-[17px] leading-[1.6] text-white">
                {review.quote}
              </blockquote>
              <p className="mt-auto text-[14px] text-white/65">
                {review.attribution}
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                {review.source}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
