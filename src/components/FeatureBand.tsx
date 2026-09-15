"use client";

import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { reveal } from "@/lib/motion";

// A feature band: headline and sub-line on one side, a framed phone with a
// soft glow on the other. Text sits above the phone on mobile. `mirrored`
// puts the phone on the left from md up. `body` is an optional supporting
// paragraph under the sub-line. `phoneOverlay` renders inside the phone
// wrapper for floating elements (the archetype card); `decoration` renders
// at section level for atmosphere (constellation lines).
//
// Pass `secondSrc` and `secondAlt` for a phone duo: two equal phones side by
// side in a flex row, the main phone on the left and the second on the right
// nudged 24px down for rhythm, nothing obscured on either screen. The pair
// shares the band's one glow. The wrapper caps the pair's width so it never
// overflows its container; on narrow screens both phones shrink together.

type FeatureBandProps = {
  id?: string;
  headline: React.ReactNode;
  subline: string;
  body?: string;
  src: string;
  alt: string;
  mirrored?: boolean;
  secondSrc?: string;
  secondAlt?: string;
  phoneOverlay?: React.ReactNode;
  decoration?: React.ReactNode;
};

export default function FeatureBand({
  id,
  headline,
  subline,
  body,
  src,
  alt,
  mirrored = false,
  secondSrc,
  secondAlt,
  phoneOverlay,
  decoration,
}: FeatureBandProps) {
  return (
    <section id={id} className="relative px-6 py-16 md:px-16 md:py-24">
      {decoration}
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-12 md:gap-20 ${
          mirrored ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <motion.div className="flex-1 text-center md:text-left" {...reveal}>
          <h2 className="mb-5 text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[56px]">
            {headline}
          </h2>
          <p className="mx-auto max-w-xl text-[19px] font-medium leading-[1.6] text-white/85 md:mx-0 md:text-[21px]">
            {subline}
          </p>
          {body ? (
            <p className="mx-auto mt-5 max-w-xl text-[17px] font-medium leading-[1.7] text-white/85 md:mx-0">
              {body}
            </p>
          ) : null}
        </motion.div>
        <motion.div className="relative flex flex-1 justify-center" {...reveal}>
          {secondSrc && secondAlt ? (
            /* Duo: equal halves of the wrapper minus the gap, so each phone
               is 190px at the 400px mobile maximum and 316px at the 660px
               maximum from md. */
            <div className="relative flex w-full max-w-[400px] items-start gap-5 md:max-w-[660px] md:gap-7">
              <div aria-hidden className="glow -inset-x-24 -inset-y-12" />
              <div className="relative min-w-0 flex-1">
                <PhoneFrame
                  src={src}
                  alt={alt}
                  sizes="(max-width: 768px) 190px, 316px"
                  glow={false}
                />
                {phoneOverlay}
              </div>
              <div className="relative mt-6 min-w-0 flex-1">
                <PhoneFrame
                  src={secondSrc}
                  alt={secondAlt}
                  sizes="(max-width: 768px) 190px, 316px"
                  glow={false}
                />
              </div>
            </div>
          ) : (
            <div className="relative w-[280px] md:w-[360px]">
              <div aria-hidden className="glow -inset-x-24 -inset-y-12" />
              <PhoneFrame
                src={src}
                alt={alt}
                sizes="(max-width: 768px) 280px, 360px"
                glow={false}
              />
              {phoneOverlay}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
