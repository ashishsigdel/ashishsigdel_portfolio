import { ProjectClient } from "@/types/projects";
import React, { useState } from "react";
import Description from "./project/Description";
import CoverPhoto from "./project/CoverPhoto";
import Tags from "./project/Tags";
import Leftwindow from "./project/Leftwindow";
import Buttons from "./project/Buttons";

type Props = { closeModal: () => void; project?: ProjectClient };

export default function ProjectModal({ closeModal, project }: Props) {
  const [enhanced, setEnhanced] = useState(false);

  if (!project) return null;

  const toggleEnhance = () => {
    setEnhanced(!enhanced);
  };

  return (
    <div
      className={`relative z-50 rounded-lg shadow-xl w-full max-w-6xl border border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 ${
        enhanced ? "max-w-full m-3" : "max-w-6xl my-10"
      }`}
    >
      <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-700 rounded-t bg-gray-100 dark:bg-gray-800">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <Leftwindow
            quit={closeModal}
            minimize={closeModal}
            toggleWidth={toggleEnhance}
          />
        </div>
      </div>

      {/* Modal body */}
      <div className="p-4 md:p-6 w-full">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <div className="lg:w-3/5 mb-4 lg:mb-0">
            {project.coverPhoto && (
              <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md h-auto">
                <CoverPhoto coverPhoto={project.coverPhoto} />
              </div>
            )}
            <div className="mt-10">
              <Description project={project} />
            </div>
          </div>

          <div className="lg:w-2/5">
            {project.createdAt && (
              <div className="space-y-1">
                <span className="text-gray-400 font-geist text-sm">year:</span>
                <p className="font-semibold">
                  {new Date(project.createdAt).getFullYear()}
                </p>
              </div>
            )}

            <div className="space-y-1 mt-7">
              <span className="text-gray-400 font-geist text-sm">tags:</span>
              <div className="flex flex-wrap gap-2 mt-10">
                <Tags tags={project.tags} />
              </div>
            </div>

            <div className="space-y-1 mt-7">
              <span className="text-gray-400 font-geist text-sm">Links:</span>
              <div className="flex justify-start gap-5 items-center">
                <Buttons
                  githubLink={project?.githubLink}
                  previewLink={project?.previewLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
