import { Browse } from "@/components/asprog/browse";
import { BuyMeACoffeeFloating } from "@/components/asprog/browse";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-5 min-h-[calc(100vh-6rem)]">
        <Browse />
        <BuyMeACoffeeFloating />
      </div>
    </div>
  );
}
