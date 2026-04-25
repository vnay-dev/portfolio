import Link from "next/link";
import { getNavbarFeatureFlags } from "@/app/constants";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin1CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-20 py-16 sm:py-24 md:py-32">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-4xl font-semibold sm:text-5xl">A safer and faster way to sanitize the design system</h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">Jan 2026</time>
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
              While sanitizing the design system and auditing project files, we kept running into the
              same question:
            </p>
            <p className="body-xlarge">If we change this, what else breaks?</p>
            <p className="body-xlarge w-full text-neutral-700">
              This plugin named Compounter helped us answer that question.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Every component action had a reaction</h2>

            <p className="body-xlarge">
              A component change might look simple in isolation, but the same component could be reused across
              multiple pages, flows, and features. Updating or deleting a component and publishing it without knowing where it was used was
              risky.
            </p>

            <p className="body-xlarge">
              Figma did not give us a clear way to understand the impact of a change across files.
            </p>

            <p className="body-xlarge">So the first feature I built solved exactly that.</p>

            <p className="body-xlarge">
              When a designer selects a master component or one of its instances, the plugin scans the file and shows everywhere it is being used. Instead of guessing what might break, teams could clearly see the impact before making a change.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Having trust issues with the variables table</h2>

            <p className="body-xlarge">
              Our variable collection table was quite large with poor structure, inconsistent grouping, and no
              real architecture behind it.
            </p>

            <p className="body-xlarge">Before cleaning it up, we needed answers:</p>

            <p className="body-xlarge">Where is this variable used?</p>
            <p className="body-xlarge">Can it be deleted?</p>
            <p className="body-xlarge">If renamed, what breaks?</p>
            <p className="body-xlarge">Is it scoped, local, unpublished, or from somewhere else?</p>

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

              <p className="body-xlarge">Initially, I referred the API documentation provided by Figma and used their variables API for loading the variables.</p>

              <p className="body-xlarge">
                But it only exposed published variables, and some local or scoped variables
                was not showing up in the response.
              </p>

              <p className="body-xlarge">So I moved the logic into the plugin environment instead.</p>

              <p className="body-xlarge">
                Figma plugins have direct access to the live file, removed the need for PAT tokens, file IDs,
                rate limits, and made the workflow much faster.
              </p>

              <p className="body-xlarge">Another challenge was scan time. Large files could take a while.</p>

              <p className="body-xlarge">
                So I added an option to scan only the current page instead of the entire file, which
                made everyday use much quicker.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Tokenization for MCP</h2>

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
              When a designer selects a frame or component, the plugin scans & loads the existing variables, identifies properties
              that need tokenization, and suggests the closest matching variables automatically.
            </p>

            <p className="body-xlarge">
              In case if the suggestion is not correct, the designer can also manually select the correct variable from the variables list.
            </p>

            <p className="body-xlarge">
              Instead of starting from scratch, designers only had to review, adjust the suggestions and apply changes with a single click.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Final sanity check</h2>

            <p className="body-xlarge">
              Toward the end of cleanup, we needed one last layer of confidence.
            </p>

            <p className="body-xlarge">We wanted to know:</p>

            <p className="body-xlarge">Are we still using variables or components from external libraries?</p>

            <p className="body-xlarge">Are there any more hard coded values that need to be tokenized?</p>

            <p className="body-xlarge">
              So I added an audit mode that scans the file and reports these issues, along with the
              exact node locations so they could be fixed quickly.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              What started as slow, manual detective work became a repeatable workflow.
            </p>

            <p className="body-xlarge">
              Instead of cleaning the design system blindly with a moving target, designers could now see the impact before making changes, understand what needed attention first, and fix issues with more confidence.
            </p>

            <p className="body-xlarge">
              Earlier, it was difficult to explain why certain cleanup tasks mattered or why they needed priority to the stakeholders. Now we had clear usage data and impact signals to back every decision.
            </p>

            <p className="body-xlarge">
              Most importantly, this plugin became the foundation for how we sanitized the design system at scale, turning a messy one-time cleanup effort into a systemized workflow.
            </p>
          </div>

          <div className="flex flex-col gap-6">
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
          </div>
        </div>
      </Container>
    </main>
  );
}
