import React from "react";
import Image from "next/image";
import buymeacoffee from "@/assets/support/buymeacoffee.png";

export default function Support() {
  return (
    <div className="mt-7 w-full">
      <p className="font-geist my-3">support :</p>
      <div className="">
        <a href="https://www.buymeacoffee.com/ashishsigdel">
          <Image
            src={buymeacoffee}
            alt="Buy me a coffee"
            width={300}
            height={100}
            className="bg-[#b26bf3] text-white h-[50px] object-contain w-full rounded-lg"
          />
        </a>
      </div>
    </div>
  );
}
