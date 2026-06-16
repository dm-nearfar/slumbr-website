// Official App Store / Google Play badge row. Extracted from the homepage hero
// so the homepage and the blog post CTA render the same badges. `className` is
// appended to the row container (e.g. for centring/margins in the post).

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
    </svg>
  );
}

function PlayMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="6,3 6,16 17,16" fill="#00C853" />
      <polygon points="6,29 6,16 17,16" fill="#00A0FF" />
      <polygon points="6,3 26,16 17,16" fill="#FF3A2F" />
      <polygon points="6,29 26,16 17,16" fill="#FFD400" />
    </svg>
  );
}

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${className}`}
    >
      <a
        href="https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="flex items-center gap-3 rounded-xl bg-white px-8 py-3 text-black transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(229,233,255,0.25)] active:scale-95"
      >
        <AppleLogo className="h-7 w-7" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">
            Download on the
          </span>
          <span className="block text-[18px] font-bold">App Store</span>
        </span>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.slumbr.slumbr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="flex items-center gap-3 rounded-xl border border-[#2A2940] bg-[#1A1929] px-8 py-3 text-white transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-[#232238] hover:shadow-[0_8px_32px_rgba(61,59,142,0.45)] active:scale-95"
      >
        <PlayMark className="h-7 w-7" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">
            Get it on
          </span>
          <span className="block text-[18px] font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
