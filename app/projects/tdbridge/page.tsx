import {
  MdOutlineAltRoute,
  MdBlock,
  MdBolt,
  MdOutlineCategory,
  MdDeviceHub,
  MdGesture,
  MdHistory,
  MdLayers,
  MdOutlineLibraryBooks,
  MdNoteAlt,
  MdOutlineEventRepeat,
  MdOutlineGesture,
  MdOutlinePeopleAlt,
  MdOutlineSearch,
  MdOutlineSyncProblem,
  MdPalette,
  MdPsychology,
  MdReportProblem,
  MdSearch,
  MdStraighten,
  MdTextFields,
  MdViewModule,
  MdOutlineWorkspaces,
  MdOutlineAutoAwesome,
  MdOutlineArticle,
  MdOutlineBugReport,
  MdOutlineLayers,
  MdOutlineTimer,
  MdOutlineViewModule,
} from "react-icons/md";
import { Container, Navbar } from "@/components/shared/composite";
import { isFeatureEnabled } from "@/app/constants";
import { VisibilityVideo } from "@/components/projects/tdbridge/VisibilityVideo";

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

const workflowIssueCards = [
  {
    id: "discovery",
    icon: MdOutlineSearch,
    text: "No single place to discover or browse components, so teams often didn't know what already existed",
  },
  {
    id: "structure",
    icon: MdOutlinePeopleAlt,
    text: "Many developers, designers, and stakeholders didn't understand the structure of the design system — tokens, components, styles, and guidelines",
  },
  {
    id: "contribution",
    icon: MdOutlineSyncProblem,
    text: "Components created inside projects rarely made their way back into the design system, so reusable work stayed locked inside individual figma files",
  },
  {
    id: "reuse-copy",
    icon: MdOutlineEventRepeat,
    text: "Reuse across projects usually meant manually copying code and modifying it, which slowed down development and introduced inconsistencies",
  },
  {
    id: "interaction",
    icon: MdOutlineGesture,
    text: "Interaction design inside components was often ignored, which affected the overall UX consistency across the website",
  },
] as const;

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

