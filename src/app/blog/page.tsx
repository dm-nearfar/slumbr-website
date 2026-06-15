import type { Metadata } from "next";
import { posts } from "@/content/blog/posts";
import PostCard from "@/components/PostCard";

const SITE = "https://slumbr.ai";

export const metadata: Metadata = {
  title: "Blog | Slumbr",
  description: "Behind the Dream — notes on dreams, AI, and building Slumbr.",
  alternates: { canonical: `${SITE}/blog` },
};

export default function BlogIndex() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-[760px] px-6 py-20 md:py-28">
        <h1 className="mb-3 font-display text-[40px] leading-[1.1] tracking-[-0.01em] text-white md:text-[52px]">
          Blog
        </h1>
        <p className="mb-14 text-[18px] leading-[1.6] text-grey">
          Behind the Dream — notes on dreams, AI, and building Slumbr.
        </p>
        <div className="space-y-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
