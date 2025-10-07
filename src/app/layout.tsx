import type { Metadata } from "next";
import "@/styles/globals.css";
import { CustomThemeProvider, StoreProvider } from "@/providers";
import { ToastUtils } from "@/utils";

export const metadata: Metadata = {
  title: {
    default: "Ashish Sigdel - AI, Web & Mobile Developer",
    template: "%s | Ashish Sigdel",
  },
  description:
    "Ashish Sigdel is a skilled AI, web, and mobile developer specializing in Machine learning, Deep learning, React, React Native, Next.js, Node.js, and Python. Explore his portfolio to see innovative projects that blend technology and creativity.",
  keywords:
    "Ashish Sigdel, AI, web development, mobile development, Machine learning, Deep learning, React, React Native, Next.js, Node.js, Python",
  authors: [{ name: "Ashish Sigdel" }],
  creator: "Ashish Sigdel",
  metadataBase: new URL("https://ashishsigdel.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Ashish Sigdel Portfolio",
    title: "Ashish Sigdel - AI, Web & Mobile Developer",
    description:
      "Ashish Sigdel is a skilled AI, web, and mobile developer specializing in Machine learning, Deep learning, React, React Native, Next.js, Node.js, and Python. Explore his portfolio to see innovative projects that blend technology and creativity.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ashish Sigdel - AI, Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_ashishsigdel_",
    creator: "@_ashishsigdel_",
    title: "Ashish Sigdel - AI, Web & Mobile Developer",
    description:
      "Ashish Sigdel is a skilled AI, web, and mobile developer specializing in Machine learning, Deep learning, React, React Native, Next.js, Node.js, and Python. Explore his portfolio to see innovative projects that blend technology and creativity.",
    images: ["/og.png"],
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
