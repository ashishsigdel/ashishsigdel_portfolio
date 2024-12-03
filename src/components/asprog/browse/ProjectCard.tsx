"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function ProjectCard({ project }: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null until the component is rendered on the client
  if (!isClient) {
    return null;
  }

  return (
    <Link key={project.id} href={`/resources/${project.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer group">
        <div
          className="relative w-full h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <Image
            height={500}
            width={500}
            src={project.coverPhoto}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="p-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
            {project.title}
          </h4>
          <p
            className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
        </div>
      </div>
    </Link>
  );
}
