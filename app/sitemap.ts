import type { MetadataRoute } from "next";
import { articles } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"; const pages = ["", "/about", "/services", "/blog", "/contact", ...articles.map(a => `/blog/${a.slug}`)]; return pages.map(path => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 })); }
