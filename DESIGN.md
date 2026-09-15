# Slumbr Design System, "Night Sky" (2026-09 store rebrand)

The site matches the v1.8.2 App Store and Google Play brand: a full-page
night-sky gradient, a sparse starfield, one crescent moon, soft purple glows
behind focal elements, and layered mountain silhouettes at the very base.
This supersedes the 2026-06 "Nocturne Cinematic" system (Stitch export). Where
the two disagree, this document wins.

House rules that apply to everything here: UK English, no em or en dashes in
copy, code comments, or commit messages, semantic HTML with alt text that
describes the app screen rather than the file, visible focus states,
`prefers-reduced-motion` respected for any animation.

## Brand and style

Calm, nocturnal, premium. Purple and lavender only in the marketing layer;
gold and amber exist solely inside the app screenshots. Body text on the dark
background is white or near-white; dimmed alphas are for deliberate
de-emphasis, never the default.

## Colours

Tokens live in `src/app/globals.css` under `@theme inline`.

| Token | Hex | Role |
|---|---|---|
| `indigo-deep` | `#1E1B4B` | Sky at the top of the page, darkest tone, footer ground |
| `violet` | `#5B21B6` | Sky at the base of the page, Pro card border, primary pill |
| `glow` | `#8B5CF6` | Soft elliptical glows (about 18% opacity), Pro border glow |
| `accent` | `#B3BCF5` | The one italic accent word per headline, focus ring |
| white | `#FFFFFF` | Headlines, body, labels |
| white/70 | `rgba(255,255,255,0.7)` | Sub-lines |

The Nocturne tokens (`surface`, `border`, `indigo`, `gold`, `grey`,
`lavender`) are deleted; nothing references them. Translucent whites
(`white/10` borders, `white/70` sub-lines) and the four brand tokens cover
every marketing surface. Do not reintroduce arbitrary hex classes.

## Atmosphere model

The single page-level `PageAtmosphere` layer and the film grain from the
Nocturne system are gone. The new model has three tiers:

1. **Body-level sky.** `body` carries the gradient (`#1E1B4B` at the top
   through `#5B21B6` at the bottom, with a warm lavender radial haze that
   rises only from the page base). Because the body background propagates to
   the canvas and is sized to the root element, one gradient spans the whole
   document and every route inherits it. `body::before` is the starfield and
   `body::after` is the crescent moon, both at `z-index: -1` so they sit
   behind all content on every page. Nothing else paints a page background.
2. **Per-section glows.** Each band places its own `.glow` ellipse behind its
   focal element (a phone, the pricing Pro card). Glows are components'
   business, positioned and sized by the consumer. `.glow-strong` is reserved
   for the Dream Films band, the strongest glow on the page.
3. **Mountain base.** `MountainBase` (`src/components/MountainBase.tsx`) is
   the only place the layered mountain-valley silhouettes and their warm
   valley glow appear: under the closing CTA and running behind the footer.
   It is never used elsewhere.

Sections are transparent content layers. Do not give a section its own
background fill, and avoid `overflow-hidden` on anything that could slice a
glow. Pure CSS and SVG only; the only rasters shipped are the optimised app
screenshots, the archetype card crop, and existing badge and icon assets.

### Starfield

Tiled `radial-gradient` dots (1px to 1.2px, opacity 0.3 to 0.9) across six
tile sizes with mutually unrelated dimensions so the repeat is unreadable,
plus two sparse tiles of 4-point sparkles as inline SVG data URIs. Subtle and
sparse; if you can count the pattern, it is too dense.

### Crescent moon

Offset circle shadow technique on `body::after`: a transparent circle whose
solid `box-shadow` is offset so only the part outside the circle paints,
leaving a crescent. Two `drop-shadow` filters give the warm peach-white glow
(`#FFF2E2`). One small motif near the top of the page, never a raster.

### Glow

`.glow`: absolute, `border-radius: 9999px`, radial gradient from
`rgba(139,92,246,0.18)` fading to transparent before the edge, then
`filter: blur(48px)`. Soft edges, never a visible ring. Consumers set inset or
width and height.

### Mountains

Three SVG paths in `MountainBase` (far `#3B2A7A`, mid `#2A1E5E`, near
`#1A1442`) with `preserveAspectRatio="none"` so they stretch edge to edge,
and a warm radial glow (`rgba(255,226,200,0.34)` into lavender) rising from
the valley floor behind the ridges. Height 240px on mobile, 360px from `md`.

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

## Spacing and layout

- Base unit **8px**; gutter **24px**.
- Container padding: **24px mobile / 64px desktop** (`px-6 md:px-16`).
- Section gap: **80px** (`py-20`).
- Content max-widths: nav and bands `max-w-7xl`, hero text `max-w-5xl`,
  pricing `max-w-5xl`, CTA `max-w-4xl`.
- Airy density. Bands alternate text left / phone right and mirrored.

## Responsive

- Mobile hero headline stacks as two lines: "Unlock your" / "*dreams.*",
  matching the store screenshot treatment.
- Bands stack text above phone.
- How-it-works steps stack vertically with the connector running vertically.
- Pricing cards stack, Pro first.

## Radii

| Use | Value |
|---|---|
| small elements | 0.25rem |
| base UI elements | 0.5rem |
| store badges | 0.75rem |
| buttons in cards | 1rem |
| pricing and glass cards | 32px |
| phone frame outer | 3.2rem |
| pills, chips, nav CTA | 9999px |

## Elevation and depth

Depth via tonal layering and glows, not drop shadows.
- Dark glass cards: translucent dark fill (`rgba(30,27,75,0.55)` or similar),
  1px white/10 border, `backdrop-blur`.
- Pro card: `#8B5CF6` border with an outer glow.
- Phone frame: dark titanium rounded frame with a Dynamic Island cutout,
  screenshot composited inside, soft `.glow` behind. See `PhoneFrame`.

## Components

- **Primary button / nav CTA**: solid purple pill, white text.
- **Outlined store buttons** (Free card): 1px white/20 border, white text.
- **Solid trial buttons** (Pro card): solid purple.
- **Chips**: pill, lavender text on translucent purple (PRO, BEST VALUE,
  7-DAY FREE TRIAL).
- **Number chips** (How it works): lavender, subtle glow, joined by a thin
  lavender connector line.
- **Icons**: strictly no emojis; thin-stroke (1.5px) geometric vectors.
- **Store badges**: `StoreBadges`, inline SVG glyphs, standard "Download on
  the App Store" / "Get it on Google Play" wording.
- **PhoneFrame**: reusable device frame (`src/components/PhoneFrame.tsx`).
- **MountainBase**: page-base silhouettes (`src/components/MountainBase.tsx`).
- **Social proof**: built but gated behind a single boolean set to `false`
  until real store review quotes exist. Never invent reviews.

## Motion

- Entrance: fade-up on scroll (framer-motion `whileInView`), wrapped in
  `MotionConfig reducedMotion="user"`.
- Any CSS animation uses `motion-safe:` variants.

## Assets

- Screenshots ship as WebP only, from `scripts/encode-store-shots.py`, sized to
  at most 2x their rendered width (840x1826 for phone screens) at quality 80,
  under 200 KB each. Source PNGs never enter the repo.
- Explicit `width` and `height` on every framed screenshot so fonts and images
  cause no layout shift.
