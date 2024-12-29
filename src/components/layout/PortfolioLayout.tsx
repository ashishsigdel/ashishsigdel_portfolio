import React from "react";
import { Outline } from "@/components/portfolio/outline";
import { Background } from "../portfolio/utils";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative text-white ">
      <Background />
      <Outline>{children}</Outline>
    </div>
  );
}
