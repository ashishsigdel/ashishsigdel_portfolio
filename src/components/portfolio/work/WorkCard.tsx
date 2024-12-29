import Image from "next/image";
import React from "react";

interface WorkProps {
  work: {
    id: number;
    title: string;
    image: any;
    points: {
      id: number;
      name: string;
    }[];
  };
  index: number;
}

export default function WorkCard({ work, index }: WorkProps) {
  return (
    <div
      className={`w-full border border-gray-200 dark:border-gray-700 p-8 rounded-xl overflow-hidden relative transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] ${
        index % 2 !== 0
          ? "flex flex-col md:flex-row-reverse"
          : "flex flex-col md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div className="h-full aspect-video overflow-hidden rounded-lg shadow-lg">
          <Image
            src={work.image}
            alt={work.title}
            className="w-full aspect-auto"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:px-8">
        <h3 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900 dark:text-white">
          {work.title}
        </h3>
        <div className="mt-6 space-y-4">
          {work.points.map((point) => (
            <div
              key={point.id}
              className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
            >
              <span className="text-yellow-500 text-2xl flex-shrink-0">
                ⚡️
              </span>
              <p className="leading-relaxed">{point.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
