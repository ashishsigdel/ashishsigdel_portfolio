import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ashishsigdel.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ashish Sigdel | AI, Developer, and Enthusiast",
    template: "%s | Ashish Sigdel",
  },
  description:
    "Portfolio of Ashish Sigdel — AI/ML engineer and full-stack developer building intelligent digital systems, agentic workflows, and production-grade web applications.",
  keywords: [
    "Ashish Sigdel",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Next.js",
    "RAG",
    "LLM",
    "Nepal",
  ],
  authors: [{ name: "Ashish Sigdel", url: siteUrl }],
  creator: "Ashish Sigdel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ashish Sigdel",
    title: "Ashish Sigdel | AI, Developer, and Enthusiast",
    description:
      "AI/ML engineer and full-stack developer building intelligent digital systems, agentic workflows, and production-grade web applications.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_ashishsigdel_",
    creator: "@_ashishsigdel_",
    title: "Ashish Sigdel | AI, Developer, and Enthusiast",
    description:
      "AI/ML engineer and full-stack developer building intelligent digital systems, agentic workflows, and production-grade web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashish Sigdel",
  url: siteUrl,
  jobTitle: "AI/ML Engineer & Full Stack Developer",
  email: "mailto:hi@ashishsigdel.com.np",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Nepal",
  },
  sameAs: [
    "https://github.com/ashishsigdel",
    "https://linkedin.com/in/aasisigdel",
    "https://x.com/_ashishsigdel_",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overscroll-none`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
