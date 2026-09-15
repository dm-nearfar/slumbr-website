import Image from "next/image";
import Link from "next/link";

// Site footer, mounted on every route by src/app/layout.tsx. Sits on the
// darkest tone at the page base.
const LINK =
  "text-[15px] font-semibold text-white/70 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-white/10 pt-12 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Slumbr app icon" width={28} height={28} />
            <span className="text-[22px] font-bold tracking-tight text-white">
              Slumbr
            </span>
          </div>
          <p className="text-[14px] text-white/50">
            &copy; 2026 Slumbr LTD. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-8">
          <Link href="/blog" className={LINK}>
            Blog
          </Link>
          <Link href="/privacy-policy" className={LINK}>
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className={LINK}>
            Terms &amp; Conditions
          </Link>
          <Link href="/delete-account" className={LINK}>
            Delete account
          </Link>
          <a href="mailto:contact@slumbr.ai" className={LINK}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
