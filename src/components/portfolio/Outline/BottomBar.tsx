import { IoMdSettings } from "react-icons/io";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="w-full border-t border-white/20 h-[40px] flex items-center justify-between bg-black/30 relative">
      <div className="w-[40px] h-full flex justify-center items-center border-r border-white/20 overflow-hidden">
        <IoMdSettings className="text-[18px] text-white/60 hover:text-primary" />
      </div>
      <div className="pr-[20px] h-full flex justify-center items-center gap-3">
        <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
          <FaLinkedin />
          <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Linkedin
          </span>
        </div>
        <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
          <FaInstagram />
          <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Instagram
          </span>
        </div>
        <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
          <FaFacebook />
          <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Facebook
          </span>
        </div>
        <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
          <FaGithub />
          <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Github
          </span>
        </div>
        <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
          <FaXTwitter />
          <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            X
          </span>
        </div>
      </div>
    </div>
  );
}
