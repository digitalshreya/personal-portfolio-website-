import type { Metadata } from "next";
import { BookingButton, CTA, Eyebrow, FAQ } from "@/components/sections";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "Services", description: "Simple, practical digital marketing and AI support for small and medium businesses." };

export default function ServicesPage() {
  return <>
    <section className="page-hero"><Eyebrow>Practical help for busy owners</Eyebrow><h1>Get clear on what<br />to do <em>next.</em></h1><p>Not sure which channel, tool, or task deserves your time? I’ll help you sort through the options and choose a plan that fits your business.</p><BookingButton /></section>
    <section className="services-detail">{services.map(service => <article className="service-detail" key={service.number}><div className="detail-number">{service.number}<span>{service.icon}</span></div><div className="detail-main"><h2>{service.title}</h2><p className="detail-lead">{service.description}</p><div className="detail-columns"><div><span>What we can work on</span><p>{service.includes}</p></div><div><span>This may help if</span><p>{service.helps}</p></div><div><span>A useful next step</span><p>{service.benefit}</p></div></div></div><div className="detail-action"><BookingButton>Get a free plan <span>↗</span></BookingButton></div></article>)}</section>
    <section className="section faq-section service-faq"><div className="faq-intro"><Eyebrow>Before you book</Eyebrow><h2>Good to <em>know.</em></h2><p>No pressure to have it all figured out.</p></div><FAQ /></section>
    <CTA title="Start with a free consultation." copy="Tell me what feels difficult or time-consuming. Together, we’ll identify useful opportunities and outline a plan you can begin right away." />
  </>;
}
