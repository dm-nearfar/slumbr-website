// Cloud motifs at the top of the sky, after the app's splash and loader
// plates: soft cumulus banks a shade darker than the sky, drifting near the
// moon, with a faint lavender highlight where the moonlight catches an upper
// edge. Calm and sparse; atmosphere, not weather.
//
// Mounted once from the root layout as an early body child so every route
// gets it. Absolutely positioned across the top of the page at z-index -1,
// which in DOM order puts it above the body starfield (body::before) and
// below the moon (body::after) and all content. Everything is drawn inside
// the top 160 viewBox units, so at both container heights (420px, 560px from
// md) the clouds sit above the hero headline block and never dim its text.
// The SVG stretches to the full width (preserveAspectRatio none) and a
// Gaussian blur keeps the edges soft, never hard vector outlines.

export default function SkyClouds() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-[-1] h-[420px] overflow-hidden md:h-[560px]"
    >
      <svg
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        className="block h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="sky-cloud-soften" x="-10%" y="-40%" width="120%" height="180%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <g filter="url(#sky-cloud-soften)">
          {/* Broad bank, upper right, drifting beneath and around the moon */}
          <path
            d="M1060 160 C1090 130 1130 112 1176 120 C1200 90 1250 80 1290 98 C1316 74 1372 70 1400 94 C1420 88 1436 96 1440 104 L1440 160 Z"
            fill="#14113C"
            fillOpacity="0.5"
          />
          {/* Thin wisp, upper left */}
          <path
            d="M0 100 C40 84 80 60 130 64 C170 44 220 40 262 56 C300 48 350 52 380 70 C400 78 416 90 420 100 Z"
            fill="#14113C"
            fillOpacity="0.42"
          />
          {/* Moonlight catching the upper edge of the right bank */}
          <path
            d="M1176 122 C1200 94 1250 84 1290 102 C1316 80 1372 76 1400 98 L1396 110 C1370 92 1322 96 1298 116 C1258 100 1212 108 1188 134 Z"
            fill="#B3BCF5"
            fillOpacity="0.08"
          />
        </g>
      </svg>
    </div>
  );
}
