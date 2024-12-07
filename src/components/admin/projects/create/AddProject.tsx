import Link from "next/link";
import React from "react";
import { CreateForm } from "@/components/admin/projects";

export default function AddProject() {
  return (
    <div className="bg-light-white dark:bg-dark-black pb-5 min-h-[83vh]">
      <div className="px-6 w-full flex justify-between items-center">
        <div className="my-5">
          <h3 className="font-normal text-[17.5px] leading-5">
            Create Project
          </h3>
          <Link href="/dashboard" className="text-[14px] text-graycolor">
            Dashboard
          </Link>{" "}
          <span className="text-[14px] text-graycolor">-</span>{" "}
          <Link href={"/product"} className="text-[14px] text-graycolor">
            Projects
          </Link>{" "}
          <span className="text-[14px] text-graycolor">-</span>{" "}
          <span className="text-[14px] text-graycolor">Create</span>
        </div>
      </div>
      <div className="px-6 mb-4 w-full">
        <CreateForm />
      </div>
    </div>
  );
}
