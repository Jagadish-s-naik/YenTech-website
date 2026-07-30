"use client";

import { CARD_GRID_PHYSICS, PhysicsDot } from "@/lib/dot-grid";
import { InteractiveDotGridCanvas } from "@/components/shared/InteractiveDotGridCanvas";

interface YenTechIconDotGridProps {
  className?: string;
}

const ICON_PATH_D =
  "M 43.562899,80.060033 69.335727,35.272894 a 11.078833,11.078833 149.73817 0 1 9.51697,-5.552767 l 40.230083,-0.310358 a 0.9329167,0.9329167 59.116771 0 1 0.82569,1.380548 l -9.56514,17.4888 a 2.7991132,2.7991132 148.23502 0 1 -2.34808,1.453888 l -13.950921,0.537283 a 7.3420288,7.3420288 147.82722 0 0 -6.208484,3.905573 L 61.148062,104.66564 a 0.98159224,0.98159224 176.13037 0 1 -1.665959,0.11269 L 43.695211,82.726788 A 2.4672145,2.4672145 87.159567 0 1 43.562899,80.060033 Z M 16.383901,29.52108 40.290922,29.678856 a 8.4654683,8.4654683 26.946418 0 1 6.75045,3.431578 l 11.316627,15.301759 a 0.8044144,0.8044144 116.64257 0 1 -0.643534,1.282726 L 30.505078,49.803942 A 3.02337,3.02337 27.473326 0 1 28.011042,48.507105 L 15.702985,30.813801 a 0.82284842,0.82284842 117.77717 0 1 0.680916,-1.292721 z";
const PATH_MIN_X = 15.7;
const PATH_WIDTH = 103.38;
const PATH_MIN_Y = 29.41;
const PATH_HEIGHT = 75.37;
const TRANSFORM_TX = -0.05592422;
const TRANSFORM_TY = 0.43419924;

export function generateLogoGridDots(w: number, h: number): PhysicsDot[] {
  const dots: PhysicsDot[] = [];
  if (typeof document === "undefined") return dots;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return dots;

  const path2D = new Path2D(ICON_PATH_D);
  const scale = Math.min(w / (PATH_WIDTH * 1.15), h / (PATH_HEIGHT * 1.15));
  const offsetX = (w - PATH_WIDTH * scale) / 2;
  const offsetY = (h - PATH_HEIGHT * scale) / 2;

  const GRID_SPACING = 5.2;

  for (
    let px = PATH_MIN_X - 2;
    px <= PATH_MIN_X + PATH_WIDTH + 2;
    px += GRID_SPACING / scale
  ) {
    for (
      let py = PATH_MIN_Y - 2;
      py <= PATH_MIN_Y + PATH_HEIGHT + 2;
      py += GRID_SPACING / scale
    ) {
      if (ctx.isPointInPath(path2D, px, py)) {
        const ox = offsetX + (px - PATH_MIN_X + TRANSFORM_TX) * scale;
        const oy = offsetY + (py - PATH_MIN_Y + TRANSFORM_TY) * scale;
        const baseR = 1.8 + Math.random() * 0.5;
        const baseO = 0.75 + Math.random() * 0.2;

        // Exact linearGradient projection from app/icon.svg
        const dx = 100.6116 - 51.747784;
        const dy = 37.859287 - 93.782555;
        const lenSq = dx * dx + dy * dy;
        const dotProj = (px - 51.747784) * dx + (py - 93.782555) * dy;
        const normT = Math.max(0, Math.min(1, dotProj / lenSq));

        // stop 0: #0cbaa6 (12, 186, 166) -> stop 1: #d9fb02 (217, 251, 2)
        const r = Math.round(12 + normT * (217 - 12));
        const g = Math.round(186 + normT * (251 - 186));
        const b = Math.round(166 + normT * (2 - 166));

        dots.push({
          originX: ox,
          originY: oy,
          x: ox,
          y: oy,
          vx: 0,
          vy: 0,
          baseRadius: baseR,
          currentRadius: baseR,
          baseOpacity: baseO,
          currentOpacity: baseO,
          colorRgb: { r, g, b },
        });
      }
    }
  }

  return dots;
}

export function YenTechIconDotGrid({
  className = "",
}: YenTechIconDotGridProps) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <InteractiveDotGridCanvas
        dotGenerator={generateLogoGridDots}
        physicsConfig={CARD_GRID_PHYSICS}
        colorMode="single-rgb"
      />
    </div>
  );
}
