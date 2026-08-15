import { WebSynth } from "@/components/shared/composite";
import { SectionHeading } from "./SectionHeading";

/**
 * Closing "play arena" section — interactive web synth with a short intro.
 * Rendered as the last content section (before the footer) on a light
 * surface so the light-themed synth and dark text read correctly.
 */
export function PlayArena() {
  return (
    <section className="w-full bg-[#fcfcfc]">
      <div className="container mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-24">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10">
          <SectionHeading
            title="Try making sounds with your fingertips"
            subtitle="Before you head out, treat yourself to a little fun."
          />
          <p className="body-xlarge w-full text-neutral-500">
            {/* Pointer-device copy on hover-capable devices, touch copy on touch-primary devices */}
            <span className="[@media(hover:none)_and_(pointer:coarse)]:hidden">
              Click once on the shiny marble to turn the sound on, then press and hold with your mouse
              or trackpad and move around the play arena
            </span>
            <span className="hidden [@media(hover:none)_and_(pointer:coarse)]:inline">
              Tap the shiny marble once to turn the sound on, then keep your finger pressed and move it
              around the play arena
            </span>{" "}
            to create fun sounds.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <WebSynth />
        </div>
      </div>
    </section>
  );
}