const poc2IssuesCards = [
  {
    id: "hallucinations",
    icon: MdPsychology,
    text: "Occasional hallucinations while generating UI",
  },
  {
    id: "incorrect-implementations",
    icon: MdReportProblem,
    text: "Incorrect implementations that didn't match the design intent",
  },
  {
    id: "spacing",
    icon: MdStraighten,
    text: "Spacing inconsistencies between generated output and the design",
  },
  {
    id: "copilot-context",
    icon: MdDeviceHub,
    text: "GitHub Copilot sometimes struggled to understand the expected design even with Figma MCP providing context",
  },
  {
    id: "interaction-logic",
    icon: MdGesture,
    text: "Interaction logic still required manual refinement",
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

const poc2AgentReadyCards = [
  {
    id: "figma-structure",
    icon: MdHistory,
    text: "Based on the learnings from the previous POC, the Figma file was structured properly this time",
  },
  {
    id: "token-architecture",
    icon: MdPalette,
    text: "A token architecture was created with correctly mapped collections and groups",
  },
  {
    id: "typography-styles",
    icon: MdTextFields,
    text: "Reusable typography styles were defined",
  },
  {
    id: "components-linked",
    icon: MdViewModule,
    text: "Components were built with all values linked to the right tokens and styles",
  },
  {
    id: "documented-for-agents",
    icon: MdNoteAlt,
    text: "Components were documented, labeled clearly, and organized to make the structure easier to understand for AI agents and MCP",
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

export default function TDBridge() {
  const showImplementationFramework = isFeatureEnabled("tdbridgeImplementationFramework");
  const showOutcomePlaceholder = isFeatureEnabled("tdbridgeOutcomePlaceholder");
  const showWhatsNext = isFeatureEnabled("tdbridgeWhatsNext");

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" />
      <Container>
        <div className="flex flex-col gap-16 py-16 sm:py-24 md:py-32">
          {/* Hero */}
          <h1 className="display-medium text-center">
            Getting an overlooked design system ready for agentic UI workflows
          </h1>

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
          <div className="flex flex-col gap-10">
            <h2 className="headline-small md:!text-[1.75rem]">We had a design system, but nobody used it.</h2>
            <p className="body-xlarge">
              DLS Web 2.0 lived as a Figma library, while around 6 frontend projects in Consumer Tech were running in parallel, each building their own UI components independently.
            </p>

            {/* Presentation Container */}
            <div
              className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
              style={{ backgroundColor: "#faf6ee", border: "1px solid #f9f1e8" }}
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white sm:h-7 sm:w-7"
                    style={{
                      backgroundColor: "transparent",
                      color: "#da1f2b",
                      border: "1.5px solid #da1f2b",
                    }}
                  >
                    1
                  </div>
                  <p className="body-xlarge pt-0.5">
                    Most developers didn&apos;t even know that we had a design system in Figma.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white sm:h-7 sm:w-7"
                    style={{
                      backgroundColor: "transparent",
                      color: "#da1f2b",
                      border: "1.5px solid #da1f2b",
                    }}
                  >
                    2
                  </div>
                  <p className="body-xlarge pt-0.5">
                    The teams who did know about it didn&apos;t know how to navigate or use it
                    properly.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold sm:h-7 sm:w-7"
                    style={{
                      backgroundColor: "transparent",
                      color: "#da1f2b",
                      border: "1.5px solid #da1f2b",
                    }}
                  >
                    3
                  </div>
                  <p className="body-xlarge pt-0.5">
                    And the few who could explore it still didn&apos;t feel confident relying on it.
                  </p>
                </div>
              </div>
            </div>

            <p className="body-xlarge">
              For the design team, the system was a side project with no dedicated team and little bandwidth to maintain it. So, even though the design system existed, every project kept solving the same problems from scratch.
            </p>

            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
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
            <div className="w-full overflow-hidden rounded-lg border border-[#f9f1e8]">
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
            <div className="w-full overflow-hidden rounded-lg border border-[#f9f1e8]">
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
            <div className="w-full overflow-hidden rounded-lg">
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
            <div className="w-full overflow-hidden rounded-lg border border-[#f5f5f5]">
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
            <div className="w-full overflow-hidden rounded-lg">
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
            <div className="w-full overflow-hidden rounded-lg">
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
            <div className="mt-6 flex flex-col gap-6 md:mt-10">
              <h3 className="headline-small text-gray-800">Craft level issues inside the Figma file</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {craftIssueCards.map(({ id, icon: Icon, text }) => (
                  <div
                    key={id}
                    className="flex h-full flex-col items-start gap-5 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="body-large leading-relaxed text-gray-800">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-6 md:mt-10">
              <h3 className="headline-small text-gray-800">Workflow-level issues</h3>
              <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 md:flex-wrap md:overflow-visible">
                {workflowIssueCards.map(({ id, icon: Icon, text }) => (
                  <div
                    key={id}
                    className="flex min-w-[220px] flex-1 flex-col items-start gap-5 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5 md:min-w-[240px] md:max-w-[280px]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="body-large leading-relaxed text-gray-800">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 4 ends */}

          {/* Section 5 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              {"AI isn't deterministic, so experimentation came first"}
            </h2>
            <p className="body-xlarge">
              {
                "Considering emerging agentic workflows using tools like GitHub Copilot, Claude Code, and Figma Make, just fixing the DLS and building a component library wasn’t enough, the bigger challenge was creating a scalable and reliable design-to-code workflow system around it."
              }
            </p>
          </div>
          {/* Section 5 ends */}

          {/* Section 6 begins */}
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
            <p className="body-xlarge">
              Each developer was given the same landing page design and prompts. They used Figma MCP and GitHub Copilot Agent to generate the components first, and then the full page using those components.
            </p>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_poc1.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="headline-small text-gray-800">Findings</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                {poc1FindingsCards.map(({ id, icon: Icon, text }) => (
                  <div
                    key={id}
                    className="flex gap-4 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-4 sm:px-5 sm:py-5"
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
          {/* Section 6 ends */}

          {/* Section 7 begins — POC 2: structured design system */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">POC 2: What happens when the design system is structured properly</h2>
            <p className="body-xlarge">Now instead of using an external design system, I created a small scale DLS, built the UI components using Figma MCP and tested the workflow by building a form component using GitHub Copilot and Claude Code.</p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Making the DLS agent ready</h3>
            <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 md:flex-wrap md:overflow-visible">
              {poc2AgentReadyCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex min-w-[220px] flex-1 flex-col items-start gap-5 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5 md:min-w-[240px] md:max-w-[280px]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="body-large leading-relaxed text-gray-800">{text}</p>
                </div>
              ))}
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src="/images/tdbridge/tdb_poc2_vars.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
              <VisibilityVideo
                src="/images/tdbridge/tdb_mini_dls_walkthrough.mp4"
                className="h-auto w-full rounded-lg"
              />
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Optimizing the SPEC.md file for better context</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {poc2SpecFileCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex h-full items-start gap-4 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5"
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
            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src="/images/tdbridge/tdb_poc2_result.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              The generated UI was 60% closer to the UI design, and the overall workflow felt more predictable.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Time taken</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {poc2TimeTakenCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex h-full items-start gap-4 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="body-large leading-relaxed text-gray-800">{text}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Issues found</h3>
            <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 md:flex-wrap md:overflow-visible">
              {poc2IssuesCards.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex min-w-[220px] flex-1 flex-col items-start gap-5 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5 md:min-w-[240px] md:max-w-[280px]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="body-large leading-relaxed text-gray-800">{text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Section 7 ends */}

          {/* Section 8 begins — POC 3: full page UI */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">POC 3: What happens when this is used for a real full page UI</h2>
            <p className="body-xlarge">Next, I wanted to see how this workflow would behave in a real day-to-day scenario where a developer has to build an entire page instead of a single component. So this time, I took a full page UI and followed the same approach as the previous POC, with a few important changes.</p>
            <p className="body-xlarge">
              Because the page contained many components, the mini DLS from the previous POC had to be expanded further.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Introducing Code Connect by Figma</h3>
            <p className="body-xlarge">
              After building the components, the code was merged into the main branch and linked back to the corresponding Figma components using the Code Connect feature. This allowed the design and code to stay connected, and the additional descriptions helped the agent understand the component behavior and intended usage, reducing some of the incorrect implementations seen in the previous POC.
            </p>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_code_connect.jpg"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Underrated combo: Figma MCP + Chrome DevTools MCP</h3>
            <p className="body-xlarge">
              Instead of relying only on Figma MCP, I also used Chrome DevTools MCP so the agent could compare the current UI with the expected design and understand the gaps more clearly during debugging.
            </p>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Prompting strategy</h3>
            <p className="body-xlarge">
              Instead of giving the agent the full page and asking it to build everything at once (that normally many developers do), I created an analyze–review–build loop for each section of the page, gradually assembling the UI like Lego blocks. This gave much better control over UI generation and made it easier to fix issues early.
            </p>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/images/tdbridge/tdb_prompting.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Final result</h3>
            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src="/images/tdbridge/tdb_poc3_result.png"
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <p className="body-xlarge">
              The generated UI matched the design roughly 70 to 75%, which was significantly better than the earlier experiments and showed that the workflow could work in a realistic scenario.
            </p>

            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Time taken</h3>
            <p className="body-xlarge">Designing & reviewing the components took about a week, but once the system was ready, the final page UI was generated using Claude Code in about a day.
            </p>

            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Issues found</h3>
            <p className="body-xlarge">
              Agents struggled when components were designed outside common UI design patterns, which showed that agents are not fully capable of pulling off out of the box UI design patterns.
            </p>
          </div>
          {/* Section 8 ends */}

          {/* Section 9 begins — Building the component library for the web */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Building the component library for the web</h2>

            <p className="body-xlarge">
              At this stage, two designers joined me, and we formed a small web DLS team. The first step was to fix the craft-level issues in the existing Figma library. We defined a proper token architecture, cleaned up naming conventions, linked components to tokens, fixed styles, and improved documentation so the foundations were stable.
            </p>
            <p className="body-xlarge">
              Using Figma data analysis and discussions with designers, we identified a small set of components to focus on for the first batch. This helped us avoid building everything at once and instead stabilize the system step by step.
            </p>
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
                <h2 className="headline-large text-2xl font-bold">Implementation Framework</h2>
                {/* Content will be added later */}
              </div>
              {/* Section 10 ends */}
            </>
          ) : null}

          {showOutcomePlaceholder ? (
            <>
              {/* Section 11 begins — Outcome and impact (placeholder) */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">Outcome and impact</h2>
              </div>
              {/* Section 11 ends */}
            </>
          ) : null}

          {/* Section 12 begins — Challenges along the way */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">{"It wasn't as smooth as it sounds"}</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-4">
                  <h3 className="title-medium font-semibold text-gray-900">
                    Static fonts used instead of variable fonts
                  </h3>
                  <p className="body-large text-gray-700">
                    While building the component library, I found static fonts were used as variable
                    fonts in production, so I ran POCs, checked breaking impact across repos, and
                    replaced them with proper variable fonts.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-4">
                  <h3 className="title-medium font-semibold text-gray-900">
                    Choosing font icons over SVG due to performance concerns
                  </h3>
                  <p className="body-large text-gray-700">
                    In production, direct usage of SVG icons increased the DOM size, causing performance concerns, so I ran POCs on different icon approaches and built a pipeline to generate font icons for the system.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-4">
                  <h3 className="title-medium font-semibold text-gray-900">
                    The internal bad reputation of Stencil.js
                  </h3>
                  <p className="body-large text-gray-700">
                    While choosing the tech stack for the component library, Stencil.js faced internal pushback due to past misuse, so I validated the choice through POCs and showed the real problem was missing quality gates, business logic in components, and using the framework for the wrong use case.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-4">
                  <h3 className="title-medium font-semibold text-gray-900">
                    Manual workflows slowing down the design system
                  </h3>
                  <p className="body-large text-gray-700">
                    Several design workflows were manual and time-consuming, so I created Figma plugins to automate and reduce effort and fasten the design-dev handoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Section 12 ends */}

          {showWhatsNext ? (
            <>
              {/* Section 13 begins — Future of the design system */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">{"What's next?"}</h2>
              </div>
              {/* Section 13 ends */}
            </>
          ) : null}

        </div>
      </Container>
    </main>
  );
}
