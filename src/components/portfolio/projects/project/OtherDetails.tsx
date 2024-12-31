import Link from "next/link";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function OtherDetails({ project }: { project: any }) {
  if (!project.createdAt) {
    return;
  }

  const year = new Date(project?.createdAt).getFullYear();
  return (
    <div className="flex flex-col gap-y-5">
      <div className="space-y-1">
        <span className="text-gray-400 font-geist text-sm">year</span>
        <p className="font-semibold">{year}</p>
      </div>
      <div className="space-y-1">
        <span className="text-gray-400 font-geist text-sm">tags</span>
        <div className="flex flex-wrap gap-3 justify-start">
          {project?.tags.split(",").map((tag: string) => {
            return (
              <div
                key={tag}
                className="bg-black/20 px-4 py-1.5 rounded-full border border-white/20 w-fit"
              >
                <p className="whitespace-nowrap">{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
      {project?.githubLink && (
        <div className="space-y-1 border border-white/20 w-fit px-4 py-3 rounded-md">
          <Link
            target="__blank"
            href={project.githubLink}
            className="flex gap-3 items-center"
          >
            <span>watch-source</span>
            <FaGithub />
          </Link>
        </div>
      )}
      {project?.previewLink && (
        <div className="space-y-1 border border-white/20 w-fit px-4 py-3 rounded-md">
          <Link
            target="__blank"
            href={project.previewLink}
            className="flex gap-3 items-center"
          >
            <span>watch-demo</span>
            <FaGlobe />
          </Link>
        </div>
      )}
    </div>
  );
}
