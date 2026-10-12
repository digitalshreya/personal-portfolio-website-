import type { Metadata } from "next";
import { CTA, Eyebrow } from "@/components/sections";
import { articles } from "@/content/site";
import { BlogBrowser } from "@/components/blog-browser";

export const metadata: Metadata = { title: "Insights", description: "Plain-language tips on AI and digital marketing for busy small business owners." };

export default function Blog() {
  return <>
    <section className="page-hero blog-hero"><Eyebrow>Ideas for busy business owners</Eyebrow><h1>Make marketing<br /><em>easier to do.</em></h1><p>Simple tips to save time, reach the right customers, and make your next marketing step clearer.</p></section>
    <BlogBrowser articles={articles} />
    <CTA title="Want a plan for your business?" copy="Book a free consultation. We’ll talk through your goals and leave you with a customized digital marketing plan you can start using right away." />
  </>;
}
