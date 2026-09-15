#!/usr/bin/env python3
"""Encode the store capture set into the WebP screenshots the site ships.

Reads the source PNGs from the capture folder on the Desktop (never from the
repo; no source PNG enters git) and writes WebP files into public/screenshots/:

  shot1_journal_home.png                 -> shot1-journal-home.webp
  shot3_recording_waveform.png           -> shot3-recording-waveform.webp
  shot4_analysis_nans_kitchen.png        -> shot4-analysis-nans-kitchen.webp
  shot2_feed_rooftop_garden.png          -> shot2-feed-rooftop-garden.webp
  folder_account_archetype_medallion.png -> archetype-card.webp (card crop only)

Phone screens are resized to 840x1826, which is 2x the largest width they
render at (about 420 CSS px), so retina screens stay crisp without shipping
the 1206x2622 source. The archetype card is cropped from the account screen
(the rounded card with the sparkle medallion, "Your dream archetype",
"Navigator", "A strong match") and downscaled to 640 px wide.

Every output starts at WebP quality 80 and steps down in fives, to a floor of
60, until it is under the 200 KB ceiling. The chosen quality and final size
are printed per file.

Requires Pillow with WebP support (python3 -c "from PIL import features;
print(features.check('webp'))" must print True).

Run from the website repo root:
  python3 scripts/encode-store-shots.py
  SRC='/some/other/folder' python3 scripts/encode-store-shots.py
"""

import os
import sys
from pathlib import Path

from PIL import Image

SRC = Path(
    os.environ.get(
        "SRC",
        "/Users/denizmatur/Desktop/Slumbr/App Store Graphics/slumbr_final_capture_set",
    )
)
OUT = Path("public/screenshots")

PHONE_SIZE = (840, 1826)
MAX_BYTES = 200 * 1024
START_QUALITY = 80
MIN_QUALITY = 60

# Card bounds on the 1206x2622 account screenshot (left, top, right, bottom).
ARCHETYPE_BOX = (56, 728, 1150, 1022)
ARCHETYPE_WIDTH = 640

PHONE_SHOTS = {
    "shot1_journal_home.png": "shot1-journal-home.webp",
    "shot3_recording_waveform.png": "shot3-recording-waveform.webp",
    "shot4_analysis_nans_kitchen.png": "shot4-analysis-nans-kitchen.webp",
    "shot2_feed_rooftop_garden.png": "shot2-feed-rooftop-garden.webp",
}


def save_under_ceiling(img: Image.Image, dest: Path) -> None:
    quality = START_QUALITY
    while True:
        img.save(dest, "WEBP", quality=quality, method=6)
        size = dest.stat().st_size
        if size <= MAX_BYTES or quality <= MIN_QUALITY:
            break
        quality -= 5
    flag = "" if size <= MAX_BYTES else "  OVER CEILING"
    print(f"  -> {dest.name}: {img.width}x{img.height}, q{quality}, {size / 1024:.0f} KB{flag}")


def encode_phone(name: str, out_name: str) -> None:
    src = SRC / name
    if not src.is_file():
        print(f"skip: {src} not found")
        return
    print(f"=== {name}")
    with Image.open(src) as im:
        im = im.convert("RGB")
        if im.size != (1206, 2622):
            print(f"  warning: unexpected source size {im.size}, resizing anyway")
        im = im.resize(PHONE_SIZE, Image.LANCZOS)
        save_under_ceiling(im, OUT / out_name)


def encode_archetype() -> None:
    name = "folder_account_archetype_medallion.png"
    src = SRC / name
    if not src.is_file():
        print(f"skip: {src} not found")
        return
    print(f"=== {name} (archetype card crop)")
    with Image.open(src) as im:
        im = im.convert("RGB").crop(ARCHETYPE_BOX)
        ratio = ARCHETYPE_WIDTH / im.width
        im = im.resize((ARCHETYPE_WIDTH, round(im.height * ratio)), Image.LANCZOS)
        save_under_ceiling(im, OUT / "archetype-card.webp")


def main() -> int:
    if not SRC.is_dir():
        print(f"source folder not found: {SRC}", file=sys.stderr)
        return 1
    OUT.mkdir(parents=True, exist_ok=True)
    for name, out_name in PHONE_SHOTS.items():
        encode_phone(name, out_name)
    encode_archetype()
    print(f"done -> {OUT}/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
