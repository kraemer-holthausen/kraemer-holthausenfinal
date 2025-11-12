"use client";
import { useEffect, useRef } from "react";

export default function ButtonParticles({ color = "white" }: { color?: "white" | "black" }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const fit = () => {
      const w = c.clientWidth || 1, h = c.clientHeight || 1;
      c.width = Math.floor(w * DPR); c.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    fit(); const ro = new ResizeObserver(fit); ro.observe(c);

    const fill = color === "white" ? "rgba(255,255,255,.95)" : "rgba(0,0,0,.85)";
    const stroke = color === "white" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)";

    type P = { x: number; y: number; vx: number; vy: number };
    let ps: P[] = [];
    const reset = () => {
      const w = c.clientWidth, h = c.clientHeight;
      const n = Math.max(14, Math.floor((w * h) / 1200));
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6
      }));
    };
    reset();

    let raf = 0;
    const step = () => {
      const w = c.clientWidth, h = c.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = fill; ctx.strokeStyle = stroke;

      for (const p of ps) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i], b = ps[(i + 3) % ps.length];
        const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < 80 * 80) {
          ctx.globalAlpha = 0.25 * (1 - Math.sqrt(d2) / 80);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [color]);

  return <canvas ref={ref} className="absolute inset-0 pointer-events-none rounded-full" />;
}
