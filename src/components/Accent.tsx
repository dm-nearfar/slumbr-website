// The one accent word per headline: Playfair Display Italic in the lavender
// accent colour, while the rest of the headline stays bold white Inter. Pass
// the word WITH its punctuation ("dreams.") so the full stop is styled too.
export default function Accent({ children }: { children: React.ReactNode }) {
  return (
    <em className="font-display font-normal italic text-accent">{children}</em>
  );
}
