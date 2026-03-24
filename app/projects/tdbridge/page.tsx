import { Container, Navbar } from "@/components/shared/composite";
import { isFeatureEnabled } from "@/app/constants";

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
              src="/images/tdbridge/hero_banner.png"
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
              className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
              style={{ backgroundColor: "#faf6ee" }}
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
            <div className="w-full overflow-hidden rounded-lg">
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
            <div className="w-full overflow-hidden rounded-lg">
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
              AI could generate code for UI, but without a shared system it would only reproduce the same inconsistencies faster.
            </p>
            <code style={{ color: "red" }}>Add an image</code>
            <p className="body-xlarge">
              If AI could understand our tokens, components, and patterns, it could generate a UI that was not only faster, but also consistent and aligned with our UX and branding.
            </p>
          </div>
          {/* Section 1.7 ends */}

          {/* Section 2 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The birth of a design engineer</h2>
            <p className="body-xlarge">
              Because I was working as a frontend developer and was also involved in maintaining the Figma design system, I had visibility into the code across projects and how each team implemented the UI. It became easy to spot the gap between what was designed and what actually got shipped.
            </p>
          </div>
          {/* Section 2 ends */}

          {/* Section 3 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The problems felt obvious, but we needed data.</h2>
            <p className="body-xlarge">
              My research process had three phases: discover, analyze, and define.
            </p>
            <code style={{ color: "red" }}>This entire section can be converted as a single image</code>
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
            <code style={{ color: "red" }}>Add an meme image showing what the research revealed as craft and workflow isses</code>
            <div className="flex flex-col gap-6">
              <h3 className="headline-small text-gray-800">Craft level issues inside the Figma file</h3>
              <code style={{ color: "red" }}>Bullet points can be converted as a single image</code>
              <p className="body-xlarge">
                No versioning, changelog, migration steps, or maturity indicators, so teams didn&apos;t
                know what changed or what was safe to use
              </p>
              <p className="body-xlarge">
                Missing documentation and accessibility guidelines
              </p>
              <p className="body-xlarge">
                No proper token architecture, with hard-coded values used instead of linking with tokens
              </p>
              <p className="body-xlarge">
                Tokens from external libraries mixed with ours, along with old DLS token values still being
                used inside the new DLS
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="headline-small text-gray-800">Workflow-level issues</h3>
              <code style={{ color: "red" }}>Bullet points can be converted as a single image</code>
              <p className="body-xlarge">
                No single place to discover or browse components, so teams often didn&apos;t know what
                already existed
              </p>
              <p className="body-xlarge">
                Many developers, designers, and stakeholders didn&apos;t understand the structure of the
                design system — tokens, components, styles, and guidelines
              </p>
              <p className="body-xlarge">
                Components created inside projects rarely made their way back into the design
                system, so reusable work stayed locked inside individual figma files
              </p>
              <p className="body-xlarge">
                Reuse across projects usually meant manually copying code and modifying it, which
                slowed down development and introduced inconsistencies
              </p>
              <p className="body-xlarge">
                Interaction design inside components was often ignored, which affected the overall UX
                consistency across the website
              </p>
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
                "Considering the emerging agentic workflows, just fixing the DLS and creating a component library wasn't enough. The bigger problem was establishing a reliable design-to-code workflow around it. The design system was no longer the end goal, it had to become part of a larger system that could scale, stay consistent, and work with generated frontend code."
              }
            </p>
            <p className="body-xlarge">
              {
                "We also had access to tools like GitHub Copilot, Claude Code, and Figma Make that were changing how UI was being built. But building with AI isn't deterministic. It's not like calling a function and expecting the same output every time."
              }
            </p>
            <code style={{ color: "red" }}>The above paragraph can be converted as a single image</code>
            <p className="body-xlarge">
              {"Because of that, the next step wasn't implementation, it was experimentation."}
            </p>
          </div>
          {/* Section 5 ends */}

          {/* Section 6 begins */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="headline-small md:!text-[1.75rem]">POC 1: Same design, same prompts, different results</h2>
            </div>
            <p className="body-xlarge">
              I started exploring Figma MCP and its ability to read and understand design using its built-in tools. Since AI workflows are not deterministic, I wanted to see how consistent the results would be when different developers followed the same process.
            </p>
            <p className="body-xlarge">
              To test this, I asked three of my colleagues to participate. For the experiment, I chose Razorpay’s Blade design system as a reference because it is mature and publicly available as a Figma library.
            </p>
            <p className="body-xlarge">
              Each developer was given the same landing page design and the same set of prompts. First, they used Figma MCP and GitHub Copilot Agent to generate the required components. After that, they were asked to generate the full page using those components.
            </p>

            <div className="flex flex-col gap-4">
              <p className="body-xlarge font-semibold">Findings:</p>
              <ul className="flex flex-col gap-4">
                <li className="body-large flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  All three developers ended up with different UI results, both at the component
                  level and at the page level
                </li>
                <li className="body-large flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  GitHub Copilot took a significant amount of time to generate UI
                </li>
                <li className="body-large flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  The instructions file existed, but it was too large and not structured well for AI
                  to parse through.
                </li>
                <li className="body-large flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Figma MCP often struggled to understand the exact relationship between the design
                  and the implemented UI, especially during bug-fix prompts
                </li>
                <li className="body-large flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Using identical prompts was not practical, but following a consistent workflow for
                  prompting was
                </li>
                <li className="body-large flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Missing foundations like tokens, styles, and proper documentation led to inconsistent
                  results
                </li>
              </ul>
            </div>
          </div>
          {/* Section 6 ends */}

          {/* Section 7 begins — POC 2: structured design system */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">POC 2: What happens when the design system is structured properly</h2>
            <p className="body-xlarge">For the second POC, instead of using an external design system, I created a small internal DLS by building our own UI components and tested the workflow by building a form component.</p>
            <p className="body-xlarge">
              Based on the learnings from the previous POC, the Figma file was structured properly this time. A token architecture was created with correctly mapped collections and groups, reusable typography styles were defined, and components were built with all values linked to the right tokens and styles. Components were documented, labeled clearly, and organized to make the structure easier to understand for AI agents and MCP.
            </p>
            <p className="body-xlarge">
              Using Figma MCP, the component library was generated first. The instructions file inside the component library repo was rewritten to be shorter and clearer. In the project repo, the instructions explicitly told the agent to first search for a matching component from the installed library based on the Figma node, and only proceed if a match was found. If no matching component existed, the agent had to inform the user instead of generating a new one.
            </p>
            <p className="body-xlarge">
              The library was then exported and installed in a new project, where the form UI design was given to the agent to generate.
            </p>
            <p className="body-xlarge">
              The generated UI was 70-75% closer to the UI design, and the overall workflow felt more predictable.
            </p>
            <p className="body-xlarge">Tokenization, style definitions, component design, and reviews took around 3 to 4 days, but once the library was ready, the form UI was generated in less than half a day. The workflow was tested using both Claude Code and GitHub Copilot.
            </p>
            <p className="body-xlarge">
              However, some issues still remained. There were occasional hallucinations, incorrect implementations, and spacing inconsistencies. Interaction logic still required manual refinement, and GitHub Copilot sometimes struggled to understand the expected design even with Figma MCP providing context.
            </p>
          </div>
          {/* Section 7 ends */}

          {/* Section 8 begins — POC 3: full page UI */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">POC 3: What happens when this is used for a real full page UI</h2>
            <p className="body-xlarge">Next, I wanted to see how this workflow would behave in a real day-to-day scenario where a developer has to build an entire page instead of a single component. So this time, I took a full page UI and followed the same approach as the previous POC, with a few important changes.</p>
            <p className="body-xlarge">
              After building the components, the code was merged into the main branch and linked back to the corresponding Figma components using the Code Connect feature. This allowed the design and code to stay connected, and the additional descriptions helped the agent understand the component behavior and intended usage, reducing some of the incorrect implementations seen in the previous POC.
            </p>
            <p className="body-xlarge">
              Instead of relying only on Figma MCP, I also used Chrome DevTools MCP so the agent could compare the current UI with the expected design and understand the gaps more clearly during debugging.
            </p>
            <p className="body-xlarge">
              Agents struggled when components were designed outside common UI design patterns, which showed that agents are not fully capable of pulling off out of the box UI design patterns.
            </p>
            <p className="body-xlarge">
              Another change was the way I approached prompting. Instead of giving the agent the full page and asking it to build everything at once (that normally many developers do), I introduced an analyze–review–build loop for each section of the page, gradually assembling the UI like Lego blocks. This gave much better control over generation and made it easier to fix issues early. This also meant that though we have AI workflows, patience and understanding of the workflow is still required.
            </p>
            <p className="body-xlarge">
              Because the page contained many components, the mini DLS from the previous POC had to be expanded further. Designing, reviewing, and stabilizing the components took about a week, but once the system was ready, the final page UI was generated using Claude Code in about a day.
            </p>
            <p className="body-xlarge">
              The generated UI matched the design roughly 70 to 75%, which was significantly better than the earlier experiments and showed that the workflow could work in a realistic scenario.
            </p>
          </div>
          {/* Section 8 ends */}

          {/* Section 9 begins — POC results and buy-in */}
          <div className="flex flex-col gap-6">
            <p className="body-xlarge">
              The POCs made it easier to show the real results, which worked much better than trying to convince people with slides.
            </p>
          </div>
          {/* Section 9 ends */}

          {/* Section 10 begins — Building the component library for the web */}
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

            <p className="body-xlarge">
              These problems did not stay inside design files. They directly affected product
              delivery, engineering efficiency, and user experience quality across teams.
            </p>
          </div>
          {/* Section 10 ends */}

          {showImplementationFramework ? (
            <>
              {/* Section 11 begins — Implementation Framework */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">Implementation Framework</h2>
                {/* Content will be added later */}
              </div>
              {/* Section 11 ends */}
            </>
          ) : null}

          {showOutcomePlaceholder ? (
            <>
              {/* Section 12 begins — Outcome and impact (placeholder) */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">Outcome and impact</h2>
              </div>
              {/* Section 12 ends */}
            </>
          ) : null}

          {/* Section 13 begins — Challenges along the way */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">{"It wasn't as smooth as it sounds"}</h2>
            <p className="body-xlarge">
              One of the first issues came from typography. The fonts used across production were named as variable fonts, but the actual files were static. This caused inconsistent font weight rendering across pages, something everyone had noticed but no one had fixed for years. Since typography is a core part of a design system, this couldn’t be ignored. I ran multiple POCs to validate the issue, measured the breaking impact across existing projects, and replaced the font files with the correct variable fonts after aligning with both design and engineering teams.
            </p>
            <p className="body-xlarge">
              Icons were another long-standing problem. SVG icons were being used directly in the DOM, increasing DOM size and affecting performance. Developers had been asking for font icons, but the design team didn’t have the bandwidth or tooling to support it. Since icons are part of the design system foundation, I ran a comparison POC between SVG, font icons, and sprites, and built a pipeline to convert SVG icons into font icons without losing quality, based on an earlier experiment done by a colleague.
            </p>
            <p className="body-xlarge">
              Choosing the tech stack for the component library was also a challenge. I proposed using StencilJS, which had a bad reputation internally because it had been used earlier for the wrong use case and became hard to maintain. I ran comparison POCs with other options and showed that the earlier issues were not with Stencil itself, but with lack of quality gates, unclear requirements, and business logic being forced into UI components. This helped justify using StencilJS for the design system library.
            </p>
            <p className="body-xlarge">
              Keeping design tokens in sync between Figma and code turned out to be another complex problem. Initially, I tried pulling token data using the Figma API and converting it to CSS using Style Dictionary, but caching issues made the API unreliable. To fix this, I built a Figma plugin that could extract the latest token and style data directly from the file. A local MCP server connected to the plugin and synced the data to the codebase. The same plugin was later extended to sync SVG icons as well.
            </p>
            <p className="body-xlarge">
              On the design side, sanitizing the existing Figma file was slow to do manually, so I built Figma plugins to speed up the process. These plugins helped find token usage across the file, detect values from old libraries, replace hard-coded styles with tokens, and generate proper change logs. This made it easier to maintain versioning, track updates, and keep the design system stable as it evolved.
            </p>
          </div>
          {/* Section 13 ends */}

          {showWhatsNext ? (
            <>
              {/* Section 14 begins — Future of the design system */}
              <div className="flex flex-col gap-6">
                <h2 className="headline-large text-2xl font-bold">{"What's next?"}</h2>
              </div>
              {/* Section 14 ends */}
            </>
          ) : null}

        </div>
      </Container>
    </main>
  );
}
