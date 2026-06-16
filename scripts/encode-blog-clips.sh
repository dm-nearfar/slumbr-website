#!/usr/bin/env bash
# Encode generated dream clips into web assets for the blog post.
#
# For each clip it writes, into public/images/ with the exact names the site's
# <BlogMedia>/<DreamVideo> already reference:
#   <base>.mp4   H.264 high, CRF 23, +faststart, silent   (universal, fast start)
#   <base>.webm  VP9 constant-quality (crf 32), silent     (smaller, modern)
#   <base>.webp  first-frame poster (ffmpeg frame -> Pillow) (instant, no jump)
#
# 720p / 24fps / NO audio. These are gif-like loops: the loop + mute + "no
# controls / no pause / no seek" behaviour is enforced by the DreamVideo
# component, not the file. Dual source (WebM first, MP4 fallback) keeps them
# small enough to autoplay fast while staying crisp at the blog's <=1040px column.
#
# Requires: ffmpeg (libx264 + libvpx-vp9) and python3 with Pillow (for WebP,
# since this ffmpeg has no webp encoder).
#
# Run from the website repo ROOT. Source clips come from the generator
# (slumbr_functions/scripts/generate_blog_clips.py -> blog-clips/):
#   SRC=/path/to/slumbr_functions/blog-clips ./scripts/encode-blog-clips.sh flying water
#   (no clip args = all four; only clips whose source mp4 exists are encoded)
set -euo pipefail

SRC="${SRC:-blog-clips}"
OUT="public/images"
SCALE="scale=1280:720:flags=lanczos"

clip_base() {
  case "$1" in
    flying)  echo "slumbr-flying-dream-ai-video" ;;
    water)   echo "slumbr-water-dream-ai-video" ;;
    chase)   echo "slumbr-chase-dream-ai-video" ;;
    kitchen) echo "slumbr-static-kitchen-dream-ai-video" ;;
    *)       echo "" ;;
  esac
}

clips=("$@")
[ ${#clips[@]} -eq 0 ] && clips=(flying water chase kitchen)

mkdir -p "$OUT"
for name in "${clips[@]}"; do
  base="$(clip_base "$name")"
  [ -z "$base" ] && { echo "skip: unknown clip '$name'"; continue; }
  in="$SRC/$name.mp4"
  [ -f "$in" ] || { echo "skip: $in not found"; continue; }
  echo "=== $name -> $base ==="

  # MP4: H.264, web-friendly, fast-start, silent
  ffmpeg -y -loglevel error -i "$in" -an -vf "$SCALE" \
    -c:v libx264 -profile:v high -crf 23 -preset slow -pix_fmt yuv420p \
    -movflags +faststart "$OUT/$base.mp4"

  # WebM: VP9 constant quality, silent
  ffmpeg -y -loglevel error -i "$in" -an -vf "$SCALE" \
    -c:v libvpx-vp9 -crf 32 -b:v 0 -row-mt 1 -pix_fmt yuv420p "$OUT/$base.webm"

  # WebP poster (first frame): ffmpeg -> PNG -> Pillow (no webp encoder in ffmpeg)
  tmp_png="$(mktemp -t blogposter).png"
  ffmpeg -y -loglevel error -i "$in" -frames:v 1 -vf "$SCALE" "$tmp_png"
  python3 -c "import sys; from PIL import Image; Image.open(sys.argv[1]).save(sys.argv[2],'WEBP',quality=82,method=6)" \
    "$tmp_png" "$OUT/$base.webp"
  rm -f "$tmp_png"

  printf "  -> %s.{mp4,webm,webp}  (%s / %s / %s)\n" "$base" \
    "$(du -h "$OUT/$base.mp4"  | cut -f1)" \
    "$(du -h "$OUT/$base.webm" | cut -f1)" \
    "$(du -h "$OUT/$base.webp" | cut -f1)"
done
echo "done -> $OUT/"
