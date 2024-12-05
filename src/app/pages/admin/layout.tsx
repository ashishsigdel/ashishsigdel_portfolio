import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Ashishsigdel admin Webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
