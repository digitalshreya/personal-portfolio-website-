import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/chrome";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "DIGITAL SHREYA | AI Marketing Expert", template: "%s | DIGITAL SHREYA" },
  description: "Practical, AI-powered digital marketing strategies for small and medium businesses.",
  openGraph: { title: "DIGITAL SHREYA | AI Marketing Expert", description: "Grow your business online with practical AI-powered marketing.", type: "website", siteName: "DIGITAL SHREYA" },
  twitter: { card: "summary_large_image", title: "DIGITAL SHREYA | AI Marketing Expert", description: "Practical AI-powered marketing for small and medium businesses." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
