import { Background } from "@/components/portfolio/utils";
import React from "react";

export default function Loading() {
  return (
    <div>
      <Background />
      <p className="text-white text-7xl">Loading...</p>
    </div>
  );
}
