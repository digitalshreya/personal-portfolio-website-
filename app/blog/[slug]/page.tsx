import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/content/site";
import { CTA, Eyebrow } from "@/components/sections";

type ArticleProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, type: "article" } } : {};
}

export default async function Article({ params }: ArticleProps) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();

  return <>
    <article className="article-page">
      <Link className="back-link" href="/blog">← Back to insights</Link>
      <div className="article-header"><Eyebrow>{article.category} · {article.read}</Eyebrow><h1>{article.title}</h1><p>{article.excerpt}</p><span className="sample-badge">Sample article · Replace before launch</span></div>
      <div className={`article-hero-art article-art art-${article.art}`}><span className="art-orbit" /><span className="art-shape" /></div>
      <div className="article-body">{article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<p className="article-disclosure">This is sample starter content. Please review and personalize it before publishing.</p><Link className="text-link" href="/contact#booking">Get a free marketing plan <span>↗</span></Link></div>
    </article>
    <CTA title="Make a plan for your business." copy="Book a free consultation. We’ll look at your goals and current marketing, then outline practical next steps made for you." />
  </>;
}
