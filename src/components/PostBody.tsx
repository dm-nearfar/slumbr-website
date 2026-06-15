import ReactMarkdown, { type Components } from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import DreamVideo from "./DreamVideo";
import MediaPlaceholder from "./MediaPlaceholder";

// Filename markers: the four case clips -> <video>; the hero -> priority image.
const VIDEO_MARKER = "-ai-video";
const HERO_MARKER = "-dream-portal";

// Editorial measures: prose reads at a comfortable column; media breaks out wider.
const PROSE = "mx-auto w-full max-w-[720px]";
const MEDIA = "mx-auto w-full max-w-[1040px]";

// Build-time check: has the referenced public asset been added yet? Missing is
// the default state — when the file lands in public/ a rebuild renders it for real.
function hasPublicAsset(src: string): boolean {
  if (!src.startsWith("/")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

const components: Components = {
  h1: ({ children }) => (
    <h1
      className={`${PROSE} mb-6 font-display text-[40px] leading-[1.1] tracking-[-0.01em] text-white md:text-[52px]`}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className={`${PROSE} mt-20 mb-6 font-display text-[28px] leading-[1.25] text-white md:text-[36px]`}
    >
      {children}
    </h2>
  ),
  p: ({ children, node }) => {
    const kids = node?.children ?? [];
    const lone = kids.length === 1 ? kids[0] : undefined;

    // Lone media -> unwrap so the framed media isn't nested inside <p>.
    if (lone && lone.type === "element" && lone.tagName === "img") {
      return <>{children}</>;
    }
    // ✦ ✦ ✦ divider, preserved exactly and centred.
    if (lone && lone.type === "text" && lone.value.trim() === "✦ ✦ ✦") {
      return (
        <p className={`${PROSE} my-16 text-center text-[18px] tracking-[0.6em] text-gold/60`}>
          {children}
        </p>
      );
    }
    // A wholly-italic paragraph = caption / aside: smaller, muted, centred.
    if (lone && lone.type === "element" && lone.tagName === "em") {
      return (
        <p
          className={`${PROSE} -mt-1 mb-12 text-center text-[14px] italic leading-[1.6] text-footer`}
        >
          {children}
        </p>
      );
    }
    // Journal entry: paragraph led by a <strong> "The journal entry:" label.
    const first = kids[0];
    const isJournalEntry =
      first?.type === "element" &&
      first.tagName === "strong" &&
      first.children[0]?.type === "text" &&
      first.children[0].value.startsWith("The journal entry");
    if (isJournalEntry) {
      return (
        <blockquote
          className={`${PROSE} my-8 rounded-r-lg border-l-2 border-indigo/70 bg-surface/40 py-5 pr-5 pl-6 text-[18px] italic leading-[1.7] text-grey md:text-[19px]`}
        >
          {children}
        </blockquote>
      );
    }
    return (
      <p className={`${PROSE} mb-7 text-[18px] leading-[1.7] text-grey md:text-[19px]`}>
        {children}
      </p>
    );
  },
  a: ({ href, children }) => {
    const url = typeof href === "string" ? href : "#";
    const cn =
      "text-lavender underline decoration-indigo/60 underline-offset-4 transition-colors hover:decoration-lavender";
    if (url.startsWith("/")) {
      return (
        <Link href={url} className={cn}>
          {children}
        </Link>
      );
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={cn}>
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul
      className={`${PROSE} mb-7 list-disc space-y-4 pl-6 text-[18px] leading-[1.7] text-grey marker:text-indigo md:text-[19px]`}
    >
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  img: ({ src, alt }) => {
    const source = typeof src === "string" ? src : "";
    const description = typeof alt === "string" ? alt : "";

    // The four case clips -> looping <video> when present, else placeholder.
    if (source.includes(VIDEO_MARKER)) {
      const mp4 = source.replace(/\.webp$/, ".mp4");
      return (
        <div className={`${MEDIA} mt-12 mb-3`}>
          {hasPublicAsset(mp4) ? (
            <DreamVideo poster={source} label={description} />
          ) : (
            <MediaPlaceholder kind="video" label={description} />
          )}
        </div>
      );
    }

    // Hero / CTA images -> optimised <Image> when present, else placeholder.
    const isHero = source.includes(HERO_MARKER);
    return (
      <div className={`${MEDIA} ${isHero ? "mt-2 mb-3" : "my-12"}`}>
        {hasPublicAsset(source) ? (
          <Image
            src={source}
            alt={description}
            width={1200}
            height={isHero ? 630 : 675}
            priority={isHero}
            sizes="(max-width: 1040px) 100vw, 1040px"
            className="aspect-video w-full rounded-2xl border border-border bg-surface object-cover"
          />
        ) : (
          <MediaPlaceholder kind="image" label={description} />
        )}
      </div>
    );
  },
};

export default function PostBody({ content }: { content: string }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
