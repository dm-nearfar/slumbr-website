import Image from "next/image";

// Reusable device frame: dark titanium rounded frame with a Dynamic Island
// cutout, the app screenshot composited inside, and a soft glow behind. All
// CSS; the only raster is the screenshot itself.
//
// Island sizing is set once for every shot and measured against
// shot3_recording_waveform, the only capture whose own status bar renders the
// island (with the orange recording dot). On the 1206px-wide source the pill
// spans x 414 to 791 and y 50 to 144. The cutout below is 34% of the screen
// width, 4:1, starting 1.6% down the screen height, so it fully covers that
// rendered pill on shot3 and lands in the same spot on every other shot.
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
  /** Soft .glow ellipse behind the device. Off when a band supplies its own. */
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
      {glow ? <div aria-hidden className="glow -inset-12" /> : null}
      {/* Titanium ring */}
      <div
        className="relative bg-gradient-to-b from-[#6B6B78] via-[#2C2C36] to-[#55555F] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)]"
        style={CHROME.ring}
      >
        {/* Bezel */}
        <div className="bg-[#0B0B10]" style={CHROME.bezel}>
          {/* Screen */}
          <div className="relative overflow-hidden bg-[#0B0B10]" style={CHROME.screen}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              className="block h-auto w-full"
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
