import React from "react";
import { degrees } from "@/data/educaton";
import DegreeCard from "./DegreeCard";

export default function Degrees() {
  return (
    <div className="max-w-7xl mx-auto my-16 px-3">
      <div className="w-full text-center my-10 autoShow">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Degrees Received/Running
        </h1>
      </div>
      <div className="flex flex-col gap-7 ">
        {degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} />
        ))}
      </div>
    </div>
  );
}
