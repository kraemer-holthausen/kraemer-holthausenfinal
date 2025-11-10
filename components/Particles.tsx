"use client";
import { useEffect, useRef } from "react";

/**
 * Interaktiver Partikel-Background
 * - Parallax via Scroll (pro Partikel unterschiedlicher "z"-Faktor)
 * - Maus-Interaktion (anziehen/abstoßen, Linien verstärken)
 * - Leistungsoptimiert (ResizeObserver, rAF, keine Libs)
 */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    // -------------------- TUNING --------------------
    const BASE_SPEED = 0.55;       // Grundgeschwindigkeit
    const JITTER = 0.025;          // leichtes „Zittern“ für lebendige Bewegung
    const CONNECT_DIST = 140;      // Maximaler Verbindungsabstand in px
    const MOUSE_RADIUS = 160;      // Einfluss-Radius der Maus
    const MOUSE_FORCE = 0.25;      // Stärke (0.15–0.35 angenehm)
    const PARALLAX = 0.08;         // Scroll-Parallax-Faktor (0.05–0.12)
    // ------------------------------------------------

    // Maus-Tracking (eased)
    const mouse = { x: 0, y: 0, ex: 0, ey: 0, active: false };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onEnter = () => (mouse.active = true);
    const onLeave = () => (mouse.active = false);

    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);

    // Resize + DPR handling
    const resize = () => {
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Section-Top für Parallax
    let sectionTop = 0;
    const updateSectionTop = () => {
      sectionTop = window.scrollY + canvas.getBoundingClientRect().top;
    };
    updateSectionTop();
    window.addEventListener("scroll", updateSectionTop, { passive: true });

    // Partikel
    type P = { x: number; y: number; vx: number; vy: number; z: number };
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    let parts: P[] = [];

    const init = () => {
      if (!running) return;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      parts = [];
      const COUNT = Math.floor(220 + (w * h) / 28000); // dichter bei großen Flächen
      for (let i = 0; i < COUNT; i++) {
        const z = 0.5 + Math.random() * 1.2; // Tiefe: 0.5–1.7
        parts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * BASE_SPEED,
          vy: (Math.random() - 0.5) * BASE_SPEED,
          z,
        });
      }
    };
    init();

    const step = () => {
      if (!running) return;

      // Sanftes Easing der Maus (verhindert ruckeln)
      mouse.ex += (mouse.x - mouse.ex) * 0.12;
      mouse.ey += (mouse.y - mouse.ey) * 0.12;

      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      if (cw !== w || ch !== h) {
        resize();
        init();
      }

      // Lokaler Scroll für Parallax
      const localScroll = window.scrollY - sectionTop;
      const parallax = localScroll * PARALLAX;

      ctx.clearRect(0, 0, w, h);

      // Update + draw
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      for (const p of parts) {
        // leichte zufällige Richtungsänderung
        p.vx += (Math.random() - 0.5) * JITTER;
        p.vy += (Math.random() - 0.5) * JITTER;

        // Maus-Interaktion (Abstoßung / Attraction)
        if (mouse.active) {
          const dx = p.x - mouse.ex;
          const dy = p.y - mouse.ey;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const d = Math.sqrt(d2) || 1;
            // Richtung vom Cursor weg + Z-Faktor damit nahe Partikel stärker reagieren
            const f = (MOUSE_FORCE * (1 - d / MOUSE_RADIUS)) / p.z;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        // Bewegung + Wrap
        p.x += p.vx / p.z;
        p.y += p.vy / p.z;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Render mit Parallax (y verschieben)
        const ry = p.y + parallax * p.z;
        ctx.beginPath();
        ctx.arc(p.x, ry, 1.2 + (1.6 - p.z) * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Verbindungen
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        const ay = a.y + parallax * a.z;
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          const by = b.y + parallax * b.z;
          const dx = a.x - b.x;
          const dy = ay - by;
          const d2 = dx * dx + dy * dy;
          if (d2 < CONNECT_DIST * CONNECT_DIST) {
            // Alpha je nach Distanz + Mausnähe boosten
            const dist = Math.sqrt(d2);
            let alpha = 0.18 * (1 - dist / CONNECT_DIST);
            if (mouse.active) {
              const mx = (a.x + b.x) * 0.5 - mouse.ex;
              const my = (ay + by) * 0.5 - mouse.ey;
              const md2 = mx * mx + my * my;
              if (md2 < (MOUSE_RADIUS * MOUSE_RADIUS) * 1.2) {
                alpha = Math.min(0.28, alpha + 0.12); // stärker wenn Cursor in der Nähe
              }
            }
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(a.x, ay);
            ctx.lineTo(b.x, by);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", updateSectionTop);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} id="bg-canvas" className="absolute inset-0 w-full h-full" />;
}
