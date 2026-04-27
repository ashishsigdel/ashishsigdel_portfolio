"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Send, User, ChevronUp } from "lucide-react";

// ── Scroll progress bar ────────────────────────────────────────────────────
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-zinc-900">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Back to top button ─────────────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-400 hover:text-white hover:border-zinc-500 backdrop-blur-sm transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={16} />
    </button>
  );
}

// ── Like button ────────────────────────────────────────────────────────────
export function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [burst, setBurst] = useState(false);

  function handleLike() {
    if (liked) {
      setLiked(false);
      setCount((c) => c - 1);
    } else {
      setLiked(true);
      setCount((c) => c + 1);
      setBurst(true);
      setTimeout(() => setBurst(false), 600);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLike}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl border transition-all duration-200 text-left relative overflow-hidden ${
        liked
          ? "border-orange-500/40 bg-orange-500/[0.08] text-orange-400"
          : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
      }`}
    >
      {burst && (
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="animate-ping absolute w-8 h-8 rounded-full bg-orange-500/20" />
        </span>
      )}
      <Heart
        size={15}
        className={`transition-all duration-300 ${
          liked ? "fill-orange-500 text-orange-500 scale-110" : "text-zinc-500"
        }`}
      />
      <span className="flex-1 text-sm font-medium">Like this project</span>
      <span
        className={`text-sm font-mono tabular-nums ${liked ? "text-orange-400" : "text-zinc-500"}`}
      >
        {count}
      </span>
    </button>
  );
}

// ── Comment section ────────────────────────────────────────────────────────
type Comment = {
  id: number;
  author: string;
  body: string;
  time: string;
};

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  function submit() {
    if (!name.trim() || !body.trim()) {
      setError("Please fill in both fields before posting.");
      return;
    }
    setError("");
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: name.trim(),
        body: body.trim(),
        time: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      },
    ]);
    setName("");
    setBody("");
  }

  return (
    <section className="space-y-8">
      {/* Section header */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-zinc-600">
          Discussion
        </span>
        <div className="flex-1 h-px bg-zinc-800" />
        {comments.length > 0 && (
          <span className="text-[10px] font-mono text-zinc-600">
            {comments.length} {comments.length === 1 ? "comment" : "comments"}
          </span>
        )}
      </div>

      {/* Comment list */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 rounded-2xl border border-dashed border-zinc-800 text-center">
            <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center mb-4">
              <MessageCircle size={18} className="text-zinc-600" />
            </div>
            <p className="text-zinc-500 text-sm">No comments yet</p>
            <p className="text-zinc-700 text-xs mt-1">
              Be the first to share your thoughts
            </p>
          </div>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              className="flex gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300 uppercase">
                {c.author[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-zinc-200">
                    {c.author}
                  </span>
                  <span className="text-xs font-mono text-zinc-600">
                    {c.time}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Comment form */}
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6 space-y-4">
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600">
          Leave a comment
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-zinc-500 mb-1.5 font-mono">
              Your name
            </label>
            <div className="relative">
              <User
                size={12}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-zinc-900/60 border border-zinc-800 rounded-xl text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs text-zinc-500 mb-1.5 font-mono">
            Message
          </label>
          <textarea
            ref={textRef}
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your thoughts, feedback, or questions..."
            className="w-full resize-none px-4 py-3 text-sm bg-zinc-900/60 border border-zinc-800 rounded-xl text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors leading-relaxed"
          />
        </div>

        {error && <p className="text-xs text-red-400 font-mono">{error}</p>}

        <div className="flex justify-end">
          <button
            type="button"
            onClick={submit}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-orange-50 transition-colors"
          >
            Post Comment
            <Send size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
