import Image from "next/image";
import { getNavbarFeatureFlags } from "@/app/constants";
import { getNextPluginCaseStudy } from "@/app/constants/pluginCaseStudies";
import { getPluginsAssetUrl } from "@/app/constants/mediaAssets";
import { NextPluginCaseStudyCard } from "@/components/projects/plugins";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin1CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();
  const nextCaseStudy = getNextPluginCaseStudy("plugin-1");

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-28 py-16 sm:gap-32 sm:py-24 md:gap-40 md:py-32">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-4xl font-semibold sm:text-5xl">Making design system sanitization faster and safer</h1>
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
            <div className="my-4 w-full overflow-hidden">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-pc-1.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Every component action has a reaction</h2>

            <p className="body-xlarge">
              A component change might look simple in isolation, but the same component could be reused across
              multiple pages, flows, and features. Updating or deleting a component and publishing it without knowing where it was used was
              risky.
            </p>

            <p className="body-xlarge">
              Though Figma provides component usage data, it still doesn’t tell us which files the component is being used in. And even after opening those files, there’s no clear way to know exactly where the component exists within them.
            </p>

            <p className="body-xlarge">So the first feature I built solved exactly that.</p>

            <p className="body-xlarge">
              When a designer selects a master component or one of its instances, the plugin scans the file and shows everywhere it is being used. Instead of guessing what might break, teams could clearly see the impact before making a change.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab1-set1.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab1-set2.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Having trust issues with the variables table</h2>

            <p className="body-xlarge">
              Our variable collection table was quite large with poor structure, inconsistent grouping, and no
              real architecture behind it. But before cleaning it up, we needed answers to a lot of these questions:
            </p>

            <div className="my-4 w-full overflow-hidden">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-pc-2.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="body-xlarge">
              Without that visibility, even cleanup could become a breaking change, so I built another feature into the same plugin to solve it.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab2-set1.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">
              It scans the file and loads all variables, including local and unpublished ones, then
              organizes them into proper collections and groups.
            </p>

            <p className="body-xlarge">
              Now, when a designer selects a variable, the plugin analyzes the file and shows everywhere
              it is being used. This made variable cleanup much safer and much faster.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab2-set2.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <div className="mt-4 flex w-full flex-col gap-6">
              <h2 className="headline-small md:!text-[1.75rem]">The challenge</h2>

              <p className="body-xlarge">Initially, I used Figma’s Variables API, but it only exposed published variables while missing some local and scoped ones in the response.</p>

              <div className="my-4 w-full overflow-hidden rounded-2xl">
                <Image
                  src={getPluginsAssetUrl("compounter/Compounter-pc-3.jpg")}
                  alt="Compounter plugin: find all occurrences of a component across the file"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>

              <p className="body-xlarge">
                So I moved the logic into the plugin environment instead. Since plugins have direct access to the live file with all the variables, it removed the need for PAT tokens, file IDs, rate limits, and made the workflow much faster.
              </p>

              <div className="my-4 w-full overflow-hidden rounded-2xl">
                <Image
                  src={getPluginsAssetUrl("compounter/Compounter-tab2-set3.jpg")}
                  alt="Compounter plugin: find all occurrences of a component across the file"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>

              <p className="body-xlarge">Another challenge was scan time. Large files could take a while.  So I added an option to scan only the current page instead of the entire file, which
                made everyday use much quicker.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Tokenization for MCP</h2>

            <p className="body-xlarge">
              As our design-to-code workflow evolved, tokenization became much more important.
            </p>

            <p className="body-xlarge">
              Through earlier experiments, I found that AI tools generated better UI when properties
              like fill, gap, padding, typography, etc. were correctly linked to variables and styles inside Figma. This reduced hallucinations and made it easier for the agent to map design values to CSS
              variables.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-pc-4.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">
              The problem was that many components were linked to the wrong variables, old libraries, or
              hardcoded values. Fixing this manually across dozens of pages would take forever.
            </p>

            <p className="body-xlarge">So I added a Tokenize feature.</p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab3-set1.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">
              When a designer selects a frame or component, the plugin scans & loads the existing variables, identifies properties
              that need tokenization, and suggests the closest matching variables automatically.
            </p>

            <p className="body-xlarge">
              In case if the suggestion is not correct, the designer can also manually select the correct variable from the variables list.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab3-set2.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Final sanity check</h2>

            <p className="body-xlarge">
              By the end of the cleanup, we needed one final audit to ensure no components or variables from external libraries were still being used.
            </p>

            <p className="body-xlarge">So I added an audit mode that scans the file, flags these issues, and points designers to the exact node locations for quick fixes.</p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab4-set1.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">
              For the audit to work correctly, the plugin first needs a reference point. Designers must first save the latest data from the main DLS file, after which the plugin can compare and identify externally used components, variables, and styles accurately.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab4-set2.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab4-set3.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("compounter/Compounter-tab4-set4.jpg")}
                alt="Compounter plugin: find all occurrences of a component across the file"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
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

          <div className="w-full">
            <NextPluginCaseStudyCard
              href={nextCaseStudy.href}
              title="The design system scaled faster than the codebase"
              subtitle="The growing token architecture needed a more scalable syncing workflow"
              gradient={nextCaseStudy.gradient}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
