"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 34;
const FRAME_PATH = "/ashish/sequence000864";

// Generate frame URLs — files are named sequence00086410.jpg to sequence00086434.jpg
const getFrameUrl = (frameNumber: number) => {
  let fileName;
  if (frameNumber < 10) {
    fileName = `0${frameNumber}`;
  } else {
    fileName = `${frameNumber}`;
  }
  return `${FRAME_PATH}${fileName}.jpg`;
};

interface ScrollVideoProps {
  className?: string;
  opacity?: number;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollVideo({
  className = "",
  opacity = 1.0,
  scrollContainerRef,
}: ScrollVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Preload all images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let settledCount = 0;

    const onSettle = () => {
      settledCount++;
      if (settledCount === TOTAL_FRAMES) {
        setImagesLoaded(true);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = onSettle;
      img.onerror = onSettle;
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Draw frame on canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const images = imagesRef.current;

    if (!canvas || !ctx || !images.length) return;

    const img = images[frameIndex];
    if (!img || !img.complete) return;

    // Set canvas size to match container
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    // Draw image covering the canvas (like object-fit: cover)
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height,
    );
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, []);

  // Handle scroll based on parent container position
  useEffect(() => {
    if (!imagesLoaded) return;

    // Draw first frame
    drawFrame(0);

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate progress based on how much of the scroll container has been scrolled
        // When top of container is at top of viewport, progress = 0
        // When bottom of container reaches bottom of viewport, progress = 1
        const scrollableDistance = container.offsetHeight - viewportHeight;
        const scrolled = -rect.top;
        const progress = Math.min(
          Math.max(scrolled / scrollableDistance, 0),
          1,
        );

        const frameIndex = Math.min(
          Math.floor(progress * TOTAL_FRAMES),
          TOTAL_FRAMES - 1,
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => drawFrame(currentFrameRef.current));

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () =>
        drawFrame(currentFrameRef.current),
      );
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [imagesLoaded, drawFrame, scrollContainerRef]);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      style={{
        opacity: imagesLoaded ? opacity : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Loading indicator */}
      {!imagesLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm">
          Loading...
        </div>
      )}
    </div>
  );
}
