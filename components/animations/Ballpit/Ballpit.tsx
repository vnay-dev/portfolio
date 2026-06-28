"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * Ballpit — a 3D physics background of glossy spheres that fall, collide, bounce off walls and
 * (on hover-capable devices) get nudged by the cursor. Ported to TypeScript from
 * {@link https://reactbits.dev/backgrounds/ballpit React Bits — Ballpit} and trimmed for use as a
 * section background: configurable ball `count` and `colors`, optional cursor interaction, and
 * automatic pause when off-screen or when the tab is hidden.
 */

type RenderTick = { elapsed: number; delta: number };

interface WebGLCanvasParams {
  canvas: HTMLCanvasElement;
  size?: "parent" | { width: number; height: number };
  rendererOptions?: THREE.WebGLRendererParameters;
}

/** Hosts the renderer/camera/scene, drives the RAF loop, and pauses when off-screen or tab-hidden. */
class WebGLCanvas {
  private params: WebGLCanvasParams;
  canvas: HTMLCanvasElement;
  camera!: THREE.PerspectiveCamera;
  cameraFov = 0;
  cameraMaxAspect?: number;
  maxPixelRatio = 2;
  scene!: THREE.Scene;
  renderer!: THREE.WebGLRenderer;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  onBeforeRender: (tick: RenderTick) => void = () => {};
  onAfterResize: (size: WebGLCanvas["size"]) => void = () => {};

  private isVisible = false;
  private isRunning = false;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private resizeTimeout?: number;
  private clock = new THREE.Timer();
  private tick: RenderTick = { elapsed: 0, delta: 0 };
  private rafId?: number;

  constructor(params: WebGLCanvasParams) {
    this.params = { ...params };
    this.canvas = params.canvas;
    this.initCamera();
    this.initScene();
    this.initRenderer();
    this.resize();
    this.initObservers();
  }

  private initCamera() {
    this.camera = new THREE.PerspectiveCamera();
    this.cameraFov = this.camera.fov;
  }

  private initScene() {
    this.scene = new THREE.Scene();
  }

  private initRenderer() {
    this.canvas.style.display = "block";
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      powerPreference: "high-performance",
      ...(this.params.rendererOptions ?? {}),
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  private initObservers() {
    if (!(this.params.size instanceof Object)) {
      window.addEventListener("resize", this.handleResize);
      if (this.params.size === "parent" && this.canvas.parentNode) {
        this.resizeObserver = new ResizeObserver(this.handleResize);
        this.resizeObserver.observe(this.canvas.parentNode as Element);
      }
    }
    this.intersectionObserver = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    this.intersectionObserver.observe(this.canvas);
    document.addEventListener("visibilitychange", this.handleVisibility);
  }

  private removeObservers() {
    window.removeEventListener("resize", this.handleResize);
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    document.removeEventListener("visibilitychange", this.handleVisibility);
  }

  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
    this.isVisible = entries[0].isIntersecting;
    if (this.isVisible) this.start();
    else this.stop();
  };

  private handleVisibility = () => {
    if (!this.isVisible) return;
    if (document.hidden) this.stop();
    else this.start();
  };

  private handleResize = () => {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = window.setTimeout(() => this.resize(), 100);
  };

  resize() {
    let width: number;
    let height: number;
    if (this.params.size instanceof Object) {
      width = this.params.size.width;
      height = this.params.size.height;
    } else if (this.params.size === "parent" && this.canvas.parentNode) {
      const parent = this.canvas.parentNode as HTMLElement;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;
    this.updateCamera();
    this.updateRenderer();
    this.onAfterResize(this.size);
  }

  private updateCamera() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
      const tan = Math.tan(THREE.MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / this.cameraMaxAspect);
      this.camera.fov = 2 * THREE.MathUtils.radToDeg(Math.atan(tan));
    } else {
      this.camera.fov = this.cameraFov;
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }

  private updateWorldSize() {
    const fovRad = (this.camera.fov * Math.PI) / 180;
    this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
    this.size.wWidth = this.size.wHeight * this.camera.aspect;
  }

  private updateRenderer() {
    this.renderer.setSize(this.size.width, this.size.height);
    const pixelRatio = Math.min(window.devicePixelRatio, this.maxPixelRatio);
    this.renderer.setPixelRatio(pixelRatio);
    this.size.pixelRatio = pixelRatio;
  }

  private start = () => {
    if (this.isRunning) return;
    const animate = () => {
      this.rafId = requestAnimationFrame(animate);
      this.clock.update();
      this.tick.delta = this.clock.getDelta();
      this.tick.elapsed += this.tick.delta;
      this.onBeforeRender(this.tick);
      this.renderer.render(this.scene, this.camera);
    };
    this.isRunning = true;
    this.clock.reset();
    animate();
  };

  private stop = () => {
    if (!this.isRunning) return;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.isRunning = false;
  };

  private clearScene() {
    this.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        const material = mesh.material as THREE.Material;
        material?.dispose?.();
        mesh.geometry?.dispose?.();
      }
    });
    this.scene.clear();
  }

  dispose() {
    this.removeObservers();
    this.stop();
    this.clock.dispose();
    this.clearScene();
    this.renderer.dispose();
    // Intentionally NOT calling forceContextLoss(): under React StrictMode the effect mounts,
    // unmounts and remounts on the same canvas, and a force-lost context can't be recreated.
  }
}

