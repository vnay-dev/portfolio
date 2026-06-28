/**
 * Generates the liquid-glass refraction displacement map used by the play-arena
 * marble (see components/shared/composite/WebSynth.tsx → #liquidGlassLens).
 *
 * Physics-based, following kube.io "Liquid Glass in the Browser":
 *  - The glass cross-section is a CONVEX SQUIRCLE bezel: thickness rises from 0
 *    at the rim to 1 at the end of the bezel, then stays flat (clear) in the
 *    centre. The squircle keeps the curve→flat transition smooth (Apple's pick).
 *  - For each radial distance we take the surface slope, build the normal, and
 *    refract a vertical incident ray through it via Snell's law (air→glass,
 *    n = 1.5). The horizontal landing shift is the refraction displacement.
 *  - Displacements are symmetric around the centre, so we compute a 1-D radial
 *    profile and rotate it into a 2-D field, encoded as an RGBA normal map:
 *      R = 128 + vx*127 (x displacement), G = 128 + vy*127 (y displacement).
 *
 * Run: node scripts/generate-liquid-lens-map.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SIZE = 256;
const R = SIZE / 2;
const BEZEL = 0.42; // curved rim as a fraction of the radius (rest is flat/clear)
const THICKNESS = 2.1; // slope scale → how hard the bezel bends light
const ETA = 1 / 1.5; // n_air / n_glass

// Convex squircle surface height in [0,1] across the bezel (0 = rim, 1 = flat).
const surface = (x) => Math.pow(1 - Math.pow(1 - x, 4), 0.25);
const slope = (x) => {
  const d = 1e-4;
  const a = surface(Math.min(1, x + d));
  const b = surface(Math.max(0, x - d));
  return ((a - b) / (2 * d)) * THICKNESS;
};

// Horizontal landing displacement of a vertical ray refracting through a
// surface of the given slope. Returns null on total internal reflection.
const refractShift = (m) => {
  const nl = Math.hypot(-m, 1);
  const nx = -m / nl;
  const ny = 1 / nl;
  const cosi = ny; // -dot((0,-1), N)
  const sin2t = ETA * ETA * (1 - cosi * cosi);
  if (sin2t >= 1) return null; // TIR
  const cost = Math.sqrt(1 - sin2t);
  const k = ETA * cosi - cost;
  const rx = k * nx;
  const ry = -ETA + k * ny;
  return rx / Math.abs(ry);
};

// 1-D radial profile of the (unsigned) displacement, distance-from-rim → shift.
const samples = R + 1;
const profile = new Float64Array(samples);
let maxShift = 0;
let lastValid = 0;
for (let i = 0; i < samples; i++) {
  const distFromRim = i / R; // 0 at rim … 1 at centre (in radius units)
  let shift = 0;
  if (distFromRim <= BEZEL) {
    const x = distFromRim / BEZEL; // 0 at rim → 1 at end of bezel
    const s = refractShift(slope(x));
    shift = s === null ? lastValid : Math.abs(s);
    lastValid = shift;
  }
  profile[i] = shift;
  if (shift > maxShift) maxShift = shift;
}
// Normalise so the peak shift = 1 (the filter `scale` becomes the real px shift).
for (let i = 0; i < samples; i++) profile[i] /= maxShift || 1;

const buf = Buffer.alloc(SIZE * SIZE * 4);
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const nx = (x + 0.5 - R) / R;
    const ny = (y + 0.5 - R) / R;
    const rho = Math.hypot(nx, ny);
    let r = 128;
    let g = 128;
    let a = 0;
    if (rho <= 1) {
      const distFromRim = 1 - rho;
      const mag = profile[Math.round(distFromRim * R)] ?? 0;
      // Push samples OUTWARD along the radius → convex lens magnification.
      const dirx = rho > 1e-4 ? nx / rho : 0;
      const diry = rho > 1e-4 ? ny / rho : 0;
      r = Math.round(Math.max(0, Math.min(255, 128 + dirx * mag * 127)));
      g = Math.round(Math.max(0, Math.min(255, 128 + diry * mag * 127)));
      // Soft 1px edge so the rim doesn't alias.
      a = Math.round(Math.max(0, Math.min(1, (1 - rho) * R)) * 255);
      a = rho > 0.985 ? Math.round((1 - rho) / 0.015 * 255) : 255;
    }
    const i = (y * SIZE + x) * 4;
    buf[i] = r;
    buf[i + 1] = g;
    buf[i + 2] = 128;
    buf[i + 3] = a;
  }
}

const out = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/web-synth/liquid-lens-map.png",
);
await sharp(buf, { raw: { width: SIZE, height: SIZE, channels: 4 } }).png().toFile(out);
console.log(`liquid lens map written → ${out} (peak shift unit = ${maxShift.toFixed(3)})`);
