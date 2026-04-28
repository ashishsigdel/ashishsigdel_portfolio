import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog Article — Ashish Sigdel",
  description: "Read the latest thought pieces from Ashish Sigdel",
};

// Next 15 Dynamic Route Params Type
type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetail(props: Props) {
  const params = await props.params;
  const post = blogPosts.find(
    (p) => p.slug === params.id || p.id === params.id,
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Navbar />

      <article className="relative w-full pt-32 pb-24 px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 left-1/2 -translate-x-1/2 w-screen"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.18),rgba(234,88,12,0.07)_38%,rgba(0,0,0,0)_100%)] blur-2xl" />
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 font-mono text-sm"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <header className="flex flex-col gap-6 mb-12">
              <div className="flex flex-wrap gap-3 mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight!">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-700">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-zinc-200">
                    {post.author.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-zinc-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-zinc-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            <div className="relative w-full aspect-21/9 rounded-3xl overflow-hidden mb-16 border border-zinc-800">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300 prose-headings:text-white prose-a:text-orange-500 hover:prose-a:text-orange-400">
              <p className="text-xl md:text-2xl text-zinc-200 font-medium mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              {/* Split content by standard line breaks for demo formatting */}
              {post.content.split("\n\n").map((para, i) => (
                <p className="mb-6 leading-relaxed" key={i}>
                  {para}
                </p>
              ))}

              <p className="mb-6 leading-relaxed">
                This is a dummy extended text block representing the body of the
                article. When building realistic designs, making sure the
                reading width is comfortable keeps the users engaged in
                long-form content. An optimal line length is considered to be
                between 50-75 characters per line. The max-w-4xl paired with
                Tailwind's prose class gives us excellent typography
                out-of-the-box.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                Structuring The Component Layer
              </h2>
              <p className="mb-6 leading-relaxed">
                When taking a design systems approach, abstracting individual UI
                elements into generic atoms pays massive dividends as the scale
                of the application increases. Buttons, inputs, and typography
                layers should be completely abstracted from business logic. In a
                Next.js application leveraging Server Components, defining
                proper component boundaries dictates exactly where the client
                Javascript bundle begins.
              </p>

              <blockquote className="border-l-4 border-orange-600 pl-6 my-10 italic text-zinc-400 bg-zinc-900/50 py-4 rounded-r-xl">
                "The cost of a component is more than just bytes over the wire.
                It's the complexity of state synchronization distributed across
                the entire render tree."
              </blockquote>
            </div>
          </div>

          {/* Recommended Blogs */}
          <div className="max-w-7xl mx-auto">
            <div className="mt-24 pt-12 border-t border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-100 mb-8">
                More Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 3)
                  .map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.slug}`}
                      className="flex flex-col group rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:bg-zinc-900/60 transition-colors"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col flex-1 p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                            {blog.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-zinc-200 group-hover:text-orange-500 transition-colors mb-3 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-zinc-400 line-clamp-2 text-sm">
                          {blog.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
