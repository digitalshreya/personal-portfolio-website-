import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { BookingButton, Eyebrow } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Book a free consultation and get a digital marketing plan made for your business." };

export default function Contact() {
  return <>
    <section className="page-hero contact-hero"><Eyebrow>Start with a simple conversation</Eyebrow><h1>What is getting<br />in the way of <em>growth?</em></h1><p>Tell me what feels hard to keep up with—content, finding customers, following up, or knowing what to try next.</p></section>
    <section className="contact-layout">
      <div className="contact-details"><div className="contact-note"><span className="note-star">✳</span><h2>Bring the challenge. Leave with a plan.</h2><p>We’ll talk through your business and find practical marketing steps that fit your goals, time, and budget.</p></div><div className="contact-methods"><div><span>Email</span><strong><a href={`mailto:${site.email}`}>{site.email}</a></strong></div><div><span>Phone</span><strong>{site.phone}</strong></div><div><span>Location</span><strong>{site.location}</strong></div>{site.social.map(s => <div key={s.label}><span>{s.label}</span><strong>{s.href ? <a href={s.href} target="_blank" rel="noreferrer">Visit profile ↗</a> : `[Add ${s.label} profile URL]`}</strong></div>)}</div></div>
      <div className="form-panel"><h2>Send me a message</h2><p>Share what you want help with. Fields marked * are required.</p><ContactForm /></div>
    </section>
    <section className="booking-section" id="booking"><div><Eyebrow>Free consultation · Custom marketing plan</Eyebrow><h2>Leave with a clear<br /><em>next step.</em></h2><p>We’ll review your goals, customers, and current marketing. You’ll get a simple plan made for your business—with practical steps you can start using right away.</p>{site.bookingUrl ? <BookingButton /> : <p>Request your free consultation through the contact form. I’ll reply by email to arrange a suitable time.</p>}</div><div className="booking-aside"><span className="booking-number">01—04</span><ol><li>Tell me what you want to improve</li><li>Review your goals and customers</li><li>Get your custom marketing plan</li><li>Start with the steps that fit</li></ol></div></section>
  </>;
}
