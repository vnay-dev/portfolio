import Link from "next/link";
import { getNavbarFeatureFlags } from "@/app/constants";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin1CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex w-full flex-col gap-8 py-16 text-neutral-900 sm:py-24 md:py-32">
          <h1 className="text-center text-4xl font-semibold sm:text-5xl">Plugin 1</h1>
          <p className="body-xlarge w-full text-neutral-700">
            While fixing our design system in Figma, the team kept running into slow manual repetitive
            workflows. So I built four Figma plugins to solve them. This page is about the first plugin
            that I built named Compounter.
          </p>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Change something, break nothing</h2>

            <p className="body-xlarge">
              While sanitizing the design system and auditing project files, we kept running into the
              same question:
            </p>

            <p className="body-xlarge">If we change this, what else breaks?</p>

            <p className="body-xlarge">
              A component might look simple in isolation, but the same component could be reused across
              multiple pages, flows, and features. Updating it without knowing where it was used was
              risky. Deleting an old component was even riskier.
            </p>

            <p className="body-xlarge">
              Figma did not give us a clear way to understand that impact across files.
            </p>

            <p className="body-xlarge">So the first feature I built solved exactly that.</p>

            <p className="body-xlarge">
              When a designer selects a base component or an instance, the plugin scans the file and
              shows every place that component is currently being used. Instead of guessing, teams could
              now see the blast radius before making a change.
            </p>

            <p className="body-xlarge">That alone saved a lot of accidental regressions.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">variables chaos</h2>

            <p className="body-xlarge">
              Our DLS had a large variables table with poor structure, inconsistent grouping, and no
              real architecture behind it.
            </p>

            <p className="body-xlarge">Before cleaning it up, we needed answers:</p>

            <p className="body-xlarge">Where is this variable used?</p>
            <p className="body-xlarge">Can it be deleted?</p>
            <p className="body-xlarge">If renamed, what breaks?</p>
            <p className="body-xlarge">Is it local, unpublished, or from somewhere else?</p>

            <p className="body-xlarge">
              Without that visibility, cleanup itself could become a breaking change.
            </p>

            <p className="body-xlarge">So I built another feature into the same plugin.</p>

            <p className="body-xlarge">
              It scans the file and loads all variables, including local and unpublished ones, then
              organizes them into proper collections and groups.
            </p>

            <p className="body-xlarge">
              Now, when a designer selects a variable, the plugin analyzes the file and shows everywhere
              it is being used.
            </p>

            <p className="body-xlarge">This made token cleanup much safer and much faster.</p>

            <div className="mt-4 flex w-full flex-col gap-6">
              <h3 className="title-large">The challenge</h3>

              <p className="body-xlarge">Initially, I explored using the Figma API for this.</p>

              <p className="body-xlarge">
                But it only exposed published variables reliably, and some local or scoped variables
                were still hard to access properly.
              </p>

              <p className="body-xlarge">So I moved the logic into the plugin environment instead.</p>

              <p className="body-xlarge">
                That gave direct access to the live file, removed the need for PAT tokens, file IDs,
                rate limits, and made the workflow much faster.
              </p>

              <p className="body-xlarge">Another challenge was scan time. Large files could take a while.</p>

              <p className="body-xlarge">
                So I added an option to scan only the current page instead of the entire file, which
                made everyday use much quicker.
              </p>
            </div>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">tokenization</h2>

            <p className="body-xlarge">
              As our design-to-code workflow evolved, tokenization became much more important.
            </p>

            <p className="body-xlarge">
              Through earlier experiments, I found that AI tools generated better UI when properties
              like:
            </p>

            <div className="body-xlarge flex flex-col gap-1 text-neutral-900">
              <p>fill</p>
              <p>gap</p>
              <p>padding</p>
              <p>typography</p>
            </div>

            <p className="body-xlarge">
              were correctly linked to variables and styles inside Figma.
            </p>

            <p className="body-xlarge">
              It reduced hallucinations and made it easier for the agent to map design values to CSS
              variables.
            </p>

            <p className="body-xlarge">
              The problem was that many components were linked to the wrong variables, old libraries, or
              hardcoded values. Fixing this manually across dozens of pages would take forever.
            </p>

            <p className="body-xlarge">So I added a Tokenize feature.</p>

            <p className="body-xlarge">
              When a designer selects a frame or component, the plugin scans it, identifies properties
              that need tokenization, and suggests the closest matching variables automatically.
            </p>

            <p className="body-xlarge">
              Instead of starting from scratch, designers only had to review and adjust the suggestions.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Final sanity check</h2>

            <p className="body-xlarge">
              Toward the end of cleanup, we needed one last layer of confidence.
            </p>

            <p className="body-xlarge">We wanted to know:</p>

            <p className="body-xlarge">Are we still using variables from external libraries?</p>
            <p className="body-xlarge">Are old components still present?</p>
            <p className="body-xlarge">Where are hardcoded values still hiding?</p>

            <p className="body-xlarge">
              So I added an audit mode that scans the file and reports these issues, along with the
              exact node locations so they could be fixed quickly.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              What used to be slow, manual detective work became a repeatable workflow.
            </p>

            <p className="body-xlarge">
              Instead of cleaning the design system blindly, designers could now:
            </p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>understand impact before changes</li>
              <li>clean variables safely</li>
              <li>tokenize faster</li>
              <li>catch leftover issues early</li>
              <li>move weeks faster than before</li>
            </ul>

            <p className="body-xlarge">
              This plugin became the foundation for how we sanitized the design system at scale.
            </p>
          </section>

          <section className="flex w-full flex-col gap-4">
            <p className="title-medium text-neutral-700">Next case study</p>
            <Link
              href="/projects/plugin-2"
              className="group block w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-8 transition-colors hover:bg-neutral-100"
            >
              <div className="flex min-h-40 w-full items-center justify-center rounded-md border border-dashed border-neutral-300 bg-white">
                <p className="body-large text-neutral-500 transition-colors group-hover:text-neutral-700">
                  Thumbnail placeholder - Plugin 2 case study
                </p>
              </div>
            </Link>
          </section>
        </div>
      </Container>
    </main>
  );
}
