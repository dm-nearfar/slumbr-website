import Image from "next/image";

// Reusable device frame: titanium rounded frame with a Dynamic Island cutout,
// the app screenshot composited inside, and its own light behind. All CSS;
// the only raster is the screenshot itself.
//
// The night captures are close to the page's own colour, so the phone brings
// its own ground and light. Back to front:
//   backplate  .phone-backplate, accent at 14% in the centre to clear at 70%,
//              240% of the phone's width and 140% of its height, centred
//   glow       .phone-glow, glow at 32%: an ellipse 150% of the phone's width
//              and 100% of its height, centred at 55%, with the soft edge of
//              a 90px blur at the 420px hero phone
//   core       on the frame, accent at 12% leaking 40px (sigma) from its edge
//   frame      .phone-frame in the finish FINISH names. Natural titanium,
//              #D2D5DE at the top-left to #9497A6 at the bottom-right, with a
//              1px rim in white at 60% on the top and left and at 15% on the
//              bottom and right, and the drop shadow. The dark finish
//              (#3B3F4F to #1B1D26, rim 28% and 8%) is kept in globals.css
//   line       a 1px line in #0B0B10 around the screen, so the dark screen
//              reads as glass set in metal
//   glass      over the screenshot and under the island cutout, a sheen from
//              white at 6% in the top-left corner to clear by 45%, and a 1px
//              inner edge in white at 14% that follows the screen radius
//
// Nothing behind the phone uses a CSS filter. The backplate and the glow are
// gradients that reach zero INSIDE their own box, so no light depends on
// painting outside an element's bounds, which is the part a browser can cut
// off at a layer edge. The glow's box is larger than its ellipse by the width
// of the soft edge (257.14% by 171.43% of the phone); the stops in
// globals.css are that blur's profile.
//
// Nothing uses a negative z-index either. The layers come first in the DOM
// and the ring sits at z-index 1, so in a duo both phones' light paints
// behind both phones. The wrapper that places the phone must be a stacking
// context (`isolate`, or a z-index) to keep that z-index local, and anything
// floated over the phone (the archetype card) needs a z-index above 1.
//
// Island sizing is set once for every shot. Every 2.0.1 capture (iPhone 16
// Pro Max, 1320x2868) renders the island in its own status bar: the pill
// spans x 472 to 847 and y 42 to 151 on that source. The cutout below is 34%
// of the screen width, 4:1, starting 1.6% down the screen height, which is
// x 436 to 884 and y 46 to 158 on the same source, so it covers the rendered
// pill on both sides and below. The pill's top 4 source pixels sit above the
// cutout, black on near black, and do not read.
//
// Screens ship at 840x1826 (2x of the largest rendered width) and the
// explicit width and height keep the frame from shifting while the image
// loads. `sizes` defaults to the band layouts: full-ish width on phones,
// capped at 420 CSS px on larger screens.
//
// The chrome is self-similar in plain CSS (no container queries, which iOS
// Safari failed to render here). Ring and bezel paddings are percentages,
// which resolve against the containing block's WIDTH, and each layer's
// radius uses the two-value slash form: horizontal as a percentage of the
// layer's width, vertical as that divided by the layer's fixed aspect ratio,
// so every corner is circular. Calibrated so a 420px frame reproduces the
// former fixed chrome exactly (3px ring, 10px bezel, 51.2 / 48 / 38.4px
// radii); see CHROME for the arithmetic.

type PhoneFrameProps = {
  src: string;
  /** Describe the app screen shown, not the file. */
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** The backplate and the glow behind the device. */
  glow?: boolean;
  className?: string;
};

// Calibration at a 420px frame with an 840x1826 screen:
//   ring padding  3 / 420  = 0.714286% of the wrapper width
//   bezel padding 10 / 414 = 2.415459% of the ring's content width
//   layer aspect ratios (height / width) are then fixed:
//   ring 2.101145, bezel 2.117104, screen 2.173810 (= 1826 / 840)
//   radii: ring 51.2 / 420 and 51.2 / 882.48, bezel 48 / 414 and 48 / 876.48,
//   screen 38.4 / 394 and 38.4 / 856.48.
// The frame's finish: "phone-frame-natural" or "phone-frame-dark". Both are
// defined in globals.css; this one line flips every phone on the site.
const FINISH = "phone-frame-natural";

const CHROME = {
  ring: { padding: "0.714286%", borderRadius: "12.1905% / 5.8018%" },
  bezel: { padding: "2.415459%", borderRadius: "11.5942% / 5.4764%" },
  screen: { borderRadius: "9.7462% / 4.4835%" },
} as const;

export default function PhoneFrame({
  src,
  alt,
  width = 840,
  height = 1826,
  sizes = "(max-width: 768px) 80vw, 420px",
  priority = false,
  glow = true,
  className = "",
}: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <>
          <div aria-hidden className="phone-backplate -inset-x-[70%] -inset-y-[20%]" />
          <div
            aria-hidden
            className="phone-glow -inset-x-[78.57%] -top-[30.714%] -bottom-[40.714%]"
          />
        </>
      ) : null}
      {/* Titanium frame: rim highlight, core light and drop shadow */}
      <div className={`phone-frame ${FINISH} relative z-[1]`} style={CHROME.ring}>
        {/* Bezel: spacing only, the frame's titanium shows through */}
        <div style={CHROME.bezel}>
          {/* Screen, with the 1px line that parts it from the metal */}
          <div
            className="relative overflow-hidden bg-[#0B0B10] shadow-[0_0_0_1px_#0B0B10]"
            style={CHROME.screen}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              className="block h-auto w-full"
            />
            {/* Screen glass, under the island cutout */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_45%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]"
            />
            {/* Dynamic Island cutout */}
            <div
              aria-hidden
              className="absolute left-1/2 top-[1.6%] aspect-[4/1] w-[34%] -translate-x-1/2 rounded-full bg-[#0B0B10]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
