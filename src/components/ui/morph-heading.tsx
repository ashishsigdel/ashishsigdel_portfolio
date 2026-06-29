"use client";

import { useEffect, useRef, useState, useId } from "react";

// Each slot keeps the same part of speech, so ANY combination reads as a
// meaningful phrase: "[verb-ing] [adjective] [adjective] [noun]".
const SLOTS: string[][] = [
  ["Building", "Crafting", "Designing", "Engineering", "Shaping", "Architecting"],
  ["Intelligent", "Adaptive", "Scalable", "Seamless", "Resilient", "Elegant"],
  ["Digital", "AI-Powered", "Data-Driven", "Cloud-Native", "Modern", "Human-Centered"],
  ["Systems", "Products", "Experiences", "Solutions", "Platforms", "Interfaces"],
];

type MorphHeadingProps = {
  /** Typography classes for the <h2> wrapper. */
  className?: string;
  /** Gradient / clip / per-word classes applied to each morphing word. */
  wordClassName?: string;
  /** Seconds a single word takes to morph into the next. */
  morphTime?: number;
  /** Seconds between random word swaps. */
  swapInterval?: number;
};

/**
 * Heading whose words morph one at a time. Every few seconds a random slot
 * swaps to a different (meaningful) word using the gooey blur→threshold morph.
 */
export default function MorphHeading({
  className = "",
  wordClassName = "",
  morphTime = 0.9,
  swapInterval = 2600,
}: MorphHeadingProps) {
  const rawId = useId();
  const filterId = `morph-h-${rawId.replace(/:/g, "")}`;

  // SSR-stable initial state (first option of every slot). Randomness only
  // kicks in client-side, so no hydration mismatch.
  const [words, setWords] = useState(() => SLOTS.map((slot) => slot[0]));

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setWords((prev) => {
        const slot = Math.floor(Math.random() * SLOTS.length);
        const options = SLOTS[slot].filter((w) => w !== prev[slot]);
        const next = options[Math.floor(Math.random() * options.length)];
        const updated = [...prev];
        updated[slot] = next;
        return updated;
      });
    }, swapInterval);

    return () => clearInterval(interval);
  }, [swapInterval]);

  return (
    <>
      <h2 className={className}>
        {words.map((word, i) => (
          <MorphWord
            key={i}
            text={word}
            filterId={filterId}
            morphTime={morphTime}
            className={wordClassName}
          />
        ))}
      </h2>

      <svg aria-hidden="true" className="absolute h-0 w-0" focusable="false">
        <defs>
          <filter
            id={filterId}
            x="-25%"
            y="-50%"
            width="150%"
            height="220%"
          >
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

// ─── Single morphing word ──────────────────────────────────────────────────────

type MorphWordProps = {
  text: string;
  filterId: string;
  morphTime: number;
  className: string;
};

function MorphWord({ text, filterId, morphTime, className }: MorphWordProps) {
  const fromRef = useRef<HTMLSpanElement>(null);
  const toRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef(text);
  const rafRef = useRef(0);

  useEffect(() => {
    const fromEl = fromRef.current;
    const toEl = toRef.current;
    if (!fromEl || !toEl) return;

    const from = currentRef.current;
    const to = text;

    const settle = () => {
      fromEl.textContent = to;
      fromEl.style.filter = "";
      fromEl.style.opacity = "100%";
      toEl.textContent = "";
      toEl.style.filter = "";
      toEl.style.opacity = "0%";
      currentRef.current = to;
    };

    if (from === to) {
      settle();
      return;
    }

    fromEl.textContent = from;
    toEl.textContent = to;

    let start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      let f = (ts - start) / 1000 / morphTime;
      if (f >= 1) f = 1;

      // Blur + opacity only — the threshold filter lives on the parent so the
      // two overlapping blurred words merge into one gooey shape (the morph).
      toEl.style.filter = `blur(${Math.min(8 / f - 8, 100)}px)`;
      toEl.style.opacity = `${Math.pow(f, 0.4) * 100}%`;

      const inv = 1 - f;
      fromEl.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      fromEl.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;

      if (f < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        settle();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, morphTime]);

  // pb extends each word's gradient box below the baseline so descenders
  // (g, y, p, j) have background to clip to; -mb cancels it to keep the
  // tight line stacking. Both spans share it so the morph stays aligned.
  return (
    <span
      className="relative block -mb-[0.22em]"
      style={{ filter: `url(#${filterId}) blur(0.4px)` }}
    >
      <span
        ref={fromRef}
        className={`block whitespace-nowrap pb-[0.22em] ${className}`}
      >
        {text}
      </span>
      <span
        ref={toRef}
        aria-hidden="true"
        className={`absolute left-0 top-0 whitespace-nowrap pb-[0.22em] ${className}`}
        style={{ opacity: 0 }}
      />
    </span>
  );
}
