"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

const links = [{ href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/blog", label: "Insights" }, { href: "/contact", label: "Contact" }];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/" aria-label={`${site.name}, home`}><Image src="/digital-shreya-logo.svg" alt="Digital Shreya" width={360} height={72} priority unoptimized /></Link><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button><nav id="main-nav" className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="nav-cta" href="/contact#booking" onClick={() => setOpen(false)}>Book a free call <span>↗</span></Link></nav></div></header>;
}
export function Footer() { return <footer className="footer"><div className="footer-main"><div><Link className="brand footer-brand" href="/" aria-label={`${site.name}, home`}><Image src="/digital-shreya-logo-light.svg" alt="Digital Shreya" width={360} height={72} unoptimized /></Link><p>Practical marketing, powered by thoughtful use of AI.</p></div><div className="footer-links"><div><strong>Explore</strong><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/blog">Insights</Link></div><div><strong>Say hello</strong><Link href="/contact">Contact</Link><span>{site.email}</span>{site.social.map(s => s.href ? <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a> : <span key={s.label}>{s.label}: [add profile link]</span>)}</div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Marketing with intention.</span></div></footer>; }
