import Image from "next/image";
import Link from "next/link";

// Site navigation, mounted on every route by src/app/layout.tsx.
export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2940] bg-[#0F0E1A]/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-16">
        <Link href="/#top" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Slumbr logo" width={32} height={32} />
          <span className="font-display text-[24px] font-medium tracking-tight text-white">
            Slumbr
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-[15px] font-semibold tracking-[0.05em] md:flex">
          <Link
            href="/#how-it-works"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            How it Works
          </Link>
          <Link
            href="/#pricing"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>
        <Link
          href="/#download"
          className="rounded-full bg-[#3D3B8E] px-6 py-2.5 text-[15px] font-semibold tracking-[0.05em] text-[#E5E9FF] transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(61,59,142,0.5)] active:scale-95"
        >
          Get the App
        </Link>
      </div>
    </nav>
  );
}
