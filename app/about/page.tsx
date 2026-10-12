import type { Metadata } from "next";
import { CTA, Eyebrow } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About", description: "Meet your practical partner in AI-powered marketing for small businesses." };

export default function About() {
  return <>
    <section className="page-hero"><Eyebrow>About Digital Shreya</Eyebrow><h1>Marketing help that<br />starts with <em>listening.</em></h1><p>I help small and medium business owners make digital marketing easier to understand, plan, and put into practice.</p></section>
    <section className="about-story section">
      <div className="portrait-placeholder"><div className="portrait-frame"><span>YOUR PHOTO</span><strong>✳</strong><small>Add a professional portrait<br />to /public/images/profile.jpg</small></div><span className="portrait-caption">{site.location}</span></div>
      <div className="about-copy"><Eyebrow>My mission</Eyebrow><h2>Make good marketing<br /><em>more reachable.</em></h2><p>Running a business takes time. Marketing can end up last on the list—or become a mix of posts, tools, and ideas without a clear direction. I want to make useful marketing support more accessible to small and medium businesses.</p><p>I start by learning what you want your business to achieve and what is getting in the way. Then I suggest practical digital marketing steps, using AI where it can save time or make the work easier.</p><p>You stay in control of your message. I help you turn your goals into a plan you can understand and begin using right away.</p></div>
    </section>
    <section className="credentials-section"><div><Eyebrow>My background</Eyebrow><h2>Experience &amp; skills</h2><p>Add your details here so visitors can learn about your work and training.</p></div><div className="credential-list"><div><span>Professional background</span><strong>[Add a short summary of your experience]</strong></div><div><span>Areas of expertise</span><strong>[Add your skills, tools, or specialties]</strong></div><div><span>Education &amp; training</span><strong>[Add relevant education or certifications, if applicable]</strong></div><div><span>Based in</span><strong>{site.location}</strong></div></div></section>
    <CTA title="Let’s find a marketing plan that fits." copy="Book a free consultation. We’ll talk about your business and map out clear steps to help you reach more of the right customers online." />
  </>;
}
