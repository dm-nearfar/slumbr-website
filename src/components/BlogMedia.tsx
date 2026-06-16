import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import DreamVideo from "./DreamVideo";
import MediaPlaceholder from "./MediaPlaceholder";

// Renders post media at the breakout width: looping <video> for case clips,
// optimised <Image> for stills, and an on-brand MediaPlaceholder when the file
// isn't in public/ yet (the default state). Server-only (build-time fs check);
// a rebuild upgrades placeholders to real media once assets land.
const VIDEO_MARKER = "-ai-video";

function hasPublicAsset(src: string): boolean {
  if (!src.startsWith("/")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export default function BlogMedia({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  if (src.includes(VIDEO_MARKER)) {
    const mp4 = src.replace(/\.webp$/, ".mp4");
    return hasPublicAsset(mp4) ? (
      <DreamVideo poster={src} label={alt} />
    ) : (
      <MediaPlaceholder kind="video" label={alt} />
    );
  }
  return hasPublicAsset(src) ? (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={900}
      priority={priority}
      sizes="(max-width: 1040px) 100vw, 1040px"
      className="aspect-video w-full rounded-2xl border border-border bg-surface object-cover"
    />
  ) : (
    <MediaPlaceholder kind="image" label={alt} />
  );
}
