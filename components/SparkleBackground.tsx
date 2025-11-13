"use client";

import { useEffect, useRef } from "react";

export default function SparkleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    type Star = { x: number; y: number; z: number };
    const COUNT = 450;
    const stars: Star[] = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    }));

    let frame: number;

    const step = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,1)";

      for (const s of stars) {
        const px = s.x * w;
        const py = s.y * h;
        const size = 0.7 + s.z * 1.3;
        ctx.globalAlpha = 0.18 + s.z * 0.6;
        ctx.fillRect(px, py, size, size);

        // leichte Bewegung nach unten
        s.y += 0.0007 + s.z * 0.0013;
        if (s.y > 1.1) s.y = -0.1;
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
