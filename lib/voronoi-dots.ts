import { getElevationColorRgb, PhysicsDot, Point } from "@/lib/dot-grid";

/**
 * Fast deterministic PRNG generator
 */
function createPRNG(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Organic Seed Packing (generateOrganicSeeds)
 * Hexagonal triangular lattice with controlled PRNG jitter
 */
export function generateOrganicSeeds(
  w: number,
  h: number,
  seed: number,
  baseCellSize: number = 360,
  margin: number = 240,
): Point[] {
  const rand = createPRNG(seed * 7 + 11);

  const cardScale = 0.85 + rand() * 0.3;
  const cellSize = baseCellSize * cardScale;
  const rowHeight = cellSize * 0.866;

  const originOffsetX = (rand() - 0.5) * cellSize * 1.5;
  const originOffsetY = (rand() - 0.5) * rowHeight * 1.5;

  const cols = Math.ceil((w + margin * 2) / cellSize) + 2;
  const rows = Math.ceil((h + margin * 2) / rowHeight) + 2;
  const seeds: Point[] = [];

  for (let j = -1; j < rows; j++) {
    const xOffset = j % 2 === 1 ? cellSize * 0.5 : 0;
    const oy = -margin + j * rowHeight + originOffsetY;
    for (let i = -1; i < cols; i++) {
      const ox = -margin + i * cellSize + xOffset + originOffsetX;

      const jitterX = (rand() - 0.5) * cellSize * 0.45;
      const jitterY = (rand() - 0.5) * rowHeight * 0.45;

      seeds.push({
        x: ox + jitterX,
        y: oy + jitterY,
      });
    }
  }

  return seeds;
}

/**
 * Calculates raw Voronoi cell polygon vertices for a given seed point
 * by clipping standard bounding box with midplanes of neighboring seeds.
 */
export function computeVoronoiCell(
  seedIndex: number,
  seeds: Point[],
  bounds: { minX: number; minY: number; maxX: number; maxY: number },
): Point[] {
  const site = seeds[seedIndex];
  let poly: Point[] = [
    { x: bounds.minX, y: bounds.minY },
    { x: bounds.maxX, y: bounds.minY },
    { x: bounds.maxX, y: bounds.maxY },
    { x: bounds.minX, y: bounds.maxY },
  ];

  const neighbors: { seed: Point; distSq: number }[] = [];
  for (let i = 0; i < seeds.length; i++) {
    if (i === seedIndex) continue;
    const dx = seeds[i].x - site.x;
    const dy = seeds[i].y - site.y;
    neighbors.push({ seed: seeds[i], distSq: dx * dx + dy * dy });
  }
  neighbors.sort((a, b) => a.distSq - b.distSq);

  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i].seed;

    const mx = (site.x + neighbor.x) / 2;
    const my = (site.y + neighbor.y) / 2;

    const nx = site.x - neighbor.x;
    const ny = site.y - neighbor.y;

    poly = clipPolygonWithHalfPlane(poly, mx, my, nx, ny);
    if (poly.length < 3) return [];
  }

  return poly;
}

/**
 * Sutherland-Hodgman style half-plane polygon clipping.
 */
function clipPolygonWithHalfPlane(
  poly: Point[],
  mx: number,
  my: number,
  nx: number,
  ny: number,
): Point[] {
  if (poly.length === 0) return [];
  const output: Point[] = [];

  const isInside = (p: Point) => (p.x - mx) * nx + (p.y - my) * ny >= 0;

  let s = poly[poly.length - 1];
  let sInside = isInside(s);

  for (let i = 0; i < poly.length; i++) {
    const e = poly[i];
    const eInside = isInside(e);

    if (eInside) {
      if (!sInside) output.push(lineIntersection(s, e, mx, my, nx, ny));
      output.push(e);
    } else if (sInside) {
      output.push(lineIntersection(s, e, mx, my, nx, ny));
    }
    s = e;
    sInside = eInside;
  }

  return output;
}

function lineIntersection(
  p1: Point,
  p2: Point,
  mx: number,
  my: number,
  nx: number,
  ny: number,
): Point {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const denom = dx * nx + dy * ny;

  if (Math.abs(denom) < 1e-9) return p1;

  const t = ((mx - p1.x) * nx + (my - p1.y) * ny) / denom;
  return {
    x: p1.x + t * dx,
    y: p1.y + t * dy,
  };
}

/**
 * Parallel Polygon Insetting (insetPolygon)
 * Insets each edge of a convex polygon inward by insetDist.
 */
export function insetPolygon(poly: Point[], insetDist: number): Point[] {
  const n = poly.length;
  if (n < 3) return [];

  const insetLines: { p: Point; dir: Point }[] = [];

  for (let i = 0; i < n; i++) {
    const p1 = poly[i];
    const p2 = poly[(i + 1) % n];

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) continue;

    const tx = dx / len;
    const ty = dy / len;

    const offsetP1 = {
      x: p1.x - ty * insetDist,
      y: p1.y + tx * insetDist,
    };

    insetLines.push({ p: offsetP1, dir: { x: tx, y: ty } });
  }

  const insetPoly: Point[] = [];
  const lineCount = insetLines.length;
  if (lineCount < 3) return [];

  for (let i = 0; i < lineCount; i++) {
    const l1 = insetLines[(i - 1 + lineCount) % lineCount];
    const l2 = insetLines[i];

    const pt = intersect2DLines(l1.p, l1.dir, l2.p, l2.dir);
    if (pt) insetPoly.push(pt);
  }

  const cleanPoly: Point[] = [];
  for (let i = 0; i < insetPoly.length; i++) {
    const pt = insetPoly[i];
    const nextPt = insetPoly[(i + 1) % insetPoly.length];
    if (Math.hypot(nextPt.x - pt.x, nextPt.y - pt.y) >= 3.0) {
      cleanPoly.push(pt);
    }
  }

  return cleanPoly.length >= 3 ? cleanPoly : insetPoly;
}

