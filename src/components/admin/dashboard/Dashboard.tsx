"use client";
import Link from "next/link";
import {
  NewMessage,
  RecentMessages,
  RecentUsers,
  TotalAsprogProjects,
  TotalProjects,
  TotalUsers,
} from "@/components/admin/dashboard";
import useDashboard from "./useDashboard";
import { Loader } from "@/utils";

export default function Dashboard() {
  const { dashbordData, loading } = useDashboard();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-80px)] w-full relative">
        <Loader />
      </div>
    );
  }
  return (
    <div className="bg-light-white dark:bg-dark-black pb-5">
      <div className="px-6 w-full flex justify-between items-center ">
        <div className="my-5">
          <h3 className="font-semibold text-[17.5px] leading-5">
            Ashish Sigdel Dashboard
          </h3>
          <Link href="/" className="text-[14px] text-gray-500">
            Home
          </Link>{" "}
          <span className="text-[14px] text-gray-500">-</span>{" "}
          <span className="text-[14px] text-gray-500">Dashboard</span>
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <TotalProjects total={dashbordData.totalPortfolio} />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <NewMessage total={dashbordData.newMessages} />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <TotalAsprogProjects total={dashbordData.totalCreation} />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <TotalUsers total={dashbordData.totalUsers} />
          </div>
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <RecentMessages messages={dashbordData.recentMessages} />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <RecentUsers users={dashbordData.recentUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