/* ---------------------------------------------------------------------------------------------- */
/* Shared pointer tracking — maps the cursor/touch onto each registered canvas in normalized space. */
/* ---------------------------------------------------------------------------------------------- */

interface PointerData {
  position: THREE.Vector2;
  nPosition: THREE.Vector2;
  hover: boolean;
  onMove: (data: PointerData) => void;
  onLeave: (data: PointerData) => void;
  dispose?: () => void;
}

const pointerMap = new Map<HTMLElement, PointerData>();
const pointerScreen = new THREE.Vector2();
let pointerListenersActive = false;

function createPointerData(params: {
  domElement: HTMLElement;
  onMove?: (data: PointerData) => void;
  onLeave?: (data: PointerData) => void;
}): PointerData {
  const data: PointerData = {
    position: new THREE.Vector2(),
    nPosition: new THREE.Vector2(),
    hover: false,
    onMove: () => {},
    onLeave: () => {},
    ...params,
  };

  if (!pointerMap.has(params.domElement)) {
    pointerMap.set(params.domElement, data);
    if (!pointerListenersActive) {
      document.body.addEventListener("pointermove", onPointerMove);
      document.body.addEventListener("pointerleave", onPointerLeave);
      pointerListenersActive = true;
    }
  }

  data.dispose = () => {
    pointerMap.delete(params.domElement);
    if (pointerMap.size === 0) {
      document.body.removeEventListener("pointermove", onPointerMove);
      document.body.removeEventListener("pointerleave", onPointerLeave);
      pointerListenersActive = false;
    }
  };

  return data;
}

function onPointerMove(event: PointerEvent) {
  pointerScreen.x = event.clientX;
  pointerScreen.y = event.clientY;
  for (const [element, data] of pointerMap) {
    const rect = element.getBoundingClientRect();
    if (isInsideRect(rect)) {
      updatePointerPosition(data, rect);
      if (!data.hover) data.hover = true;
      data.onMove(data);
    } else if (data.hover) {
      data.hover = false;
      data.onLeave(data);
    }
  }
}

function onPointerLeave() {
  for (const data of pointerMap.values()) {
    if (data.hover) {
      data.hover = false;
      data.onLeave(data);
    }
  }
}

function updatePointerPosition(data: PointerData, rect: DOMRect) {
  data.position.x = pointerScreen.x - rect.left;
  data.position.y = pointerScreen.y - rect.top;
  data.nPosition.x = (data.position.x / rect.width) * 2 - 1;
  data.nPosition.y = (-data.position.y / rect.height) * 2 + 1;
}

function isInsideRect(rect: DOMRect) {
  return (
    pointerScreen.x >= rect.left &&
    pointerScreen.x <= rect.left + rect.width &&
    pointerScreen.y >= rect.top &&
    pointerScreen.y <= rect.top + rect.height
  );
}

/* ---------------------------------------------------------------------------------------------- */
/* Physics — gravity, friction, sphere/sphere collisions and wall bounces over typed arrays.       */
/* ---------------------------------------------------------------------------------------------- */

