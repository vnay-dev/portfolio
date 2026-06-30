import { LuHeart } from "react-icons/lu";

import { WebSynth } from "@/components/shared/composite";

/**
 * Closing "play arena" section — a friendly sign-off plus the interactive web
 * synth. Rendered as the last content section (before the footer) on a light
 * surface so the light-themed synth and dark text read correctly.
 */
export function PlayArena() {
  return (
    <section className="w-full border-y border-gray-100 bg-[#fcfcfc]">
      <div className="container mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-24">
        <div className="mb-8 text-left sm:mb-10">
          <h2 className="headline-medium font-semibold text-gray-900">
            Thank you for stopping by!{" "}
            <LuHeart
              aria-hidden
              className="inline-block -translate-y-[0.08em] align-middle text-[0.85em] text-rose-500"
              fill="currentColor"
            />
          </h2>
          <p className="body-medium mt-3 text-gray-600">
            Before you head out, treat yourself to a little fun.{" "}
            {/* Pointer-device copy on hover-capable devices, touch copy on touch-primary devices */}
            <span className="[@media(hover:none)_and_(pointer:coarse)]:hidden">
              Press and hold the shiny marble with your mouse or trackpad as you explore the play arena
            </span>
            <span className="hidden [@media(hover:none)_and_(pointer:coarse)]:inline">
              Touch the shiny marble and move it around the play arena
            </span>{" "}
            to see what fun sounds you can create.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <WebSynth />
        </div>
      </div>
    </section>
  );
}
