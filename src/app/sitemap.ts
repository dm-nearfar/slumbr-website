import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://slumbr.ai", lastModified: new Date() },
    { url: "https://slumbr.ai/privacy-policy", lastModified: new Date() },
    { url: "https://slumbr.ai/terms-and-conditions", lastModified: new Date() },
  ];
}