interface BallpitConfig {
  count: number;
  colors: Array<number | string>;
  ambientColor: number | string;
  ambientIntensity: number;
  lightIntensity: number;
  materialParams: {
    metalness: number;
    roughness: number;
    clearcoat: number;
    clearcoatRoughness: number;
  };
  minSize: number;
  maxSize: number;
  size0: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  maxVelocity: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  controlSphere0: boolean;
  followCursor: boolean;
}

const { randFloat, randFloatSpread } = THREE.MathUtils;

const cursorSpherePos = new THREE.Vector3();
const pos = new THREE.Vector3();
const otherPos = new THREE.Vector3();
const zero = new THREE.Vector3();
const vel = new THREE.Vector3();
const otherVel = new THREE.Vector3();
const between = new THREE.Vector3();
const push = new THREE.Vector3();
const absorbSelf = new THREE.Vector3();
const absorbOther = new THREE.Vector3();

class BallpitPhysics {
  config: BallpitConfig;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center = new THREE.Vector3();

  constructor(config: BallpitConfig) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.initPositions();
    this.setSizes();
  }

  private initPositions() {
    const { config, positionData, velocityData } = this;
    this.center.toArray(positionData, 0);
    for (let i = 1; i < config.count; i++) {
      const base = 3 * i;
      positionData[base] = randFloatSpread(2 * config.maxX);
      positionData[base + 1] = randFloatSpread(2 * config.maxY);
      positionData[base + 2] = randFloatSpread(2 * config.maxZ);
      // A gentle initial tumble so the pit has motion on entrance even without a cursor (e.g. touch).
      // No depth tumble when the pit is flat (maxZ === 0), so balls stay on a single ground plane.
      velocityData[base] = randFloatSpread(0.5);
      velocityData[base + 1] = randFloatSpread(0.5);
      velocityData[base + 2] = config.maxZ > 0 ? randFloatSpread(0.5) : 0;
    }
  }

  setSizes() {
    const { config, sizeData } = this;
    sizeData[0] = config.size0;
    for (let i = 1; i < config.count; i++) {
      sizeData[i] = randFloat(config.minSize, config.maxSize);
    }
  }

  update(tick: RenderTick) {
    const { config, center, positionData, sizeData, velocityData } = this;
    let startIndex = 0;

    if (config.controlSphere0) {
      startIndex = 1;
      cursorSpherePos.fromArray(positionData, 0);
      cursorSpherePos.lerp(center, 0.1).toArray(positionData, 0);
      zero.set(0, 0, 0).toArray(velocityData, 0);
    }

    for (let index = startIndex; index < config.count; index++) {
      const base = 3 * index;
      pos.fromArray(positionData, base);
      vel.fromArray(velocityData, base);
      vel.y -= tick.delta * config.gravity * sizeData[index];
      vel.multiplyScalar(config.friction);
      vel.clampLength(0, config.maxVelocity);
      pos.add(vel);
      pos.toArray(positionData, base);
      vel.toArray(velocityData, base);
    }

    for (let index = startIndex; index < config.count; index++) {
      const base = 3 * index;
      pos.fromArray(positionData, base);
      vel.fromArray(velocityData, base);
      const radius = sizeData[index];

      for (let other = index + 1; other < config.count; other++) {
        const otherBase = 3 * other;
        otherPos.fromArray(positionData, otherBase);
        otherVel.fromArray(velocityData, otherBase);
        const otherRadius = sizeData[other];

        between.copy(otherPos).sub(pos);
        const distance = between.length();
        const sumRadius = radius + otherRadius;

        if (distance < sumRadius) {
          const overlap = sumRadius - distance;
          push.copy(between).normalize().multiplyScalar(0.5 * overlap);
          absorbSelf.copy(push).multiplyScalar(Math.max(vel.length(), 1));
          absorbOther.copy(push).multiplyScalar(Math.max(otherVel.length(), 1));

          pos.sub(push);
          vel.sub(absorbSelf);
          pos.toArray(positionData, base);
          vel.toArray(velocityData, base);

          otherPos.add(push);
          otherVel.add(absorbOther);
          otherPos.toArray(positionData, otherBase);
          otherVel.toArray(velocityData, otherBase);
        }
      }

      if (config.controlSphere0) {
        between.copy(cursorSpherePos).sub(pos);
        const distance = between.length();
        const sumRadius0 = radius + sizeData[0];
        if (distance < sumRadius0) {
          const diff = sumRadius0 - distance;
          push.copy(between.normalize()).multiplyScalar(diff);
          absorbSelf.copy(push).multiplyScalar(Math.max(vel.length(), 2));
          pos.sub(push);
          vel.sub(absorbSelf);
        }
      }

      if (Math.abs(pos.x) + radius > config.maxX) {
        pos.x = Math.sign(pos.x) * (config.maxX - radius);
        vel.x = -vel.x * config.wallBounce;
      }
      if (config.gravity === 0) {
        if (Math.abs(pos.y) + radius > config.maxY) {
          pos.y = Math.sign(pos.y) * (config.maxY - radius);
          vel.y = -vel.y * config.wallBounce;
        }
      } else if (pos.y - radius < -config.maxY) {
        pos.y = -config.maxY + radius;
        vel.y = -vel.y * config.wallBounce;
      }

      const maxBoundary = Math.max(config.maxZ, config.maxSize);
      if (Math.abs(pos.z) + radius > maxBoundary) {
        pos.z = Math.sign(pos.z) * (config.maxZ - radius);
        vel.z = -vel.z * config.wallBounce;
      }

      pos.toArray(positionData, base);
      vel.toArray(velocityData, base);
    }
  }
}

