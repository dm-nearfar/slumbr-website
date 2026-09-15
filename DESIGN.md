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
| `cta` | `#5C6BC0` | Interactive fill, sampled with Pillow from the selected "All Dreams" chip on the journal capture so app and site CTAs match: the nav Get the App pill and the Pro trial buttons; hover glow stays `glow` |
| white | `#FFFFFF` | Headlines, body, labels |
| white/85 | `rgba(255,255,255,0.85)` | Sub-lines and body copy (font-medium) |
| white/65 | `rgba(255,255,255,0.65)` | De-emphasis floor: captions, timestamps, small print |

The Nocturne tokens (`surface`, `border`, `indigo`, `gold`, `grey`,
`lavender`) are deleted; nothing references them. Translucent whites
(`white/10` borders, `white/70` sub-lines) and the four brand tokens cover
every marketing surface. Do not reintroduce arbitrary hex classes.

## Atmosphere model

The single page-level `PageAtmosphere` layer and the film grain from the
Nocturne system are gone. The new model has four tiers:

1. **Body-level sky.** `body` carries the gradient (`#1E1B4B` at the top
   through `#5B21B6` at the bottom, with a warm lavender radial haze that
   rises only from the page base), painted once over a `#1A1442` fallback.
   The body is as tall as the document on every route, so one gradient spans
   the whole page. `html` paints the canvas for overscroll: solid `#1E1B4B`
   plus a viewport-fixed two-tone gradient (sky tone above, mountain tone
   below) so rubber-banding shows the right tone at either end, and
   `themeColor` is `#1E1B4B`. Both `html` and `body` use `overflow-x: clip`
   so glow insets can never pan the page sideways. `body::before` is the
   starfield and `body::after` is the crescent moon, both at `z-index: -1`
   so they sit behind all content on every page. Nothing else paints a page
   background.
2. **Clouds.** `SkyClouds` (`src/components/SkyClouds.tsx`), mounted once
   from the root layout as an early body child, draws two dark cumulus bands
   and one faint lavender highlight wisp across the top of the sky near the
   moon, after the app's splash and loader plates. Blurred inline SVG at
   `z-index: -1`: above the starfield, below the moon and all content, and
   confined to the top 160 viewBox units so nothing cloudy sits behind the
   hero headline. Calm and sparse; atmosphere, not weather.
3. **Per-section glows.** Each band places its own `.glow` ellipse behind its
   focal element (a phone, the pricing Pro card). Glows are components'
   business, positioned and sized by the consumer. `.glow-strong` is reserved
   for the Dream Films band, the strongest glow on the page.
4. **Mountain base.** `MountainBase` (`src/components/MountainBase.tsx`) is
   the only place the layered mountain-valley silhouettes and their warm
   valley glow appear. `Footer` mounts it and is as tall as the mountain
   box, so on every route the ridges rise from the sky under whatever
   precedes the footer (the closing CTA on the homepage) and the footer
   content sits over the nearest, darkest ridge. Sections that immediately
   precede the footer use `relative z-10` so their content paints above
   the ridges. It is never used elsewhere.

Sections are transparent content layers. Do not give a section its own
background fill, and avoid `overflow-hidden` on anything that could slice a
glow. Pure CSS and SVG only; the only rasters shipped are the optimised app
screenshots, the archetype card crop, and existing badge and icon assets.

### Starfield

Tiled `radial-gradient` dots (1px to 1.2px, opacity 0.3 to 0.9) across six
tile sizes with mutually unrelated dimensions so the repeat is unreadable,
plus two sparse tiles of 4-point sparkles as inline SVG data URIs. Subtle and
sparse; if you can count the pattern, it is too dense.

### Clouds

Fill `#14113C` at 42% to 50% (a shade darker than the sky top), one broad
bank upper right beneath and around the moon, one thin wisp upper left, and
a `#B3BCF5` sliver at 8% along the bank's upper edge for moonlight. Gently
lobed top edges from cubic curves, flat bases, `feGaussianBlur`
`stdDeviation` 8 so there are never hard vector outlines. Container 420px
tall (560px from `md`), SVG stretched with `preserveAspectRatio="none"`.

### Crescent moon

Offset circle shadow technique on `body::after`: a transparent circle whose
solid `box-shadow` is offset so only the part outside the circle paints,
leaving a crescent. Two `drop-shadow` filters give the warm peach-white glow
(`#FFF2E2`). One small motif near the top of the page, never a raster.

### Glow

`.glow`: absolute, `border-radius: 9999px`, radial gradient from
`rgba(139,92,246,0.18)` fading to transparent before the edge, then
`filter: blur(48px)`. Soft edges, never a visible ring. Consumers set inset or
width and height. `.glow-strong` peaks at 0.5 (mid stop 0.26) with a 64px
blur and is reserved for the Dream Films band.

### Mountains

Three SVG paths in `MountainBase` (far `#3B2A7A`, mid `#2A1E5E`, near
`#1A1442`) with `preserveAspectRatio="none"` so they stretch edge to edge,
and a warm radial glow (`rgba(255,226,200,0.34)` into lavender) rising from
the valley floor behind the ridges. Height 240px on mobile, 360px from `md`.

