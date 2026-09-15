// Layered mountain-valley silhouettes with a warm glow rising from the valley,
// after the app's closing plates: soft-shouldered crests that change direction
// decisively, concave saddles between them, and the three layers descending
// from both screen edges into a lower central valley where the glow rises.
// Appears ONLY at the page base: the Footer mounts it so the ridges rise under
// the closing CTA and run behind the footer content. Pure SVG and CSS, no
// raster. The parent must be position: relative and tall enough to hold the
// box (300px, 440px from md); the base pins itself to the parent's bottom
// edge and stretches edge to edge. Content that sits on top of the mountains
// needs position: relative and a z-index above 0.
//
// Paths are hand-drawn cubic curves on a 1440x420 viewBox. Crests and saddles
// have horizontal tangents so shoulders stay soft; the handles are short at
// the crests so the direction change reads as a peak rather than a swell.
// Each layer's crests are offset from the layer behind so the ridges
// interleave, and every layer's lowest point sits in the middle third.

// Four crests (x 176, 424, 1016, 1296), valley floor about y 240 at x 700
// to 810.
const FAR =
  "M0 152 C70 140 120 118 176 118 C232 118 264 178 304 178 C344 178 376 138 424 138 C486 138 540 208 616 226 C672 239 748 244 812 240 C880 236 940 186 1016 156 C1072 134 1112 192 1160 192 C1208 192 1240 114 1296 114 C1352 114 1400 150 1440 158 L1440 420 L0 420 Z";

// Three crests (x 212, 1004, 1322), valley floor about y 312 at x 700 to 770.
const MID =
  "M0 258 C64 236 140 200 212 200 C270 200 316 262 372 272 C440 284 520 300 620 306 C700 311 770 312 828 300 C904 284 950 224 1004 220 C1058 216 1104 282 1168 282 C1220 282 1266 212 1322 212 C1372 212 1410 240 1440 250 L1440 420 L0 420 Z";

// Two broad crests (x 262, 1160), valley floor y 376 at x 730.
const NEAR =
  "M0 336 C90 322 180 298 262 298 C350 298 430 340 520 356 C600 370 680 376 730 376 C800 376 880 362 960 340 C1040 318 1100 306 1160 306 C1240 306 1320 330 1440 346 L1440 420 L0 420 Z";

export default function MountainBase({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[300px] overflow-hidden md:h-[440px] ${className}`}
    >
      {/* Warm glow rising from the valley floor, behind the ridges */}
      <div
        className="absolute bottom-[14%] left-1/2 h-[64%] w-[72%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 226, 200, 0.34) 0%, rgba(196, 181, 253, 0.16) 48%, rgba(196, 181, 253, 0) 100%)",
        }}
      />
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 block h-[240px] w-full md:h-[380px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={FAR} fill="#3B2A7A" />
        <path d={MID} fill="#2A1E5E" />
        <path d={NEAR} fill="#1A1442" />
      </svg>
    </div>
  );
}
