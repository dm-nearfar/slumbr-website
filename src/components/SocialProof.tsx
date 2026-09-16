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

// Card construction. Every card is dark indigo glass (denser than the Free
// pricing card so it separates from the violet sky) with a white/15 border
// and a 1px white/10 inset highlight along the top edge. The outer cards pick
// up the PostCard hover glow; the centre card is the featured quote, with the
// Pro card's glowing border at about 65% strength and, from lg, a 16px lift.
// Only border colour and shadow transition, so the framer-motion reveal on
// the same element is never smoothed by CSS.
const FEATURED_INDEX = 1;

const CARD =
  "flex flex-col rounded-[32px] border bg-indigo-deep/70 p-8 backdrop-blur-xl inset-shadow-2xs inset-shadow-white/10";

const OUTER_CARD =
  "border-white/15 transition-[border-color,box-shadow] duration-300 hover:border-glow/60 hover:shadow-[0_0_48px_rgba(139,92,246,0.35)]";

const FEATURED_CARD =
  "border-glow/65 shadow-[0_0_48px_rgba(139,92,246,0.23)] lg:-translate-y-4";

function Stars() {
  return (
    <div
      role="img"
      aria-label="Five out of five stars"
      className="mb-5 flex gap-1 drop-shadow-[0_0_6px_rgba(179,188,245,0.45)]"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] text-accent"
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
        <div className="relative">
          {/* One wide, soft glow behind the card row, the same weaker
              treatment as the How it works step row */}
          <div aria-hidden className="glow -inset-x-16 -inset-y-10 opacity-80 lg:-inset-x-24" />
          {/* Grid items stretch, so cards in a row share one height and the
              attribution line sits on the bottom edge of each */}
          <motion.ul
            className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {REVIEWS.map((review, i) => (
              <motion.li
                key={review.quote}
                variants={fadeUp}
                className={`${CARD} ${i === FEATURED_INDEX ? FEATURED_CARD : OUTER_CARD}`}
              >
                <Stars />
                <blockquote className="mb-6 text-[17px] leading-[1.6] text-white">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="mt-auto text-[14px] text-white/65">
                  <span className="font-medium text-white/85">
                    {review.attribution}
                  </span>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  {review.source}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
