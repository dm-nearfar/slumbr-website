# Slumbr Design System — "Nocturne Cinematic"

Consolidated from the Stitch export (`stitch_slumbr_landing_page_experience`,
2026-06). **Exact values below come from the export's `code.html` Tailwind
config** (the source of truth); brand/style guidance comes from the export's
design notes. Where the export's own front-matter disagreed with its
`code.html`, `code.html` wins (see Conflicts at the bottom).

## Brand & Style

Ethereal, immersive, premium — "the quiet intensity of a lucid dream."
Glassmorphism mixed with minimalism: deep nocturnal layers, negative space as
void, light used sparingly through indigo glows and soft lavender accents.
Borders and typography stay sharp and refined ("Literary Noir").

## Colours

| Token | Hex | Role |
|---|---|---|
| `navy` (background) | `#0F0E1A` | The void. Page background |
| `surface` | `#1A1929` | Cards, containers, phone-frame bezels |
| `border` | `#2A2940` | 1px low-contrast borders everywhere |
| `indigo` (primary) | `#3D3B8E` | Primary actions, glows, dream-state accents |
| `lavender` (on-primary) | `#E5E9FF` | Button text, icons, soft highlights — instead of harsh pure white |
| `gold` (tertiary) | `#D4A843` | Rare warm glint — premium highlights only, <5% of UI |
| `grey` (on-surface) | `#9090A0` | Body text |
| white | `#FFFFFF` | Headings only |

Glow recipe: primary buttons/active states get a soft outer glow of indigo at
10–20% opacity extending 24–32px. Ambient page glows: large (600–900px)
indigo circles at 10–25% opacity with 140–180px blur, `mix-blend-screen`.

**Atmosphere rule:** all ambient glows, mist, and stars live in ONE page-level
layer (`PageAtmosphere`, absolute over the whole document, positioned by % of
page height) so the night scene flows continuously behind every section.
Sections are transparent content layers — never give a section its own
background fill, ambient glow, or `overflow-hidden` that could slice a glow.
Tight object halos (e.g. behind a phone mockup) are part of the component,
not the atmosphere.

**Texture:** a tiled SVG fractal-noise film grain (`.grain`, 5% opacity,
`mix-blend-overlay`) sits on top of the atmosphere layer to take the gloss
off the gradients. Keep it subtle — it should be felt, not seen.

## Typography

- **Inter** (`--font-inter` / `font-sans`) carries everything: headlines,
  body, labels, UI, prices, the wordmark.
- **Playfair Display Italic** (`--font-playfair` / `font-display`) exists for
  exactly one accent word per headline and nothing else. Only the italic face
  is loaded (weights 400 and 500). Never SF Pro, never a system serif.
- Both load through `next/font/google` in `src/app/layout.tsx`, which
  self-hosts the files at build time with `font-display: swap`. No runtime
  Google Fonts request is made, so no preconnect is needed.

**Accent word rule.** Each headline is bold white Inter except ONE word set
in Playfair Display Italic at `#B3BCF5` (`--color-accent`). The accent styling
includes that word's punctuation, so "Unlock your *dreams.*" italicises the
full stop too. Sub-lines are regular Inter, white at 70% opacity. Section
headings follow the same rule ("How it *works.*", "Choose your *path.*").
Body copy never uses the accent face.

| Role | Face / weight | Notes |
|---|---|---|
| headline | Inter 700, white | one Playfair Italic accent word, `text-balance` |
| sub-line | Inter 400, white/70 | |
| eyebrow | Inter 600 to 700, uppercase, letter-spaced, lavender | e.g. DREAM FILMS |
| body | Inter 400, white or near-white | dimmed alphas only for deliberate de-emphasis |
| label / button | Inter 600 | |

Fraunces and Outfit (the 2026-06 Nocturne set) are retired as of the
2026-09 rebrand.

## Spacing & Layout

- Base unit **8px**; gutter **24px**.
- Container padding: **24px mobile / 64px desktop** (`px-6 md:px-16`).
- Section gap: **80px** (`py-20`); feature rows separated by 128px (`gap-32`).
- Content max-widths: nav/features `max-w-7xl`, hero text `max-w-5xl`,
  pricing `max-w-5xl`, CTA `max-w-4xl`.
- Airy density — "as quiet as a bedroom at night."

## Radii

| Token | Value | Use |
|---|---|---|
| DEFAULT | 0.25rem | small elements |
| lg | 0.5rem | base UI elements |
| xl | 0.75rem | store badges |
| 2xl (inline 16px) | 1rem | buttons-in-cards |
| pricing cards | 32px | |
| phone frames / CTA card | 48px | |
| full | 9999px | pills, chips, nav CTA |

## Elevation & Depth

Depth via backdrop blurs and tonal layering, not drop shadows.
- Level 0: background `#0F0E1A`.
- Level 1: cards `#1A1929` + 1px `#2A2940` border.
- Level 2 (floating): backdrop blur (nav: `bg-[#0F0E1A]/60 backdrop-blur-xl`).
- Phone frames: `border-8` of surface colour, `ring-1 ring-white/10`,
  `shadow-2xl shadow-[#3D3B8E]/20`.

## Components

- **Primary button**: indigo bg, lavender text, soft indigo glow on hover.
- **Secondary/ghost**: 1px `#2A2940` border, lavender/white text.
- **Chips/tags**: pill, `#2A2940` at 50% opacity (gold variant for "standout"
  badges: `bg-gold/10 border-gold/20 text-gold`).
- **Icons**: strictly **no emojis**; thin-stroke (1.5px) geometric vectors in
  lavender.
- **Starfield**: a few static 2–4px white dots at 20–60% opacity, decorative.

## Motion

- Floating phone mockup: gentle y-axis bob, 6s ease-in-out loop.
- Entrance: fade-up on scroll (framer-motion `whileInView`).
- All motion respects `prefers-reduced-motion` (framer-motion
  `MotionConfig reducedMotion="user"`, CSS `motion-safe:` variants).

## Conflicts & decisions log

1. **Export DESIGN.md vs export code.html**: the export's front-matter listed
   `primary: #c2c1ff`, `surface: #13121e`, `tertiary: #eec058` (Material-style
   tonal palette). Its `code.html` instead uses `primary: #3D3B8E`,
   `surface: #1A1929`, `background: #0F0E1A`. Per project rule, code.html wins.
2. **Stitch vs existing globals.css**: no conflict — code.html's palette is
   identical to the pre-redesign site palette (`#0F0E1A / #1A1929 / #2A2940 /
   #3D3B8E / #D4A843 / #9090A0`). The redesign changes typography (Inter →
   Playfair Display + Manrope), layout, and depth/glow treatment, not colour.
3. **Stitch placeholder copy not adopted**: fabricated pricing
   ("Essence"/"Transcendent", $9.99/mo, "Lucid Dreaming Audio Guide"), footer
   links ("Journal Guide", "Analysis Methods"), and hero subcopy promising
   lucid-dream mastery are Stitch filler — real product copy is kept.
4. **Store badges**: Stitch mocked badges with Material Symbols placeholder
   glyphs and "Get on the" microcopy; we use proper brand glyphs and standard
   "Download on the App Store" / "GET IT ON Google Play" wording, restyled to
   the Stitch white/dark button pair.
