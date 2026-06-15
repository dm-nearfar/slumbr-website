// Renders a dream clip as a muted, autoplaying, looping <video>.
//
// Emitted as a static HTML string via dangerouslySetInnerHTML so the `muted` and
// `playsinline` attributes are guaranteed in the server-rendered markup — React
// can drop `muted` as an attribute during SSR, which breaks cross-browser
// autoplay. This keeps each clip fully static (no client JS), best for Core Web
// Vitals. The markup is built from a known poster path, never user input.
//
// Only rendered once the clip exists (PostBody does the fs check); otherwise a
// MediaPlaceholder is shown. Sources are WebM-first then MP4 (+faststart).

type DreamVideoProps = {
  /** Poster still, e.g. /images/slumbr-flying-dream-ai-video.webp */
  poster: string;
  /** Accessible description, taken verbatim from the post's image alt text. */
  label: string;
};

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default function DreamVideo({ poster, label }: DreamVideoProps) {
  const webm = poster.replace(/\.webp$/, ".webm");
  const mp4 = poster.replace(/\.webp$/, ".mp4");
  const html =
    `<video class="aspect-video w-full rounded-2xl border border-border bg-surface object-cover"` +
    ` autoplay loop muted playsinline preload="metadata" width="1280" height="720"` +
    ` poster="${escapeAttr(poster)}" aria-label="${escapeAttr(label)}">` +
    `<source src="${escapeAttr(webm)}" type="video/webm">` +
    `<source src="${escapeAttr(mp4)}" type="video/mp4">` +
    `</video>`;
  return <div className="w-full" dangerouslySetInnerHTML={{ __html: html }} />;
}
