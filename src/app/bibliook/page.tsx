import React from "react";

export default function BibliookPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 md:px-8 md:py-14">
      <section className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
          <video
            className="h-full w-full object-cover filter-[invert(1)_hue-rotate(180deg)_contrast(1.08)_brightness(0.95)]"
            src="https://bibliook.ashishsigdel.com.np/videos/Desktop_DemopageHero.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}
