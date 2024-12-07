import Link from "next/link";
import {
  NewMessage,
  RecentMessages,
  RecentUsers,
  TotalAsprogProjects,
  TotalProjects,
  TotalUsers,
} from "@/components/admin/dashboard";
import { AllInbox } from "@/components/admin/inbox";

export default function Inbox() {
  return (
    <div className="bg-light-white dark:bg-dark-black pb-5 min-h-screen">
      <div className="px-6 w-full flex justify-between items-center ">
        <div className="my-5">
          <h3 className="font-semibold text-[17.5px] leading-5">
            Ashish Sigdel Dashboard
          </h3>
          <Link href="/" className="text-[14px] text-gray-500">
            Home
          </Link>{" "}
          <span className="text-[14px] text-gray-500">-</span>{" "}
          <span className="text-[14px] text-gray-500">Inbox</span>
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <AllInbox />
          </div>
        </div>
      </div>
    </div>
  );
}
