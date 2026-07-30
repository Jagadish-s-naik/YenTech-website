"use client";

import { LANDING_GRID_PHYSICS, PhysicsDot } from "@/lib/dot-grid";
import { InteractiveDotGridCanvas } from "@/components/shared/InteractiveDotGridCanvas";

export function generateBackgroundGridDots(w: number, h: number): PhysicsDot[] {
  const SPACING = 32;
  const REF_DIAG = Math.sqrt(1920 * 1920 + 1080 * 1080);
  const diag = Math.sqrt(w * w + h * h);
  const sizeScale = Math.max(0.75, Math.min(1.5, diag / REF_DIAG));

  const cols = Math.ceil(w / SPACING) + 2;
  const rows = Math.ceil(h / SPACING) + 2;
  const offsetX = (w - (cols - 2) * SPACING) / 2;
  const offsetY = (h - (rows - 2) * SPACING) / 2;

  const baseR = 1.2 * sizeScale;
  const baseRRange = 1.2 * sizeScale;
  const baseO = 0.2;
  const baseORange = 0.2;

  const dots: PhysicsDot[] = [];
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
  return dots;
}

export function DotGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <InteractiveDotGridCanvas
        dotGenerator={generateBackgroundGridDots}
        physicsConfig={LANDING_GRID_PHYSICS}
        windowMouseEvents={true}
        colorMode="diagonal-gradient"
      />
    </div>
  );
}
