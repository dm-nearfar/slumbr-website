// Layered mountain-valley silhouettes with a warm glow rising from the valley.
// Appears ONLY at the page base: mounted under the closing CTA and running
// behind the footer (Phase 5 of the 2026-09 rebrand). Pure SVG and CSS, no
// raster. The parent must be position: relative; the base pins itself to the
// parent's bottom edge and stretches edge to edge. Content that should sit on
// top of the mountains needs position: relative and a z-index above 0.

const FAR =
  "M0 236 C90 190 150 150 240 152 C330 154 380 210 470 206 C560 202 620 132 720 124 C820 116 880 196 970 202 C1060 208 1120 150 1210 140 C1300 130 1380 172 1440 200 L1440 420 L0 420 Z";

const MID =
  "M0 300 C80 262 140 226 230 232 C320 238 370 292 450 300 C530 308 590 262 660 280 C730 298 760 330 800 330 C840 330 890 290 960 278 C1030 266 1090 300 1160 292 C1230 284 1290 232 1350 236 C1400 240 1420 262 1440 276 L1440 420 L0 420 Z";

const NEAR =
  "M0 358 C70 334 130 316 220 322 C310 328 360 356 440 360 C520 364 570 342 640 346 C700 350 740 372 800 372 C860 372 920 344 990 340 C1060 336 1120 360 1190 356 C1260 352 1320 322 1380 326 C1410 328 1430 340 1440 348 L1440 420 L0 420 Z";

export default function MountainBase({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden ${className}`}
    >
      {/* Warm glow rising from the valley floor, behind the ridges */}
      <div
        className="absolute bottom-[10%] left-1/2 h-[70%] w-[72%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 226, 200, 0.34) 0%, rgba(196, 181, 253, 0.16) 48%, rgba(196, 181, 253, 0) 100%)",
        }}
      />
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        className="relative block h-[240px] w-full md:h-[360px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={FAR} fill="#3B2A7A" />
        <path d={MID} fill="#2A1E5E" />
        <path d={NEAR} fill="#1A1442" />
      </svg>
    </div>
  );
}
