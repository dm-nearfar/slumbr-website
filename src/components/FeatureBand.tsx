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
// Pass `secondSrc` and `secondAlt` for a phone duo: the main phone in front
// and a second phone behind it at 85% of its width, offset up and to the
// right so roughly a third of it sits behind the front phone, with a softer
// shadow and the band's one glow shared. The duo wrapper is sized as a whole
// (front width plus the rear phone's protrusion) so nothing overflows; on
// narrow screens it shrinks proportionally.

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
            /* Duo. Outer width = 1.53 x front width: front phone 65.4% at the
               left and bottom, rear phone 55.6% (85% of the front) pinned to
               the top right, so the overlap is 21% of the outer width. */
            <div className="relative w-full max-w-[340px] md:max-w-[550px]">
              <div aria-hidden className="glow -inset-x-24 -inset-y-12" />
              <div className="absolute right-0 top-0 z-0 w-[55.6%]">
                <PhoneFrame
                  src={secondSrc}
                  alt={secondAlt}
                  sizes="(max-width: 768px) 190px, 306px"
                  glow={false}
                  shadow="soft"
                />
              </div>
              <div className="relative z-10 mt-[10%] w-[65.4%]">
                <PhoneFrame
                  src={src}
                  alt={alt}
                  sizes="(max-width: 768px) 222px, 360px"
                  glow={false}
                />
                {phoneOverlay}
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
