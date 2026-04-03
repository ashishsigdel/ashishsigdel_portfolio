import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-zinc-900 border-dashed">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Ashish<span className="font-mono text-zinc-400">{"<Sigdel>"}</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Github size={20} />
          </Link>
          <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </Link>
        </div>

        <div className="text-zinc-600 text-sm font-mono tracking-widest uppercase">
          &copy; 2026 Ashish Sigdel
        </div>
      </div>
    </footer>
  );
}
