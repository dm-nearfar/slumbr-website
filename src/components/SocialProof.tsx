"use client";

import { motion } from "framer-motion";
import Accent from "./Accent";
import { fadeUp, reveal, stagger } from "@/lib/motion";

// Social proof: "Loved by dreamers." over three dark glass review cards.
// GATED. The section renders nothing until SHOW_SOCIAL_PROOF is true, and it
// must stay false until the three TODO slots below hold real, verbatim App
// Store and Google Play review quotes with their attribution. Never invent
// reviews and never paraphrase one. The star row below renders five stars
// for every card, so each quote must come from a review that is actually
// five stars; if any chosen review is not, make the stars per-review (a
// rating field on Review driving Stars) before the flag flips.
export const SHOW_SOCIAL_PROOF = false;

type Review = {
  quote: string;
  attribution: string;
  source: "App Store" | "Google Play";
};

const REVIEWS: Review[] = [
  {
    quote: "TODO: paste a real App Store review quote verbatim",
    attribution: "TODO: reviewer display name as shown on the store",
    source: "App Store",
  },
  {
    quote: "TODO: paste a real Google Play review quote verbatim",
    attribution: "TODO: reviewer display name as shown on the store",
    source: "Google Play",
  },
  {
    quote: "TODO: paste a real App Store or Google Play review quote verbatim",
    attribution: "TODO: reviewer display name as shown on the store",
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
