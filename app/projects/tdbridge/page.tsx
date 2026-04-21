import {
  MdOutlineAltRoute,
  MdOutlineCategory,
  MdOutlineLibraryBooks,
  MdNorthEast,
  MdOutlineWorkspaces,
} from "react-icons/md";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Container, Navbar } from "@/components/shared/composite";
import { getNavbarFeatureFlags, isFeatureEnabled } from "@/app/constants";
import WorkflowIssuesCarousel from "@/components/projects/tdbridge/WorkflowIssuesCarousel";
import ChallengesCarousel from "@/components/projects/tdbridge/ChallengesCarousel";

const craftIssueCards = [
  {
    id: "versioning",
    icon: MdOutlineAltRoute,
    text: "No versioning, changelog, migration steps, or maturity indicators, so teams didn't know what changed or what was safe to use",
  },
  {
    id: "docs-a11y",
    icon: MdOutlineLibraryBooks,
    text: "Missing documentation and accessibility guidelines",
  },
  {
    id: "tokens",
    icon: MdOutlineWorkspaces,
    text: "No proper token architecture, with hard-coded values used instead of linking with tokens",
  },
  {
    id: "mixed-tokens",
    icon: MdOutlineCategory,
    text: "Tokens from external libraries mixed with ours, along with old DLS token values still being used inside the new DLS",
  },
] as const;

/** Same hue as digits; 1px ring matches semibold stroke weight at `text-sm` better than 2px. */
const presentationStepCoinStyle: CSSProperties = {
  background: "rgb(255, 255, 255)",
  color: "rgb(196, 172, 116)",
  borderRadius: "6px",
};

