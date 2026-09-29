"use client";

import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import { reveal } from "@/lib/motion";

// A feature band: headline and sub-line on one side, a framed phone with its
// own light on the other. Text sits above the phone on mobile. `mirrored`
// puts the phone on the left from md up. `body` is an optional supporting
// paragraph under the sub-line. `phoneOverlay` renders inside the phone
// wrapper for floating elements (the archetype card); `decoration` renders
// at section level for atmosphere (constellation lines).
//
// Pass `secondSrc` and `secondAlt` for a phone duo. From md the two equal
// phones sit side by side in a flex row, the main phone on the left and the
// second on the right nudged 24px down for rhythm, nothing obscured on either
// screen. Below md there is no room for two readable phones side by side, so
// they stagger: both 260px wide, the main phone behind at the top-left, the
// second in front, set 40% of its width to the right and 60% of its height
// down, so it starts below the main screen's voice card and covers only the
// empty lower part of that screen. Both share one grid cell, and the front
// phone's margins place it, so the wrapper takes the stagger's height by
// itself. Its width is 1.4 phones,
// 364px, and never more than the window less 26px, so on a screen narrower
// than 390px both phones shrink together and keep their proportions.
//
// Each phone carries its own backplate and glow (PhoneFrame); the wrapper is
// a stacking context (`isolate`) so the light of both paints behind both
// phones, and the second phone, later in the DOM, paints in front of the
// first. That light is wider than the phone and is never clipped here, so
// the text block sits at z-10 to stay in front of it where the two meet.
//
// The stagger's percentages are of the wrapper's width, which is what grid
// item margins resolve against: a phone is 1 / 1.4 = 71.4286% of it, 40% of a
// phone is 28.5714%, and 60% of a phone's height (2.101145 times its width)
// is 90.0491%.

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
        <motion.div className="relative z-10 flex-1 text-center md:text-left" {...reveal}>
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
            /* Duo. Below md a stagger of two 260px phones. From md equal
               halves of the wrapper minus the gap, 316px each at the 660px
               maximum. */
            <div className="relative isolate grid w-[min(364px,calc(100vw-26px))] md:flex md:w-full md:max-w-[660px] md:items-start md:gap-7">
              <div className="relative col-start-1 row-start-1 w-[71.4286%] md:w-auto md:min-w-0 md:flex-1">
                <PhoneFrame
                  src={src}
                  alt={alt}
                  sizes="(max-width: 768px) 260px, 316px"
                />
                {phoneOverlay}
              </div>
              <div className="relative col-start-1 row-start-1 ml-[28.5714%] mt-[90.0491%] w-[71.4286%] md:ml-0 md:mt-6 md:w-auto md:min-w-0 md:flex-1">
                <PhoneFrame
                  src={secondSrc}
                  alt={secondAlt}
                  sizes="(max-width: 768px) 260px, 316px"
                />
              </div>
            </div>
          ) : (
            <div className="relative isolate w-[280px] md:w-[360px]">
              <PhoneFrame
                src={src}
                alt={alt}
                sizes="(max-width: 768px) 280px, 360px"
              />
              {phoneOverlay}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
