"use client";
import { useEffect, useRef } from "react";

/** Ziel: weniger BG, viel mehr Shape, Shapes weiter rechts */
const SHAPE_POINTS = 50000;   // massiv erhöht (Logo/Chat)
const BG_POINTS    = 1000;   // weniger Hintergrundsterne
const SWITCH_MS    = 7200;
const SPEED        = 0.05;

type Pt = { x:number; y:number; tx:number; ty:number; vx:number; vy:number };
type V = { x:number; y:number };

export default function MorphingParticles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    const DPR = Math.min(devicePixelRatio || 1, 2);

    const fit = () => {
      const w = c.clientWidth || 1, h = c.clientHeight || 1;
      c.width = Math.floor(w * DPR); c.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    fit(); const ro = new ResizeObserver(fit); ro.observe(c);

    // -------------------------------- helpers
    const rand = (n:number) => Math.random()*n;
    const makeRandom = (n:number, w:number, h:number): Pt[] =>
      Array.from({ length: n }, () => ({ x: rand(w), y: rand(h), tx: rand(w), ty: rand(h), vx:0, vy:0 }));

    // Shapes weiter nach rechts schieben:
    const SHAPE_X_OFFSET_RATIO = 0.18; // ~18% der Breite nach rechts
    const offsetAndClamp = (pts: V[], w:number, h:number) =>
      pts.map(p => {
        const x = Math.min(w - 2, Math.max(2, p.x + w * SHAPE_X_OFFSET_RATIO));
        const y = Math.min(h - 2, Math.max(2, p.y));
        return { x, y };
      });

    const sampleFromCanvas = (
      draw: (ctx: CanvasRenderingContext2D, w:number, h:number)=>void,
      w:number, h:number, count:number
    ): V[] => {
      const off = document.createElement("canvas");
      off.width = w; off.height = h;
      const o = off.getContext("2d")!;
      o.clearRect(0,0,w,h);
      draw(o, w, h);
      const data = o.getImageData(0,0,w,h).data;
      const out: V[] = [];
      const step = Math.max(1, Math.floor(Math.sqrt((w*h)/count)));
      for (let y=0; y<h; y+=step) {
        for (let x=0; x<w; x+=step) {
          const a = data[(y*w + x)*4 + 3];
          if (a > 20) out.push({ x, y });
        }
      }
      while (out.length < count) out.push(out[(Math.random()*out.length)|0] ?? {x:rand(w), y:rand(h)});
      if (out.length > count) out.length = count;
      return out;
    };

    const drawLogoText = (g: CanvasRenderingContext2D, W:number, H:number) => {
      g.fillStyle = "#fff";
      const scale = Math.min(W, H) / 3.4;
      g.font = `900 ${scale*0.44}px ui-sans-serif, -apple-system, Segoe UI, Roboto`;
      g.textBaseline = "top";
      const l1 = "KRÄMER &";
      const l2 = "HOLTHAUSEN";
      const tw = Math.max(g.measureText(l1).width, g.measureText(l2).width);
      const x = (W - tw)/2;
      const y = H*0.22;
      g.fillText(l1, x, y);
      g.fillText(l2, x, y + scale*0.56);
    };

    const drawChatIcon = (g: CanvasRenderingContext2D, W:number, H:number) => {
      g.fillStyle = "#fff";
      const r = Math.min(W, H)*0.16;
      const cx = W*0.5, cy = H*0.48;
      g.beginPath(); g.arc(cx, cy, r, 0, Math.PI*2); g.fill();
      g.globalCompositeOperation = "destination-out";
      g.beginPath(); g.arc(cx, cy, r*0.82, 0, Math.PI*2); g.fill();
      g.globalCompositeOperation = "source-over";
      g.beginPath();
      g.moveTo(cx + r*0.2, cy + r*0.9);
      g.lineTo(cx + r*0.55, cy + r*1.05);
      g.lineTo(cx + r*0.1, cy + r*0.6);
      g.closePath(); g.fill();
    };

    const buildTargets = () => {
      const w = c.clientWidth, h = c.clientHeight;
      const logo = offsetAndClamp(sampleFromCanvas(drawLogoText, w, h, SHAPE_POINTS), w, h);
      const chat = offsetAndClamp(sampleFromCanvas(drawChatIcon, w, h, SHAPE_POINTS), w, h);
      return [logo, chat];
    };

    // -------------------------------- data
    let shapePts: Pt[] = makeRandom(SHAPE_POINTS, c.clientWidth, c.clientHeight);
    let bgPts: Pt[]    = makeRandom(BG_POINTS, c.clientWidth, c.clientHeight);
    let targets = buildTargets();
    let idx = 0;
    let lastSwitch = performance.now();

    const setTargets = (arr: V[]) => {
      for (let i=0;i<SHAPE_POINTS;i++){
        const t = arr[i % arr.length];
        shapePts[i].tx = t.x; shapePts[i].ty = t.y;
      }
    };
    setTargets(targets[idx]);

    // leichte Drifts für BG
    const drift = Array.from({length: BG_POINTS}, () => ({ x:(Math.random()-0.5)*0.18, y:(Math.random()-0.5)*0.18 }));

    // -------------------------------- loop
    const step = () => {
      const now = performance.now();
      const w = c.clientWidth, h = c.clientHeight;

      if (now - lastSwitch > SWITCH_MS) {
        idx = (idx + 1) % targets.length;
        setTargets(targets[idx]);
        lastSwitch = now;
      }

      ctx.clearRect(0,0,w,h);

      // Hintergrundsterne (weniger, aber überall)
      ctx.fillStyle = "#ffffff";
      for (let i=0;i<BG_POINTS;i++){
        const p = bgPts[i], d = drift[i];
        p.x += d.x; p.y += d.y;
        if (p.x < 0) p.x += w; if (p.x > w) p.x -= w;
        if (p.y < 0) p.y += h; if (p.y > h) p.y -= h;
        ctx.fillRect(p.x, p.y, 1, 1);
      }

      // Shape-Punkte (deutlich mehr)
      ctx.strokeStyle = "rgba(255,255,255,.35)";
      for (let i=0;i<SHAPE_POINTS;i++){
        const p = shapePts[i];
        p.vx += (p.tx - p.x) * SPEED;
        p.vy += (p.ty - p.y) * SPEED;
        p.vx *= 0.9; p.vy *= 0.9;
        p.x += p.vx; p.y += p.vy;

        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI*2); ctx.fill();

        if ((i & 3) === 0) {
          const j = (i + 41) % SHAPE_POINTS;
          const dx = p.x - shapePts[j].x, dy = p.y - shapePts[j].y;
          const d2 = dx*dx + dy*dy, R = 95;
          if (d2 < R*R) {
            ctx.globalAlpha = 0.26 * (1 - Math.sqrt(d2)/R);
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(shapePts[j].x, shapePts[j].y); ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);

    const onResize = () => { targets = buildTargets(); setTargets(targets[idx]); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 block w-full h-full" aria-hidden />;
}
