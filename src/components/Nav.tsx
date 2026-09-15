import Image from "next/image";
import Link from "next/link";

// Site navigation, mounted on every route by src/app/layout.tsx. Sits on the
// sky gradient as a translucent indigo bar. Anchors are root-relative so they
// resolve from the blog and legal pages as well as the homepage.
const LINK =
  "text-[15px] font-semibold tracking-[0.02em] text-white/80 transition-colors hover:text-white";

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-indigo-deep/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-16">
        <Link href="/#top" className="flex items-center gap-3 rounded-lg">
          <Image src="/logo.png" alt="Slumbr app icon" width={32} height={32} />
          <span className="text-[22px] font-bold tracking-tight text-white">
            Slumbr
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#how-it-works" className={LINK}>
            How it Works
          </Link>
          <Link href="/#pricing" className={LINK}>
            Pricing
          </Link>
          <Link href="/blog" className={LINK}>
            Blog
          </Link>
        </div>
        <Link
          href="/#download"
          className="rounded-full bg-cta px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:shadow-[0_4px_24px_rgba(139,92,246,0.55)] motion-safe:hover:-translate-y-0.5 active:scale-95"
        >
          Get the App
        </Link>
      </div>
    </nav>
  );
}
