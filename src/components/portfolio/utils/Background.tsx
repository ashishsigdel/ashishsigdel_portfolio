"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  directionX: number;
  directionY: number;
  opacity: number;
  pulse: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial setup
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Light particles configuration
    const particles: Particle[] = [];
    const particleCount = 15;
    const colors = ["#4a9fff", "#22d3ee", "#22c55e", "#0ea5e9"];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.2 + 0.1,
        directionX: Math.random() > 0.5 ? 1 : -1,
        directionY: Math.random() > 0.5 ? 1 : -1,
        opacity: Math.random() * 0.4 + 0.3,
        pulse: Math.random() * 0.05 + 0.02,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas completely on each frame - no trails
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        // Update particle position with simple directional movement
        particle.x += particle.speed * particle.directionX;
        particle.y += particle.speed * particle.directionY;

        // Pulse opacity
        particle.opacity += Math.sin(Date.now() * particle.pulse) * 0.005;
        particle.opacity = Math.max(0.2, Math.min(0.5, particle.opacity));

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.directionX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.directionY *= -1;
        }

        // Draw particle glow
        const glow = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 15
        );

        glow.addColorStop(0, `${particle.color}40`);
        glow.addColorStop(1, "rgba(0,0,0,0)");

        context.beginPath();
        context.fillStyle = glow;
        context.arc(
          particle.x,
          particle.y,
          particle.radius * 15,
          0,
          Math.PI * 2
        );
        context.fill();

        // Draw particle core
        context.beginPath();
        context.fillStyle = particle.color;
        context.globalAlpha = particle.opacity;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
      });

      // NO connections between particles

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-green-900" />

      {/* Canvas for animated light particles */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-40"
      />

      {/* Horizontal moving "Ashish" */}
      <div className="absolute text-[30rem] font-extrabold text-white/[0.02] top-[100px] whitespace-nowrap animate-scroll font-geist">
        Ashish Dev
      </div>
    </div>
  );
}
