import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/data/socialmedia";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Quiting() {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setProgress(0); // Animate directly from 100% to 0%
  }, []);

  return (
    <div className="absolute right-10 top-4 border border-white/20 rounded-md max-w-[300px] bg-black/20 text-white/80 text-sm z-[999]">
      {/* Smooth Progress Bar */}
      <div className="h-1 bg-portfolio-primary/30 rounded-md overflow-hidden mb-2">
        <div
          className="h-full bg-portfolio-primary duration-[3s] ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-3 pb-5">
        Do you want to leave so soon? 😀 <br /> If you want to keep in touch,
        what about connecting on social media?
        <div className="flex justify-center items-center gap-3 mt-5">
          {[
            { icon: FaLinkedin, href: links.linkedin },
            { icon: FaInstagram, href: links.instagram },
            { icon: FaFacebook, href: links.facebook },
            { icon: FaGithub, href: links.github },
          ].map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-center items-center text-white/80 transition duration-300 hover:text-primary hover:scale-110 cursor-pointer"
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
