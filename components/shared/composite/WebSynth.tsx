"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { LuCheck, LuChevronDown, LuVolume2, LuVolumeX } from "react-icons/lu";
import styles from "./WebSynth.module.css";

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type DropdownOption = { name: string; value: string };

type SynthDropdownProps = {
  icon: string;
  options: DropdownOption[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  ariaLabel: string;
  width: number;
};

/**
 * Custom dropdown styled as a seamless extension of its trigger. Replaces the
 * native <select> so the menu, hover states and open/close animation can be
 * fully styled. Supports mouse + keyboard, closes on outside click / Escape.
 */
function SynthDropdown({ icon, options, selectedIndex, onSelect, ariaLabel, width }: SynthDropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const highlightRef = useRef<HTMLLIElement>(null);
  const justOpenedRef = useRef(false);
  const listboxId = useId();

  // Spring state for the sliding highlight: animated current values chase the
  // target with frame-rate-independent smoothing, so the slide is distance-aware
  // and settles naturally (no fixed-duration "snap").
  const spring = useRef({ y: 0, h: 0, ty: 0, th: 0 });
  const rafRef = useRef<number | null>(null);

  const applyHighlight = () => {
    const el = highlightRef.current;
    if (!el) return;
    el.style.transform = `translateY(${spring.current.y}px)`;
    el.style.height = `${spring.current.h}px`;
  };

  const moveHighlight = (y: number, h: number, immediate: boolean) => {
    const s = spring.current;
    s.ty = y;
    s.th = h;

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (immediate || reduceMotion) {
      s.y = y;
      s.h = h;
      applyHighlight();
      return;
    }
    if (rafRef.current != null) return; // a loop is already running

    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      // Higher rate = quicker settle. 22 feels responsive but still glides.
      const k = 1 - Math.exp(-22 * dt);
      s.y += (s.ty - s.y) * k;
      s.h += (s.th - s.h) * k;
      applyHighlight();

      if (Math.abs(s.ty - s.y) > 0.15 || Math.abs(s.th - s.h) > 0.15) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        s.y = s.ty;
        s.h = s.th;
        applyHighlight();
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  // Keep the activeIndex synced to the selected option while closed, so the
  // sliding highlight is already in place (no jump) the next time it opens.
  useEffect(() => {
    if (!open) setActiveIndex(selectedIndex);
  }, [selectedIndex, open]);

  // Measure the active option and move the single sliding highlight to it.
  useIsomorphicLayoutEffect(() => {
    const el = optionRefs.current[activeIndex];
    if (!el) return;
    const immediate = !open || justOpenedRef.current;
    justOpenedRef.current = false;
    moveHighlight(el.offsetTop, el.offsetHeight, immediate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, open, options.length]);

  useEffect(() => () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
  }, []);

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const openMenu = () => {
    justOpenedRef.current = true;
    setActiveIndex(selectedIndex);
    setOpen(true);
  };

  const choose = (index: number) => {
    onSelect(index);
    setOpen(false);
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open ? choose(activeIndex) : openMenu();
    } else if (event.key === "ArrowUp" && !open) {
      event.preventDefault();
      openMenu();
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      choose(activeIndex);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={styles.dropdown} data-open={open} style={{ maxWidth: width }}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleTriggerKeyDown}
      >
        <img src={icon} alt="" className={styles.triggerIcon} />
        <span className={styles.triggerValue}>{options[selectedIndex].name}</span>
        <LuChevronDown className={styles.caret} aria-hidden />
      </button>

      <div className={styles.menuWrap}>
        <div className={styles.menuClip}>
          <ul className={styles.menu} role="listbox" id={listboxId} aria-label={ariaLabel} onKeyDown={handleMenuKeyDown}>
            <li ref={highlightRef} aria-hidden className={styles.highlight} />
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={index === selectedIndex}
                tabIndex={open && index === activeIndex ? 0 : -1}
                ref={(node) => {
                  optionRefs.current[index] = node;
                  if (open && index === activeIndex) node?.focus();
                }}
                className={styles.option}
                data-selected={index === selectedIndex}
                data-active={index === activeIndex}
                onClick={() => choose(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{option.name}</span>
                <LuCheck className={styles.check} aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Position = { x: number; y: number };
type NoteInfo = { frequency: number; volume: number; noteName: string };

const SCALES: Record<string, number[]> = {
  major: [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25],
  minor: [261.63, 293.66, 311.13, 349.23, 392.0, 415.3, 466.16, 523.25],
  blues: [261.63, 311.13, 349.23, 369.99, 392.0, 466.16, 523.25],
  chromatic: [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0, 415.3, 440.0, 466.16, 493.88],
  pentatonic: [261.63, 293.66, 329.63, 392.0, 440.0, 523.25],
};

const SOUND_PRESETS = [
  { name: "Warm Pad", value: "warm-pad" },
  { name: "Lofi Dreams", value: "lofi-dreams" },
  { name: "Ethereal Bells", value: "ethereal-bells" },
  { name: "Synth Wave", value: "synth-wave" },
  { name: "Ambient Choir", value: "ambient-choir" },
];

const VIBE_OPTIONS = [
  { name: "Major", value: "major" },
  { name: "Minor", value: "minor" },
  { name: "Blues", value: "blues" },
  { name: "Chromatic", value: "chromatic" },
  { name: "Pentatonic", value: "pentatonic" },
];

/**
 * Glidr 101 touch synthesizer — ported verbatim from the standalone web-synth
 * project. The audio engine, scales and interaction handling are identical to
 * the original; the welcome/door screen is dropped (this is embedded in the
 * footer) and the controls are driven by React (dropdowns + mute toggle).
 */
class TouchSynthesizer {
  private audioContext: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNodes: GainNode[] = [];
  private isPlaying = false;

  private currentSoundIndex = 0;
  private currentVibeIndex = 0;
  private muted = false;

  private touchArea: HTMLElement;
  private controllerCursor: HTMLElement;

  private isMouseDown = false;
  private isTrackpadMode = false;
  private lastMouseMoveTime = 0;
  private mouseMoveCount = 0;
  private trackpadTimeout: ReturnType<typeof setTimeout> | null = null;
  private isLaptop = false;

  private readonly controller = new AbortController();

  constructor(root: HTMLElement) {
    this.touchArea = root.querySelector<HTMLElement>('[data-synth="touchArea"]')!;
    this.controllerCursor = root.querySelector<HTMLElement>('[data-synth="cursor"]')!;
    this.init();
  }

  private init() {
    this.setupEventListeners();
    this.controllerCursor.style.left = "50%";
    this.controllerCursor.style.top = "50%";
    // Centering translate + grab scale are handled in CSS (see .marble), so we
    // intentionally don't set an inline transform here — an inline value would
    // override the [data-grabbed] grab-scale rule.
  }

  // --- Public API used by the React controls ---
  setSoundIndex(index: number) {
    this.currentSoundIndex = index;
  }

  setVibeIndex(index: number) {
    this.currentVibeIndex = index;
  }

  setMuted(muted: boolean) {
    this.muted = muted;
    if (muted) this.stopAllOscillators();
  }

  private async initAudioContext() {
    try {
      const Ctor =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioContext = new Ctor();
      if (this.audioContext.state === "suspended") {
        await this.audioContext.resume();
      }
    } catch (error) {
      console.error("Failed to initialize audio context:", error);
    }
  }

  private setupEventListeners() {
    const { signal } = this.controller;

    this.touchArea.addEventListener("mousedown", this.handleMouseDown, { signal });
    this.touchArea.addEventListener("mousemove", this.handleMouseMove, { signal });
    this.touchArea.addEventListener("mouseup", this.handleMouseUp, { signal });
    this.touchArea.addEventListener("mouseleave", this.handleMouseLeave, { signal });

    this.touchArea.addEventListener("touchstart", this.handleTouchStart, { signal });
    this.touchArea.addEventListener("touchmove", this.handleTouchMove, { signal });
    this.touchArea.addEventListener("touchend", this.handleTouchEnd, { signal });
    this.touchArea.addEventListener("touchcancel", this.handleTouchEnd, { signal });

    this.touchArea.addEventListener("touchstart", (e) => e.preventDefault(), { signal, passive: false });
    this.touchArea.addEventListener("touchmove", (e) => e.preventDefault(), { signal, passive: false });

    this.isLaptop = this.detectLaptop();
  }

  private detectLaptop() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
    const hasTouchCapability = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return !isMobile && hasTouchCapability;
  }

  private handleMouseDown = (event: MouseEvent) => {
    if (event.button !== 0) return;
    if (this.isLaptop) return;

    this.isMouseDown = true;
    this.isTrackpadMode = false;

    if (!this.audioContext) {
      this.initAudioContext().then(() => {
        if (this.audioContext) this.startPlayback(event);
      });
      return;
    }
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume().then(() => this.startPlayback(event));
      return;
    }
    this.startPlayback(event);
  };

  private handleMouseMove = (event: MouseEvent) => {
    const currentTime = Date.now();
    const position = this.getPosition(event);

    if (this.isLaptop) {
      this.mouseMoveCount++;
      if (this.mouseMoveCount > 5 && currentTime - this.lastMouseMoveTime < 100) {
        this.isTrackpadMode = true;
      }
      this.lastMouseMoveTime = currentTime;

      if (this.trackpadTimeout) clearTimeout(this.trackpadTimeout);
      this.trackpadTimeout = setTimeout(() => {
        this.isTrackpadMode = false;
        this.mouseMoveCount = 0;
      }, 1000);

      if (this.isTrackpadMode && !this.isPlaying) {
        if (!this.audioContext) {
          this.initAudioContext().then(() => {
            if (this.audioContext) this.startPlayback(event);
          });
          return;
        }
        if (this.audioContext.state === "suspended") {
          this.audioContext.resume().then(() => this.startPlayback(event));
          return;
        }
        this.startPlayback(event);
      }

      this.updatePosition(position);
      if (this.isPlaying) this.updateAudio(position);
      return;
    }

    if (!this.isMouseDown) {
      this.updatePosition(position);
      return;
    }
    if (!this.isPlaying) return;

    this.updatePosition(position);
    this.updateAudio(position);
  };

  private handleMouseUp = () => {
    this.isMouseDown = false;
    this.stopPlayback();
  };

  private handleMouseLeave = () => {
    this.isMouseDown = false;
    this.isTrackpadMode = false;
    this.mouseMoveCount = 0;
    if (this.trackpadTimeout) {
      clearTimeout(this.trackpadTimeout);
      this.trackpadTimeout = null;
    }
    this.stopPlayback();
  };

  private startPlayback(event: MouseEvent | TouchEvent) {
    this.isPlaying = true;
    this.controllerCursor.dataset.grabbed = "true";
    const position = this.getPosition(event);
    this.updatePosition(position);
    this.startAudio(position);
  }

  private handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      this.isMouseDown = true;
      this.isTrackpadMode = true;
    } else {
      return;
    }

    if (!this.audioContext) {
      this.initAudioContext().then(() => {
        if (this.audioContext) this.startPlayback(event);
      });
      return;
    }
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume().then(() => this.startPlayback(event));
      return;
    }
    this.startPlayback(event);
  };

  private handleTouchMove = (event: TouchEvent) => {
    const shouldPlay = event.touches.length === 1 && this.isMouseDown;
    if (!shouldPlay) {
      this.updatePosition(this.getPosition(event));
      return;
    }
    if (!this.isPlaying) return;
    const position = this.getPosition(event);
    this.updatePosition(position);
    this.updateAudio(position);
  };

  private handleTouchEnd = (event: TouchEvent) => {
    if (event.touches.length === 0) {
      this.isMouseDown = false;
      this.isTrackpadMode = false;
      this.stopPlayback();
    }
  };

  private stopPlayback() {
    this.isPlaying = false;
    this.controllerCursor.dataset.grabbed = "false";
    this.stopAllOscillators();
  }

  private createOscillator(frequency: number, preset: string) {
    const ctx = this.audioContext!;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filterNode = ctx.createBiquadFilter();

    switch (preset) {
      case "warm-pad":
        oscillator.type = "sawtooth";
        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(800, ctx.currentTime);
        break;
      case "lofi-dreams":
        oscillator.type = "triangle";
        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(400, ctx.currentTime);
        break;
      case "ethereal-bells":
        oscillator.type = "sine";
        filterNode.type = "highpass";
        filterNode.frequency.setValueAtTime(200, ctx.currentTime);
        break;
      case "synth-wave":
        oscillator.type = "square";
        filterNode.type = "bandpass";
        filterNode.frequency.setValueAtTime(1000, ctx.currentTime);
        break;
      case "ambient-choir":
        oscillator.type = "sine";
        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(600, ctx.currentTime);
        break;
    }

    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    gainNode.gain.setValueAtTime(0, ctx.currentTime);

    oscillator.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(ctx.destination);

    return { oscillator, gainNode };
  }

  private stopAllOscillators() {
    if (!this.audioContext) {
      this.oscillators = [];
      this.gainNodes = [];
      return;
    }
    this.oscillators.forEach((osc, index) => {
      try {
        this.gainNodes[index].gain.setTargetAtTime(0, this.audioContext!.currentTime, 0.1);
        setTimeout(() => osc.stop(), 200);
      } catch {
        // Oscillator might already be stopped
      }
    });
    this.oscillators = [];
    this.gainNodes = [];
  }

  private getPosition(event: MouseEvent | TouchEvent): Position {
    const rect = this.touchArea.getBoundingClientRect();
    let clientX: number;
    let clientY: number;

    if ("touches" in event && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = (event as MouseEvent).clientX;
      clientY = (event as MouseEvent).clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };
  }

  private updatePosition(position: Position) {
    this.controllerCursor.style.left = `${position.x}%`;
    this.controllerCursor.style.top = `${position.y}%`;
    // The centering translate + grab scale live in CSS so they survive these
    // per-move updates (see .marble / [data-grabbed] in WebSynth.module.css).
  }

  private calculateFrequency(position: Position): NoteInfo {
    const selectedScale = VIBE_OPTIONS[this.currentVibeIndex].value;
    const currentScale = SCALES[selectedScale];

    const noteIndex = Math.floor((position.x / 100) * currentScale.length);
    const frequency = currentScale[noteIndex] || currentScale[0];

    const volume = (1 - position.y / 100) * 0.3;

    return { frequency, volume, noteName: this.getNoteName(frequency) };
  }

  private getNoteName(frequency: number): string {
    const noteNames: Record<number, string> = {
      261.63: "C4",
      277.18: "C#4",
      293.66: "D4",
      311.13: "D#4",
      329.63: "E4",
      349.23: "F4",
      369.99: "F#4",
      392.0: "G4",
      415.3: "G#4",
      440.0: "A4",
      466.16: "A#4",
      493.88: "B4",
      523.25: "C5",
    };
    return noteNames[frequency] || "N/A";
  }

  private startAudio(position: Position) {
    if (!this.audioContext) return;
    this.stopAllOscillators();
    if (this.muted) return;

    const noteInfo = this.calculateFrequency(position);
    if (noteInfo.volume > 0.05) {
      const { oscillator, gainNode } = this.createOscillator(noteInfo.frequency, SOUND_PRESETS[this.currentSoundIndex].value);
      oscillator.start();
      gainNode.gain.setTargetAtTime(noteInfo.volume, this.audioContext.currentTime, 0.1);
      this.oscillators.push(oscillator);
      this.gainNodes.push(gainNode);
    }
  }

  private updateAudio(position: Position) {
    if (!this.audioContext) return;

    const noteInfo = this.calculateFrequency(position);
    this.stopAllOscillators();
    if (this.muted) return;

    if (noteInfo.volume > 0.05) {
      const { oscillator, gainNode } = this.createOscillator(noteInfo.frequency, SOUND_PRESETS[this.currentSoundIndex].value);
      oscillator.start();
      gainNode.gain.setTargetAtTime(noteInfo.volume, this.audioContext.currentTime, 0.1);
      this.oscillators.push(oscillator);
      this.gainNodes.push(gainNode);
    }
  }

  destroy() {
    this.controller.abort();
    if (this.trackpadTimeout) clearTimeout(this.trackpadTimeout);
    this.stopAllOscillators();
    if (this.audioContext) {
      this.audioContext.close().catch(() => { });
      this.audioContext = null;
    }
  }
}

