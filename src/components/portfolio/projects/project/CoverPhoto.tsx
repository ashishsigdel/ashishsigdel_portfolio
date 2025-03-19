import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoverPhoto({ coverPhoto }: { coverPhoto: string }) {
  if (!coverPhoto) {
    return;
  }
  return (
    <div className="w-full">
      {coverPhoto && (
        <Image
          src={coverPhoto}
          alt={"ashishsigdel's portfolio"}
          width={500}
          height={500}
          className="w-full"
        />
      )}
    </div>
  );
}
