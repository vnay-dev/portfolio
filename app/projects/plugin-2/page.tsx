import Link from "next/link";
import { getNavbarFeatureFlags } from "@/app/constants";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin2CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex w-full flex-col gap-8 py-16 text-neutral-900 sm:py-24 md:py-32">
          <h1 className="text-center text-4xl font-semibold sm:text-5xl">Plugin 2</h1>
          <p className="body-xlarge w-full text-neutral-700">
            While fixing our design system in Figma, the team kept running into slow manual repetitive
            workflows. So I built four Figma plugins to solve them. This page is about the second
            plugin I built, which kept our token system in sync between Figma and the codebase.
          </p>

          <section className="flex w-full flex-col gap-6">
            <p className="body-xlarge">
              As we rebuilt the token architecture inside Figma, we defined proper collections,
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
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The first version was simple</h2>

            <p className="body-xlarge">
              I started by testing whether the plugin could read the variable collections directly from
              the Figma file and export them as JSON.
            </p>

            <p className="body-xlarge">It worked.</p>

            <p className="body-xlarge">That proved the core idea:</p>

            <p className="body-xlarge">
              If Figma could expose the token system, we could automate the rest.
            </p>

            <p className="body-xlarge">So I moved beyond copy-paste.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
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
          </section>

          <section className="flex w-full flex-col gap-6">
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
          </section>

          <section className="flex w-full flex-col gap-6">
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
          </section>

          <section className="flex w-full flex-col gap-6">
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
          </section>

          <section className="flex w-full flex-col gap-6">
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

            <p className="body-xlarge">
              The goal was automation without opening unnecessary risk.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              This plugin removed one of the biggest sources of drift between design and code.
            </p>

            <p className="body-xlarge">
              Instead of manually tracking token edits, style changes, and icon exports, designers
              could make updates in Figma and sync them in one step.
            </p>

            <p className="body-xlarge">
              It also helped me scaffold the foundations of the component library much faster,
              because the token system was already flowing into code while the design work was still
              evolving.
            </p>

            <p className="body-xlarge">
              What could have become a slow maintenance problem turned into a repeatable system.
            </p>
          </section>

          <section className="flex w-full flex-col gap-4">
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
          </section>
        </div>
      </Container>
    </main>
  );
}
