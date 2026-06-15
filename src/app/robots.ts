import type { MetadataRoute } from "next";

// Allow search + AI search/retrieval + AI training crawlers to maximise
// discoverability and AI citations; Googlebot is never blocked. Merged from the
// provided robots.txt — some AI bots treat the absence of an explicit rule as a
// soft block, so the key agents are listed explicitly. Bots that ignore
// robots.txt can only be stopped at the WAF/edge; verify a bot by reverse DNS.
const ALLOWED_AGENTS = [
  // Standard search engines (never block these)
  "Googlebot",
  "Bingbot",
  // AI search & retrieval (these drive AI citations)
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Amazonbot",
  "Applebot",
  "DuckAssistBot",
  // AI training crawlers (switch to disallow to opt out of training)
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...ALLOWED_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://slumbr.ai/sitemap.xml",
  };
}
