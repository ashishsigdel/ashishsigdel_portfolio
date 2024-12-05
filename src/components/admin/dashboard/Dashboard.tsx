import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div className="px-6 w-full flex justify-between items-center">
        <div className="my-5">
          <h3 className="font-semibold text-[17.5px] leading-5">
            Ashish Sigdel Dashboard
          </h3>
          <Link href="/" className="text-[14px] text-graycolor">
            Home
          </Link>{" "}
          <span className="text-[14px] text-graycolor">-</span>{" "}
          <span className="text-[14px] text-graycolor">Dashboard</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center px-6 mb-4">
        <div className="flex  flex-wrap gap-4 justify-center">
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            Total Projects
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            {/* <DailySales /> */}
            Total Messages
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            {/* <OrderThisMonth /> */}
            asProg-Projects
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            Total Users
          </div>
        </div>
      </div>
    </>
  );
}
