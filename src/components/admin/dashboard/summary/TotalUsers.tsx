import { FaUsers } from "react-icons/fa";

export default function TotalUsers({ total }: { total: number }) {
  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
      {/* Header Section */}
      <div className="flex items-center">
        <div className="relative">
          <svg
            viewBox="0 0 100 86.6"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
          >
            <path
              d="M25,0 L75,0 C77.5,0 80,2 81.5,4 L100,43.3 C101.5,45.3 101.5,48.7 100,50.7 L81.5,89.3 C80,91.3 77.5,93.3 75,93.3 L25,93.3 C22.5,93.3 20,91.3 18.5,89.3 L0,50.7 C-1.5,48.7 -1.5,45.3 0,43.3 L18.5,4 C20,2 22.5,0 25,0"
              fill="#2a77fd"
            />
          </svg>
          <div className="absolute inset-0 flex justify-center items-center text-white">
            <FaUsers size={26} />
          </div>
        </div>

        <div className="ml-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Total Users
          </p>
          <p className="text-3xl font-bold">{total}</p>
        </div>
      </div>

      <div className="relative mt-4 h-20">
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,50 C125,10 125,90 250,50 C375,10 375,90 500,50 L500,100 L0,100 Z"
            fill="#2a77fd"
            opacity="0.2"
          />
          <path
            d="M0,50 C125,10 125,90 250,50 C375,10 375,90 500,50"
            fill="transparent"
            stroke="#2a77fd"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
