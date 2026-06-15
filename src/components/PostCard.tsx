import Link from "next/link";
import MediaPlaceholder from "./MediaPlaceholder";
import type { Post } from "@/content/blog/posts";

// Shared preview card used by the blog index and the homepage teaser, so the
// post data has a single source (src/content/blog/posts.ts). The thumbnail is a
// placeholder frame that upgrades to the real hero once it exists.
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-[24px] border border-[#2A2940] bg-[#1A1929] transition-all duration-300 hover:border-[#3D3B8E]/50"
    >
      <MediaPlaceholder
        kind="image"
        label={post.heroAlt}
        imageSrc={post.hero}
        className="rounded-none border-0"
      />
      <div className="p-8">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#C2C1FF]">
          {post.category}
          <span className="mx-2 text-[#6B6B7B]" aria-hidden="true">
            ·
          </span>
          <time dateTime={post.date} className="text-[#6B6B7B]">
            {post.dateLabel}
          </time>
        </p>
        <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white transition-colors group-hover:text-[#E5E9FF] md:text-[28px]">
          {post.title}
        </h3>
        <p className="mt-3 text-[16px] leading-[1.6] text-[#9090A0]">
          {post.description}
        </p>
        <span className="mt-5 inline-block text-[14px] font-semibold tracking-[0.05em] text-[#E5E9FF]">
          Read the post →
        </span>
      </div>
    </Link>
  );
}
