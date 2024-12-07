"use client";
import React, { useState } from "react";
import { projectsMe } from "@/data/dashboard";
import { SingleProject } from "@/components/admin/projects-asprog";
import { Pagination, SingleLineLoading } from "@/components/common";
import Search from "@/components/common/Search";
import Link from "next/link";

export default function ProjectTable() {
  const [loading, setLoading] = useState(false);
  const updateProjectStatus = (id: number, isActive: boolean) => {};
  const removeProject = (id: number) => {};
  return (
    <>
      <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
        <div className="flex gap-3 flex-wrap justify-between my-4">
          <Search name="asprog/project" />

          <div>
            <Link
              href={"/asprog/project/create"}
              className="py-2 px-3 bg-blue-500 text-[14px] font-semibold text-white rounded-md"
            >
              Add Project
            </Link>
          </div>
        </div>
        <div className="relative overflow-x-auto my-5">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase border-b border-dashed border-color text-gray-700 dark:text-gray-300 font-normal">
              <tr className="px-2">
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  SN
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Cover
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Details
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Uploaded at
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Status
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <>
                  <tr>
                    <td
                      scope="row"
                      colSpan={8}
                      className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
                    >
                      <div className="min-h-[300px] flex justify-center items-center">
                        <SingleLineLoading />
                      </div>
                    </td>
                  </tr>
                </>
              ) : projectsMe.length === 0 ? (
                <tr>
                  <td
                    scope="row"
                    colSpan={8}
                    className="py-4 font-semibold whitespace-nowrap text-graycolor text-center"
                  >
                    No data found
                  </td>
                </tr>
              ) : (
                <>
                  {projectsMe.map((project: any, index) => (
                    <SingleProject
                      updateProjectStatus={updateProjectStatus}
                      project={project}
                      index={index}
                      key={project.id}
                      removeProject={removeProject}
                    />
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={5}
          currentPage={3}
          handlePageChange={() => console.log("page change")}
        />
      </div>
    </>
  );
}
