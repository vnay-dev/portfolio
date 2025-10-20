import { useRef, useEffect } from "react";

interface NoiseTextureProps {
  className?: string;
  opacity?: number;
  blendMode?: string;
}

export function NoiseTexture({ 
  className = "", 
  opacity = 0.3, 
  blendMode = 'overlay' 
}: NoiseTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      
      const pixelRatio = Math.min(window.devicePixelRatio * 2, 4);
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(pixelRatio, pixelRatio);
      generateNoise();
    };

    // Generate subtle noise pattern
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // Generate subtle noise
        const baseNoise = Math.random() * 40; // base grain
        const fineNoise = (Math.random() - 0.5) * 8; // fine detail
        const microNoise = (Math.random() - 0.5) * 4; // micro detail
        
        // subtle white bias
        const whiteBias = Math.random() * 6;
        
        // Combine for subtle grain
        const combinedNoise = baseNoise + fineNoise + microNoise + whiteBias;
        
        // subtle color variation
        const colorVariation = (Math.random() - 0.5) * 2;
        const finalNoise = Math.max(0, Math.min(255, combinedNoise + colorVariation));
        
        data[i] = finalNoise;     // R
        data[i + 1] = finalNoise; // G
        data[i + 2] = finalNoise; // B
        data[i + 3] = Math.floor(opacity * 255);        // A - scale by opacity
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    // Initial setup with delay to ensure proper sizing
    const initTimer = setTimeout(() => {
      resizeCanvas();
    }, 100);

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity, blendMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        zIndex: 1,
        mixBlendMode: blendMode as React.CSSProperties['mixBlendMode'],
        opacity: opacity,
        width: '100%',
        height: '100%'
      }}
    />
  );
}
