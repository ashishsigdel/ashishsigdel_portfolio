import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross2, RxMinus } from "react-icons/rx";

export default function Leftwindow({
  toggleWidth,
  quit,
  minimize,
}: {
  quit: () => void;
  toggleWidth: () => void;
  minimize: () => void;
}) {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="absolute right-5 text-white/40">
      <div className="flex gap-4">
        <RxMinus
          onClick={minimize}
          className="text-white/40 hover:text-white/60 transition-all duration-300 cursor-pointer hidden md:inline-block"
        />

        <MdCheckBoxOutlineBlank
          onClick={toggleWidth}
          className="text-white/40 hover:text-white/60 transition-all duration-300 cursor-pointer hidden md:inline-block"
        />
        <RxCross2
          onClick={quit}
          className="text-white/40 hover:text-white/60 transition-all duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}
