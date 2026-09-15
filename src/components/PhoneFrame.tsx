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
// The chrome is self-similar: the wrapper is a size container and the ring
// padding, bezel padding and the three radii are in cqw, calibrated so a
// 420px render matches the former fixed values (3px ring, 10px bezel,
// 51.2px / 48px / 38.4px radii). Small renders such as the capture duo on
// mobile keep the same proportions instead of looking squashed.

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
    <div className={`relative @container ${className}`}>
      {glow ? <div aria-hidden className="glow -inset-12" /> : null}
      {/* Titanium ring */}
      <div className="relative rounded-[12.19cqw] bg-gradient-to-b from-[#6B6B78] via-[#2C2C36] to-[#55555F] p-[0.714cqw] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)]">
        {/* Bezel */}
        <div className="rounded-[11.43cqw] bg-[#0B0B10] p-[2.381cqw]">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[9.143cqw] bg-[#0B0B10]">
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
