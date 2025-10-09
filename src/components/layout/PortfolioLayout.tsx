"use client";
import React from "react";
import { Outline } from "@/components/portfolio/outline";
import { Background } from "../portfolio/utils";

type Props = {
  children:
    | React.ReactNode
    | ((props: {
        openAIChat: boolean;
        setOpenAIChat: React.Dispatch<React.SetStateAction<boolean>>;
        children?: React.ReactNode;
      }) => React.ReactNode);
};

export default function PortfolioLayout({ children }: Props) {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative text-white">
      <Background />

      <Outline>
        {({ openAIChat, setOpenAIChat }) => (
          <>
            {typeof children === "function"
              ? children({ openAIChat, setOpenAIChat })
              : children}
          </>
        )}
      </Outline>
    </div>
  );
}
