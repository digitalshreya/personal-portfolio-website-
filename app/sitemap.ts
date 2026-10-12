import type { MetadataRoute } from "next";
import { articles } from "@/content/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || "https://digital-shreya-portfolio.pages.dev"; const pages = ["", "/about", "/services", "/blog", "/contact", ...articles.map(a => `/blog/${a.slug}`)]; return pages.map(path => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 })); }
