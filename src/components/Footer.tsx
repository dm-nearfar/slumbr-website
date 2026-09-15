import Image from "next/image";
import Link from "next/link";

// Site footer, mounted on every route by src/app/layout.tsx.
export default function Footer() {
  return (
    <footer className="relative w-full px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-[#2A2940] pt-12 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Slumbr logo"
              width={24}
              height={24}
              className="opacity-80"
            />
            <span className="font-display text-[24px] font-medium text-white">
              Slumbr
            </span>
          </div>
          <p className="text-[15px] font-semibold tracking-[0.05em] text-[#6B6B7B]">
            &copy; 2026 Slumbr LTD. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[15px] font-semibold tracking-[0.05em]">
          <Link
            href="/blog"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/privacy-policy"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="/delete-account"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Delete account
          </Link>
          <a
            href="mailto:contact@slumbr.ai"
            className="text-[#9090A0] transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
