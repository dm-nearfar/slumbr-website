import ReactMarkdown, { type Components } from "react-markdown";
import Link from "next/link";
import BlogMedia from "./BlogMedia";
import StoreBadges from "./StoreBadges";

// Filename markers: the four case clips -> <video>; the hero -> top banner.
const VIDEO_MARKER = "-ai-video";
const HERO_MARKER = "-dream-portal";

// Editorial measures: prose reads at a comfortable column; media breaks out wider.
const PROSE = "mx-auto w-full max-w-[720px]";
const MEDIA = "mx-auto w-full max-w-[1040px]";

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
    // CTA app-store links -> official badge row. The badge for the App Store link
    // renders both badges; the Google Play paragraph is then dropped (de-dupe).
    // This also drops the raw URL text and bold lead-in at the render layer.
    const appLink = kids.find((k) => k.type === "element" && k.tagName === "a");
    const appHref =
      appLink && appLink.type === "element" ? String(appLink.properties?.href ?? "") : "";
    if (appHref.includes("apps.apple.com")) {
      return <StoreBadges className={`${PROSE} my-10`} />;
    }
    if (appHref.includes("play.google.com")) {
      return null;
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
          className={`${PROSE} my-8 rounded-r-lg border-l-2 border-indigo/70 bg-surface/40 py-5 pr-5 pl-6 text-[18px] italic leading-[1.7] text-white/90 md:text-[19px]`}
        >
          {children}
        </blockquote>
      );
    }
    return (
      <p className={`${PROSE} mb-7 text-[18px] leading-[1.7] text-white/90 md:text-[19px]`}>
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
      className={`${PROSE} mb-7 list-disc space-y-4 pl-6 text-[18px] leading-[1.7] text-white/90 marker:text-indigo md:text-[19px]`}
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
    // The hero renders as a top banner on the page; suppress the inline duplicate.
    if (source.includes(HERO_MARKER)) {
      return null;
    }
    const isVideo = source.includes(VIDEO_MARKER);
    return (
      <div className={`${MEDIA} ${isVideo ? "mt-12 mb-3" : "my-12"}`}>
        <BlogMedia src={source} alt={description} />
      </div>
    );
  },
};

export default function PostBody({ content }: { content: string }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
