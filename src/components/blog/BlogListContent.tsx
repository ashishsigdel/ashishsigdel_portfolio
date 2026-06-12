"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";

export default function BlogListContent() {
  const INITIAL_LOAD = 4; // 1 featured + 3 cards
  const LOAD_MORE_COUNT = 3;

  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  const visibleBlogs = blogPosts.slice(0, visibleCount);
  const featuredBlog = visibleBlogs[0];
  const regularBlogs = visibleBlogs.slice(1);

  const hasMore = visibleCount < blogPosts.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* Featured Blog (Full Width) */}
      {featuredBlog && (
        <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden group">
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/80 lg:to-black/20" />
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-orange-600/10 text-orange-500 rounded-full border border-orange-500/20">
                  Featured
                </span>
                <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                  {featuredBlog.date}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 group-hover:text-orange-500 transition-colors">
                {featuredBlog.title}
              </h2>

              <p className="text-zinc-400 text-lg mb-8 line-clamp-3">
                {featuredBlog.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500 text-sm font-mono">
                    {featuredBlog.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-200 transition-colors gap-2"
                >
                  Read Article <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid for remaining blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col group rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:bg-zinc-900/60 transition-colors"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-1 p-6 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                  {blog.date}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-zinc-200 group-hover:text-orange-500 transition-colors mb-4 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-zinc-400 mb-8 line-clamp-3 text-sm">
                {blog.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-zinc-500 font-mono text-xs">
                  {blog.readTime}
                </span>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-transparent px-8 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