/* ---------------------------------------------------------------------------------------------- */
/* Material — physical material with a cheap subsurface-scattering term for a soft, translucent look. */
/* ---------------------------------------------------------------------------------------------- */

class SubsurfaceScatteringMaterial extends THREE.MeshPhysicalMaterial {
  uniforms = {
    thicknessDistortion: { value: 0.1 },
    thicknessAmbient: { value: 0 },
    thicknessAttenuation: { value: 0.1 },
    thicknessPower: { value: 2 },
    thicknessScale: { value: 10 },
  };

  constructor(params: THREE.MeshPhysicalMaterialParameters) {
    super(params);
    this.defines = { ...this.defines, USE_UV: "" };
    this.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        `
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        ` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
        `,
      );
      const lightsFragment = THREE.ShaderChunk.lights_fragment_begin.replaceAll(
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
        `
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
        RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `,
      );
      shader.fragmentShader = shader.fragmentShader.replace("#include <lights_fragment_begin>", lightsFragment);
    };
  }
}

/** Linear gradient over an array of colors → a color at a 0..1 ratio. */
function createColorGradient(values: Array<number | string>) {
  const colors = values.map((value) => new THREE.Color(value));
  return {
    getColorAt(ratio: number, out = new THREE.Color()) {
      const scaled = Math.max(0, Math.min(1, ratio)) * (colors.length - 1);
      const index = Math.floor(scaled);
      const start = colors[index];
      if (index >= colors.length - 1) return start.clone();
      const alpha = scaled - index;
      const end = colors[index + 1];
      out.r = start.r + alpha * (end.r - start.r);
      out.g = start.g + alpha * (end.g - start.g);
      out.b = start.b + alpha * (end.b - start.b);
      return out;
    },
  };
}

const DEFAULT_CONFIG: BallpitConfig = {
  count: 200,
  colors: [0x000000],
  ambientColor: 0xffffff,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: { metalness: 0.5, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.15 },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true,
};

const dummyObject = new THREE.Object3D();

/** InstancedMesh of all spheres (single draw call), wired to the physics + per-instance colors. */
class BallpitSpheres extends THREE.InstancedMesh {
  config: BallpitConfig;
  physics: BallpitPhysics;
  ambientLight!: THREE.AmbientLight;
  light!: THREE.PointLight;

  constructor(renderer: THREE.WebGLRenderer, config: BallpitConfig) {
    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(environment, 0.04).texture;
    pmrem.dispose();

    const geometry = new THREE.SphereGeometry();
    const material = new SubsurfaceScatteringMaterial({ envMap, ...config.materialParams });
    material.envMapRotation.x = -Math.PI / 2;

    super(geometry, material, config.count);
    this.config = config;
    this.physics = new BallpitPhysics(config);
    this.initLights();
    this.setColors(config.colors);
  }

  private initLights() {
    this.ambientLight = new THREE.AmbientLight(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new THREE.PointLight(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }

  setColors(values: Array<number | string>) {
    if (!Array.isArray(values) || values.length === 0) return;
    const gradient = createColorGradient(values.length > 1 ? values : [values[0], values[0]]);
    for (let index = 0; index < this.count; index++) {
      const color = gradient.getColorAt(index / this.count);
      this.setColorAt(index, color);
      if (index === 0) this.light.color.copy(color);
    }
    if (this.instanceColor) this.instanceColor.needsUpdate = true;
  }

  update(tick: RenderTick) {
    this.physics.update(tick);
    for (let index = 0; index < this.count; index++) {
      dummyObject.position.fromArray(this.physics.positionData, 3 * index);
      if (index === 0 && this.config.followCursor === false) {
        dummyObject.scale.setScalar(0);
      } else {
        dummyObject.scale.setScalar(this.physics.sizeData[index]);
      }
      dummyObject.updateMatrix();
      this.setMatrixAt(index, dummyObject.matrix);
      if (index === 0) this.light.position.copy(dummyObject.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

interface BallpitInstance {
  dispose: () => void;
}

function createBallpit(
  canvas: HTMLCanvasElement,
  options: Partial<BallpitConfig> & { enablePointer?: boolean } = {},
): BallpitInstance {
  const { enablePointer = true, ...configOverrides } = options;
  const webgl = new WebGLCanvas({
    canvas,
    size: "parent",
    rendererOptions: { antialias: true, alpha: true },
  });

  webgl.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  webgl.camera.position.set(0, 0, 20);
  webgl.camera.lookAt(0, 0, 0);
  webgl.cameraMaxAspect = 1.5;
  webgl.resize();

  const config = { ...DEFAULT_CONFIG, ...configOverrides };
  const spheres = new BallpitSpheres(webgl.renderer, config);
  webgl.scene.add(spheres);

  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const intersection = new THREE.Vector3();

  let pointer: PointerData | undefined;
  if (enablePointer) {
    canvas.style.touchAction = "none";
    canvas.style.userSelect = "none";
    pointer = createPointerData({
      domElement: canvas,
      onMove() {
        if (!pointer) return;
        raycaster.setFromCamera(pointer.nPosition, webgl.camera);
        webgl.camera.getWorldDirection(plane.normal);
        raycaster.ray.intersectPlane(plane, intersection);
        spheres.physics.center.copy(intersection);
        spheres.config.controlSphere0 = true;
      },
      onLeave() {
        spheres.config.controlSphere0 = false;
      },
    });
  }

  webgl.onBeforeRender = (tick) => spheres.update(tick);
  webgl.onAfterResize = (size) => {
    spheres.config.maxX = size.wWidth / 2;
    spheres.config.maxY = size.wHeight / 2;
  };

  return {
    dispose() {
      pointer?.dispose?.();
      webgl.dispose();
    },
  };
}

export interface BallpitProps {
  className?: string;
  /** Number of spheres in the pit (a handful reads best as a background, e.g. 8–16). */
  count?: number;
  /** Gradient of colors spread across the spheres. Accepts hex strings or numbers. */
  colors?: Array<number | string>;
  /** Whether the cursor pushes the spheres (auto-disabled on touch so it never blocks scrolling). */
  followCursor?: boolean;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  maxVelocity?: number;
  /** Depth spread of the pit. 0 = fully flat, so every ball rests on the same visible bottom edge. */
  maxZ?: number;
  minSize?: number;
  maxSize?: number;
  ambientColor?: number | string;
  ambientIntensity?: number;
  lightIntensity?: number;
  materialParams?: BallpitConfig["materialParams"];
}

export default function Ballpit({ className = "", followCursor = true, ...config }: BallpitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Cursor stirring only on devices that truly hover; on touch we skip it entirely so the canvas
    // never hijacks touch scrolling over the section. `followCursor` only controls whether the
    // cursor-controlled sphere is *visible* — the pit can still be stirred without showing it.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const instance = createBallpit(canvas, {
      followCursor: followCursor && canHover,
      enablePointer: canHover,
      ...config,
    });

    return () => instance.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
