"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaDownload, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";
import FreeLinkForm from "./FreeLinkForm";
import { useParams } from "next/navigation";
import PaidLinkForm from "./PaidLinkForm";
import crown from "@/assets/icons//crown.svg";
import he from "he";
import useProject from "./useProject";
import { Spinner } from "@/components/common";

export default function Project() {
  const params = useParams<{ uuid: string }>();
  const index = Number(params.uuid);

  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject();
  }, [index]);

  if (!project)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto">
      <div className="lg:w-3/5">
        {project.price ? (
          <div className="w-fit mb-4 space-y-3">
            <div className="flex gap-1 items-center text-light-white bg-black/50 dark:bg-white/45 px-2 rounded-full w-fit">
              <Image src={crown} alt="youtube" className={`w-7 h-7 `} />
              <p>Pro</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-500 font-bold font-geist">
              {project.title}
            </h1>
          </div>
        ) : (
          <>
            <h1 className="text-[18px] text-purple-500 font-bold font-geist">
              {project.title}
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              Free Video Resource Bundle
            </h1>
          </>
        )}

        <div
          className="relative w-full h-0 mb-8"
          style={{ paddingBottom: "56.25%" }}
        >
          {project.coverPhoto && (
            <Image
              height={1000}
              width={1000}
              src={project.coverPhoto}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          )}
        </div>
        <div className="my-5 flex items-center gap-x-4">
          {" "}
          <FaDownload /> {project.totalDownload} Downloads
        </div>

        <div className="description-container">
          <div
            className="description-content"
            dangerouslySetInnerHTML={{
              __html: he.decode(project.description),
            }}
          ></div>
        </div>

        <div className="mb-5 mt-5">
          {project.demoLink && (
            <a
              href={project.demoLink}
              className="px-4 py-2 bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition text-center flex justify-center items-center gap-4"
            >
              <FaGlobe />
              View Demo
            </a>
          )}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project?.tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 font-geist bg-purple-500 text-white rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section - Links and Extra Details */}
      <div className="lg:w-2/5 max-w-2xl mx-auto rounded-lg flex flex-col gap-6 relative">
        {project.price ? <PaidLinkForm project={project} /> : <FreeLinkForm />}
      </div>
    </div>
  );
}
