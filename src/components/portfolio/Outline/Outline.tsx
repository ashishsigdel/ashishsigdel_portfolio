import React from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import BottomBar from "./BottomBar";

export default function Outline({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-[100dvh] p-2 z-[999]">
      <div className="w-full h-full border border-white/20 rounded-md flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex overflow-y-auto h-full">
          <div className="h-full">
            <LeftBar />
          </div>
          <div className="w-full mx-auto overflow-y-auto h-full">
            {children}
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
}
