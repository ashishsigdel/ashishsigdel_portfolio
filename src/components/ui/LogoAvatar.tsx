"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type LogoAvatarProps = {
  size?: {
    w: number;
    h: number;
  };
  bg?: string;
  name: string;
  image?: string;
  className?: string;
  imageClassName?: string;
};

export default function LogoAvatar({
  size = { w: 40, h: 40 },
  bg = "#ffffff",
  name,
  image,
  className,
  imageClassName,
}: LogoAvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initial = (name?.trim().charAt(0) || "?").toUpperCase();
  const showImage = Boolean(image) && !hasError;

  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-700 shrink-0 overflow-hidden flex items-center justify-center",
        className,
      )}
      style={{ width: size.w, height: size.h, backgroundColor: bg }}
    >
      {showImage ? (
        <img
          src={image}
          alt={`${name} logo`}
          className={cn("h-full w-full object-contain", imageClassName)}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className={`text-zinc-900 font-bold text-2xl`}>{initial}</span>
      )}
    </div>
  );
}
