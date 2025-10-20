"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["dream", "design", "build"];

// Define darker colors for each gradient
const wordColors = {
  dream: "#3cd657",    // Darker green from dream gradient
  design: "#358df5",   // Darker blue from design gradient
  build: "#f8a341"     // Darker orange from build gradient
};

export function Hero() {
  const [index, setIndex] = useState(0);
  const [shapes, setShapes] = useState<Array<{ type: 'magic' | 'circle' | 'diamond' | 'magicCircle' | 'asterisk'; row: number; col: number }>>([]);
  const [grid, setGrid] = useState<{ cell: number; rows: number; cols: number }>({ cell: 40, rows: 0, cols: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 5000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Compute responsive grid and generate shapes respecting rules
  useEffect(() => {
    const computeGrid = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cellFromVw = Math.round(vw * 0.05); // 5vw
      const cell = Math.max(40, Math.min(80, cellFromVw)); // clamp(40px, 5vw, 80px)
      const cols = Math.ceil(vw / cell);
      const rows = Math.ceil(vh / cell);
      setGrid({ cell, rows, cols });

      // Exclusion zone around centered text (approximate): width 12 cells, height 5 cells + two extra rows below
      const centerRow = Math.floor(rows / 2);
      const centerCol = Math.floor(cols / 2);
      const exclHalfW = 6; // 12 cells wide
      const exclHalfH = 2; // 5 cells tall (±2 from center) and two extra rows below

      const isExcluded = (r: number, c: number) => {
        const inCore = r >= centerRow - exclHalfH && r <= centerRow + exclHalfH && c >= centerCol - exclHalfW && c <= centerCol + exclHalfW;
        const below1 = r === centerRow + exclHalfH + 1 && c >= centerCol - exclHalfW && c <= centerCol + exclHalfW;
        const below2 = r === centerRow + exclHalfH + 2 && c >= centerCol - exclHalfW && c <= centerCol + exclHalfW;
        return inCore || below1 || below2;
      };

      // Prepare candidate cells
      const cells: Array<{ r: number; c: number }> = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (!isExcluded(r, c)) cells.push({ r, c });
        }
      }

      // Shuffle helper
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
      }

      // Target equal counts per type
      const types: Array<'magic' | 'circle' | 'diamond' | 'magicCircle' | 'asterisk'> = ['magic', 'circle', 'diamond', 'magicCircle', 'asterisk'];
      // Place shapes in 25% of allowed cells (after exclusions)
      const maxPlacements = Math.max(4, Math.floor(cells.length * 0.25));
      const perType = Math.floor(maxPlacements / types.length);
      const remaining = maxPlacements - perType * types.length;
      const typeTargets: Record<string, number> = { magic: perType, circle: perType, diamond: perType, magicCircle: perType, asterisk: perType } as any;
      // Distribute any remainder
      for (let i = 0; i < remaining; i++) typeTargets[types[i]] += 1;
      // Guarantee at least one of each type when capacity allows
      if (maxPlacements >= types.length) {
        types.forEach(t => { if (typeTargets[t] === 0) typeTargets[t] = 1; });
      }

      const placed: Array<{ type: 'magic' | 'circle' | 'diamond' | 'magicCircle' | 'asterisk'; row: number; col: number }> = [];
      const gridTypes: (null | string)[][] = Array.from({ length: rows }, () => Array(cols).fill(null));

      // Quadrant balancing to avoid empty corners and crowded areas
      const qTarget = Math.max(1, Math.floor(maxPlacements / 4));
      const qMin = Math.max(2, Math.floor(maxPlacements / 8)); // ensure visible presence per quadrant
      const qCounts = [0, 0, 0, 0]; // TL, TR, BL, BR
      const quadrantOf = (r: number, c: number) => (r < centerRow ? (c < centerCol ? 0 : 1) : (c < centerCol ? 2 : 3));

      const canPlace = (t: string, r: number, c: number) => {
        if (gridTypes[r][c] !== null) return false; // one shape per cell
        // No adjacent duplicates including diagonals
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const rr = r + dr, cc = c + dc;
            if (rr >= 0 && rr < rows && cc >= 0 && cc < cols) {
              if (gridTypes[rr][cc] === t) return false;
            }
          }
        }
        return true;
      };

      // Seed: ensure each corner quadrant has at least one shape
      const placeAt = (r: number, c: number) => {
        const available = types.filter(t => typeTargets[t] > 0);
        const byNeed = [...available].sort((a,b) => typeTargets[b] - typeTargets[a]);
        for (const t of byNeed) {
          const q = quadrantOf(r, c);
          if (canPlace(t, r, c)) {
            gridTypes[r][c] = t;
            typeTargets[t] -= 1;
            placed.push({ type: t as any, row: r, col: c });
            qCounts[q] += 1;
            return true;
          }
        }
        return false;
      };

      const cornerCandidates: Array<{ r: number; c: number }> = [];
      const pad = 0; // prefer strict corners
      const corners = [
        { r: 0 + pad, c: 0 + pad }, // TL
        { r: 0 + pad, c: cols - 1 - pad }, // TR
        { r: rows - 1 - pad, c: 0 + pad }, // BL
        { r: rows - 1 - pad, c: cols - 1 - pad }, // BR
      ];
      for (const pos of corners) {
        if (pos.r >= 0 && pos.r < rows && pos.c >= 0 && pos.c < cols && !isExcluded(pos.r, pos.c)) {
          cornerCandidates.push(pos);
        }
      }
      for (const pos of cornerCandidates) placeAt(pos.r, pos.c);

      // Pass 1: ensure each quadrant reaches qMin if possible
      for (const cellPos of cells) {
        if (placed.length >= maxPlacements) break;
        const q = quadrantOf(cellPos.r, cellPos.c);
        if (qCounts[q] >= qMin) continue;
        if (gridTypes[cellPos.r][cellPos.c] !== null) continue;
        const available = types.filter(t => typeTargets[t] > 0).sort((a,b) => typeTargets[b] - typeTargets[a]);
        for (const t of available) {
          if (canPlace(t, cellPos.r, cellPos.c)) {
            gridTypes[cellPos.r][cellPos.c] = t;
            typeTargets[t] -= 1;
            placed.push({ type: t as any, row: cellPos.r, col: cellPos.c });
            qCounts[q] += 1;
            break;
          }
        }
      }

      for (const cellPos of cells) {
        // choose a type with remaining quota that doesn't violate adjacency
        if (gridTypes[cellPos.r][cellPos.c] !== null) continue; // already filled by seeding or earlier pass
        const available = types.filter(t => typeTargets[t] > 0);
        if (available.length === 0) break;
        // try in random order
        const shuffled = [...available].sort(() => Math.random() - 0.5);
        let placedHere = false;
        for (const t of shuffled) {
          const q = quadrantOf(cellPos.r, cellPos.c);
          // Prefer cells in quadrants that are under target
          if (qCounts[q] >= qTarget) continue;
          if (canPlace(t, cellPos.r, cellPos.c)) {
            gridTypes[cellPos.r][cellPos.c] = t;
            typeTargets[t] -= 1;
            placed.push({ type: t as any, row: cellPos.r, col: cellPos.c });
            qCounts[q] += 1;
            placedHere = true;
            break;
          }
        }
        if (placed.length >= maxPlacements) break;
        if (!placedHere) continue;
      }

      setShapes(placed);
    };

    computeGrid();
    window.addEventListener('resize', computeGrid);
    return () => window.removeEventListener('resize', computeGrid);
  }, []);

  return (
    <section id="home" className="container-padding relative flex h-screen items-center justify-center overflow-hidden w-full" style={{ backgroundColor: '#ffffff' }}>
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(40px, 5vw, 80px) clamp(40px, 5vw, 80px)',
          backgroundPosition: '0 0, 0 0',
          zIndex: 1
        }}
      />
      
      {/* Giant Ellipse with Radial Gradient - Responsive */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0) 100%)',
          width: '100vw',
          height: '100vh',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          zIndex: 2
        }}
      />
      
      {/* Rules-based shapes (generated) */}
      {shapes.map((s, i) => {
        const size = grid.cell; // fit cell
        const top = s.row * grid.cell;
        const left = s.col * grid.cell;
        const commonProps = { stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 1, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, vectorEffect: 'non-scaling-stroke' as const };
        return (
          <div
            key={`${s.type}-${i}`}
            className="absolute opacity-60"
            style={{ top: `${top}px`, left: `${left}px`, width: `${size}px`, height: `${size}px`, zIndex: 3 }}
          >
            {s.type === 'magic' && (
              <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%">
                <path d="M170 96c-40.87 0-74 33.13-74 74 0-40.87-33.13-74-74-74 40.87 0 74-33.13 74-74 0 40.87 33.13 74 74 74Z" {...commonProps} fill="none" />
              </svg>
            )}
            {s.type === 'circle' && (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" {...commonProps} />
              </svg>
            )}
            {s.type === 'diamond' && (
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%">
                <path d="M16 3 L29 16 L16 29 L3 16 Z" {...commonProps} fill="none" />
              </svg>
            )}
            {s.type === 'asterisk' && (
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%">
                <path d="M16 4 L16 28 M4 16 L28 16 M6.5 6.5 L25.5 25.5 M25.5 6.5 L6.5 25.5" {...commonProps} fill="none" />
              </svg>
            )}
            {s.type === 'magicCircle' && (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Outer circle */}
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" {...commonProps} />
                </svg>
                {/* Inner magic icon centered with breathing room (~65-70% of cell) */}
                <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" width="70%" height="70%" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <path d="M170 96c-40.87 0-74 33.13-74 74 0-40.87-33.13-74-74-74 40.87 0 74-33.13 74-74 0 40.87 33.13 74 74 74Z" {...commonProps} />
                </svg>
              </div>
            )}
          </div>
        );
      })}
      
      {/* Main content */}
      <div className="relative z-10 flex w-full items-center justify-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="display-large text-center leading-none select-none"
          style={{ color: '#000000' }}
        >
          <motion.span 
            className="inline-block"
            style={{ 
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: wordColors[words[index] as keyof typeof wordColors]
            }}
            animate={{
              color: wordColors[words[index] as keyof typeof wordColors]
            }}
            transition={{
              duration: 0.8,
              ease: "linear",
              delay: 1.0
            }}
          >
            i
          </motion.span>
          <span> </span>
          <span
            className="relative inline-block overflow-hidden text-left align-bottom"
            style={{ minWidth: "5.5ch", height: "1.1em" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                exit={{ filter: "blur(10px)", opacity: 0 }}
                transition={{
                  duration: 2.0,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className={`absolute top-0 left-0 inline-block bg-clip-text text-transparent ${
                  words[index] === "dream"
                    ? "animate-gradient-dream"
                    : words[index] === "design"
                    ? "animate-gradient-design"
                    : "animate-gradient-build"
                }`}
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              >
                {words[index]}.
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
