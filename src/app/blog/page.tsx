import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://slumbr.ai";
const POST_TITLE = "We Turned Real Dreams Into AI Videos: Here's What Happened";
const POST_DESCRIPTION =
  "We ran real dream journal entries through Slumbr's AI video generator, no cherry-picking. Funny, beautiful, sometimes unsettling. Here's what we learned.";

export const metadata: Metadata = {
  title: "Blog | Slumbr",
  description: "Behind the Dream — notes on dreams, AI, and building Slumbr.",
  alternates: { canonical: `${SITE}/blog` },
};

export default function BlogIndex() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="mb-3 font-display text-[40px] leading-[1.1] tracking-[-0.01em] text-white md:text-[52px]">
          Blog
        </h1>
        <p className="mb-14 text-[18px] leading-[1.6] text-grey">
          Behind the Dream — notes on dreams, AI, and building Slumbr.
        </p>

        <ul>
          <li className="border-t border-border pt-10">
            <Link href="/blog/we-turned-real-dreams-into-ai-videos" className="group block">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-indigo">
                Behind the Dream
                <span className="mx-2 text-footer" aria-hidden="true">
                  ·
                </span>
                <time dateTime="2026-06-14" className="text-footer">
                  14 June 2026
                </time>
              </p>
              <h2 className="font-display text-[26px] leading-[1.2] text-white transition-colors group-hover:text-lavender md:text-[32px]">
                {POST_TITLE}
              </h2>
              <p className="mt-3 text-[17px] leading-[1.6] text-grey">{POST_DESCRIPTION}</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
