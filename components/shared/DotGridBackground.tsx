"use client";

import { useRef, useEffect, useCallback } from "react";

interface Dot {
  /** Base / rest position */
  originX: number;
  originY: number;
  /** Current (possibly displaced) position */
  x: number;
  y: number;
  /** Velocity for fluid return spring */
  vx: number;
  vy: number;
  baseRadius: number;
  baseOpacity: number;
  currentRadius: number;
  currentOpacity: number;
  phase: number;
}

export function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);
  const dimsRef = useRef({ w: 0, h: 0, sizeScale: 1 });

  const SPACING = 32;
  const INFLUENCE_RADIUS = 220;
  /** How far a dot can be pushed from its origin (px) */
  const MAX_DISPLACEMENT = 50;
  /** Repulsion force strength */
  const FORCE = 1.6;
  /** Spring stiffness for returning to origin */
  const SPRING = 0.045;
  /** Velocity damping */
  const DAMPING = 0.85;
  /** How fast radius / opacity lerp */
  const LERP_SPEED = 0.06;
  /** Reference diagonal (in CSS px) for scaling dot sizes consistently */
  const REF_DIAG = Math.sqrt(1920 * 1920 + 1080 * 1080);

  const initDots = useCallback(
    (w: number, h: number) => {
      const dots: Dot[] = [];
      const cols = Math.ceil(w / SPACING) + 2;
      const rows = Math.ceil(h / SPACING) + 2;
      const offsetX = (w - (cols - 2) * SPACING) / 2;
      const offsetY = (h - (rows - 2) * SPACING) / 2;

      // Scale dot size relative to viewport diagonal so they look the same
      // size on all screens — small phones get smaller dots, big monitors get bigger ones
      const diag = Math.sqrt(w * w + h * h);
      const sizeScale = Math.max(0.5, Math.min(1.5, diag / REF_DIAG));
      dimsRef.current.sizeScale = sizeScale;

      const baseR = 1.2 * sizeScale;
      const baseRRange = 1.2 * sizeScale;
      const baseO = 0.15 * Math.min(1, sizeScale + 0.3);
      const baseORange = 0.15 * Math.min(1, sizeScale + 0.3);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const jitterX = (Math.random() - 0.5) * 4;
          const jitterY = (Math.random() - 0.5) * 4;
          const ox = offsetX + c * SPACING + jitterX;
          const oy = offsetY + r * SPACING + jitterY;

          dots.push({
            originX: ox,
            originY: oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
            baseRadius: baseR + Math.random() * baseRRange,
            baseOpacity: baseO + Math.random() * baseORange,
            currentRadius: baseR + Math.random() * baseRRange,
            currentOpacity: baseO + Math.random() * baseORange,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      dotsRef.current = dots;
    },
    [REF_DIAG],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas!.parentElement!;
      const w = parent.clientWidth;
      const h = parent.clientHeight;

      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);

      dimsRef.current = { w, h, sizeScale: 1 };
      initDots(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only react if the mouse is within the canvas bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -10000, y: -10000 };
      }
    };

    const handleLeave = () => {
      mouseRef.current = { x: -10000, y: -10000 };
    };

    // Listen on window so events work despite pointer-events:none on the canvas
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);

    let time = 0;
    let lastTime = 0;

    const animate = (now: number) => {
      // Frame-rate-independent timing
      if (lastTime === 0) lastTime = now;
      const dt = Math.min((now - lastTime) / 16.667, 3); // normalize to 60fps, cap at 3x
      lastTime = now;

      time += 0.005 * dt;
      const mouse = mouseRef.current;
      const dots = dotsRef.current;
      const { w, h, sizeScale } = dimsRef.current;

      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // --- Physical repulsion ---
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Apply repulsion force if within influence radius
        if (dist < INFLUENCE_RADIUS && dist > 0.01) {
          const t = 1 - dist / INFLUENCE_RADIUS;
          // Exponential falloff — much sharper near the cursor
          const falloff = t * t * t;
          // Normalised direction vector
          const nx = dx / dist;
          const ny = dy / dist;
          // Apply force pushing dot away from cursor (frame-rate independent)
          dot.vx += nx * falloff * FORCE * dt;
          dot.vy += ny * falloff * FORCE * dt;
        }

        // Spring force pulling dot back toward its origin (frame-rate independent)
        const springX = (dot.originX - dot.x) * SPRING * dt;
        const springY = (dot.originY - dot.y) * SPRING * dt;
        dot.vx += springX;
        dot.vy += springY;

        // Damping
        dot.vx *= Math.pow(DAMPING, dt);
        dot.vy *= Math.pow(DAMPING, dt);

        // Integrate position
        dot.x += dot.vx * dt;
        dot.y += dot.vy * dt;

        // --- Visual response ---
        const displacement = Math.sqrt(
          (dot.x - dot.originX) ** 2 + (dot.y - dot.originY) ** 2,
        );
        // Normalised displacement 0 → 1 (clamped)
        const normDisp = Math.min(1, displacement / MAX_DISPLACEMENT);

        // The more a dot is displaced, the smaller & fainter it becomes
        const shrinkFactor = 1 - normDisp * 0.7;

        let targetRadius = dot.baseRadius * shrinkFactor;
        let targetOpacity = dot.baseOpacity * (1 - normDisp * 0.8);

        // Brighten and enlarge dots being interacted with (near cursor)
        if (dist < INFLUENCE_RADIUS && dist > 0.01) {
          const proxT = 1 - dist / INFLUENCE_RADIUS;
          const proxFalloff = proxT * proxT;

          // Glow up — dots near cursor get brighter and pulse larger
          const glow = proxFalloff * 0.65;
          targetOpacity = Math.min(1, targetOpacity + glow);

          // Slight size bloom near cursor to make interaction feel alive
          targetRadius += proxFalloff * 1.8 * sizeScale;
        }

        // Ambient pulse
        const pulse = Math.sin(time * 2 + dot.phase) * 0.015;

        // Smoothly interpolate visual
        dot.currentRadius += (targetRadius - dot.currentRadius) * LERP_SPEED;
        dot.currentOpacity += (targetOpacity - dot.currentOpacity) * LERP_SPEED;

        const renderRadius = Math.max(0.1, dot.currentRadius + pulse);
        const renderOpacity = Math.max(0, dot.currentOpacity);

        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, renderRadius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(12, 186, 166, ${renderOpacity})`;
        ctx!.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
