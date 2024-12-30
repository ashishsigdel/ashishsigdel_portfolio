import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

interface Degree {
  id: number;
  university: string;
  program: string;
  from: string;
  to: string;
  points: { name: string }[];
  link: string;
  image: any;
}

interface DegreeProps {
  degree: Degree;
}

export default function DegreeCard({ degree }: DegreeProps) {
  return (
    <div className="flex flex-col my-3 mx-auto w-full">
      <div className="rounded-ss-md rounded-ee-md blur-bg border border-color w-full mb-5 mt-5 z-[99]">
        <div className="border-b h-fit w-full border-color flex items-center justify-between px-5">
          <p className="p-3 font-geist"> {degree.program}</p>
          <p className="text-sm text-gray-400 mt-1">
            {degree.from} - {degree.to}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row p-10 gap-10 items-center justify-evenly">
          <div className="mx-3 sm:mx-5 md:mx-7 lg:mx-10">
            <Image
              src={degree.image}
              alt="ashish"
              width={150}
              height={150}
              className="rounded-full w-40 h-40 bg-white object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl sm:text-4xl font-semibold text-white">
              {degree.university}
            </h3>

            {/* Key Points */}
            <div className="mt-6 space-y-4">
              {degree.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-lg text-gray-300"
                >
                  <span className="text-yellow-500 text-2xl flex-shrink-0">
                    ⚡️
                  </span>
                  <p className="leading-relaxed">{point.name}</p>
                </div>
              ))}
            </div>
            <Link
              href={degree.link}
              target="__blank"
              className="relative overflow-hidden py-3 px-4 border border-color hover:border-portfolio-primary/80 transition-all duration-500 w-fit my-8 rounded-md font-geist group mx-auto sm:mx-0"
            >
              <span className="relative z-10 flex gap-4 items-center">
                visit-website
                <MdArrowForward className="group-hover:text-portfolio-primary/80 transition-all duration-500" />
              </span>
              <div className="absolute inset-0 bg-portfolio-primary/40 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
