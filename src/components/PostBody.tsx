import ReactMarkdown, { type Components } from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import DreamVideo from "./DreamVideo";

// Filename markers used to decide how a markdown image renders.
const VIDEO_MARKER = "-ai-video"; // the four case clips -> <video>
const HERO_MARKER = "-dream-portal"; // hero -> eager/priority <Image>

// Element overrides that style the verbatim markdown to the Nocturne Cinematic
// design system (see DESIGN.md) and swap the media placeholders for real markup.
const components: Components = {
  h1: ({ children }) => (
    <h1 className="mb-6 font-display text-[40px] leading-[1.1] tracking-[-0.01em] text-white md:text-[52px]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-16 mb-5 font-display text-[26px] leading-[1.2] text-white md:text-[34px]">
      {children}
    </h2>
  ),
  p: ({ children, node }) => {
    const kids = node?.children ?? [];
    const lone = kids.length === 1 ? kids[0] : undefined;
    // Lift lone media out of <p>: block-level <video>/<div> can't nest in <p>.
    if (lone && lone.type === "element" && lone.tagName === "img") {
      return <>{children}</>;
    }
    // Preserve the ✦ ✦ ✦ dividers exactly, styled as centred section breaks.
    if (lone && lone.type === "text" && lone.value.trim() === "✦ ✦ ✦") {
      return (
        <p className="my-12 text-center text-[18px] tracking-[0.6em] text-gold/70">
          {children}
        </p>
      );
    }
    return (
      <p className="mb-6 text-[17px] leading-[1.75] text-grey md:text-[18px]">{children}</p>
    );
  },
  a: ({ href, children }) => {
    const url = typeof href === "string" ? href : "#";
    const className =
      "text-lavender underline decoration-indigo/60 underline-offset-4 transition-colors hover:decoration-lavender";
    if (url.startsWith("/")) {
      return (
        <Link href={url} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-6 list-disc space-y-3 pl-6 text-[17px] leading-[1.75] text-grey marker:text-indigo md:text-[18px]">
      {children}
    </ul>
  ),
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  img: ({ src, alt }) => {
    const source = typeof src === "string" ? src : "";
    const description = typeof alt === "string" ? alt : "";
    if (source.includes(VIDEO_MARKER)) {
      return <DreamVideo poster={source} label={description} />;
    }
    const isHero = source.includes(HERO_MARKER);
    return (
      <Image
        src={source}
        alt={description}
        width={1200}
        height={isHero ? 630 : 675}
        priority={isHero}
        sizes="(max-width: 768px) 100vw, 768px"
        className="my-8 h-auto w-full rounded-2xl border border-border bg-surface"
      />
    );
  },
};

export default function PostBody({ content }: { content: string }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
