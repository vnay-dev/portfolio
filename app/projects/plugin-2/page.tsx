import type { IconType } from "react-icons";
import {
  MdOutlineCached,
  MdOutlineDataObject,
  MdOutlinePalette,
  MdOutlineVpnKey,
  MdTitle,
} from "react-icons/md";
import { getNavbarFeatureFlags } from "@/app/constants";
import { getNextPluginCaseStudy } from "@/app/constants/pluginCaseStudies";
import { getPluginsAssetUrl } from "@/app/constants/mediaAssets";
import { NextPluginCaseStudyCard } from "@/components/projects/plugins";
import { Container, Navbar } from "@/components/shared/composite";
import Image from "next/image";

const figmaApiLimitationCards = [
  {
    id: "scoped-variables",
    icon: MdOutlineDataObject,
    line1: "The API returned published variables",
    line2: "but not local or scoped ones",
  },
  {
    id: "stale-cache",
    icon: MdOutlineCached,
    line1: "Token updates could arrive stale",
    line2: "because of API caching",
  },
  {
    id: "pat-setup",
    icon: MdOutlineVpnKey,
    line1: "Required PAT tokens and file IDs",
    line2: "plus extra setup overhead",
  },
] as const;

const FigmaVariablesIcon: IconType = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden>
    <path
      fill="currentColor"
      d="M11.117 5.586A2 2 0 0 1 13 5.649l4 2.31.113.07A2 2 0 0 1 18 9.69v4.62a2 2 0 0 1-.887 1.66l-.113.072-4 2.309a2 2 0 0 1-1.883.063L11 18.351l-4-2.309a2 2 0 0 1-1-1.732V9.69a2 2 0 0 1 1-1.73l4-2.31zm1.383.93a1 1 0 0 0-1 0l-4 2.308-.11.074A1 1 0 0 0 7 9.69v4.62l.009.132c.04.305.22.578.491.734l4 2.31c.27.155.597.175.88.058l.12-.059 4-2.31a1 1 0 0 0 .491-.733L17 14.31V9.69a1 1 0 0 0-.39-.792l-.11-.074zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);

type ComplexCaseCard = {
  id: string;
  icon: IconType;
  label: string;
  iconClassName?: string;
};

const complexCaseCards: ComplexCaseCard[] = [
  {
    id: "gradients",
    icon: MdOutlinePalette,
    label: "Gradients with multiple color stops",
  },
  {
    id: "typography",
    icon: MdTitle,
    label: "Typography style objects with nested values",
  },
  {
    id: "token-groups",
    icon: FigmaVariablesIcon,
    iconClassName: "h-7 w-7",
    label: "Deeply structured token groups",
  },
];

export default function Plugin2CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();
  const nextCaseStudy = getNextPluginCaseStudy("plugin-2");

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-28 py-16 sm:gap-32 sm:py-24 md:gap-40 md:py-32">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-4xl font-semibold sm:text-5xl">Keeping the design token system in sync with the codebase</h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">Feb 2026</time>
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

          <div className="flex flex-col gap-6">
            <p className="body-xlarge">
              While I was building the component library, it was important to ensure that the changes related to variables and styles in Figma were synced with the codebase. Nebula Figma Sync plugin was built to solve this problem.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">As the system grew, manual sync couldn&apos;t keep up</h2>
            <p className="body-xlarge">
              As we rebuilt the token architecture in Figma with proper collections, groups, naming conventions, and relationships, the system started scaling quickly. New components introduced more tokens, existing structures evolved constantly, and manually syncing those changes with the codebase became unsustainable.
            </p>

            <p className="body-xlarge">
              The more the design system improved, the harder it became to keep design and code aligned.
            </p>

            <p className="body-xlarge">
              So I built a sync engine.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("nebula-figma-sync/Nebula-set1.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("nebula-figma-sync/Nebula-set2.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
            <p className="body-xlarge">
              Because Figma already supported exporting variable collections as JSON, I was able to build this plugin that reads them directly and displays them in a customizable format for copying into the codebase.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Why not use the Figma API?</h2>

            <p className="body-xlarge">That was the original plan. But the API had a few problems:</p>

            <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {figmaApiLimitationCards.map(({ id, icon: Icon, line1, line2 }) => (
                <div
                  key={id}
                  className="flex h-full min-w-0 items-start gap-3 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                    <p className="body-large min-w-0 leading-snug text-gray-800">{line1}</p>
                    <p className="body-large min-w-0 leading-snug text-gray-800">{line2}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="body-xlarge">The plugin environment solved all of that. Because it runs inside the file itself, it had direct access to the latest data and was
              much faster to work with.</p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Raw data was not enough</h2>

            <p className="body-xlarge">
              Even after sync was working, the exported values still needed cleanup. For example, colors often came through as hardcoded hex values like #DA0E29, while our
              actual system relied on token references such as{"\u00A0"}
              <span className="box-decoration-clone rounded-sm bg-neutral-100 px-1 py-0.5 font-mono text-[0.95em] leading-snug tracking-normal text-neutral-800">
                primitives.color.ai-red-500
              </span>.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("nebula-figma-sync/Nebula-pc-1.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">So I built a post-sync transformation system that converted raw values into token references, restructured the output using the W3C Design Tokens Community Group standard, and made the files compatible with tools like Style Dictionary.</p>

            <p className="body-xlarge">It also handled more edge cases like:</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {complexCaseCards.map(({ id, icon: Icon, label, iconClassName }) => (
                <div
                  key={id}
                  className="flex h-full min-w-0 items-start gap-3 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className={iconClassName ?? "h-5 w-5"} aria-hidden />
                  </div>
                  <p className="body-large min-w-0 flex-1 leading-snug text-gray-800">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Manual workflow for exporting icons</h2>

            <p className="body-xlarge">
              Every time a designer added or updated an icon, I had to export SVGs manually,
              rename files, optimize them, and update the codebase which was an time consuming and error prone process.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("nebula-figma-sync/Nebula-set3.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <p className="body-xlarge">
              So I added another feature where when icons are updated in Figma, the plugin extracts the SVG data and shows the data as JSON for copying into the codebase. This raw JSON data once pasted into the codebase was then processed in several ways:
            </p>

            <div className="my-4 w-full overflow-hidden rounded-2xl">
              <Image
                src={getPluginsAssetUrl("nebula-figma-sync/Nebula-pc-2.png")}
                alt="Changelogger plugin: generate a changelog for a branch"
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">First version and its limitations</h2>

            <p className="body-xlarge">
              The first version of the plugin acted as a true sync engine. Instead of manually copying JSON data, a local HTTP server running inside the component library project allowed the plugin to push the latest token and style data directly into the repo and write the files automatically in one click.
            </p>

            <p className="body-xlarge">While the approach worked technically, the file write operations kept triggering recurring vulnerability warnings during GitHub code scanning and eventually became a blocker. After discussing it with the team, we realized a simpler copy-paste JSON workflow was easier to maintain, more transparent, and safer than a fully automated sync.</p>
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

          <div className="w-full">
            <NextPluginCaseStudyCard
              href={nextCaseStudy.href}
              title="Branch reviews in Figma became difficult under tight timelines"
              subtitle="Large design system changes across branches made it hard to understand what had actually changed before merging"
              gradient={nextCaseStudy.gradient}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
