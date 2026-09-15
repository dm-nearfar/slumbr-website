import Link from "next/link";
import MediaPlaceholder from "./MediaPlaceholder";
import type { Post } from "@/content/blog/posts";

// Shared preview card used by the blog index and the homepage teaser, so the
// post data has a single source (src/content/blog/posts.ts). Dark glass on
// the sky gradient with a soft purple glow on hover. The thumbnail is a
// placeholder frame that upgrades to the real hero once it exists.
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-[32px] border border-white/10 bg-indigo-deep/50 backdrop-blur-xl transition-all duration-300 hover:border-glow/60 hover:shadow-[0_0_48px_rgba(139,92,246,0.35)]"
    >
      <MediaPlaceholder
        kind="image"
        label={post.heroAlt}
        imageSrc={post.hero}
        className="rounded-none border-0"
      />
      <div className="p-8">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
          {post.category}
          <span className="mx-2 text-white/65" aria-hidden="true">
            ·
          </span>
          <time dateTime={post.date} className="text-white/65">
            {post.dateLabel}
          </time>
        </p>
        <h3 className="text-[24px] font-bold leading-[1.2] text-white md:text-[28px]">
          {post.title}
        </h3>
        <p className="mt-3 text-[16px] font-medium leading-[1.6] text-white/85">
          {post.description}
        </p>
        <span className="mt-5 inline-block text-[14px] font-semibold text-accent">
          Read the post →
        </span>
      </div>
    </Link>
  );
}
