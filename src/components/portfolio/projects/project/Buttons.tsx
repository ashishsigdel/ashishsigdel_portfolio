import { FaGithub } from "react-icons/fa";
import { PiArrowSquareOutLight } from "react-icons/pi";
import Link from "next/link";

type Props = {
  githubLink?: string;
  previewLink?: string;
};

export default function Buttons({ githubLink, previewLink }: Props) {
  return (
    <>
      {githubLink && (
        <Link
          href={githubLink}
          className="px-6 py-2.5 rounded-full text-sm font-medium bg-portfolio-primary/20 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group z-10 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </Link>
      )}
      {previewLink && (
        <Link
          href={previewLink}
          className="px-6 py-2.5 rounded-full text-sm font-medium bg-portfolio-primary/20 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group z-10 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Live Preview</span>
          <PiArrowSquareOutLight size={20} />
        </Link>
      )}
    </>
  );
}
