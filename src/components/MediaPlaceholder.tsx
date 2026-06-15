// On-brand placeholder frame for media that isn't in the repo yet. Designed as
// the DEFAULT state (no broken image/video chrome). Pass `imageSrc` to layer a
// CSS background image on top that appears automatically once the file lands
// (used by cards in client components, where a build-time fs check isn't
// available). The blog post itself decides via a server-side fs check instead.

type Kind = "video" | "image";

function GlyphVideo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5z" />
    </svg>
  );
}

function GlyphImage({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M21 15.5l-5-5-7 7" />
    </svg>
  );
}

export default function MediaPlaceholder({
  kind,
  label,
  imageSrc,
  className = "",
}: {
  kind: Kind;
  label: string;
  imageSrc?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-indigo/[0.08]" />
      {kind === "video" ? (
        <GlyphVideo className="relative h-12 w-12 text-lavender/25" />
      ) : (
        <GlyphImage className="relative h-12 w-12 text-lavender/25" />
      )}
      {imageSrc ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      ) : null}
    </div>
  );
}