export default function TDBridge() {
  const navFeatureFlags = getNavbarFeatureFlags();
  const showImplementationFramework = isFeatureEnabled("tdbridgeImplementationFramework");
  const showOutcomePlaceholder = isFeatureEnabled("tdbridgeOutcomePlaceholder");

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-20 py-16 sm:py-24 md:py-32">
          {/* Hero */}
          <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
            <h1 className="display-medium">
              Getting an overlooked design system ready for agentic UI workflows
            </h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">Oct 2025</time>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>4.5 months</span>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>2 designers & 1 developer</span>
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-lg">
            <img
              src="/images/tdbridge/tdb_hero_banner.png"
              alt="TDBridge Hero Banner"
              width={1200}
              height={800}
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          {/* Section 1 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">We had a design system, but nobody used it.</h2>
            <p className="body-xlarge">
              DLS Web 2.0 lived as a Figma library, while around 6 frontend projects in Consumer Tech were running in parallel, each building their own UI components independently.
            </p>

            {/* Presentation Container */}
            <div
              className="my-4 w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
              style={{
                background: "linear-gradient(135deg, #FBF7EE 0%, #FFEFD0 100%)",
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex size-[1.75rem] shrink-0 items-center justify-center rounded-sm text-sm font-semibold leading-none tabular-nums"
                    style={presentationStepCoinStyle}
                  >
                    1
                  </div>
                  <p className="body-xlarge m-0">
                    Most developers didn&apos;t even know that we had a design system in Figma.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex size-[1.75rem] shrink-0 items-center justify-center rounded-sm text-sm font-semibold leading-none tabular-nums"
                    style={presentationStepCoinStyle}
                  >
                    2
                  </div>
                  <p className="body-xlarge m-0">
                    The teams who did know about it didn&apos;t know how to navigate or use it
                    properly.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex size-[1.75rem] shrink-0 items-center justify-center rounded-sm text-sm font-semibold leading-none tabular-nums"
                    style={presentationStepCoinStyle}
                  >
                    3
                  </div>
                  <p className="body-xlarge m-0">
                    And the few who could explore it still didn&apos;t feel confident relying on it.
                  </p>
                </div>
              </div>
            </div>

            <p className="body-xlarge">
              For the design team, the system was a side project with no dedicated team and little bandwidth to maintain it. So, even though the design system existed, every project kept solving the same problems from scratch.
            </p>

            <div className="my-4 w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src="/images/tdbridge/tdb_dev_questions_v2.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
          {/* Section 1 ends */}

          {/* Section 1.5 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The problems that were already in plain sight</h2>
            <p className="body-xlarge">
              The poor adoption of the design system led to inconsistent UX across applications. Since the website is where all projects come together, these differences were clearly visible.
            </p>
            <p className="body-xlarge">
              How many varieties of secondary buttons can you spot in the image below?
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg border border-[#f9f1e8]">
              <img
                src="/images/tdbridge/tdb_sec_btn_varieties.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              This also meant that every new project had to spend time figuring out its own set of components before starting UI work. The same effort was repeated across projects, directly affecting delivery timelines.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_gen_problems.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
          {/* Section 1.5 ends */}

          {/* Section 1.7 begins */}
          <div className="flex flex-col gap-6">
            <h3 className="headline-small md:!text-[1.75rem]">The gradual shift from writing code to generating it</h3>
            <p className="body-xlarge">
              Many other teams were already using tools like Figma Make, GitHub Copilot and Claude Code to vibe code internal web apps by simply prompting the model with the basic brand colors and fonts which eventually created AI slop as shown below:
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_vibe_coding.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              AI could generate code for UI, but without a shared system it would only reproduce the same inconsistencies faster.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg border border-[#f5f5f5]">
              <img
                src="/images/tdbridge/tdb_proposal.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
          {/* Section 1.7 ends */}

          {/* Section 2 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The birth of a design engineer</h2>
            <p className="body-xlarge">
              Because I was working as a frontend developer and was also involved in maintaining the Figma design system, I had visibility into the code across projects and how each team implemented the UI. It became easy to spot the gap between what was designed and what actually got shipped.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_steve_rogers.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
          {/* Section 2 ends */}

          {/* Section 3 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The problems felt obvious, but we needed data.</h2>
            <p className="body-xlarge">
              My research process had three phases: discover, analyze, and define.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_research_plan.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              In the discovery phase, I collected as much context as possible. I compared our design system with industry-standard systems from similar organizations, spoke with developers and designers to understand their day-to-day workflow, went through code repositories to see how components were actually being implemented, and audited the existing DLS Web 2.0 library in Figma.
            </p>
            <p className="body-xlarge">
              Once I had enough data, the next step was to make sense of it. I grouped the findings into patterns, identified recurring issues, and converted them into clear problem statements.
            </p>
            <p className="body-xlarge">
              In the final step, I prioritized these problems based on their impact on delivery, consistency, and long-term maintainability. For each one, I explored possible solutions and started thinking about how the design system could be stabilized in a way that would work not just now, but for future workflows as well.
            </p>
          </div>
          {/* Section 3 ends */}

          {/* Section 4 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">It wasn&apos;t just broken, it was messy underneath</h2>
            <h3 className="headline-small text-gray-800">Craft level issues inside the Figma file</h3>
            <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {craftIssueCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex h-full flex-col items-start gap-5 rounded-lg border border-[#F3E5E1] bg-gradient-to-br from-white via-[#FFF9F8] to-[#FFF6F4] px-4 py-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#F3E5E1] bg-white text-[#62092d] shadow-[0_1px_2px_rgba(238,221,216,0.65)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="body-large leading-relaxed text-gray-800">{text}</p>
                </div>
              ))}
            </div>
            <h3 className="headline-small text-gray-800">Workflow-level issues</h3>
            <WorkflowIssuesCarousel />
          </div>
          {/* Section 4 ends */}

          {/* Section 5 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              {"AI isn't deterministic, so experimentation came first"}
            </h2>
            <p className="body-xlarge">
              {
                "As tools like GitHub Copilot, Claude Code, and Figma Make started changing how UI was built, it became clear that fixing the DLS and building a component library alone wasn’t enough. The bigger challenge was building a scalable system that could reliably turn design into code."
              }
            </p>
            <p className="body-xlarge">
              Since AI workflows aren’t predictable, assumptions weren’t enough. So, I ran a series of POCs to test what actually worked and shape a practical design-to-code workflow all of which are documented here:{" "}
              <Link
                href="/projects/tdbridge/figma-mcp-pocs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 transition hover:text-blue-800 hover:underline hover:decoration-blue-700 hover:underline-offset-4"
              >
                Exploring Figma MCP for agentic UI workflows
                <MdNorthEast className="h-4 w-4" aria-hidden />
              </Link>
              .
            </p>
          </div>
          {/* Section 5 ends */}

          {/* Section 9 begins — Building the component library for the web */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Building the component library for the web</h2>
            <p className="body-xlarge">The first step was to fix the craft-level issues in the existing Figma library. We defined a proper token architecture, cleaned up naming conventions, linked components to tokens, fixed styles, and improved documentation so the foundations were stable.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src="/images/tdbridge/tdb_craft.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              Using Figma data analysis and discussions with designers, we identified a small set of components to focus on for the first batch. This helped us avoid building everything at once and instead stabilize the system step by step.
            </p>
            <div className="my-4 w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src="/images/tdbridge/tdb_analytics.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              While the design foundations were being fixed, I started scaffolding the component library project in parallel using Stencil.js. As components were finalized in Figma, I built them one by one in the library.
            </p>
            <p className="body-xlarge">
              As components were developed, documentation was generated alongside the code using Astro Docs, so the library, docs, and design stayed in sync.
            </p>
            <p className="body-xlarge">
              Each component went through proper quality checks, including cross-browser testing, performance testing, accessibility validation based on WCAG guidelines, and design-UI verification. The results of these tests were documented inside the repository for future reference.
            </p>
            <p className="body-xlarge">
              I also spent time refining interaction design, something that was often overlooked earlier. All interactions were reviewed with designers and tested to make sure the components behaved consistently across use cases.
            </p>
            <p className="body-xlarge">
              Once the first set of components was ready, I began testing them against other frontend projects to check compatibility. Issues were fixed based on priority before moving to the next batch.
            </p>
          </div>
          {/* Section 9 ends */}

          {showImplementationFramework ? (
            <>
              {/* Section 10 begins — Implementation Framework */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">Its all about bringing teams together</h2>
                <p className="body-xlarge">
                  With the intention of bridging the gap between design and engineering, I designed a system that would adopt and maintain the design system in both Figma and code.
                </p>
                <div className="my-4 w-full overflow-hidden rounded-lg">
                  <img
                    src="/images/tdbridge/tdb_framework.png"
                    alt="Common questions developers ask about design systems"
                    width={1920}
                    height={1080}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
              {/* Section 10 ends */}
            </>
          ) : null}

          {showOutcomePlaceholder ? (
            <>
              {/* Section 11 begins — Outcome and impact (placeholder) */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">Outcome &amp; Impact</h2>

                <p className="body-xlarge">
                  We introduced a proper governance model, so the design system was no longer a side
                  project floating between teams. Ownership became clearer, and I continued
                  maintaining it closely with support from the design team.
                </p>
                <p className="body-xlarge">
                  My role naturally evolved into a bridge between design and engineering. Instead of
                  both sides working in parallel and meeting late, collaboration started happening
                  much earlier and with fewer gaps.
                </p>
                <p className="body-xlarge">
                  We built a shared component library along with a CSS foundation bundle that carried our tokens, typography, and brand styles. This meant teams no longer had to recreate the same foundations inside every new project, while designers and product owners could also use the same bundle to prototype with production-aligned styles.
                </p>
                <p className="body-xlarge">
                  As more consumer tech web projects adopted the shared bundle, duplicated styling
                  code & components could be removed from individual codebases, helping reduce unnecessary bundle
                  weight over time & improve overall performance.
                </p>
                <p className="body-xlarge">
                  We also introduced a centralized icon system, which helped reduce DOM size and
                  brought more consistency to how icons were used across products.
                </p>
                <p className="body-xlarge">
                  Projects could now start from production-ready components instead of rebuilding
                  common UI patterns each time. That helped move the overall web experience toward a
                  more consistent UX.
                </p>
                <p className="body-xlarge">
                  Developers also no longer had to dig through Figma files to understand how the
                  system worked. We created a documentation website that explained foundations,
                  components, guidelines, and usage patterns in simple language anyone could follow.
                </p>
                <p className="body-xlarge">
                  At the same time, the design-to-code workflow became much stronger. With Claude
                  Code, Figma MCP, Code Connect, shared tokens, and reusable components working
                  together, UI delivery became faster from months to weeks and more reliable.
                </p>
                <p className="body-xlarge">
                  Earlier, teams could spend weeks building and refining basic UI foundations before
                  getting to actual product work. Now that effort was significantly reduced, allowing
                  engineers to focus more on business logic, functionality, and optimization.
                </p>
                <p className="body-xlarge">
                  Most importantly, we moved from treating the design system as a file to treating it
                  as infrastructure. That foundation can continue scaling with future needs, including
                  models like micro frontends.
                </p>
              </div>
              {/* Section 11 ends */}
            </>
          ) : null}

          {/* Section 12 begins — Challenges along the way */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">{"It wasn't as smooth as it sounds"}</h2>
            <ChallengesCarousel />
          </div>
          {/* Section 12 ends */}

        </div>
      </Container>
    </main>
  );
}
