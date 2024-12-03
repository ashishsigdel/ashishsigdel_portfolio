import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://127.0.0.1:3000"),

  title: "Links",
  description: "Ashishsigdel Webpage",
  keywords:
    "ashish, links, as, prog, all links, link, ashishsigdellinks, linksashsih, asis sgdl links, links, linkofashish, as, asr, aspro, prog, programming, ashishprogramming, asisprog, asishsigdel",
  openGraph: {
    type: "website",
    url: "https://127.0.0.1:3000",
    siteName: "AsProg | Links",
    title: "AsProg | Links",
    description: "AsProg Webpage",
    images: "/favicon.ico",
  },
  twitter: {
    site: "@ashishsigdel",
    card: "summary_large_image",
    description: "AsProg Webpage",
    title: "AsProg | Links",
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
