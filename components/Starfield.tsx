"use client";
import { useEffect, useRef } from "react";

/** Lightweight starfield (no libs). 400~700 stars, parallax on scroll. */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    const stars = Array.from({ length: Math.floor(500 + Math.random() * 200) }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 1.2 + 0.2, // depth factor
      s: Math.random() * 1.2 + 0.2, // size
      vx: (Math.random() - 0.5) * 0.03, // horizontal drift
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const scroll = window.scrollY || 0;
      for (const st of stars) {
        st.x += st.vx / (st.z * 8);
        if (st.x < -0.05) st.x = 1.05;
        if (st.x > 1.05) st.x = -0.05;

        const px = st.x * w;
        const py = (st.y * h + scroll * (0.06 * st.z)) % (h + 20);

        const alpha = 0.35 + (1 - st.z) * 0.6;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, st.s, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="starfield" ref={ref} />;
}
