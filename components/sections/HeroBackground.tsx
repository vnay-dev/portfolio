"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface HeroBackgroundProps {
  currentWord?: string;
}

export function HeroBackground({ currentWord = 'dream' }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedWord, setDisplayedWord] = useState(currentWord);

  // Update displayed word with delay to match text animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedWord(currentWord);
    }, 1350); // Match the text animation duration (1.35s)
    
    return () => clearTimeout(timer);
  }, [currentWord]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Generate colors based on current text gradient
    const generateTextMatchingColor = () => {
      // These match the CSS gradient colors from globals.css
      const gradientColors = {
        dream: [
          [0.372, 0.898, 0.431], // #5FE56E
          [0.882, 1.0, 0.498],   // #E1FF7F
          [0.6, 0.9, 0.55],      // Mix
          [0.7, 0.9, 0.48],      // Mix
          [0.5, 0.85, 0.6],      // Mix
        ],
        design: [
          [0.208, 0.553, 0.961], // #358DF5
          [0.455, 0.820, 1.0],   // #74D1FF
          [0.2, 0.6, 0.95],      // Mix
          [0.25, 0.65, 0.9],     // Mix
          [0.18, 0.58, 0.92],    // Mix
        ],
        build: [
          [0.973, 0.639, 0.255], // #F8A341
          [0.961, 0.812, 0.208], // #F5CF35
          [0.95, 0.7, 0.3],      // Mix
          [0.97, 0.75, 0.25],    // Mix
          [0.96, 0.65, 0.35],    // Mix
        ]
      };
      
       const wordColors = gradientColors[displayedWord as keyof typeof gradientColors] || gradientColors.dream;
      return wordColors[Math.floor(Math.random() * wordColors.length)];
    };

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

     // Water simulation settings
     const resolution = 256;
     const waterBuffers = {
       current: new Float32Array(resolution * resolution),
       previous: new Float32Array(resolution * resolution),
       velocity: new Float32Array(resolution * resolution * 2),
       vorticity: new Float32Array(resolution * resolution),
       color: new Float32Array(resolution * resolution * 3), // RGB color data
     };

     // Initialize buffers
     for (let i = 0; i < resolution * resolution; i++) {
       waterBuffers.current[i] = 0.0;
       waterBuffers.previous[i] = 0.0;
       waterBuffers.velocity[i * 2] = 0.0;
       waterBuffers.velocity[i * 2 + 1] = 0.0;
       waterBuffers.vorticity[i] = 0.0;
       // Initialize colors to neutral
       waterBuffers.color[i * 3] = 0.0;     // R
       waterBuffers.color[i * 3 + 1] = 0.0; // G
       waterBuffers.color[i * 3 + 2] = 0.0; // B
     }

    // Create water texture (height + color data)
    const waterData = new Float32Array(resolution * resolution * 4); // RGBA
    const waterTexture = new THREE.DataTexture(
      waterData,
      resolution,
      resolution,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    waterTexture.minFilter = THREE.LinearFilter;
    waterTexture.magFilter = THREE.LinearFilter;
    waterTexture.needsUpdate = true;

    // Create noise texture using canvas (like JSFiddle)
    const createNoiseTexture = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      
      // Set canvas size - larger for finer grain
      const size = 256;
      canvas.width = size;
      canvas.height = size;
      
      // Create very subtle noise pattern
      const imageData = ctx.createImageData(size, size);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // Full range noise for visibility
        const noise = Math.random() * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 255;   // A
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Create Three.js texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
      
      return texture;
    };
    
    const noiseTexture = createNoiseTexture();


    // Vertex shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

     // Fragment shader - Water Tank Effect
     const fragmentShader = `
       uniform float u_time;
       uniform vec2 u_resolution;
       uniform vec3 u_color1;
       uniform vec3 u_color2;
       uniform vec3 u_color3;
       uniform vec3 u_background;
       uniform vec3 u_surfaceColor;
       uniform float u_speed;
       uniform sampler2D u_waterTexture;
       uniform sampler2D u_noiseTexture;
       uniform float u_waterStrength;
       
       varying vec2 vUv;
       
       // Smooth noise for caustics
       float smoothNoise(vec2 p) {
         vec2 i = floor(p);
         vec2 f = fract(p);
         f = f * f * (3.0 - 2.0 * f);
         
         float a = fract(sin(dot(i, vec2(12.9898, 78.233))) * 43758.5453);
         float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453);
         float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453);
         float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453);
         
         return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
       }
       
       float fbm(vec2 p) {
         float value = 0.0;
         float amplitude = 0.5;
         float frequency = 1.0;
         
         for(int i = 0; i < 3; i++) {
           value += amplitude * smoothNoise(p * frequency);
           frequency *= 2.0;
           amplitude *= 0.5;
         }
         
         return value;
       }

      void main() {
        vec2 r = u_resolution;
        vec2 FC = gl_FragCoord.xy;
        vec2 uv = FC / r;
        
        // Sample water texture for ripples and colors
        vec4 waterData = texture2D(u_waterTexture, uv);
        float waterHeight = waterData.r;
        float waterInfluence = waterHeight * u_waterStrength;
        vec3 splashColor = waterData.gba; // Color from splash
        
        // Use canvas-generated noise texture with aspect ratio correction
        // Make noise square by using the smaller dimension
        float aspectRatio = u_resolution.x / u_resolution.y;
        vec2 noiseUV;
        if (aspectRatio > 1.0) {
          // Wider than tall - scale X to match Y, tile 5x for finer grain
          noiseUV = vec2(uv.x * aspectRatio * 5.0, uv.y * 5.0);
        } else {
          // Taller than wide - scale Y to match X, tile 5x for finer grain
          noiseUV = vec2(uv.x * 5.0, uv.y / aspectRatio * 5.0);
        }
        vec3 noiseSample = texture2D(u_noiseTexture, noiseUV).rgb;
        float grain = (noiseSample.r - 0.5) * 0.08;
        
        // Base surface color with canvas noise texture
        vec3 surfaceBase = u_surfaceColor;
        surfaceBase += vec3(grain); // Add canvas noise
        
        // Calculate water distortion from ripples
        float rippleStrength = abs(waterInfluence);
        float rippleDistortion = waterInfluence * 2.0;
        
        // Balanced caustic patterns
        vec2 distortedUV = uv + vec2(
          sin(uv.y * 15.0 + waterInfluence * 10.0) * 0.002,
          cos(uv.x * 15.0 + waterInfluence * 10.0) * 0.002
        );
        
        float caustic = fbm(distortedUV * 20.0 + u_time * 0.1);
        caustic = pow(caustic, 2.0) * 0.09; // Balanced caustics
        
        // Apply caustics where there are ripples
        caustic *= smoothstep(0.0, 0.4, rippleStrength);
        
        // Balanced water tint
        float ripplePhase = waterInfluence * 0.5 + 0.5;
        vec3 waterTint = mix(
          mix(u_color1, u_color2, ripplePhase),
          u_color3,
          sin(u_time * 0.5 + ripplePhase * 3.14159) * 0.5 + 0.5
        ) * 0.07; // Balanced water color
        
        // Subtle ambient splash colors
        vec3 splashTint = splashColor * 1.0; // Ambient glow
        float splashIntensity = length(splashColor) * 0.6; // Subtle splash visibility
        
        // Balanced highlights
        float rippleHighlight = smoothstep(0.25, 1.0, rippleStrength) * 0.1;
        
        // Combine everything
        vec3 finalColor = surfaceBase;
        finalColor += caustic; // Add caustic patterns
        finalColor += waterTint * rippleStrength; // Water color based on ripple intensity
        finalColor += splashTint * splashIntensity; // Exciting splash colors!
        finalColor += vec3(rippleHighlight); // Bright highlights on ripples
        
        // Subtle edge darkening for depth
        float edgeDarken = smoothstep(0.0, 0.3, min(uv.x, min(uv.y, min(1.0 - uv.x, 1.0 - uv.y))));
        finalColor *= 0.85 + edgeDarken * 0.15;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

     // Create material with uniforms
     const material = new THREE.ShaderMaterial({
       vertexShader,
       fragmentShader,
       uniforms: {
         u_time: { value: 0.0 },
         u_resolution: { value: new THREE.Vector2(width, height) },
         u_speed: { value: 0.6 },
         u_color1: { value: new THREE.Vector3(0.2, 0.5, 0.8) }, // Deep blue
         u_color2: { value: new THREE.Vector3(0.3, 0.6, 0.9) }, // Rich cyan
         u_color3: { value: new THREE.Vector3(0.4, 0.7, 0.85) }, // Ocean blue
         u_surfaceColor: { value: new THREE.Vector3(0.08, 0.08, 0.08) }, // Dark surface #141414
         u_background: { value: new THREE.Vector3(0.0, 0.0, 0.0) }, // Black background
         u_waterTexture: { value: waterTexture },
         u_noiseTexture: { value: noiseTexture },
         u_waterStrength: { value: 2.2 }, // Balanced visibility without overwhelming text
       },
     });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 1;

     // Add ripple function with splash effect
     const addRipple = (x: number, y: number, strength: number, isSplash: boolean = false) => {
       const normalizedX = x / width;
       const normalizedY = 1.0 - y / height;
       const texX = Math.floor(normalizedX * resolution);
       const texY = Math.floor(normalizedY * resolution);
       const radius = isSplash ? 18 : 8; // Balanced radius
       const rippleStrength = strength * (isSplash ? 1.8 : 0.5); // Balanced strength
       
       // Generate text-matching color for splash
       const splashColor = isSplash ? generateTextMatchingColor() : [0.0, 0.0, 0.0];
       
       // Single splash point for clean water drop
       const splashPoints = 1;

      // Create splash at impact point
      for (let splashIndex = 0; splashIndex < splashPoints; splashIndex++) {
        const centerX = texX;
        const centerY = texY;
        
        for (let i = -radius; i <= radius; i++) {
           for (let j = -radius; j <= radius; j++) {
             const distanceSquared = i * i + j * j;
             if (distanceSquared <= radius * radius) {
               const posX = Math.floor(centerX + i);
               const posY = Math.floor(centerY + j);
               if (posX >= 0 && posX < resolution && posY >= 0 && posY < resolution) {
                 const index = posY * resolution + posX;
                 const velIndex = index * 2;
                 const distance = Math.sqrt(distanceSquared);
                 const falloff = 1.0 - distance / radius;
                 
                 // Realistic water ripple physics
                 let rippleValue;
                 if (isSplash) {
                   // Water splash - gentle impact with soft center
                   const normalizedDist = distance / radius;
                   // Use smoother falloff to avoid harsh center
                   const softFalloff = falloff * (0.3 + 0.7 * normalizedDist); // Softer center, stronger at edges
                   const impactWave = Math.cos(normalizedDist * Math.PI * 0.5) * rippleStrength * softFalloff * 0.7;
                   const secondaryWave = Math.cos(normalizedDist * Math.PI * 1.5) * rippleStrength * softFalloff * 0.3;
                   const tertiaryWave = Math.cos(normalizedDist * Math.PI * 2.5) * rippleStrength * softFalloff * 0.1;
                   rippleValue = impactWave + secondaryWave + tertiaryWave;
                   
                   // Gentle outward velocity
                   const angle = Math.atan2(j, i);
                   const velocityMagnitude = rippleStrength * softFalloff * 0.7;
                   waterBuffers.velocity[velIndex] += Math.cos(angle) * velocityMagnitude;
                   waterBuffers.velocity[velIndex + 1] += Math.sin(angle) * velocityMagnitude;
                 } else {
                   // Visible ripple for mouse movement with wave propagation
                   const normalizedDist = distance / radius;
                   const primaryWave = Math.cos(normalizedDist * Math.PI * 0.5) * rippleStrength * falloff;
                   const secondaryWave = Math.cos(normalizedDist * Math.PI * 1.2) * rippleStrength * falloff * 0.3;
                   rippleValue = primaryWave + secondaryWave;
                   
                   const angle = Math.atan2(j, i);
                   const velocityStrength = rippleValue * 0.4;
                   waterBuffers.velocity[velIndex] += Math.cos(angle) * velocityStrength;
                   waterBuffers.velocity[velIndex + 1] += Math.sin(angle) * velocityStrength;
                 }
                 
                 waterBuffers.previous[index] += rippleValue;
                 
                 // Add color for splash with ambient, subtle glow
                 if (isSplash) {
                   const colorIndex = index * 3;
                   const normalizedDist = distance / radius;
                   // Distribute color more evenly, avoid bright center
                   const colorFalloff = falloff * (0.4 + 0.6 * normalizedDist) * 0.6;
                   waterBuffers.color[colorIndex] += splashColor[0] * colorFalloff;
                   waterBuffers.color[colorIndex + 1] += splashColor[1] * colorFalloff;
                   waterBuffers.color[colorIndex + 2] += splashColor[2] * colorFalloff;
                 }
               }
             }
           }
         }
       }
     };

     // Water simulation update
     const updateWaterSimulation = () => {
       const damping = 0.97; // Moderate decay - visible but not overwhelming
       const velocityDissipation = 0.06; // Moderate velocity decay
       const colorDissipation = 0.018; // Moderate color decay

       // Apply velocity dissipation
       for (let i = 0; i < resolution * resolution * 2; i++) {
         waterBuffers.velocity[i] *= 1.0 - velocityDissipation;
       }
       
       // Apply color dissipation
       for (let i = 0; i < resolution * resolution * 3; i++) {
         waterBuffers.color[i] *= 1.0 - colorDissipation;
       }

      // Water simulation
      for (let i = 1; i < resolution - 1; i++) {
        for (let j = 1; j < resolution - 1; j++) {
          const index = i * resolution + j;
          const top = waterBuffers.previous[index - resolution];
          const bottom = waterBuffers.previous[index + resolution];
          const left = waterBuffers.previous[index - 1];
          const right = waterBuffers.previous[index + 1];
          
          waterBuffers.current[index] = (top + bottom + left + right) / 2 - waterBuffers.current[index];
          waterBuffers.current[index] *= damping;
          waterBuffers.current[index] = Math.max(-2.0, Math.min(2.0, waterBuffers.current[index]));
        }
      }

       // Swap buffers
       const temp = waterBuffers.current;
       waterBuffers.current = waterBuffers.previous;
       waterBuffers.previous = temp;
       
       // Update texture with height and color data
       for (let i = 0; i < resolution * resolution; i++) {
         const dataIndex = i * 4;
         waterData[dataIndex] = waterBuffers.current[i]; // Height (R)
         waterData[dataIndex + 1] = waterBuffers.color[i * 3]; // Color R
         waterData[dataIndex + 2] = waterBuffers.color[i * 3 + 1]; // Color G
         waterData[dataIndex + 3] = waterBuffers.color[i * 3 + 2]; // Color B
       }
       
       waterTexture.needsUpdate = true;
    };

     // Mouse interaction
     let lastMousePosition = { x: 0, y: 0 };
     let mouseThrottleTime = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Check if mouse is over navbar area (top 100px of screen)
      if (event.clientY < 100) {
        return; // Don't create ripples when mouse is over navbar area
      }
      
      const x = event.clientX;
      const y = event.clientY;
      const now = performance.now();
      
      if (now - mouseThrottleTime < 16) return;
      mouseThrottleTime = now;
      
      const dx = x - lastMousePosition.x;
      const dy = y - lastMousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 2) {
        // Normal mouse movement ripples
        const intensity = Math.min(distance / 20, 1.0) * 0.5;
        addRipple(x, y, intensity);
      }
      
      lastMousePosition = { x, y };
    };

     const handleClick = (event: MouseEvent) => {
       // Check if click is over navbar area (top 100px of screen)
       if (event.clientY < 100) {
         return; // Don't create splashes when clicking on navbar area
       }
       
       // Create splash on click
       addRipple(event.clientX, event.clientY, 1.8, true);
     };

     window.addEventListener("mousemove", handleMouseMove);
     window.addEventListener("click", handleClick);

     // Initial gentle ripple
     setTimeout(() => {
       addRipple(width / 2, height / 2, 2.0, false);
     }, 500);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.u_time.value = clock.getElapsedTime();
      updateWaterSimulation();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      material.uniforms.u_resolution.value.set(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

     // Cleanup
     return () => {
       window.removeEventListener("mousemove", handleMouseMove);
       window.removeEventListener("click", handleClick);
       window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
       geometry.dispose();
       material.dispose();
       waterTexture.dispose();
       noiseTexture.dispose();
       renderer.dispose();
     };
   }, [displayedWord]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  );
}

