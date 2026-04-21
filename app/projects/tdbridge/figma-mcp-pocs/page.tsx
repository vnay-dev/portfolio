import {
  MdBlock,
  MdBolt,
  MdDeviceHub,
  MdGesture,
  MdHistory,
  MdLayers,
  MdNoteAlt,
  MdOutlineArticle,
  MdOutlineAutoAwesome,
  MdOutlineBugReport,
  MdOutlineLayers,
  MdOutlineTimer,
  MdOutlineViewModule,
  MdPalette,
  MdPsychology,
  MdReportProblem,
  MdSearch,
  MdStraighten,
  MdTextFields,
  MdViewModule,
} from "react-icons/md";
import { getTDBridgeAssetUrl } from "@/app/constants/mediaAssets";
import { Container, Navbar } from "@/components/shared/composite";
import { getNavbarFeatureFlags } from "@/app/constants";
import { VisibilityVideo } from "@/components/projects/tdbridge/VisibilityVideo";

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

export default function ExploringFigmaMcpForAgenticUiWorkflows() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex flex-col gap-16 py-16 sm:py-24 md:py-32">
          <h1 className="display-medium text-center">Exploring Figma MCP for agentic UI workflows</h1>
          <p className="body-xlarge text-center">
            This short case study captures three focused POCs I ran to understand how Figma MCP behaves in real design-to-code workflows, what improves output quality, and what still needs human refinement.
          </p>

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
            <p className="body-xlarge">
              Each developer was given the same landing page design and prompts. They used Figma MCP and GitHub Copilot Agent to generate the components first, and then the full page using those components.
            </p>
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={getTDBridgeAssetUrl("tdb_poc1.png")}
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
                src={getTDBridgeAssetUrl("tdb_poc2_vars.png")}
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
              <VisibilityVideo
                src={getTDBridgeAssetUrl("tdb_mini_dls_walkthrough.mp4")}
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
                src={getTDBridgeAssetUrl("tdb_poc2_result.png")}
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
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={getTDBridgeAssetUrl("tdb_code_connect.jpg")}
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
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
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={getTDBridgeAssetUrl("tdb_prompting.png")}
                alt="Common questions developers ask about design systems"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <h3 className="mt-6 headline-small text-gray-800 md:mt-10">Final result</h3>
            <div className="w-full overflow-hidden rounded-lg border border-gray-200/70">
              <img
                src={getTDBridgeAssetUrl("tdb_poc3_result.png")}
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
