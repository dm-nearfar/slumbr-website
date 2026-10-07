import type { NextRequest } from "next/server";

// slumbr.ai/get is the one download link for social bios and stories. It
// reads the device from the user-agent and sends an iPhone, iPad or iPod to
// the App Store, an Android phone to Google Play with a Play install referrer
// so the install is attributed, and anything else (a desktop) to the
// homepage, which carries both store badges.
//
// The match is on the DEVICE tokens, never the browser: Instagram's in-app
// browser adds "Instagram" to an otherwise normal iPhone or Android
// user-agent, so it routes the same as Safari or Chrome. The redirect is a
// 302 with no-store, so the targets can change later without a browser or
// the CDN holding an old one.

const APP_STORE_URL = "https://apps.apple.com/app/id6744979739";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.slumbr.slumbr";

// ?src= names where the link was posted (instagram_bio, story, a post). It
// reaches Google Play as utm_source, so only [a-z0-9_] survives, at most 40
// characters; an absent, empty or fully stripped value is the bio.
const DEFAULT_SOURCE = "instagram_bio";
const SOURCE_MAX_LENGTH = 40;

const IOS_DEVICE = /\b(iphone|ipad|ipod)\b/i;
const ANDROID_DEVICE = /\bandroid\b/i;

function sanitiseSource(raw: string | null): string {
  const clean = (raw ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, SOURCE_MAX_LENGTH);
  return clean || DEFAULT_SOURCE;
}

function targetFor(userAgent: string, source: string): string {
  if (IOS_DEVICE.test(userAgent)) return APP_STORE_URL;
  if (ANDROID_DEVICE.test(userAgent)) {
    const referrer = encodeURIComponent(
      `utm_source=${source}&utm_medium=social`,
    );
    return `${PLAY_STORE_URL}&referrer=${referrer}`;
  }
  return "/";
}

export function GET(request: NextRequest) {
  const source = sanitiseSource(request.nextUrl.searchParams.get("src"));
  const target = targetFor(request.headers.get("user-agent") ?? "", source);
  return new Response(null, {
    status: 302,
    headers: {
      Location: target,
      "Cache-Control": "no-store",
    },
  });
}
