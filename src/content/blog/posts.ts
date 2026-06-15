// Single source of truth for blog post previews (blog index + homepage teaser).
// The post page's own <head>/JSON-LD live in its route; this is presentation
// metadata for cards only. Add new posts to the front of the array.

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO (machine)
  dateLabel: string; // display (en-GB)
  hero: string; // /images/...webp (may not exist yet)
  heroAlt: string;
};

export const posts: Post[] = [
  {
    slug: "we-turned-real-dreams-into-ai-videos",
    title: "We Turned Real Dreams Into AI Videos: Here's What Happened",
    description:
      "We ran real dream journal entries through Slumbr's AI video generator, no cherry-picking. Funny, beautiful, sometimes unsettling. Here's what we learned.",
    category: "Behind the Dream",
    date: "2026-06-14",
    dateLabel: "14 June 2026",
    hero: "/images/slumbr-hero-dream-portal.webp",
    heroAlt:
      "A glowing spiral dream portal opening in the night sky above a sleeping town.",
  },
];

export const latestPost = posts[0];
