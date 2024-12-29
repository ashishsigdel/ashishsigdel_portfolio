import React from "react";
import { whatido } from "@/data/whatido";
import WorkCard from "./WorkCard";

export default function MyWork() {
  return (
    <div className="max-w-7xl mx-auto my-5 px-3 relative">
      <div className="w-full text-center my-10 autoShow">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          What I Do?
        </h1>
      </div>
      <div className="flex flex-col gap-7 ">
        {whatido.map((work, index) => (
          <WorkCard key={index} work={work} index={index} />
        ))}
      </div>
    </div>
  );
}
