"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  DEFAULT_PHYSICS_CONFIG,
  PhysicsConfig,
  PhysicsDot,
  updateDotPhysics,
} from "@/lib/dot-grid";
import { generateTopographicDots } from "@/lib/voronoi-dots";

export interface InteractiveDotGridCanvasProps {
  /** Seed for procedural topographic Perlin noise generation */
  seed?: number;
  /** Optional custom dot generator function. If provided, overrides default topographic noise grid */
  dotGenerator?: (width: number, height: number) => PhysicsDot[];
  /** Optional physics engine tuning constants */
  physicsConfig?: PhysicsConfig;
  /** If true, listens on window mousemove events (useful when canvas has pointer-events-none) */
  windowMouseEvents?: boolean;
  /** Color calculation mode: 'single-rgb' (default) or 'diagonal-gradient' (for landing background grid) */
  colorMode?: "single-rgb" | "diagonal-gradient";
  /** Optional class name for the wrapper element */
  className?: string;
}

export function InteractiveDotGridCanvas({
  seed = 42,
  dotGenerator,
  physicsConfig = DEFAULT_PHYSICS_CONFIG,
  windowMouseEvents = false,
  colorMode = "single-rgb",
  className = "",
}: InteractiveDotGridCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -10000, y: -10000 });
  const dotsRef = useRef<PhysicsDot[]>([]);
  const rafRef = useRef<number>(0);
  const isHoveredRef = useRef(false);
  const dimsRef = useRef({ w: 300, h: 300 });
  const timeRef = useRef(0);

  const startAnimation = useCallback(() => {
    if (rafRef.current) return;

    let lastTime = 0;

    const render = (now: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w, h } = dimsRef.current;
      if (lastTime === 0) lastTime = now;
      const dt = Math.min((now - lastTime) / 16.667, 3);
      lastTime = now;

      timeRef.current += (physicsConfig.ambientPulseSpeed || 0) * dt;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const dots = dotsRef.current;
      const isMoving =
        updateDotPhysics(dots, mx, my, dt, physicsConfig) ||
        isHoveredRef.current ||
        (physicsConfig.ambientPulseSpeed || 0) > 0;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const pulse =
          (physicsConfig.ambientPulseSpeed || 0) > 0
            ? Math.sin(timeRef.current * 2 + (dot.phase || 0)) * 0.015
            : 0;

        const renderRadius = Math.max(0.1, dot.currentRadius + pulse);

        let r = 12,
          g = 186,
          b = 166;
        if (colorMode === "diagonal-gradient") {
          const u = dot.x / (w || 1);
          const v = ((h || 1) - dot.y) / (h || 1);
          const rawRatio = Math.max(0, Math.min(1, (u + v) / 2));
          const posRatio = Math.pow(rawRatio, 2);

          r = Math.round(12 + (217 - 12) * posRatio);
          g = Math.round(186 + (251 - 186) * posRatio);
          b = Math.round(166 + (2 - 166) * posRatio);
        } else if (dot.colorRgb) {
          r = dot.colorRgb.r;
          g = dot.colorRgb.g;
          b = dot.colorRgb.b;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(
          0,
          dot.currentOpacity,
        )})`;
        ctx.fill();
      }

      if (isMoving) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        rafRef.current = 0;
      }
    };

    rafRef.current = requestAnimationFrame(render);
  }, [physicsConfig, colorMode]);

  const initCanvas = useCallback(
    (w: number, h: number) => {
      const canvas = canvasRef.current;
      if (!canvas || w <= 0 || h <= 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = w;
      canvas.height = h;
      dimsRef.current = { w, h };

      const runAsyncInit = () => {
        ctx.clearRect(0, 0, w, h);
        if (dotGenerator) {
          dotsRef.current = dotGenerator(w, h);
        } else {
          dotsRef.current = generateTopographicDots(w, h, seed);
        }
        startAnimation();
      };

      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(runAsyncInit);
      } else {
        setTimeout(runAsyncInit, 0);
      }
    },
    [seed, dotGenerator, startAnimation],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.contentRect;
        initCanvas(Math.floor(rect.width), Math.floor(rect.height));
      }
    });

    observer.observe(canvas.parentElement || canvas);
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      initCanvas(Math.floor(rect.width), Math.floor(rect.height));
    }

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initCanvas]);

  useEffect(() => {
    if (!windowMouseEvents) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      if (rawX >= 0 && rawX <= rect.width && rawY >= 0 && rawY <= rect.height) {
        mouseRef.current = { x: rawX, y: rawY };
      } else {
        mouseRef.current = { x: -10000, y: -10000 };
      }
      isHoveredRef.current = true;
      startAnimation();
    };

    const handleLeave = () => {
      mouseRef.current = { x: -10000, y: -10000 };
      isHoveredRef.current = false;
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);
    startAnimation();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [windowMouseEvents, startAnimation]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    startAnimation();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isHoveredRef.current = true;
    startAnimation();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    mouseRef.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
    isHoveredRef.current = true;
    startAnimation();
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    mouseRef.current = { x: -10000, y: -10000 };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseEnter={windowMouseEvents ? undefined : handleMouseEnter}
      onMouseMove={windowMouseEvents ? undefined : handleMouseMove}
      onMouseLeave={windowMouseEvents ? undefined : handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
