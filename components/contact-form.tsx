"use client";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";
type State = { kind: "idle" | "sending" | "success" | "error"; message: string };
export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle", message: "" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (state.kind === "sending" || !form.reportValidity()) return;
    setState({ kind: "sending", message: "Sending your message…" });
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      _subject: "New enquiry from the Digital Shreya website",
      _template: "table",
      _url: window.location.href,
    };
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Your message could not be submitted. Please try again or email me directly.");
      }
      setState({ kind: "success", message: "Thanks for reaching out. Your enquiry has been submitted. I’ll reply by email." });
      form.reset();
    } catch {
      setState({ kind: "error", message: "Your message could not be submitted. Please check your connection and try again, or email me directly." });
    }
  }
  return <form className="contact-form" onSubmit={submit} noValidate><input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} /><div className="form-row"><label>Your name <span>*</span><input name="name" autoComplete="name" required minLength={2} maxLength={100} onInvalid={e => (e.currentTarget.setCustomValidity("Please enter your name."))} onInput={e => e.currentTarget.setCustomValidity("")} /></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} onInvalid={e => (e.currentTarget.setCustomValidity("Please enter a valid email address."))} onInput={e => e.currentTarget.setCustomValidity("")} /></label></div><label>Business name <small>(optional)</small><input name="business" autoComplete="organization" maxLength={160} /></label><label>Your message <span>*</span><textarea name="message" rows={5} required minLength={10} maxLength={5000} placeholder="Tell me a little about your business and what you would like help with…" onInvalid={e => (e.currentTarget.setCustomValidity("Please add a message of at least 10 characters."))} onInput={e => e.currentTarget.setCustomValidity("")} /></label><p className="required-note">* Required fields</p><button type="submit" className="button" disabled={state.kind === "sending"}>{state.kind === "sending" ? "Sending…" : <>Send your message <span>↗</span></>}</button><p className={`form-status ${state.kind}`} role="status" aria-live="polite">{state.message}</p></form>;
}
