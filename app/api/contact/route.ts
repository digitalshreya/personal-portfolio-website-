import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try { data = await request.json(); } catch { return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 }); }
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const business = typeof data.business === "string" ? data.business.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 5000 || business.length > 160) return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "Contact delivery is not configured yet. Please email [add your business email] or book a consultation." }, { status: 503 });
  try {
    const result = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Portfolio inquiry from ${name}`, text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "Not provided"}\n\n${message}` }) });
    if (!result.ok) return NextResponse.json({ error: "The email service could not deliver your message. Please try again later or contact me directly." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "The email service is temporarily unavailable. Please try again later." }, { status: 502 }); }
}
