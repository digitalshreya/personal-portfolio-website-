"use client";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/sections";
import type { articles } from "@/content/site";
export function BlogBrowser({ articles }: { articles: typeof import("@/content/site").articles }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All topics");
  const categories = ["All topics", ...Array.from(new Set(articles.map(a => a.category)))];
  const filtered = useMemo(() => articles.filter(a => (category === "All topics" || a.category === category) && `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(query.toLowerCase())), [articles, category, query]);
  return <section className="blog-listing"><div className="blog-tools"><label className="search-wrap"><span className="sr-only">Search articles</span><span aria-hidden="true">⌕</span><input type="search" placeholder="Search articles..." value={query} onChange={e => setQuery(e.target.value)} /></label><label className="filter-wrap"><span className="sr-only">Filter by topic</span><select value={category} onChange={e => setCategory(e.target.value)}>{categories.map(c => <option key={c}>{c}</option>)}</select></label></div><p className="sample-note">Starter articles · Sample content — edit or replace before launch.</p>{filtered.length ? <div className="article-grid blog-grid">{filtered.map(a => <ArticleCard key={a.slug} article={a} />)}</div> : <p className="empty-search">No articles found. Try another search or topic.</p>}</section>;
}
