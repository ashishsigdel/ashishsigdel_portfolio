import Image from "next/image";

export default function BibliookFooter() {
  return (
    <footer className="border-t border-white/6 px-5 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/projects/bibliook-logo.png"
            alt="Bibliook"
            width={64}
            height={64}
            className="w-28 object-contain opacity-70"
          />
          <span className="opacity-0 text-sm text-zinc-500 font-medium">
            Bibliook
          </span>
        </div>

        {/* Credit */}
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Ashish Sigdel
        </p>
      </div>
    </footer>
  );
}
