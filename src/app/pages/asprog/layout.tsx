import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/asprog/header";
import { Footer } from "@/components/asprog/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://127.0.0.1:3000"),

  title: "AsProg",
  description: "AsProg Webpage",
  keywords:
    "asprog, asProg, as, prog, ashis, ashish, sigdel, sgdl, asis sgdl, portfolio, asprog, as, asr, aspro, prog, programming, ashishprogramming, asisprog, asishsigdel",
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
  return (
    <div className="bg-light-white dark:bg-dark-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
