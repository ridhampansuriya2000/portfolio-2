import { profile } from "@/data/resume";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
