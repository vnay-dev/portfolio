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
        // Generate very visible noise for testing
        const baseNoise = Math.random() * 255;
        const fineNoise = (Math.random() - 0.5) * 30; // Very visible fine detail
        const microNoise = (Math.random() - 0.5) * 15; // Very visible micro detail
        
        // Very visible white grain
        const whiteBias = Math.random() * 40; // Very visible white grain
        
        // Combine for subtle grain
        const combinedNoise = baseNoise + fineNoise + microNoise + whiteBias;
        
        // Very visible color variation
        const colorVariation = (Math.random() - 0.5) * 10;
        const finalNoise = Math.max(0, Math.min(255, combinedNoise + colorVariation));
        
        data[i] = finalNoise;     // R
        data[i + 1] = finalNoise; // G
        data[i + 2] = finalNoise; // B
        data[i + 3] = 255;        // A - Full alpha
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        zIndex: 1,
        mixBlendMode: blendMode as any,
        opacity: opacity,
        width: '100%',
        height: '100%'
      }}
    />
  );
}
