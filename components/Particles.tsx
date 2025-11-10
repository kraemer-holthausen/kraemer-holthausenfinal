"use client";
import { useEffect, useRef } from "react";

/**
 * Leichte Partikel-Animation:
 * - 200–320 Punkte (auto), verbinden sich per Linie wenn nah beieinander
 * - Maus-Parallax, sanftes Floaten
 * - keine Fremd-Bibliotheken
 */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Setup particles
    const COUNT = Math.floor(200 + (w * h) / 35000);
    const P: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < COUNT; i++) {
      P.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }

    // mouse parallax
    const mouse = { x: w / 2, y: h / 2 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // update + draw particles
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      for (const p of P) {
        // parallax light pull
        p.vx += (mouse.x - p.x) * 0.00001;
        p.vy += (mouse.y - p.y) * 0.00001;

        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // connections
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const a = P[i], b = P[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const alpha = 0.15 * (1 - d2 / (110 * 110));
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas id="bg-canvas" ref={ref} />;
}
