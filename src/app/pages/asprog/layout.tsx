import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/asprog/header";
import { Footer } from "@/components/asprog/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://asprog.ashishsigdel.com.np"),

  title: "AsProg",
  description: "AsProg Webpage",
  keywords:
    "asprog, asProg, as, prog, ashis, ashish, sigdel, sgdl, asis sgdl, portfolio, asprog, as, asr, aspro, prog, programming, ashishprogramming, asisprog, asishsigdel",
  openGraph: {
    type: "website",
    url: "https://asprog.ashishsigdel.com.np",
    siteName: "AsProg Official",
    title: "AsProg Official",
    description: "AsProg Webpage",
    images: "/favicon.ico",
  },
  twitter: {
    site: "@_ashishsigdel_",
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
