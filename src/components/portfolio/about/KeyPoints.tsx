"use client";
import React, { useEffect, useRef } from "react";

export default function KeyPoints() {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="grid grid-3 text-[3em] sm:text-[4em] md:text-[5em] lg:text-[6em] gap-y-[15px] sm:gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px]">
      {["CREATIVE", "DEVELOPER", "ENGINEER", "INNOVATOR", "TECHNOPHILE"].map(
        (text, i) => (
          <div
            key={i}
            ref={(el) => {
              elementsRef.current[i] = el!;
            }}
            className="autoBlur"
          >
            {text}
          </div>
        )
      )}
    </section>
  );
}
