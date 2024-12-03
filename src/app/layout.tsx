import type { Metadata } from "next";
import "@/styles/globals.css";
import { CustomThemeProvider, StoreProvider } from "@/providers";
import { ToastUtils } from "@/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://127.0.0.1:3000"),

  title: "Ashish Sigdel",
  description: "Ashish Sigdel Webpage",
  keywords:
    "ashishsigdel, ashish sigdel, ashish, asis, ashis, ashish, sigdel, sgdl, asis sgdl, portfolio, asprog, as, asr, aspro, prog, programming, ashishprogramming, asisprog, asishsigdel",
  openGraph: {
    type: "website",
    url: "https://127.0.0.1:3000",
    siteName: "Ashish Sigdel | Links",
    title: "Ashish Sigdel | Links",
    description: "Ashish Sigdel Webpage",
    images: "/favicon.ico",
  },
  twitter: {
    site: "@ashishsigdel",
    card: "summary_large_image",
    description: "Ashish Sigdel Webpage",
    title: "Ashish Sigdel | Links",
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body suppressHydrationWarning={true} className="dark:dark-background">
          <CustomThemeProvider>{children}</CustomThemeProvider>

          <ToastUtils />
        </body>
      </html>
    </StoreProvider>
  );
}
