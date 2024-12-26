import React from "react";
import { FaMinus } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Leftwindow() {
  return (
    <div className="absolute hidden md:inline-block right-5 text-white/40">
      <div className="flex gap-2">
        <FiMinus className="text-white/40 hover:text-white/60 transition-all duration-300 cursor-pointer" />
        <MdCheckBoxOutlineBlank className="text-white/40 hover:text-white/60 transition-all duration-300 cursor-pointer" />
        <RxCross2 className="text-white/40 hover:text-white/60 transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
}
