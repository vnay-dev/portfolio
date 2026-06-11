import { getNavbarFeatureFlags } from "@/app/constants";
import { getNextPluginCaseStudy } from "@/app/constants/pluginCaseStudies";
import { getPluginsAssetUrl } from "@/app/constants/mediaAssets";
import { NextPluginCaseStudyCard } from "@/components/projects/plugins";
import { Container, Navbar } from "@/components/shared/composite";
import Image from "next/image";

export default function Plugin3CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();
  const nextCaseStudy = getNextPluginCaseStudy("plugin-3");

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-28 py-16 sm:gap-32 sm:py-24 md:gap-40 md:py-32">

          <div className="flex flex-col gap-6">
            <h1 className="text-center text-4xl font-semibold sm:text-5xl">Making branch-level reviews more reliable in Figma</h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">Feb 2026</time>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>1 week</span>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>1 design engineer & 1 designer</span>
            </p>
          </div>

          <section className="flex w-full flex-col gap-6">
            <p className="body-xlarge">
              Three of us were working in parallel branches to clean up and stabilize the Figma design system.
            </p>

            <p className="body-xlarge">
              With only a few weeks to fix years of maintenance debt, each branch ended up carrying many changes at once. Tokens were renamed, components cleaned up, styles updated, and values corrected.
            </p>

            <p className="body-xlarge">
              When it was time to review and merge, Figma&apos;s built-in compare view only showed
              changes at a high level.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-pc-1.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">It could tell us which pages, frames, components, styles, or variables had changed, but not which exact properties were modified, making reviews difficult.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">We needed Git-style diffs for design</h2>

            <p className="body-xlarge">During review, we kept asking questions like:</p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-pc-3.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">Without that visibility, reviewing changes means manually inspecting screens and comparing visuals to understand what happened which became a slow, manual, and risky process.</p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-pc-2.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">A diff tool for Figma branches</h2>

            <p className="body-xlarge">
              The plugin I built compares a child branch against the main branch and generates a detailed
              change report.
            </p>

            <p className="body-xlarge">
              Since Figma does not provide a simple branch selector like Git, I designed a workflow where the plugin first saves the main branch data locally, then compares it against the child branch to generate a detailed change report.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-set1.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-set2.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-set3.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">What the report included</h2>


            <p className="body-xlarge">
              Instead of high-level summaries, the plugin generated granular property-level changes across pages, frames, components, styles, and tokens, such as token replacements, padding updates, typography swaps, shadow removals, and hex-to-token conversions.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("changelogger/Changelogger-set4.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">That made reviews much faster and much more reliable.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              Unexpected second use: release notes
            </h2>

            <p className="body-xlarge">
              The change report quickly became useful beyond reviews and eventually turned into the foundation for our design system release notes, helping teams clearly understand breaking changes, token migrations, component updates, and everything in between.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              What once required slow manual visual inspection became a much more structured review workflow.
            </p>

            <p className="body-xlarge">The plugin helped us review changes faster, merge with confidence, catch risky changes earlier, and communicate design system updates more clearly across teams.</p>
          </section>

          <section className="w-full">
            <NextPluginCaseStudyCard
              href={nextCaseStudy.href}
              title="The design system was clean, but not ready for agentic workflows"
              subtitle="The system needed stronger compliance and governance to make handoff reliable for agentic workflows"
              gradient={nextCaseStudy.gradient}
            />
          </section>
        </div>
      </Container>
    </main>
  );
}
