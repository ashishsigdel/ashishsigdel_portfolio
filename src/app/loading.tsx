import { Background } from "@/components/portfolio/utils";
import Image from "next/image";
import logo from "@/assets/logo/coding.svg";

export default function Loading() {
  return (
    <div className="h-[100vh] overflow-hidden relative text-white flex flex-col items-center justify-center px-10">
      <Background />
      <div className="border rounded-md w-[100%] max-w-xl border-white/20 h-[40px] flex items-center justify-between relative ">
        <div className="w-[40px] h-full flex justify-center items-center border-r border-white/20 overflow-hidden">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="invert"
          />
        </div>
        <div className="mx-auto">
          <p className="text-center font-semibold tracking-wider">
            Ashish
            <span className="text-portfolio-primary">&lt;Sigdel&gt;</span>
          </p>
        </div>
        <div className="w-[40px] h-full flex justify-center items-center border-l border-white/20 overflow-hidden">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
