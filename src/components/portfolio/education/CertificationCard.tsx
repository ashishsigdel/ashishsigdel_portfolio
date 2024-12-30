import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

interface CertificateProps {
  certification: {
    id: number;
    name: string;
    author: string;
    Link: string;
    image: any;
  };
}

const CertificationCard = ({ certification }: CertificateProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl backdrop-blur-md border border-color">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={certification.image}
          alt={certification.name}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white/90 transition-colors duration-300 group-hover:text-blue-600">
          {certification.name}
        </h3>
        <p className="mb-4 text-gray-300">
          by <span className="font-medium">{certification.author}</span>
        </p>

        {/* Button Container with proper spacing */}
        <div className="flex justify-start mb-4">
          <Link
            href={certification.Link}
            className="relative overflow-hidden py-3 px-4 border border-gray-400 hover:border-portfolio-primary/80 transition-all duration-500 rounded-md font-geist group inline-block"
          >
            <span className="relative z-10 flex items-center gap-4 text-gray-300 group-hover:text-white transition-colors duration-500 font-geist">
              go-there
              <MdArrowForward className="group-hover:text-portfolio-primary/80 transition-all duration-500" />
            </span>
            <div className="absolute inset-0 bg-portfolio-primary/40 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rotate-45 bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20" />
    </div>
  );
};

export default CertificationCard;
