import Link from "next/link";
import { getNavbarFeatureFlags } from "@/app/constants";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin2CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-20 py-16 sm:py-24 md:py-32">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-4xl font-semibold sm:text-5xl">Syncing the Figma variables with codebase in seconds</h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">Feb 2026</time>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>1 week</span>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>2 designers & 1 design engineer</span>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="body-xlarge">
              While I was building the component library, it was important to ensure that the Figma changes related to variables and styles were synced with the codebase. Nebula Figma Sync plugin was built to solve this problem.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">As the system grew, manual sync couldn&apos;t keep up</h2>
            <p className="body-xlarge">
              As we rebuilt the token architecture in Figma, we defined proper collections,
              groups, naming conventions, and relationships.
            </p>

            <p className="body-xlarge">That worked well, until the system started growing.</p>

            <p className="body-xlarge">
              Every new component introduced more tokens. Existing tokens got renamed, regrouped, or
              restructured. Styles evolved too.
            </p>

            <p className="body-xlarge">
              Keeping all of those changes manually synced with the codebase quickly became
              unsustainable.
            </p>

            <p className="body-xlarge">
              The more the design system improved, the harder it became to keep design and code
              aligned.
            </p>

            <p className="body-xlarge">So I built a sync engine.</p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The first version was simple</h2>

            <p className="body-xlarge">
              Since Figma already had a feature to export the variable collections as JSON, I started testing whether the plugin could read the variable collections directly and show them in the UI in a customizable format for copying to codebase.
            </p>

            <p className="body-xlarge">It worked. This proved that we can go beyond copy-paste and automate the sync process.</p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">One click from Figma to code</h2>

            <p className="body-xlarge">
              The next version connected Figma directly to the codebase.
            </p>

            <p className="body-xlarge">
              I built a local HTTP server that runs inside the component library project. When the
              plugin fetches the latest token and style data, it sends that data directly into the
              repo and writes the files automatically.
            </p>

            <p className="body-xlarge">
              What used to be a manual handoff became a one-click sync.
            </p>

            <p className="body-xlarge">
              Designers no longer had to document every token change or explain each rename in
              detail. A high-level update was enough.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Why not use the Figma API?</h2>

            <p className="body-xlarge">That was the original plan.</p>

            <p className="body-xlarge">But the API had a few problems:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>
                It reliably exposed published variables, but local and scoped values were
                inconsistent
              </li>
              <li>Some token updates arrived stale due to caching</li>
              <li>It required PAT tokens, file IDs, and extra setup</li>
              <li>It added more friction than the workflow needed</li>
            </ul>

            <p className="body-xlarge">The plugin environment solved all of that.</p>

            <p className="body-xlarge">
              Because it runs inside the file itself, it had direct access to the latest data and was
              much faster to work with.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Raw data was not enough</h2>

            <p className="body-xlarge">
              Even after sync was working, the exported values still needed cleanup.
            </p>

            <p className="body-xlarge">
              For example, colors often came through as hardcoded hex values like #DA0E29, while our
              actual system relied on token references such as:
            </p>

            <p className="body-xlarge font-mono text-neutral-800">primitives.color.ai-red-500</p>

            <p className="body-xlarge">So I built a transformation pipeline after sync.</p>

            <p className="body-xlarge">
              It automatically converted raw values into token references, restructured the output,
              and formatted everything using the W3C Design Tokens Community Group standard.
            </p>

            <p className="body-xlarge">
              That meant the files could work cleanly with tools like Style Dictionary and other token
              tooling later.
            </p>

            <p className="body-xlarge">It also handled more complex cases like:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>gradients with multiple color stops</li>
              <li>typography objects with nested values</li>
              <li>deeply structured token groups</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Then icons became part of the problem</h2>

            <p className="body-xlarge">
              As the library grew, icons became another manual bottleneck.
            </p>

            <p className="body-xlarge">
              Every time a designer added or updated an icon, someone had to export SVGs manually,
              rename files, optimize them, and update the codebase.
            </p>

            <p className="body-xlarge">So I extended the same plugin.</p>

            <p className="body-xlarge">
              Now, when icons are updated in Figma, the plugin extracts the SVG data and sends it
              through a processing pipeline that:
            </p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>optimizes SVGs for web use</li>
              <li>preserves existing icons instead of replacing the whole library</li>
              <li>recovers orphaned files safely</li>
              <li>sanitizes filenames across operating systems</li>
              <li>generates searchable keywords</li>
              <li>creates TypeScript types for autocomplete</li>
              <li>can generate icon fonts when needed</li>
            </ul>

            <p className="body-xlarge">There was one more challenge.</p>

            <p className="body-xlarge">
              Figma exports icons with hardcoded fills and strokes, but production icons needed to
              inherit color using currentColor.
            </p>

            <p className="body-xlarge">
              So the processor strips fixed colors while preserving the original geometry.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Security mattered too</h2>

            <p className="body-xlarge">
              Because the plugin writes into a local codebase, I added safeguards:
            </p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>rate limiting</li>
              <li>payload size limits</li>
              <li>file path validation</li>
              <li>requests restricted to localhost and Figma origins</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              This plugin removed one of the biggest sources of drift between design and code.
            </p>

            <p className="body-xlarge">
              Instead of manually tracking token edits, style changes, and icon exports, designers
              could make updates in Figma and I can sync them in one step.
            </p>

            <p className="body-xlarge">
              It also helped me scaffold the foundations of the component library much faster,
              because the token system was already flowing into code while the design work was still
              evolving.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="title-medium text-neutral-700">Next case study</p>
            <Link
              href="/projects/plugin-3"
              className="group block w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-8 transition-colors hover:bg-neutral-100"
            >
              <div className="flex min-h-40 w-full items-center justify-center rounded-md border border-dashed border-neutral-300 bg-white">
                <p className="body-large text-neutral-500 transition-colors group-hover:text-neutral-700">
                  Thumbnail placeholder - Plugin 3 case study
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
