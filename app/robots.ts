import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { const base = process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || "https://digital-shreya-portfolio.pages.dev"; return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` }; }
