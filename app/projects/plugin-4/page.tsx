import { getNavbarFeatureFlags } from "@/app/constants";
import { getNextPluginCaseStudy } from "@/app/constants/pluginCaseStudies";
import { getPluginsAssetUrl } from "@/app/constants/mediaAssets";
import { NextPluginCaseStudyCard } from "@/components/projects/plugins";
import { Container, Navbar } from "@/components/shared/composite";
import { BlobImage } from "@/components/shared/atoms";

export default function Plugin4CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();
  const nextCaseStudy = getNextPluginCaseStudy("plugin-4");

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-28 py-16 sm:gap-32 sm:py-24 md:gap-40 md:py-32">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-4xl font-semibold sm:text-5xl">Bringing accountability into design system workflows</h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">March 2026</time>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>1 week</span>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>1 design engineer</span>
            </p>
          </div>

          <section className="flex w-full flex-col gap-6">

            <p className="body-xlarge">
              By this stage, we had fixed most of the maintenance issues inside the design system file. The focus had now shifted to designing new components, scaling the system, auditing project files, and helping teams adopt the new standards.
            </p>

            <p className="body-xlarge">
              But fixing the design system alone was not enough. Project-level designs could still drift away from it.
            </p>

            <p className="body-xlarge">
              A page might look correct visually, but from a DLS perspective it could still contain:
            </p>

            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-pc-1.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <p className="body-xlarge">
              We had no reliable way to measure compliance, which also meant there was no real governance around design system adoption. If teams were expected to follow the system consistently, compliance had to become part of the workflow, not an afterthought.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-media border-[1.2px] border-[#E4FFB4]">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-pc-5.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              Turning design system compliance into a measurable workflow
            </h2>

            <p className="body-xlarge">
              The plugin starts by loading the latest data saved from the main design system file.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-set1.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-set2.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <p className="body-xlarge">
              Once synced, a designer can open any project file and run the plugin against a frame or a component.
            </p>

            <p className="body-xlarge">
              The plugin then generates a compliance score and shows categorized issues that need fixing.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-set3.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <p className="body-xlarge">For every issue, Daisy explains what is wrong, how to fix it, and points designers to the exact node on the canvas.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              Then Figma launched something similar
            </h2>

            <p className="body-xlarge">
              A few days after building Daisy, Figma released a similar feature as an internal beta called <strong>Check Design</strong>.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-pc-2.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-pc-3.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <p className="body-xlarge">
              Check Design was useful, but it lacked some of the deeper checks and design system context we needed, such as
              property-level validations (like effects, styles) and more specific rules tied to our own design
              system.
            </p>

            <p className="body-xlarge">
              While Check Design handled generic checks, Daisy could evolve around our internal standards
              and workflows.
            </p>

          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              Instead of discovering design system issues late during development, teams could now catch them much earlier as part of the design workflow itself.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-media">
              <BlobImage
                src={getPluginsAssetUrl("daisy/Daisy-pc-4.jpg")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-media object-contain"
              />
            </div>

            <p className="body-xlarge">
              By the time designs reached handoff, they were already done in a way that was suited for agentic design-to-code workflows, which meant fewer ambiguities, smoother implementation, and much faster UI delivery.
            </p>
          </section>

          <section className="w-full">
            <NextPluginCaseStudyCard
              href={nextCaseStudy.href}
              title="The design system had become too large to clean manually"
              subtitle="Without dependency visibility, sanitizing the system safely became slow, repetitive, and risky"
              gradient={nextCaseStudy.gradient}
            />
          </section>
        </div>
      </Container>
    </main>
  );
}
