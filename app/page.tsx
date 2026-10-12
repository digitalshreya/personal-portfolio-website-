import Link from "next/link";
import { ArticleCard, BookingButton, CTA, Eyebrow, FAQ, ServiceCards } from "@/components/sections";
import { articles } from "@/content/site";

const steps = [
  { n: "01", title: "Book a free consultation", text: "Tell me what you want to improve and what feels hard right now." },
  { n: "02", title: "Review your business", text: "We’ll look at your goals, customers, current marketing, and available time." },
  { n: "03", title: "Get your custom plan", text: "Leave with clear marketing steps you can start using right away." },
  { n: "04", title: "Put it into action", text: "Move forward at a pace that works for your business." },
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <Eyebrow>For small businesses ready to grow</Eyebrow>
        <h1>Make marketing work for <em>your business.</em></h1>
        <p className="hero-sub">When you’re busy running your business, marketing is hard to keep up with. I create a practical, AI-powered digital marketing plan to help you reach customers, create content, and follow up—without trying to do everything at once.</p>
        <div className="hero-actions"><BookingButton /><Link className="quiet-link" href="/services">Explore services <span>↓</span></Link></div>
        <div className="hero-note"><span className="note-star">✳</span><span>Leave with a clear plan.<br /><strong>Made for your business.</strong></span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract illustration of a growing marketing strategy">
        <div className="hero-visual-top"><span>LESS GUESSWORK. CLEAR NEXT STEPS.</span><span>↗</span></div>
        <div className="visual-circle circle-back" />
        <div className="visual-circle circle-front"><div className="circle-inner"><span className="tiny-label">A PLAN FOR</span><strong>your next</strong><span className="tiny-label">MOVE</span></div></div>
        <div className="visual-star">✳</div>
        <div className="visual-card"><span className="card-line" /><span className="card-line short" /><div className="mini-bars"><i /><i /><i /><i /><i /></div><span className="card-tag">practical, people-first marketing</span></div>
        <span className="hero-caption">A plan built around you <b>↗</b></span>
      </div>
    </section>

    <section className="trust-strip"><span>FOR OWNERS WHO ARE</span><div><span>Short on time</span><i /><span>Unsure what to focus on</span><i /><span>Ready for a clear plan</span></div></section>

    <section className="section services-preview">
      <div className="section-heading"><div><Eyebrow>How I can help</Eyebrow><h2>From scattered effort<br />to a <em>clear plan.</em></h2></div><p>Get help with the parts of marketing that take time, feel confusing, or are not bringing the inquiries you need.</p></div>
      <ServiceCards limit={3} />
      <div className="center-link"><Link className="button button-outline" href="/services">Explore all services <span>↗</span></Link></div>
    </section>

    <section className="section benefit-section">
      <div className="benefit-intro"><Eyebrow>Marketing that fits real life</Eyebrow><h2>Less time guessing.<br /><em>More time for business.</em></h2><p>You know your customers. I bring a clear strategy and practical AI to help you plan, create, and follow up—without adding tools or tasks you do not need.</p><BookingButton>Book your free consultation <span>↗</span></BookingButton></div>
      <div className="benefit-list">
        <div><span className="benefit-num">01</span><div><h3>Know what to focus on</h3><p>Choose marketing steps that fit your goals, customers, time, and budget.</p></div><span className="benefit-symbol">↗</span></div>
        <div><span className="benefit-num">02</span><div><h3>Use AI in useful ways</h3><p>Save time on planning and first drafts while keeping your voice and judgment.</p></div><span className="benefit-symbol">✳</span></div>
        <div><span className="benefit-num">03</span><div><h3>Make the next step clear</h3><p>Help potential customers understand what you offer and how to reach you.</p></div><span className="benefit-symbol">→</span></div>
        <div><span className="benefit-num">04</span><div><h3>Start at a workable pace</h3><p>Build a plan around the time and support you have today.</p></div><span className="benefit-symbol">♡</span></div>
      </div>
    </section>

    <section className="process-section">
      <div className="section-heading"><div><Eyebrow>A free consultation with a clear outcome</Eyebrow><h2>Talk it through.<br /><em>Leave with a plan.</em></h2></div><p>We will look at what is working, what is getting in the way, and where to focus next. Your plan will be tailored to your business and ready to put into action.</p></div>
      <div className="process-grid">{steps.map((step, i) => <article className="process-step" key={step.n}><span className="process-number">{step.n}</span>{i < steps.length - 1 && <span className="process-arrow">→</span>}<h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section className="section insights-section"><div className="section-heading"><div><Eyebrow>Simple ideas for busy owners</Eyebrow><h2>Learn as you <em>grow.</em></h2></div><Link href="/blog" className="text-link">Visit the blog <span>↗</span></Link></div><div className="article-grid">{articles.slice(0, 2).map(article => <ArticleCard key={article.slug} article={article} />)}</div></section>

    <section className="section faq-section"><div className="faq-intro"><Eyebrow>Questions, answered simply</Eyebrow><h2>Good to <em>know.</em></h2><p>Start with a conversation. We will work out the rest together.</p><Link className="text-link" href="/contact">Get in touch <span>↗</span></Link></div><FAQ /></section>
    <CTA title="Get your free, customized marketing plan." />
  </>;
}
