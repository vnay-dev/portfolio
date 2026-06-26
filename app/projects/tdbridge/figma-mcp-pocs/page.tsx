import {
  MdBlock,
  MdBolt,
  MdLayers,
  MdNoteAlt,
  MdOutlineArticle,
  MdOutlineAutoAwesome,
  MdOutlineBugReport,
  MdOutlineLayers,
  MdOutlineTimer,
  MdOutlineViewModule,
  MdSearch,
} from "react-icons/md";
import { getFigmaMCPAssetUrl, getTDBridgeAssetUrl } from "@/app/constants/mediaAssets";
import { Container, Navbar } from "@/components/shared/composite";
import { BlobImage } from "@/components/shared/atoms";
import { getNavbarFeatureFlags } from "@/app/constants";
import { VisibilityVideo } from "@/components/projects/tdbridge/VisibilityVideo";
import AgentReadyCarousel from "@/components/projects/tdbridge/AgentReadyCarousel";
import Poc2IssuesCarousel from "@/components/projects/tdbridge/Poc2IssuesCarousel";

const poc1FindingsCards = [
  {
    id: "different-ui-results",
    icon: MdOutlineViewModule,
    text: "All 3 developers ended up with different UI results, both at the component level and at the page level",
  },
  {
    id: "copilot-time",
    icon: MdOutlineTimer,
    text: "GitHub Copilot took a significant amount of time to generate UI",
  },
  {
    id: "instructions-file",
    icon: MdOutlineArticle,
    text: "The instructions file existed, but it was too large and not structured well for AI to parse through.",
  },
  {
    id: "figma-mcp-relationship",
    icon: MdOutlineBugReport,
    text: "Figma MCP often struggled to understand the exact relationship between the design and the implemented UI, especially during bug-fix prompts",
  },
  {
    id: "prompting-workflow",
    icon: MdOutlineAutoAwesome,
    text: "Using identical prompts was not practical, but following a consistent workflow for prompting was",
  },
  {
    id: "missing-foundations",
    icon: MdOutlineLayers,
    text: "Missing foundations like tokens, styles, and proper documentation led to inconsistent results",
  },
] as const;

const poc2TimeTakenCards = [
  {
    id: "library-setup",
    icon: MdLayers,
    text: "Tokenization, style definitions, component design, and reviews took around 3 to 4 days",
  },
  {
    id: "form-ui-generation",
    icon: MdBolt,
    text: "Once the library was ready, the form UI was generated in less than half a day",
  },
] as const;

const poc2SpecFileCards = [
  {
    id: "library-instructions",
    icon: MdNoteAlt,
    text: "The instructions.md file inside the component library repo was optimised to be shorter and clearer with rules and guidelines with examples",
  },
  {
    id: "search-library-match",
    icon: MdSearch,
    text: "In the project repo, the instructions explicitly told the agent to first search for a matching component from the installed library based on the Figma node, and only proceed if a match was found",
  },
  {
    id: "no-match-inform",
    icon: MdBlock,
    text: "If no matching component existed, the agent had to inform the user instead of generating a new one",
  },
] as const;

