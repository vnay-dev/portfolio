"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  type Shape = { type: 'magic' | 'circle' | 'diamond' | 'magicCircle' | 'asterisk'; row: number; col: number; dir?: 'left' | 'right' };
  const [shapes, setShapes] = useState<Array<Shape>>([]);
  const [grid, setGrid] = useState<{ cell: number; rows: number; cols: number }>({ cell: 40, rows: 0, cols: 0 });
  const [animMagicIds, setAnimMagicIds] = useState<number[]>([]);
  const [animCircleIds, setAnimCircleIds] = useState<number[]>([]);
  const [animAsteriskIds, setAnimAsteriskIds] = useState<number[]>([]);
  const [animFallbackIds, setAnimFallbackIds] = useState<number[]>([]);

  // Trigger shape animations periodically
  useEffect(() => {
    if (shapes.length === 0) return;
    const ANIMATION_INTERVAL_MS = 3000; // animate shapes every 3 seconds
    
    const animateShapes = () => {
      setAnimMagicIds([]);
      setAnimCircleIds([]);
      setAnimAsteriskIds([]);
      setAnimFallbackIds([]);

      const pickMany = (type: Shape['type'], count: number, predicate?: (s: Shape) => boolean) => {
        const ids = shapes
          .map((s, i) => ({ i, s }))
          .filter(({ s }) => s.type === type && (predicate ? predicate(s) : true))
          .map(({ i }) => i);
        for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
        return ids.slice(0, Math.max(1, Math.min(count, ids.length)));
      };

      // Randomly animate different shape types
      const randomType = Math.random();
      if (randomType < 0.33) {
        const ids = pickMany('magic', 3);
        if (ids.length) setAnimMagicIds(ids);
      } else if (randomType < 0.66) {
        const ids = pickMany('circle', 3, (s) => !!s.dir);
        if (ids.length) setAnimCircleIds(ids);
      } else {
        const ids = pickMany('asterisk', 3);
        if (ids.length) setAnimAsteriskIds(ids);
      }

      // Independently animate fallback shapes
      const diamondIds = shapes.map((s, i) => ({ s, i })).filter(({ s }) => s.type === 'diamond').map(({ i }) => i);
      const customIds = shapes.map((s, i) => ({ s, i })).filter(({ s }) => s.type === 'magicCircle').map(({ i }) => i);
      for (let i = diamondIds.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [diamondIds[i], diamondIds[j]] = [diamondIds[j], diamondIds[i]]; }
      for (let i = customIds.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [customIds[i], customIds[j]] = [customIds[j], customIds[i]]; }
      const chosenDiamonds = diamondIds.slice(0, Math.min(2, diamondIds.length));
      const chosenCustoms = customIds.slice(0, Math.min(2, customIds.length));
      setAnimFallbackIds([...chosenDiamonds, ...chosenCustoms]);
    };

    const interval = setInterval(animateShapes, ANIMATION_INTERVAL_MS);
    // Trigger initial animation
    animateShapes();
    
    return () => clearInterval(interval);
  }, [shapes]);

  // Compute responsive grid and generate shapes respecting rules
  useEffect(() => {
    const computeGrid = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // More responsive cell sizing based on screen size
      let cellFromVw;
      if (vw < 640) { // Mobile
        cellFromVw = Math.round(vw * 0.08); // 8vw for mobile
      } else if (vw < 1024) { // Tablet
        cellFromVw = Math.round(vw * 0.06); // 6vw for tablet
      } else { // Desktop
        cellFromVw = Math.round(vw * 0.05); // 5vw for desktop
      }
      const cell = Math.max(32, Math.min(100, cellFromVw)); // clamp(32px, responsive%, 100px)
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
      const typeTargets: Record<'magic' | 'circle' | 'diamond' | 'magicCircle' | 'asterisk', number> = { magic: perType, circle: perType, diamond: perType, magicCircle: perType, asterisk: perType };
      // Distribute any remainder
      for (let i = 0; i < remaining; i++) typeTargets[types[i]] += 1;
      // Guarantee at least one of each type when capacity allows
      if (maxPlacements >= types.length) {
        types.forEach(t => { if (typeTargets[t] === 0) typeTargets[t] = 1; });
      }

      const placed: Array<Shape> = [];
      const gridTypes: (null | 'magic' | 'circle' | 'diamond' | 'magicCircle' | 'asterisk' | 'reserved')[][] = Array.from({ length: rows }, () => Array(cols).fill(null));

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
        // For circles, ensure at least one horizontal neighbor is available for animation (reserve it)
        if (t === 'circle') {
          const rightFree = c + 1 < cols && gridTypes[r][c + 1] === null && !isExcluded(r, c + 1);
          const leftFree = c - 1 >= 0 && gridTypes[r][c - 1] === null && !isExcluded(r, c - 1);
          if (!rightFree && !leftFree) return false;
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
            // if circle, reserve neighbor for roll direction
            let dir: 'left' | 'right' | undefined;
            if (t === 'circle') {
              const rightFree = c + 1 < cols && gridTypes[r][c + 1] === null && !isExcluded(r, c + 1);
              const leftFree = c - 1 >= 0 && gridTypes[r][c - 1] === null && !isExcluded(r, c - 1);
              if (rightFree && leftFree) dir = Math.random() < 0.5 ? 'right' : 'left';
              else if (rightFree) dir = 'right';
              else if (leftFree) dir = 'left';
              if (dir === 'right') gridTypes[r][c + 1] = 'reserved';
              if (dir === 'left') gridTypes[r][c - 1] = 'reserved';
            }
            placed.push({ type: t as Shape['type'], row: r, col: c, dir });
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
            let dir: 'left' | 'right' | undefined;
            if (t === 'circle') {
              const r = cellPos.r, c = cellPos.c;
              const rightFree = c + 1 < cols && gridTypes[r][c + 1] === null && !isExcluded(r, c + 1);
              const leftFree = c - 1 >= 0 && gridTypes[r][c - 1] === null && !isExcluded(r, c - 1);
              if (rightFree && leftFree) dir = Math.random() < 0.5 ? 'right' : 'left';
              else if (rightFree) dir = 'right';
              else if (leftFree) dir = 'left';
              if (dir === 'right') gridTypes[r][c + 1] = 'reserved';
              if (dir === 'left') gridTypes[r][c - 1] = 'reserved';
            }
            placed.push({ type: t as Shape['type'], row: cellPos.r, col: cellPos.c, dir });
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
            let dir: 'left' | 'right' | undefined;
            if (t === 'circle') {
              const r = cellPos.r, c = cellPos.c;
              const rightFree = c + 1 < cols && gridTypes[r][c + 1] === null && !isExcluded(r, c + 1);
              const leftFree = c - 1 >= 0 && gridTypes[r][c - 1] === null && !isExcluded(r, c - 1);
              if (rightFree && leftFree) dir = Math.random() < 0.5 ? 'right' : 'left';
              else if (rightFree) dir = 'right';
              else if (leftFree) dir = 'left';
              if (dir === 'right') gridTypes[r][c + 1] = 'reserved';
              if (dir === 'left') gridTypes[r][c - 1] = 'reserved';
            }
            placed.push({ type: t as Shape['type'], row: cellPos.r, col: cellPos.c, dir });
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
    
    // Debounced resize handler to prevent excessive recalculations
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(computeGrid, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden w-full" style={{ backgroundColor: '#ffffff' }}>
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: `${grid.cell || 40}px ${grid.cell || 40}px`,
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
        const isMagicAnim = s.type === 'magic' && animMagicIds.includes(i);
        const isCircleAnim = s.type === 'circle' && animCircleIds.includes(i);
        const isAsteriskAnim = s.type === 'asterisk' && animAsteriskIds.includes(i);
        const isFallbackAnim = (s.type === 'diamond' || s.type === 'magicCircle') && animFallbackIds.includes(i);
        const isDiamondAnim = s.type === 'diamond' && isFallbackAnim;
        const isMagicCircleAnim = s.type === 'magicCircle' && isFallbackAnim;
        const circleShift = s.dir === 'right' ? grid.cell : s.dir === 'left' ? -grid.cell : 0;
        // deterministic per-cell timing variation (avoids re-randomizing on every render)
        const seed = (s.row * 31 + s.col * 17 + i) % 5;
        const magicDur = 0.7 + seed * 0.12;
        const magicDelay = (seed % 3) * 0.05;
        const circleDur = 0.85 + (seed % 4) * 0.08;
        const circleDelay = (seed % 2) * 0.04;
        const asteriskDur = 0.75 + (seed % 5) * 0.1;
        const asteriskDelay = (seed % 3) * 0.05;
        
        return (
          <motion.div
            key={`${s.type}-${i}`}
            className="absolute opacity-60 md:opacity-80"
            style={{ 
              top: `${top}px`, 
              left: `${left}px`, 
              width: `${size}px`, 
              height: `${size}px`, 
              zIndex: 3,
              filter: (isMagicAnim || isCircleAnim || isAsteriskAnim || isDiamondAnim || isMagicCircleAnim) 
                ? `drop-shadow(0 0 12px ${isMagicAnim ? '#51E262' : isCircleAnim ? '#CFED6D' : isAsteriskAnim ? '#8CDFFF' : isDiamondAnim ? '#F8A341' : '#3cd657'})` 
                : 'none'
            }}
            initial={false}
            animate={{
              // Diamonds: fade/glow only (no spin/scale)
              // Custom: also pulse opacity so it's noticeable while spinning
              opacity: isDiamondAnim
                ? [0.8, 1.0, 0.8]
                : (isMagicCircleAnim ? [0.9, 1.0, 0.9] : (isMagicAnim || isCircleAnim || isAsteriskAnim) ? [0.7, 1.0, 0.7] : 0.6),
              // Custom (magic-in-circle): spin + slight scale
              scale: isMagicCircleAnim ? [1, 1.06, 1] : 1,
              rotate: isMagicCircleAnim ? 360 : 0,
            }}
            transition={{ duration: isMagicCircleAnim ? (0.9 + (seed % 5) * 0.1) : 1.0, delay: isMagicCircleAnim ? ((seed % 4) * 0.04) : 0, ease: isMagicCircleAnim ? 'linear' : [0.4, 0.0, 0.2, 1], repeat: (isDiamondAnim || isMagicCircleAnim) ? Infinity : 0, repeatType: isMagicCircleAnim ? 'loop' : 'mirror' }}
          >
            {s.type === 'magic' && (
              <motion.svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%"
                initial={false}
                animate={{ scale: isMagicAnim ? [1, 0.9, 1] : 1 }}
                transition={{ duration: magicDur, delay: magicDelay, ease: [0.4, 0.0, 0.2, 1], repeat: isMagicAnim ? Infinity : 0, repeatType: 'mirror' }}
              >
                <path d="M170 96c-40.87 0-74 33.13-74 74 0-40.87-33.13-74-74-74 40.87 0 74-33.13 74-74 0 40.87 33.13 74 74 74Z" {...commonProps}
                  fill="none"
                  style={{
                    transition: 'stroke 0.6s ease',
                    stroke: isMagicAnim ? '#3cd657' : commonProps.stroke
                  }}
                />
              </motion.svg>
            )}
            {s.type === 'circle' && (
              <motion.svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                initial={false}
                animate={{ x: isCircleAnim ? [0, circleShift, 0] : 0 }}
                transition={{ duration: circleDur, delay: circleDelay, ease: [0.4, 0.0, 0.2, 1], repeat: isCircleAnim ? Infinity : 0, repeatType: 'mirror' }}
              >
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" {...commonProps}
                  style={{
                    transition: 'stroke 0.6s ease',
                    stroke: isCircleAnim ? '#f8a341' : commonProps.stroke
                  }}
                />
              </motion.svg>
            )}
            {/* animate wrapper transforms */}
            <style>{`
              @keyframes scalePulse { 0%{transform:scale(1)} 50%{transform:scale(0.9)} 100%{transform:scale(1)} }
              @keyframes spinOnce { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            `}</style>
            {isMagicAnim && (
              <div style={{position:'absolute', inset:0, animation:'scalePulse 0.8s ease'}} />
            )}
            {isAsteriskAnim && (
              <div style={{position:'absolute', inset:0, animation:'spinOnce 0.8s ease'}} />
            )}
            {isCircleAnim && (
              <div style={{position:'absolute', inset:0, transform:`translateX(${s.dir==='right'?grid.cell: -grid.cell}px)`, animation:'scalePulse 0.01s linear'}} />
            )}
            {s.type === 'diamond' && (
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%">
                <style>{`@keyframes diamondGlow { 0% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); } 100% { filter: drop-shadow(0 0 6px rgba(0,0,0,0.28)); } }`}</style>
                <path d="M16 3 L29 16 L16 29 L3 16 Z" {...commonProps} fill="none" style={{ animation: isDiamondAnim ? 'diamondGlow 1.1s ease-in-out infinite alternate' : 'none' }} />
              </svg>
            )}
            {s.type === 'asterisk' && (
              <motion.svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width="100%" height="100%"
                initial={false}
                animate={{ rotate: isAsteriskAnim ? 360 : 0 }}
                transition={{ duration: asteriskDur, delay: asteriskDelay, ease: [0.4, 0.0, 0.2, 1], repeat: isAsteriskAnim ? Infinity : 0 }}
              >
                <path d="M16 4 L16 28 M4 16 L28 16 M6.5 6.5 L25.5 25.5 M25.5 6.5 L6.5 25.5" {...commonProps} fill="none"
                  style={{
                    transition: 'stroke 0.6s ease',
                    stroke: isAsteriskAnim ? '#358df5' : commonProps.stroke
                  }}
                />
              </motion.svg>
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
          </motion.div>
        );
      })}
      
       {/* Main Content */}
       <div className="relative z-10 flex items-center justify-center w-full min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
         <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
           {/* Title and Subtitle Container */}
           <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
           {/* Profile Photo */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
             className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44 rounded-full overflow-hidden shadow-lg flex-shrink-0"
             style={{ 
               backgroundImage: 'url(/images/profile_pic_head.jpg)',
               backgroundSize: '120%',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)'
             }}
             role="img"
             aria-label="Vinay Krishnan profile picture"
           />
           
           {/* Title */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
             className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold leading-tight max-w-5xl"
             style={{ color: '#1c1c1c' }}
           >
             I design and build products that <br />
             look beautiful and feel effortless
           </motion.h1>
           
           {/* Subtitle */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
             className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl leading-relaxed max-w-4xl"
             style={{ color: '#666666' }}
           >
             Bridging design and code to turn ideas into memorable digital experiences
           </motion.p>
           </div>
         </div>
       </div>
    </section>
  );
}