Construction, after the app's closing plates: ridgelines, not rolling
waves. Crests are soft-shouldered with decisive direction changes (cubic
curves with horizontal tangents and short handles at the peak), saddles
between crests are concave, and all three layers descend from both screen
edges toward a lower central valley whose floor sits in the middle third,
where the warm glow rises. FAR carries four crests, MID three, NEAR two
broad ones, each layer's crests offset from the layer behind so the ridges
interleave. Neither jagged alpine spikes nor convex swells.

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
full stop too. Section headings follow the same rule ("How it *works.*",
"Choose your *path.*"). Body copy never uses the accent face.

**Contrast policy.** White at 70% reads flat on the mid-page violet, so:
sub-lines and body copy are `white/85` with `font-medium`; de-emphasis
(captions, timestamps, footer small print, breadcrumbs, separators) floors at
`white/65`, never lower; nav and footer links are `white/80`, white on hover.
Headlines, list items and anything already pure white stay white.

| Role | Face / weight | Notes |
|---|---|---|
| headline | Inter 700, white | one Playfair Italic accent word, `text-balance` |
| sub-line | Inter 500, white/85 | |
| eyebrow | Inter 600 to 700, uppercase, letter-spaced, lavender | e.g. DREAM FILMS |
| body | Inter 500, white/85 or white | de-emphasis floors at white/65 |
| label / button | Inter 600 | |

Fraunces and Outfit (the 2026-06 Nocturne set) are retired as of the
2026-09 rebrand.

## Spacing and layout

- Base unit **8px**; gutter **24px**.
- Container padding: **24px mobile / 64px desktop** (`px-6 md:px-16`).
- Section gap: **80px** (`py-20`).
- Content max-widths: nav and bands `max-w-7xl`, hero text `max-w-5xl`,
  pricing `max-w-5xl`, CTA `max-w-4xl`.
- Homepage order: hero, how it works, capture, analysis, dream films,
  social proof (gated), pricing, blog teaser, closing CTA, footer.
- Airy density. Bands alternate text left / phone right and mirrored.

## Responsive

- Mobile hero headline stacks as two lines: "Unlock your" / "*dreams.*",
  matching the store screenshot treatment.
- The hero is at least one viewport tall and grows with its content so the
  framed phone is always fully in view; nothing in the hero is clipped.
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
| phone frame outer | 12.1905% / 5.8018% of the ring box (51.2px at 420px); bezel 11.5942% / 5.4764%, screen 9.7462% / 4.4835%; percentage paddings 0.714286% and 2.415459% |
| pills, chips, nav CTA | 9999px |

## Elevation and depth

Depth via tonal layering and glows, not drop shadows.
- Dark glass cards: translucent dark fill (`rgba(30,27,75,0.55)` or similar),
  1px white/10 border, `backdrop-blur`.
- Pro card: `#8B5CF6` border with an outer glow.
- Phone frame: dark titanium rounded frame with a Dynamic Island cutout,
  screenshot composited inside, soft `.glow` behind. See `PhoneFrame`.

## Components

- **Primary button / nav CTA**: solid `cta` pill, white text, `glow` hover shadow.
- **Outlined store buttons** (Free card): 1px white/20 border, white text.
- **Solid trial buttons** (Pro card): solid `cta`.
- **Chips**: pill, lavender text on translucent purple (PRO, BEST VALUE,
  7-DAY FREE TRIAL).
- **Number chips** (How it works): lavender, subtle glow, joined by a thin
  lavender connector line.
- **Icons**: strictly no emojis; thin-stroke (1.5px) geometric vectors.
- **Store badges**: `StoreBadges`, inline SVG glyphs, standard "Download on
  the App Store" / "Get it on Google Play" wording.
- **PhoneFrame**: reusable device frame (`src/components/PhoneFrame.tsx`).
  Its titanium ring and bezel greys are hardware colours, the one place
  hex classes outside the palette are allowed.
- **FeatureBand**: text-and-phone band with a mirrored variant
  (`src/components/FeatureBand.tsx`).
- **MountainBase**: page-base silhouettes (`src/components/MountainBase.tsx`),
  mounted by `Footer`.
- **Nav** and **Footer**: mounted on every route from `src/app/layout.tsx`.
- **SocialProof** (`src/components/SocialProof.tsx`): built but gated behind
  `SHOW_SOCIAL_PROOF = false` until the three TODO slots hold real, verbatim
  App Store and Google Play review quotes. Never invent reviews.

## Motion

- Entrance: fade-up on scroll (framer-motion `whileInView`), wrapped in
  `MotionConfig reducedMotion="user"`.
- Any CSS animation uses `motion-safe:` variants.

## Assets

- Screenshots ship as WebP only, from `scripts/encode-store-shots.py`, sized to
  at most 2x their rendered width (840x1826 for phone screens) at quality 80,
  under 200 KB each. Source PNGs never enter the repo.
- Shipped set, six files: five phone screens (journal home, recording
  waveform, add details, analysis, feed) plus the archetype card crop.
  Hero: journal home. Capture band: the Add Story (recording) and Add
  Details steps side by side, nothing overlapping.
  Analysis band: analysis with the archetype card overlay. Dream Films: feed.
- Explicit `width` and `height` on every framed screenshot so fonts and images
  cause no layout shift.
