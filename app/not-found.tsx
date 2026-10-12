import Link from "next/link";
export default function NotFound() { return <section className="not-found"><span className="eyebrow">404 · Page not found</span><h1>Looks like this<br />page <em>wandered off.</em></h1><p>The page may have moved, or the address may have a typo.</p><Link className="button" href="/">Back to home <span>↗</span></Link></section>; }