export default function ExploringFigmaMcpForAgenticUiWorkflows() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-28 py-16 sm:gap-32 sm:py-24 md:gap-40 md:py-32">
          <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
            <h1 className="display-medium">Exploring Figma MCP for agentic UI workflows</h1>
            <p className="body-large flex flex-row flex-wrap items-center justify-center gap-x-2 tracking-wide text-zinc-500">
              <time dateTime="2025-10">Oct–Nov 2025</time>
              <span className="select-none text-zinc-400" aria-hidden="true">
                ·
              </span>
              <span>1 design engineer</span>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full overflow-hidden rounded-media">
              <BlobImage
                src={getFigmaMCPAssetUrl("poc_hero.png")}
                alt="Exploring Figma MCP for agentic UI workflows"
                width={3840}
                height={1677}
                priority
                className="h-auto w-full rounded-media"
              />
            </div>
            <p className="body-xlarge">
              This case study captures 3 POCs I ran to understand how Figma MCP behaves in real design-to-code workflows. I wanted to see what improves output quality and what still needs a human touch. What I learned along the way ended up being instrumental in getting the design system ready for AI-driven workflows.
            </p>
          </div>

          {/* Section 1 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              POC 1: Same design, same prompts, different results
            </h2>
            <p className="body-xlarge">
              I started exploring Figma MCP to see how well it could read and understand design, and how consistent the results would be when different developers followed the same process.
            </p>
            <p className="body-xlarge">
              For testing, I asked my colleagues to participate and used Razorpay’s Blade design system as a reference since it’s mature and publicly available.
            </p>
            <div className="w-full overflow-hidden rounded-media">
              <BlobImage
                src={getFigmaMCPAssetUrl("blade_dls.png")}
                alt="Razorpay's Blade design system used as the reference"
                width={3840}
                height={1677}
                loading="lazy"
                className="h-auto w-full rounded-media"
              />
            </div>
            <p className="body-xlarge">
              Each developer was given the same landing page design and prompts. They used Figma MCP and GitHub Copilot Agent to generate the components first, and then the full page using those components.
            </p>
            <div className="w-full overflow-hidden rounded-media">
              <BlobImage
                src={getTDBridgeAssetUrl("tdb_poc1.png")}
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                loading="lazy"
                className="h-auto w-full rounded-media"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="headline-small text-gray-800">Findings</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                {poc1FindingsCards.map(({ id, icon: Icon, text }) => (
                  <div
                    key={id}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-4 sm:px-5 sm:py-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="body-large text-gray-800">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 1 ends */}

          {/* Section 2 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">
              POC 2: What happens when the design system is structured properly
            </h2>
            <p className="body-xlarge">
              Now instead of using an external design system, I created a small scale DLS, built the UI components using Figma MCP and tested the workflow by building a form component using GitHub Copilot and Claude Code.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Making the DLS agent ready</h3>
            <AgentReadyCarousel />
            <figure className="my-4 w-full">
              <div className="w-full overflow-hidden rounded-media border border-gray-200/70">
                <BlobImage
                  src={getTDBridgeAssetUrl("tdb_poc2_vars.png")}
                  alt="Token architecture defined for the design system built for this POC"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-auto w-full rounded-media"
                />
              </div>
              <figcaption className="body-medium mt-3 text-center text-zinc-500">
                The token architecture defined for the design system built for this POC
              </figcaption>
            </figure>
            <figure className="my-4 w-full">
              <div className="w-full overflow-hidden rounded-media border border-gray-200/70">
                <VisibilityVideo src={getTDBridgeAssetUrl("tdb_mini_dls_walkthrough.mp4")} />
              </div>
              <figcaption className="body-medium mt-3 text-center text-zinc-500">
                A walkthrough of the UI components designed within the POC&apos;s design system
              </figcaption>
            </figure>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Optimizing the SPEC.md file for better context</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {poc2SpecFileCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex h-full items-start gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="body-large leading-relaxed text-gray-800">{text}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Result</h3>
            <p className="body-xlarge">
              The library was then exported and installed in a new project, where the form UI design was given to the agent to generate.
            </p>
            <figure className="my-4 w-full">
              <div className="w-full overflow-hidden rounded-media border border-gray-200/70">
                <BlobImage
                  src={getTDBridgeAssetUrl("tdb_poc2_result.png")}
                  alt="The form component design compared with the UI generated by the agent"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-auto w-full rounded-media"
                />
              </div>
              <figcaption className="body-medium mt-3 text-center text-zinc-500">
                A side-by-side comparison of the form component designed with the design system and the UI the agent generated from it
              </figcaption>
            </figure>
            <p className="body-xlarge">
              The generated UI was 60% closer to the UI design, and the overall workflow felt more predictable.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Time taken</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {poc2TimeTakenCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex h-full items-start gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="body-large leading-relaxed text-gray-800">{text}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Issues found</h3>
            <Poc2IssuesCarousel />
          </div>
          {/* Section 2 ends */}

          {/* Section 3 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">
              POC 3: What happens when this is used for a real full page UI
            </h2>
            <p className="body-xlarge">
              Next, I wanted to see how this workflow would behave in a real day-to-day scenario where a developer has to build an entire page instead of a single component. So this time, I took a full page UI and followed the same approach as the previous POC, with a few important changes.
            </p>
            <p className="body-xlarge">
              Because the page contained many components, the mini DLS from the previous POC had to be expanded further.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">
              Introducing Code Connect by Figma
            </h3>
            <p className="body-xlarge">
              After building the components, the code was merged into the main branch and linked back to the corresponding Figma components using the Code Connect feature. This allowed the design and code to stay connected, and the additional descriptions helped the agent understand the component behavior and intended usage, reducing some of the incorrect implementations seen in the previous POC.
            </p>
            <figure className="my-4 w-full">
              <div className="w-full overflow-hidden rounded-media">
                <BlobImage
                  src={getTDBridgeAssetUrl("tdb_code_connect.jpg")}
                  alt="Code Connect view inside Figma linking the UI component code to its design"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-auto w-full rounded-media"
                />
              </div>
              <figcaption className="body-medium mt-3 text-center text-zinc-500">
                The Code Connect view inside Figma, linking the UI component&apos;s code to its Figma design
              </figcaption>
            </figure>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">
              Underrated combo: Figma MCP + Chrome DevTools MCP
            </h3>
            <p className="body-xlarge">
              Instead of relying only on Figma MCP, I also used Chrome DevTools MCP so the agent could compare the current UI with the expected design and understand the gaps more clearly during debugging.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Prompting strategy</h3>
            <p className="body-xlarge">
              Instead of giving the agent the full page and asking it to build everything at once (that normally many developers do), I created an analyze–review–build loop for each section of the page, gradually assembling the UI like Lego blocks. This gave much better control over UI generation and made it easier to fix issues early.
            </p>
            <figure className="my-4 w-full">
              <div className="w-full overflow-hidden rounded-media">
                <BlobImage
                  src={getTDBridgeAssetUrl("tdb_prompting.png")}
                  alt="The analyze, review, and build loop used to generate the UI section by section"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-auto w-full rounded-media"
                />
              </div>
              <figcaption className="body-medium mt-3 text-center text-zinc-500">
                The analyze–review–build loop used to generate the page one section at a time, assembling the UI piece by piece
              </figcaption>
            </figure>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Final result</h3>
            <figure className="my-4 w-full">
              <div className="w-full overflow-hidden rounded-media border border-gray-200/70">
                <BlobImage
                  src={getTDBridgeAssetUrl("tdb_poc3_result.png")}
                  alt="Design versus generated output comparison for a full page"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-auto w-full rounded-media"
                />
              </div>
              <figcaption className="body-medium mt-3 text-center text-zinc-500">
                Taking it a step further — the same process applied to an entire page instead of a single component, comparing the design with the generated output
              </figcaption>
            </figure>
            <p className="body-xlarge">
              The generated UI matched the design roughly 70 to 75%, which was significantly better than the earlier experiments and showed that the workflow could work in a realistic scenario.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Time taken</h3>
            <p className="body-xlarge">
              Designing & reviewing the components took about a week, but once the system was ready, the final page UI was generated using Claude Code in about a day.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Issues found</h3>
            <p className="body-xlarge">
              Agents struggled when components were designed outside common UI design patterns, which showed that agents are not fully capable of pulling off out of the box UI design patterns.
            </p>
          </div>
          {/* Section 3 ends */}
        </div>
      </Container>
    </main>
  );
}