function intersect2DLines(
  p1: Point,
  d1: Point,
  p2: Point,
  d2: Point,
): Point | null {
  const det = d1.x * d2.y - d1.y * d2.x;
  if (Math.abs(det) < 1e-6) return null;

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  const t = (dx * d2.y - dy * d2.x) / det;
  return {
    x: p1.x + t * d1.x,
    y: p1.y + t * d1.y,
  };
}

/**
 * Native Canvas Filleted Pebble Path Creation
 * Chaikin corner cutting + Quadratic Bezier smoothing for organic pebbles.
 */
export function createFilletedPebblePath(poly: Point[]): Path2D | null {
  if (poly.length < 3) return null;
  const path = new Path2D();
  const n = poly.length;

  const smooth: Point[] = [];
  for (let i = 0; i < n; i++) {
    const p0 = poly[i];
    const p1 = poly[(i + 1) % n];

    smooth.push({
      x: p0.x * 0.75 + p1.x * 0.25,
      y: p0.y * 0.75 + p1.y * 0.25,
    });
    smooth.push({
      x: p0.x * 0.25 + p1.x * 0.75,
      y: p0.y * 0.25 + p1.y * 0.75,
    });
  }

  const sn = smooth.length;
  const startMid = {
    x: (smooth[0].x + smooth[sn - 1].x) / 2,
    y: (smooth[0].y + smooth[sn - 1].y) / 2,
  };

  path.moveTo(startMid.x, startMid.y);

  for (let i = 0; i < sn; i++) {
    const pCurrent = smooth[i];
    const pNext = smooth[(i + 1) % sn];
    const mid = {
      x: (pCurrent.x + pNext.x) / 2,
      y: (pCurrent.y + pNext.y) / 2,
    };

    path.quadraticCurveTo(pCurrent.x, pCurrent.y, mid.x, mid.y);
  }

  path.closePath();
  return path;
}

/**
 * Organic River Pebble Voronoi Dot Generator Engine.
 */
export function generateTopographicDots(
  w: number,
  h: number,
  seed: number,
): PhysicsDot[] {
  const cellSize = 360;
  const margin = 240;
  const insetDist = 5.0;
  const step = 8.0;

  const seeds = generateOrganicSeeds(w, h, seed, cellSize, margin);
  const bounds = {
    minX: -margin,
    minY: -margin,
    maxX: w + margin,
    maxY: h + margin,
  };

  const offscreen = document.createElement("canvas");
  offscreen.width = w;
  offscreen.height = h;
  const offCtx = offscreen.getContext("2d");

  const allDots: PhysicsDot[] = [];
  if (!offCtx) return allDots;

  for (let i = 0; i < seeds.length; i++) {
    const s = seeds[i];
    if (
      s.x < -cellSize ||
      s.x > w + cellSize ||
      s.y < -cellSize ||
      s.y > h + cellSize
    ) {
      continue;
    }

    const rawPoly = computeVoronoiCell(i, seeds, bounds);
    if (rawPoly.length < 3) continue;

    const insetted = insetPolygon(rawPoly, insetDist);
    if (insetted.length < 3) continue;

    const path = createFilletedPebblePath(insetted);
    if (!path) continue;

    let pMinX = Infinity,
      pMinY = Infinity,
      pMaxX = -Infinity,
      pMaxY = -Infinity;
    for (const p of insetted) {
      if (p.x < pMinX) pMinX = p.x;
      if (p.y < pMinY) pMinY = p.y;
      if (p.x > pMaxX) pMaxX = p.x;
      if (p.y > pMaxY) pMaxY = p.y;
    }

    const startX = Math.max(
      step / 2,
      Math.floor(pMinX / step) * step + step / 2,
    );
    const endX = Math.min(w, pMaxX);
    const startY = Math.max(
      step / 2,
      Math.floor(pMinY / step) * step + step / 2,
    );
    const endY = Math.min(h, pMaxY);

    for (let x = startX; x <= endX; x += step) {
      for (let y = startY; y <= endY; y += step) {
        if (offCtx.isPointInPath(path, x, y)) {
          // Calculate continuous diagonal/radial gradient ratio per dot position
          const u = x / (w || 1);
          const v = (h - y) / (h || 1);
          const posRatio = Math.pow(Math.max(0, Math.min(1, (u + v) / 2)), 1.5);
          const rgb = getElevationColorRgb(posRatio);

          allDots.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            baseRadius: 2.4,
            currentRadius: 2.4,
            baseOpacity: 0.65,
            currentOpacity: 0.65,
            colorRgb: rgb,
          });
        }
      }
    }
  }

  return allDots;
}
