import React from "react";
import { certifications } from "@/data/educaton";
import CertificationCard from "./CertificationCard";

export default function Degrees() {
  return (
    <div className="max-w-7xl mx-auto my-24 px-3">
      <div className="w-full text-center my-10 autoShow">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Courses and Certifications
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} />
        ))}
      </div>
    </div>
  );
}
