import Image from "next/image";
import { Container } from "@/components/shared/composite";

export default function TDBridge() {
  return (
    <main className="min-h-screen w-full">
      <Container>
        <div className="flex flex-col gap-16 py-16 sm:py-24 md:py-32">
          <h1 className="display-medium text-center">
            Exploring why our design system never got adopted across teams
          </h1>

          <div className="w-full overflow-hidden rounded-lg">
            <Image
              src="/images/tdbridge/hero_banner.png"
              alt="TDBridge Hero Banner"
              width={1200}
              height={800}
              quality={100}
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          {/* Section 1 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Repeating questions</h2>
            <p className="body-xlarge">
              It didn&apos;t show up in dashboards or reports. Instead, it showed up in everyday
              conversations.
            </p>
            <p className="body-xlarge">
              Designers began to notice that engineers were asking the same kinds of questions again
              and again:
            </p>

            <div
              className="relative w-full overflow-hidden rounded-lg p-6 sm:p-8 md:p-10"
              style={{ backgroundColor: "#f5f5f5", height: "468px" }}
            >
              {/* Chat Bubbles - Better Spaced to Prevent Overlaps */}
              <div
                className="absolute top-[8%] left-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(-2.7deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Which spacing scale are we supposed to use here?&quot;
                </p>
              </div>

              <div
                className="absolute top-[8%] left-[34%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:left-[35%] md:max-w-[26%]"
                style={{ transform: "rotate(3.2deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Is there already a pattern for this layout?&quot;
                </p>
              </div>

              <div
                className="absolute top-[8%] right-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(-1.4deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Do we have a guideline for empty states?&quot;
                </p>
              </div>

              <div
                className="absolute top-[25%] left-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(2.8deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;What typography style should this heading use?&quot;
                </p>
              </div>

              <div
                className="absolute top-[25%] left-[34%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:left-[35%] md:max-w-[26%]"
                style={{ transform: "rotate(-3.1deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Do we support dark mode for this yet?&quot;
                </p>
              </div>

              <div
                className="absolute top-[25%] right-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(1.9deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Is there a design token for this color?&quot;
                </p>
              </div>

              <div
                className="absolute top-[42%] left-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(-2.3deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;What border radius should this component have?&quot;
                </p>
              </div>

              <div
                className="absolute top-[42%] left-[34%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:left-[35%] md:max-w-[26%]"
                style={{ transform: "rotate(2.6deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Do we have a standard for icons?&quot;
                </p>
              </div>

              <div
                className="absolute top-[42%] right-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(-1.7deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;How should this error message be displayed?&quot;
                </p>
              </div>

              <div
                className="absolute top-[59%] left-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(2.4deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Is this interaction already defined anywhere?&quot;
                </p>
              </div>

              <div
                className="absolute top-[59%] left-[34%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:left-[35%] md:max-w-[26%]"
                style={{ transform: "rotate(-2.9deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Do we have a table component or should I build one?&quot;
                </p>
              </div>

              <div
                className="absolute top-[59%] right-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(1.1deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;What padding do we normally use inside cards?&quot;
                </p>
              </div>

              <div
                className="absolute top-[76%] left-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(-3.3deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Is there a mobile version of this component?&quot;
                </p>
              </div>

              <div
                className="absolute top-[76%] left-[34%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:left-[35%] md:max-w-[26%]"
                style={{ transform: "rotate(2.1deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Where do I find the latest version of the styles?&quot;
                </p>
              </div>

              <div
                className="absolute top-[76%] right-[2%] max-w-[30%] rounded-2xl bg-white px-2.5 py-2 shadow-lg sm:max-w-[28%] md:max-w-[26%]"
                style={{ transform: "rotate(-0.8deg)" }}
              >
                <p className="body-medium text-[10px] leading-tight sm:text-xs">
                  &quot;Is there a naming convention for components?&quot;
                </p>
              </div>
            </div>

            <p className="body-xlarge">And almost every time, the reply was the same:</p>

            <p className="body-xlarge">&quot;It&apos;s in the design system.&quot;</p>

            <p className="body-xlarge">
              At first, this felt completely normal. Teams collaborate. People ask questions. But
              when the exact same questions kept coming back from different engineers across
              different projects, it stopped feeling like day-to-day collaboration and started to
              feel like a pattern.
            </p>

            <p className="body-xlarge">
              Because if the design system was truly part of everyone&apos;s workflow, people
              wouldn&apos;t need to keep asking where things lived or how they were meant to work —
              they&apos;d already know where to look.
            </p>

            <p className="body-xlarge">So the repeating questions became the signal.</p>

            {/* Presentation Container */}
            <div
              className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-800 sm:h-7 sm:w-7">
                    1
                  </div>
                  <p className="body-xlarge pt-0.5">didn&apos;t know the design system existed</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-800 sm:h-7 sm:w-7">
                    2
                  </div>
                  <p className="body-xlarge pt-0.5">didn&apos;t know how to navigate it</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-800 sm:h-7 sm:w-7">
                    3
                  </div>
                  <p className="body-xlarge pt-0.5">didn&apos;t feel confident relying on it</p>
                </div>
              </div>
            </div>

            <p className="body-xlarge">
              This helped us to narrow down to the root cause: The problem wasn&apos;t design. The
              problem was adoption.
            </p>
          </div>
          {/* Section 1 ends */}

          {/* Section 2 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">The system&apos;s purpose</h2>
            <p className="body-xlarge">
              At Air India, around six different teams were working on different web projects at the
              same time. To keep the user experience consistent and make workflows smoother for both
              designers and developers, the design team created a design system in Figma for the
              web. This was the second version of the system, named Web DLS 2.0. It included
              reusable components, patterns, and guidelines.
            </p>
          </div>
          {/* Section 2 ends */}

          {/* Section 3 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">My role</h2>
            <p className="body-xlarge">
              Although my job title was Frontend Developer, I initiated and led this work as a UX
              researcher. When I worked with the design team, I naturally shifted into a product
              designer mindset. And when I collaborated with engineering, I approached the problem
              like a frontend developer. So instead of looking at the design system from a single
              lens, I was constantly switching hats and seeing it from all three perspectives.
            </p>
          </div>
          {/* Section 3 ends */}

          {/* Section 4 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Asking the right questions</h2>
            <p className="body-xlarge">
              Before starting, I wanted to ensure that I was asking the right questions which would
              guide me to understand why adoption wasn&apos;t happening as expected.
            </p>

            {/* Questions Presentation Container */}
            <div
              className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
                {/* Engineering Side */}
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="headline-small text-lg font-semibold">
                    From the engineering side
                  </h3>
                  <ul className="flex flex-col gap-3">
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      What was stopping design and engineering teams from collaborating effectively?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      Why were developers not using the Web DLS in Figma, even though it already
                      existed?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      How familiar and comfortable were developers with tools like Figma, Dev mode
                      and Figma MCP in their daily workflows?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      And overall, what was stopping the design system from being used in real
                      development across projects?
                    </li>
                  </ul>
                </div>

                {/* Design Side */}
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="headline-small text-lg font-semibold">From the design side</h3>
                  <ul className="flex flex-col gap-3">
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      How were designers expecting developers to use the design system in the
                      projects?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      How confident were designers that the documentation provided in Figma was
                      clear for developers?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      How closely could designers see what actually happened after handoff?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      Did designers feel the design system considered the engineering constraints?
                    </li>
                    <li className="body-large flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      What challenges did designers face when components were rebuilt differently in
                      code?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Section 4 ends */}

          {/* Section 5 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Defining the research plan</h2>
            <p className="body-xlarge">
              To start my research, I wanted a structure that would help me move from understanding
              the reality, to making sense of it, and finally defining what needed to change.
            </p>
            <p className="body-xlarge">
              So I came up with a three-phase research plan: Discover, Analyse and Define.
            </p>
          </div>
          {/* Section 5 ends */}

          {/* Section 6 begins */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="headline-small md:!text-[1.75rem]">Phase 1 - Discover</h2>
            </div>
            <p className="body-xlarge">Understanding where we really stood.</p>
            <p className="body-xlarge">
              This meant studying our design system through 4 perspectives: the design, the code,
              industry standards and the people using it.
            </p>

            {/* Subsection 6.1 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Auditing the web design system in Figma
              </h3>
              <p className="body-xlarge">
                This involved a complete review of the Figma file to understand its depth,
                structure, and level of maturity.
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-4">
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how complete the components were
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how they were named and organised
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    whether usage guidance was available
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how accessibility was considered
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how tokens, variants, states, and responsiveness were handled
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how components were structured technically
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    whether versioning and updates were documented
                  </li>
                </ul>

                <div className="mt-6 flex items-start gap-3 border-t border-gray-300 pt-6">
                  <span className="text-xl">💡</span>
                  <p className="body-large text-gray-700">
                    This helped me understand how usable and reliable the system felt, especially
                    from a developer&apos;s point of view.
                  </p>
                </div>
              </div>
            </div>

            {/* Subsection 6.2 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Benchmarking Against Industry Design Systems
              </h3>
              <p className="body-xlarge">
                This involved comparing our design system with mature industry design systems to
                understand what &quot;good&quot; looks like.
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-4">
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    documentation clarity
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    developer friendliness
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    discoverability and navigation
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    accessibility coverage
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    code guidance and playgrounds
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    update and migration patterns
                  </li>
                </ul>
              </div>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <p className="body-large mb-4 font-medium">
                  For every difference I noticed, I asked four questions:
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    What do they have that we do not?
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    Why might this gap exist?
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    What impact could this create for our teams?
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    Is there an opportunity to adapt or improve?
                  </li>
                </ul>

                <div className="mt-6 flex items-start gap-3 border-t border-gray-300 pt-6">
                  <span className="text-xl">💡</span>
                  <p className="body-large text-gray-700">
                    This gave me a clearer picture of where we stood in the bigger ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Subsection 6.3 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Comparing Design vs Reality in Code
              </h3>
              <p className="body-xlarge">
                I then looked at how the Web DLS translated into real projects by reviewing the code
                repositories.
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-4">
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how teams were maintaining design system code
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how closely code matched the design system
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how often components were rebuilt or modified
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how changes were communicated or tracked
                  </li>
                </ul>

                <div className="mt-6 flex items-start gap-3 border-t border-gray-300 pt-6">
                  <span className="text-xl">💡</span>
                  <p className="body-large text-gray-700">
                    This was done to understand how much of the design system actually made it into
                    production.
                  </p>
                </div>
              </div>
            </div>

            {/* Subsection 6.4 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Listening to Designers and Developers
              </h3>
              <p className="body-xlarge">
                Finally, I spent time talking to both designers and developers to understand their
                day-to-day reality, challenges and workflows.
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-4">
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how they currently worked
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how they referred to the Web DLS
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    where friction appeared
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how handoff worked in practice
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how tools like Figma, Dev Mode, and MCP fit into workflows
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    how often QA issues led to rework
                  </li>
                  <li className="body-large flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    what felt slow, confusing, or unreliable
                  </li>
                </ul>

                <div className="mt-6 flex items-start gap-3 border-t border-gray-300 pt-6">
                  <span className="text-xl">💡</span>
                  <p className="body-large text-gray-700">
                    These conversations helped me understand not just the system, but the people and
                    behaviours around it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Section 6 ends */}

          {/* Section 7: Phase 2 - Analyse */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Phase 2: Analyse</h2>
            <p className="body-xlarge">Turning information into patterns</p>
            <p className="body-xlarge">
              In this phase, my plan was to move from raw information to clear, well-defined
              problems. The goal was to identify patterns, understand why they exist, and connect
              them to real organisational impact.
            </p>
            <p className="body-xlarge">I approached this phase in three steps.</p>

            {/* Subsection 7.1 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">Finding the Patterns</h3>
              <p className="body-xlarge">
                First, I would group similar findings together to see which issues were repeating
                across teams and projects.
              </p>

              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <p className="body-large pt-0.5">
                  This would help distinguish one-off situations from genuine systemic problems.
                </p>
              </div>
            </div>

            {/* Subsection 7.2 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Defining the Problems Clearly
              </h3>
              <p className="body-xlarge">
                Next, I planned to turn these patterns into clear problem statements. I would
                revisit my initial assumptions and compare them with the evidence to see how
                accurate they really were.
              </p>
              <p className="body-xlarge">
                For each problem area, I would also define the underlying user jobs from different
                perspectives, such as developers, designers, and QA.
              </p>
              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <p className="body-large pt-0.5">
                  This makes the problems concrete and easy to relate to.
                </p>
              </div>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <p className="body-large mb-4">I would then prioritise these jobs based on:</p>
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    business impact
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    effort and resources required
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    risk involved
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    time sensitivity
                  </li>
                </ul>
              </div>
            </div>

            {/* Subsection 7.3 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">Map the Problems to Impact</h3>
              <p className="body-xlarge">
                Finally, I would connect each problem to measurable organisational impact, such as:
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    delivery time and cost
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    rework and inefficiency
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    quality and consistency
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    collaboration friction
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    operational risk
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <p className="body-large pt-0.5">
                  This ensures the insights are actionable rather than abstract.
                </p>
              </div>
            </div>
          </div>
          {/* Section 7 ends */}

          {/* Section 8: Phase 3 - Define */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Phase 3: Define</h2>
            <p className="body-xlarge">Shaping direction and deciding what to do next</p>
            <p className="body-xlarge">
              Once the problems were clearly understood, the goal of this phase was to move from
              insight into action. That meant deciding what to focus on first, shaping solution
              directions, and making sure there was a clear way to implement and sustain them across
              teams.
            </p>
            <p className="body-xlarge">I planned this phase around three core steps.</p>

            {/* Subsection 8.1 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                1. Prioritising What to Solve First
              </h3>
              <p className="body-xlarge">
                Since not every problem can (or should) be solved at once, the first step was to
                prioritise. I planned to look at each problem through the lens of:
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    business and delivery impact
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    time and resources required
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    risk and cost
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    whether it creates quick wins or long-term value
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <p className="body-large pt-0.5">This would help scope where to start and why.</p>
              </div>
            </div>

            {/* Subsection 8.2 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Shaping Solutions and Action Plans
              </h3>
              <p className="body-xlarge">
                Once priorities were clear, the next step was to define possible solution directions
                and action plans.
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <p className="body-large mb-4">This included:</p>
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    ideating solution approaches
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    deciding ownership across teams
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    working in phases where needed
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    defining how success would be measured
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <p className="body-large pt-0.5">
                  The goal here was to ensure solutions were realistic, measurable, and
                  collaborative — not theoretical.
                </p>
              </div>
            </div>

            {/* Subsection 8.3 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">Enabling Long-Term Adoption</h3>
              <p className="body-xlarge">
                Finally, I planned to focus on education, awareness, and process guidance so the
                improvements wouldn&apos;t remain a one-time effort.
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <p className="body-large mb-4">This meant:</p>
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    documentation and best-practice guidance
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    process recommendations
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    alignment across design and engineering
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    clear ways to measure ongoing success
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">💡</span>
                <p className="body-large pt-0.5">
                  This ensured the design system could operate smoothly across teams moving forward.
                </p>
              </div>
            </div>
          </div>
          {/* Section 8 ends */}

          {/* Section 9: Research findings */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Research findings</h2>

            <p className="body-xlarge">
              Before diving into the findings, here&apos;s a quick snapshot of the research scope
              and inputs.
            </p>

            <div
              className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <ul className="flex flex-col gap-3">
                <li className="body-large flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Only around 14 percent of the Web Design System was fully ready in Figma,
                  including documentation and usage guidelines
                </li>
                <li className="body-large flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />I analysed
                  four mature, industry-standard design systems: Razorpay Blade, Shopify Polaris,
                  Kiwi.com Orbit, and Wise
                </li>
                <li className="body-large flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />I
                  interviewed six product teams working on the web to understand real-world
                  workflows across designers and frontend developers
                </li>
                <li className="body-large flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />I also
                  reviewed design system usage across code repositories of three major web projects
                  including the booking widget, Prime booking, and payments platforms
                </li>
              </ul>
            </div>

            <p className="body-xlarge">
              Most of the barriers to adoption were not about UI quality, but about trust,
              discoverability, awareness, and system-level workflows.
            </p>

            <h3 className="headline-small mb-4 text-lg font-semibold">Critical findings</h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    1
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Design System Instability Prevented Trust and Adoption
                    </h4>
                    <p className="body-large">
                      Teams found it difficult to rely on the Web DLS because it was incomplete and
                      lacked structure. With low documentation coverage, missing standards, and no
                      versioning or changelog, the system did not feel stable enough to use
                      confidently in production work. As a result, teams often defaulted to creating
                      their own solutions instead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    2
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Lack of Component Discovery Led to Constant Rebuilding
                    </h4>
                    <p className="body-large">
                      There was very little reusability across teams. Existing components were
                      frequently rebuilt because people either could not find them or were unsure
                      whether they already existed. Components were also scattered across different
                      Figma files and multiple code repositories, which meant there was no single
                      unified place to search, browse, or understand what was available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    3
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Low Developer Awareness of System Capabilities
                    </h4>
                    <p className="body-large">
                      Developer awareness of key design system concepts was very low. For example,
                      67 percent of developers (4 out of 6 teams) were unaware that design tokens or
                      variables even existed inside Figma. This meant that even when system-level
                      foundations were defined, they rarely made their way into real-world
                      development workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    4
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Reusable Patterns Remained Trapped Inside Projects
                    </h4>
                    <p className="body-large">
                      Designers frequently created reusable elements such as loading states, error
                      patterns, and UI behaviours within individual projects. However, these were
                      rarely contributed back to the Web DLS. As a result, reusable knowledge stayed
                      fragmented inside teams rather than becoming part of the shared system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="headline-small mb-4 text-lg font-semibold">Business Impact</h3>

            <p className="body-xlarge">
              These problems did not stay inside design files. They directly affected product
              delivery, engineering efficiency, and user experience quality across teams.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    1
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Development Capacity Was Being Wasted
                    </h4>
                    <p className="body-large">
                      Engineering time was repeatedly spent on work that already existed elsewhere.
                      Around 30 to 40 percent of developer time went into rebuilding components that
                      already existed. Teams often copied code manually across projects rather than
                      using a shared library. Reuse was rare because discoverability and trust were
                      low. This meant the organisation was repeatedly paying for the same work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    2
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Time to Market Slowed Down
                    </h4>
                    <p className="body-large">
                      Lack of shared foundations meant every new project started from scratch.
                      Project setup alone could take more than a month (design tokens, theming,
                      component foundations, build architecture). All teams (6 out of 6) reported
                      that design changes during development created rework and delays. Alignment
                      overhead became a recurring cost. This made scaling product delivery slower
                      and heavier than necessary.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    3
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Maintenance Effort Increased Significantly
                    </h4>
                    <p className="body-large">
                      Without standardisation or version control, change management became manual
                      and risky. There was no central versioning system, so design or code updates
                      had to be applied manually across projects. Different breakpoint systems
                      existed across teams, which increased complexity. Maintaining consistency over
                      time became harder the more we shipped. Over time, this compounds into
                      operational cost and technical debt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    4
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      UX Quality Became Fragmented
                    </h4>
                    <p className="body-large">
                      Inconsistent implementation created visible differences across products. Teams
                      reported inconsistent UI patterns and interactions across products. 33 percent
                      of teams (2 out of 6) reported accessibility issues detected only at QA. All
                      teams (6 out of 6) reported missing responsive specs, edge cases, and
                      interaction details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="headline-small mb-4 text-lg font-semibold">
              Benchmark Comparison Findings
            </h3>

            <p className="body-xlarge">
              When I compared our Web DLS 2.0 with four mature industry design systems (Razorpay
              Blade, Shopify Polaris, Kiwi.com Orbit, and Wise), several structural gaps became
              clear. These gaps directly affected how easily teams could trust, adopt, and scale the
              system.
            </p>

            <p className="body-xlarge">Here is a summary of the key differences.</p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    1
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Stability and Release Confidence Was Missing
                    </h4>
                    <p className="body-large">
                      Other design systems provided versioning and maturity signals. Ours did not.
                      No version tracking or changelogs. No component maturity labels such as Draft,
                      Beta, or Stable. 6 out of 6 teams were affected. This meant teams could not
                      tell what was stable, what had changed, or when.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    2
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      No Shared Foundations Across Teams
                    </h4>
                    <p className="body-large">
                      Other systems standardised breakpoints and foundations. Ours did not. Each
                      team defined its own responsive breakpoints. 6 out of 6 teams were affected.
                      This increased inconsistency and rework across products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    3
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Accessibility Was Not Embedded in the System
                    </h4>
                    <p className="body-large">
                      In other systems, accessibility guidance existed at the component level. Our
                      DLS had no documented accessibility guidance per component. 2 out of 6 teams
                      reported this as a pain point. So accessibility often appeared late in the
                      process instead of at design time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    4
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Distribution Was Manual, Not System Driven
                    </h4>
                    <p className="body-large">
                      Other systems distribute components through npm packages or equivalent. Our
                      teams relied on manual copy paste only. 6 out of 6 teams were affected. This
                      prevented true reuse at scale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    5
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      No Interactive Component Catalog
                    </h4>
                    <p className="body-large">
                      Other design systems provide a Storybook or live playground. We had no
                      interactive component catalog. 6 out of 6 teams were affected. So developers
                      had no single place to explore, test, and understand behaviour.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    6
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Documentation Coverage Was Very Low
                    </h4>
                    <p className="body-large">
                      Other systems clearly document usage and props. Only around 10 percent of
                      components had props documentation. 6 out of 6 teams were affected. This made
                      implementation slower and error prone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    7
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      No Support for Migration or Change Management
                    </h4>
                    <p className="body-large">
                      Other systems document how to upgrade between versions. We had no migration
                      guides. So teams had to figure out updates manually.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white sm:h-7 sm:w-7">
                    8
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="headline-small text-base font-semibold">
                      Token Documentation Was Incomplete
                    </h4>
                    <p className="body-large">
                      Other systems document tokens clearly. Our token documentation was incomplete
                      or inconsistent. 4 out of 6 teams were affected. Which made design to code
                      alignment harder.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="headline-small mb-4 text-lg font-semibold">
              Problem Prioritisation and Scoping
            </h3>

            <p className="body-xlarge">
              Once the research insights were consolidated, I prioritised the problems based on
              frequency, impact on delivery, risk, and effort to address. This helped separate
              structural issues from quality-of-life gaps, and ensured we focused on the problems
              that would unlock the most value first.
            </p>

            <p className="body-xlarge">The problems fell into four priority levels.</p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="headline-small text-base font-semibold text-red-600">
                  Critical Priority
                </h4>
                <p className="body-large text-gray-700">
                  Problems that directly block adoption and system reliability
                </p>

                <div
                  className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <ul className="flex flex-col gap-4">
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">Lack of DLS Stabilisation</span>
                        <span className="text-gray-700">
                          Missing versioning, maturity indicators, standards, and completeness meant
                          teams could not trust the system
                        </span>
                        <span className="text-sm text-gray-600">Affected: 6 of 6 teams</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">No Unified Component Discovery</span>
                        <span className="text-gray-700">
                          Teams had no single place to search or browse available components
                        </span>
                        <span className="text-sm text-gray-600">Affected: 6 of 6 teams</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">Low Developer Awareness of the DLS</span>
                        <span className="text-gray-700">
                          Developers were not fully aware of tokens, variables, foundations, or how
                          to use them
                        </span>
                        <span className="text-sm text-gray-600">Affected: 6 of 6 teams</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">
                          Project-Scoped Components Never Re-Used
                        </span>
                        <span className="text-gray-700">
                          Reusable work created inside projects rarely flowed back into the design
                          system
                        </span>
                        <span className="text-sm text-gray-600">Frequency: High</span>
                      </div>
                    </li>
                  </ul>
                  <p className="body-large mt-4 text-gray-700">
                    These issues formed the core adoption barrier.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="headline-small text-base font-semibold text-orange-600">
                  High Priority (Strategic Multipliers)
                </h4>
                <p className="body-large text-gray-700">
                  Problems that significantly slow delivery and scale
                </p>

                <div
                  className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <ul className="flex flex-col gap-4">
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">
                          Manual Code Copy-Paste Across Projects
                        </span>
                        <span className="text-gray-700">
                          No shared distribution model meant reuse was inefficient
                        </span>
                        <span className="text-sm text-gray-600">Affected: 6 of 6 teams</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">No Standardised Breakpoint System</span>
                        <span className="text-gray-700">
                          Each team defined its own responsive foundations
                        </span>
                        <span className="text-sm text-gray-600">Affected: 6 of 6 teams</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">Long Project Setup Time</span>
                        <span className="text-gray-700">
                          Setting up tokens, architecture, and foundations often took 1+ month per
                          project
                        </span>
                        <span className="text-sm text-gray-600">Frequency: High</span>
                      </div>
                    </li>
                  </ul>
                  <p className="body-large mt-4 text-gray-700">
                    These issues acted as efficiency and scale blockers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="headline-small text-base font-semibold text-yellow-600">
                  Medium Priority (Quality Improvements)
                </h4>
                <p className="body-large text-gray-700">
                  Problems that affect usability and product quality
                </p>

                <div
                  className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <ul className="flex flex-col gap-4">
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">
                          Lack of Accessibility Guidance at Component Level
                        </span>
                        <span className="text-gray-700">Affected: 2 of 6 teams</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">Mobile and Web Designed Separately</span>
                        <span className="text-gray-700">
                          Responsiveness was not consistently defined
                        </span>
                        <span className="text-sm text-gray-600">Affected: 6 of 6 teams</span>
                      </div>
                    </li>
                  </ul>
                  <p className="body-large mt-4 text-gray-700">
                    These issues contributed to UX inconsistency and accessibility gaps.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="headline-small text-base font-semibold text-gray-600">
                  Low Priority (Defer Until System Is Stable)
                </h4>
                <p className="body-large text-gray-700">
                  Problems that matter, but are secondary to structural stability
                </p>

                <div
                  className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <ul className="flex flex-col gap-4">
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">Missing Interaction Specifications</span>
                        <span className="text-gray-700">Minimal immediate business impact</span>
                      </div>
                    </li>
                    <li className="body-large flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">DLS Contribution Felt Like Extra Work</span>
                        <span className="text-gray-700">
                          Operational friction rather than a root-cause blocker
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p className="body-large mt-4 text-gray-700">
                    These were planned for later phases once stability improved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Section 9 ends */}

          {/* Section 10: Implementation Framework */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Implementation Framework</h2>
            {/* Content will be added later */}
          </div>
          {/* Section 10 ends */}

          {/* Section 11: Outcomes and Impact */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-large text-2xl font-bold">Outcomes and Impact</h2>

            <p className="body-xlarge">
              After I presented the research and findings, the leadership team aligned on one clear
              conclusion: it was time to formally invest in building and maturing our design system.
              This work helped shift the conversation from &quot;we have a design system in
              Figma&quot; to &quot;we need a system that is trusted, discoverable, documented, and
              usable across engineering teams.&quot;
            </p>

            {/* Subsection 11.1 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">What Happened Next</h3>
              <p className="body-xlarge">
                As a starting point, I took ownership of stabilising the foundations. I began
                auditing existing Figma files across teams to understand the real level of
                inconsistency and duplication. I started sanitising tokens and basic components to
                bring them closer to a shared standard. In parallel, I took ownership of building a
                shared component library in code so that reuse could actually happen in real
                projects. This meant working across both design and engineering, while keeping
                long-term scalability in mind.
              </p>
            </div>

            {/* Subsection 11.2 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">
                Exploring the Future of Design to Code
              </h3>
              <p className="body-xlarge">
                Alongside this work, leadership also began shaping an agentic workflow strategy
                across the organisation. As part of that direction, I started exploring how Figma
                MCP could integrate with GitHub Copilot and agentic workflows to convert design into
                code more efficiently. This became a separate research project that I initiated and
                led in parallel, focused on understanding how:
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    design system tokens
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    structured components
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    and AI-assisted workflows
                  </li>
                </ul>
              </div>

              <p className="body-xlarge">
                could work together to reduce handoff effort and improve developer productivity.
              </p>
            </div>

            {/* Subsection 11.3 */}
            <div className="flex flex-col gap-4">
              <h3 className="headline-small text-lg font-semibold">The Real Impact</h3>
              <p className="body-xlarge">
                More than anything, this research created shared clarity and urgency. It helped the
                organisation see that:
              </p>

              <div
                className="w-full rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <ul className="flex flex-col gap-3">
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    adoption problems were structural, not stylistic
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    improving the design system would unlock speed and scale
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    both design and engineering had to be part of the solution
                  </li>
                  <li className="body-large flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    foundations needed to mature before expecting reuse
                  </li>
                </ul>
              </div>

              <p className="body-xlarge">
                And it positioned the design system as an enabler of delivery, not just a visual
                library.
              </p>
            </div>
          </div>
          {/* Section 11 ends */}
        </div>
      </Container>
    </main>
  );
}
