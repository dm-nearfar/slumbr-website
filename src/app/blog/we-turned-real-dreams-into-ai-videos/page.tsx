import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import PostBody from "@/components/PostBody";
import BlogMedia from "@/components/BlogMedia";
import { posts } from "@/content/blog/posts";
import schema from "@/content/blog/we-turned-real-dreams-into-ai-videos.schema.json";

// Fully static page: the markdown is read at build time and prerendered.
export const dynamic = "force-static";

const SITE = "https://slumbr.ai";
const SLUG = "we-turned-real-dreams-into-ai-videos";
const POST_URL = `${SITE}/blog/${SLUG}`;
const TITLE = "We Turned Real Dreams Into AI Videos: Here's What Happened";
const HERO = `${SITE}/images/slumbr-hero-dream-portal.webp`;
const HERO_ALT =
  "A glowing spiral dream portal opening in the night sky above a sleeping town.";

const post = posts.find((p) => p.slug === SLUG);
const heroImage = post?.hero ?? "/images/slumbr-hero-dream-portal.webp";
const heroImageAlt = post?.heroAlt ?? HERO_ALT;

// Head meta mapped to the Next Metadata API from head-and-schema.html. The meta,
// og and twitter descriptions are intentionally worded differently there.
export const metadata: Metadata = {
  title: TITLE,
  description:
    "We ran real dream journal entries through Slumbr's AI video generator, no cherry-picking. Funny, beautiful, sometimes unsettling. Here's what we learned.",
  alternates: { canonical: POST_URL },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "article",
    siteName: "Slumbr",
    title: TITLE,
    description:
      "We ran real dream journal entries through Slumbr's AI video generator, no cherry-picking. Here's what came out.",
    url: POST_URL,
    images: [{ url: HERO, width: 1200, height: 630, alt: HERO_ALT }],
    locale: "en_GB",
    publishedTime: "2026-06-14",
    modifiedTime: "2026-06-15",
    authors: ["Slumbr"],
    section: "Behind the Dream",
    tags: ["AI dream video", "dream journal app", "AI dream analysis"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@slumbr",
    title: TITLE,
    description:
      "Real dream journal entries, run through Slumbr's AI video generator. No cherry-picking. Here's what came out.",
    images: [{ url: HERO, alt: HERO_ALT }],
  },
};

function getPostBody(): string {
  const file = path.join(process.cwd(), "src/content/blog", `${SLUG}.md`);
  const raw = fs.readFileSync(file, "utf8");
  return raw
    .replace(/^---\n[\s\S]*?\n---\n/, "") // drop YAML front matter (mapped above)
    .replace(/<!--[\s\S]*?-->/g, ""); // drop authoring comments (non-content)
}

export default function Page() {
  const body = getPostBody();
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-[1088px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[720px]">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-[13px] tracking-[0.04em] text-footer"
        >
          <Link href="/" className="transition-colors hover:text-grey">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link href="/blog" className="transition-colors hover:text-grey">
            Blog
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-grey">{TITLE}</span>
        </nav>

        <p className="mb-8 text-[12px] font-bold uppercase tracking-[0.18em] text-indigo">
          Behind the Dream
          <span className="mx-2 text-footer" aria-hidden="true">
            ·
          </span>
          <time dateTime="2026-06-14" className="text-footer">
            14 June 2026
          </time>
          <span className="mx-2 text-footer" aria-hidden="true">
            ·
          </span>
          <span className="text-footer">Slumbr Team</span>
        </p>
        </div>

        <div className="mx-auto mb-12 mt-4 w-full max-w-[1040px]">
          <BlogMedia src={heroImage} alt={heroImageAlt} priority />
        </div>

        <article>
          <PostBody content={body} />
        </article>

        <div className="mx-auto mt-16 max-w-[720px] border-t border-border pt-8">
          <Link
            href="/blog"
            className="text-[15px] text-lavender underline decoration-indigo/60 underline-offset-4 hover:decoration-lavender"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