export function WebSynth() {
  const rootRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<TouchSynthesizer | null>(null);

  const [soundIndex, setSoundIndex] = useState(0);
  const [vibeIndex, setVibeIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    if (!rootRef.current) return;
    const synth = new TouchSynthesizer(rootRef.current);
    synthRef.current = synth;

    return () => {
      synth.destroy();
      synthRef.current = null;
    };
  }, []);

  const handleSoundChange = (index: number) => {
    setSoundIndex(index);
    synthRef.current?.setSoundIndex(index);
  };

  const handleVibeChange = (index: number) => {
    setVibeIndex(index);
    synthRef.current?.setVibeIndex(index);
  };

  const toggleSound = () => {
    setSoundOn((prev) => {
      const next = !prev;
      synthRef.current?.setMuted(!next);
      return next;
    });
  };

  return (
    <div ref={rootRef} className={styles.synth}>
      {/* Liquid-glass lens filter: refracts (displaces) the grid behind the
          marble using a radial normal map, giving the glassy edge magnification.
          Browsers without SVG backdrop displacement fall back to a frosted blur. */}
      <svg className={styles.glassFilter} aria-hidden focusable="false">
        <filter id="liquidGlassLens" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
          <feImage
            href="/web-synth/liquid-lens-map.png"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            result="lensMap"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="lensMap"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className={styles.topBar}>
        <div className={styles.controls}>
          <SynthDropdown
            icon="/web-synth/music-note.svg"
            options={SOUND_PRESETS}
            selectedIndex={soundIndex}
            onSelect={handleSoundChange}
            ariaLabel="Sound preset"
            width={180}
          />
          <SynthDropdown
            icon="/web-synth/vibe.svg"
            options={VIBE_OPTIONS}
            selectedIndex={vibeIndex}
            onSelect={handleVibeChange}
            ariaLabel="Vibe / scale"
            width={148}
          />
        </div>

        <button
          type="button"
          className={styles.soundToggle}
          data-muted={!soundOn}
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Mute sound" : "Unmute sound"}
          title={soundOn ? "Sound on" : "Sound off"}
        >
          {soundOn ? <LuVolume2 aria-hidden /> : <LuVolumeX aria-hidden />}
        </button>
      </div>

      <div className={styles.interactivePad} data-synth="touchArea">
        <div className={styles.padContent}>
          <div className={styles.padGrid} />
          <div className={styles.marble} data-synth="cursor" aria-hidden>
            <span className={styles.marbleGlare} />
          </div>
        </div>
        {/* Uniform hairline frame (SVG stroke avoids the heavier-corner
            artifact a thin CSS border has on rounded corners). */}
        <svg className={styles.padFrame} aria-hidden focusable="false">
          <rect />
        </svg>
      </div>
    </div>
  );
}
