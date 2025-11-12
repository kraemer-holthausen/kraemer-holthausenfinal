"use client";
import { useEffect, useRef } from "react";

type Props = {
  lines: string[];
  className?: string;
  id?: string;
  color?: "white" | "black";
  speed?: "normal" | "fast" | "turbo"; // <<< NEU: turbo erlaubt
};

export default function HeadlineParticles({
  lines,
  className = "",
  id = "hl",
  color = "white",
  speed = "turbo", // <<< NEU: Default turbo
}: Props) {

  const svgRef = useRef<SVGSVGElement | null>(null);
  const clipId = `${id}-clip`;

  useEffect(() => {
    const svg = svgRef.current!;
    const box = (svg.querySelector("#textBox") as SVGGElement).getBBox();
    const g = svg.querySelector("#particles") as SVGGElement;

    const w = box.width, h = box.height, ox = box.x, oy = box.y;

    // viel dichter & schneller
    const mul = speed === "turbo" ? 2.2 : speed === "fast" ? 1.6 : 1.0;
    const COUNT = Math.floor((w * h) / (speed === "turbo" ? 3800 : speed === "fast" ? 6000 : 9000)) + (speed === "turbo" ? 260 : speed === "fast" ? 180 : 120);

    type P = { x: number; y: number; vx: number; vy: number; c: SVGCircleElement; l: SVGLineElement };
    const parts: P[] = [];

    const cFill = color === "white" ? "white" : "black";
    const lStroke = color === "white" ? "rgba(255,255,255,.45)" : "rgba(0,0,0,.4)";

    for (let i = 0; i < COUNT; i++) {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
      c.setAttribute("r", speed === "turbo" ? "1.8" : "1.4");
      c.setAttribute("fill", cFill);
      l.setAttribute("stroke", lStroke);
      l.setAttribute("stroke-width", "1");
      g.appendChild(l);
      g.appendChild(c);
      parts.push({
        x: ox + Math.random() * w,
        y: oy + Math.random() * h,
        vx: (Math.random() - 0.5) * mul,
        vy: (Math.random() - 0.5) * mul,
        c, l,
      });
    }

    let raf = 0;
    const pLine = (el: SVGLineElement, x1: number, y1: number, x2: number, y2: number, op: number) => {
      el.setAttribute("x1", `${x1}`); el.setAttribute("y1", `${y1}`);
      el.setAttribute("x2", `${x2}`); el.setAttribute("y2", `${y2}`);
      el.setAttribute("opacity", `${op}`);
    };

    const step = () => {
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < ox) p.x = ox + w;
        if (p.x > ox + w) p.x = ox;
        if (p.y < oy) p.y = oy + h;
        if (p.y > oy + h) p.y = oy;
        p.c.setAttribute("cx", `${p.x}`);
        p.c.setAttribute("cy", `${p.y}`);
      }
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i], b = parts[(i + 2) % parts.length];
        const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        const R = speed === "turbo" ? 110 : 95;
        if (d2 < R * R) {
          const op = (speed === "turbo" ? 0.38 : 0.28) * (1 - Math.sqrt(d2) / R);
          pLine(a.l, a.x, a.y, b.x, b.y, op);
        } else {
          a.l.setAttribute("opacity", "0");
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [color, speed]);

  return (
    <div className={className}>
      <svg ref={svgRef} viewBox="0 0 1200 420" width="100%" preserveAspectRatio="xMinYMin meet">
        <defs>
          <clipPath id={clipId}>
            <g id="textBox" fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight="800" letterSpacing=".01em">
              <text x="0" y="140" fontSize="120">{lines[0]}</text>
              <text x="0" y="280" fontSize="120">{lines[1]}</text>
              {lines[2] && <text x="0" y="420" fontSize="120">{lines[2]}</text>}
            </g>
          </clipPath>
        </defs>

        {/* Text (schwarz) */}
        <g fontFamily="ui-sans-serif, -apple-system, Segoe UI, Roboto" fontWeight="800" letterSpacing=".01em" fill="black">
          <text x="0" y="140" fontSize="120">{lines[0]}</text>
          <text x="0" y="280" fontSize="120">{lines[1]}</text>
          {lines[2] && <text x="0" y="420" fontSize="120">{lines[2]}</text>}
        </g>

        {/* Partikel NUR in den Buchstaben */}
        <g id="particles" clipPath={`url(#${clipId})`} />
      </svg>
    </div>
  );
}
