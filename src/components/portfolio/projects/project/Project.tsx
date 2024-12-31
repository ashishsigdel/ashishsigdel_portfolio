"use client";
import React, { useEffect } from "react";
import useProjects from "../useProjects";
import { useParams } from "next/navigation";
import Hero from "./Hero";
import CoverPhoto from "./CoverPhoto";
import Description from "./Description";
import OtherDetails from "./OtherDetails";

export default function Project() {
  const params = useParams<{ id: string }>();
  const index = Number(params.id);
  const { fetchProject, project } = useProjects();

  useEffect(() => {
    fetchProject(index);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 w-full flex flex-col justify-center items-center mb-24">
      <Hero project={project} />
      <CoverPhoto project={project} />
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-5 w-full">
        <div className="lg:w-3/5 w-full">
          <Description project={project} />
        </div>
        <div className="lg:w-2/5 w-full">
          <OtherDetails project={project} />
        </div>
      </div>
    </div>
  );
}
