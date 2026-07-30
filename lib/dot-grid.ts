export interface PhysicsDot {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  currentRadius: number;
  baseOpacity: number;
  currentOpacity: number;
  phase?: number;
  colorRgb?: { r: number; g: number; b: number };
}

export interface PhysicsConfig {
  influenceRadius: number;
  maxDisplacement: number;
  force: number;
  spring: number;
  damping: number;
  lerpSpeed: number;
  ambientPulseSpeed?: number;
}

export const LANDING_GRID_PHYSICS: PhysicsConfig = {
  influenceRadius: 220,
  maxDisplacement: 50,
  force: 1.6,
  spring: 0.045,
  damping: 0.85,
  lerpSpeed: 0.06,
  ambientPulseSpeed: 0.015,
};

export const CARD_GRID_PHYSICS: PhysicsConfig = {
  influenceRadius: 110,
  maxDisplacement: 24,
  force: 0.65,
  spring: 0.07,
  damping: 0.82,
  lerpSpeed: 0.08,
};

export const DEFAULT_PHYSICS_CONFIG: PhysicsConfig = CARD_GRID_PHYSICS;

// Interpolate brand colors with teal bias (#0CBAA6 cyan/teal vs #D9FB02 yellow-green accent)
export function getElevationColorRgb(ratio: number) {
  // Compression curve: keeps ratio close to 1 (teal) over ~70% of the surface
  const tealDominance = Math.pow(Math.max(0, Math.min(1, ratio)), 0.5);
  const r = Math.round(217 + tealDominance * (12 - 217));
  const g = Math.round(251 + tealDominance * (186 - 251));
  const b = Math.round(2 + tealDominance * (166 - 2));
  return { r, g, b };
}

export interface Point {
  x: number;
  y: number;
}

/**
 * Core Physics Engine step for canvas dot grids.
 */
export function updateDotPhysics(
  dots: PhysicsDot[],
  mouseX: number,
  mouseY: number,
  dt: number,
  config: PhysicsConfig = DEFAULT_PHYSICS_CONFIG,
): boolean {
  let isMoving = false;
  const {
    influenceRadius,
    maxDisplacement,
    force,
    spring,
    damping,
    lerpSpeed,
  } = config;

  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    const dx = dot.x - mouseX;
    const dy = dot.y - mouseY;
    const dist = Math.hypot(dx, dy);

    if (dist < influenceRadius && dist > 0.01) {
      const t = 1 - dist / influenceRadius;
      const falloff = t * t * t;
      const nx = dx / dist;
      const ny = dy / dist;
      dot.vx += nx * falloff * force * dt;
      dot.vy += ny * falloff * force * dt;
    }

    const springX = (dot.originX - dot.x) * spring * dt;
    const springY = (dot.originY - dot.y) * spring * dt;
    dot.vx += springX;
    dot.vy += springY;

    dot.vx *= Math.pow(damping, dt);
    dot.vy *= Math.pow(damping, dt);

    dot.x += dot.vx * dt;
    dot.y += dot.vy * dt;

    const displacement = Math.hypot(dot.x - dot.originX, dot.y - dot.originY);
    const normDisp = Math.min(1, displacement / maxDisplacement);

    const shrinkFactor = 1 - normDisp * 0.7;
    let targetRadius = dot.baseRadius * shrinkFactor;
    let targetOpacity = dot.baseOpacity * (1 - normDisp * 0.8);

    if (dist < influenceRadius && dist > 0.01) {
      const proxT = 1 - dist / influenceRadius;
      const proxFalloff = proxT * proxT;
      const glow = proxFalloff * 0.65;
      targetOpacity = Math.min(1, targetOpacity + glow);
      targetRadius += proxFalloff * 1.8;
    }

    dot.currentRadius += (targetRadius - dot.currentRadius) * lerpSpeed;
    dot.currentOpacity += (targetOpacity - dot.currentOpacity) * lerpSpeed;

    if (
      Math.abs(dot.vx) > 0.01 ||
      Math.abs(dot.vy) > 0.01 ||
      Math.abs(dot.x - dot.originX) > 0.05 ||
      Math.abs(dot.currentRadius - dot.baseRadius) > 0.05
    ) {
      isMoving = true;
    }
  }

  return isMoving;
}
