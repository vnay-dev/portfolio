import Link from "next/link";
import { getNavbarFeatureFlags } from "@/app/constants";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin3CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex w-full flex-col gap-8 py-16 text-neutral-900 sm:py-24 md:py-32">
          <h1 className="text-center text-4xl font-semibold sm:text-5xl">Plugin 3</h1>
          <p className="body-xlarge w-full text-neutral-700">
            While fixing our design system, I kept running into slow manual workflows inside Figma. So I
            built four internal plugins to solve them. This page is about the third one, a plugin that
            gave us the changelog Figma didn&apos;t.
          </p>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              Plugin 3: Figma showed changes, but not enough of them
            </h2>

            <p className="body-xlarge">
              Three of us were working in parallel to clean up and stabilize the design system.
            </p>

            <p className="body-xlarge">To move faster, we used branches.</p>

            <p className="body-xlarge">
              But with only a few weeks to fix years of maintenance debt, each branch naturally
              contained many changes at once. Tokens were renamed, components were cleaned up, styles
              were updated, values were corrected.
            </p>

            <p className="body-xlarge">
              When it was time to review and merge, Figma&apos;s built-in compare view only showed
              changes at a high level.
            </p>

            <p className="body-xlarge">It could tell us:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>which page changed</li>
              <li>which frame changed</li>
              <li>which component changed</li>
              <li>whether styles or variables changed</li>
            </ul>

            <p className="body-xlarge">But it could not tell us what actually changed.</p>

            <p className="body-xlarge">And that became the real problem.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">We needed Git-style diffs for design</h2>

            <p className="body-xlarge">During review, we kept asking questions like:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>Did the fill change from a hex value to a token?</li>
              <li>Which token was replaced with which new token?</li>
              <li>Was spacing updated or just moved visually?</li>
              <li>Did stroke values change?</li>
              <li>Was the shadow edited or removed?</li>
            </ul>

            <p className="body-xlarge">
              Without that visibility, we had to manually inspect screens and compare visuals to
              understand what happened.
            </p>

            <p className="body-xlarge">It was slow, repetitive, and risky.</p>

            <p className="body-xlarge">So I built a change logger plugin.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">A diff tool for Figma branches</h2>

            <p className="body-xlarge">
              The plugin compares a child branch against the main branch and generates a detailed
              change report.
            </p>

            <p className="body-xlarge">
              Since Figma does not offer a simple branch selector like Git, I had to work around it.
            </p>

            <p className="body-xlarge">The flow worked like this:</p>

            <ol className="body-xlarge list-decimal space-y-2 pl-6 text-neutral-900">
              <li>Open the plugin in the main file</li>
              <li>Read and store the file data locally inside the Figma desktop app</li>
              <li>Open the branch file</li>
              <li>Run the plugin again</li>
              <li>Compare both states and generate the delta</li>
            </ol>

            <p className="body-xlarge">
              The output could be copied to clipboard or downloaded as a markdown file.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">What the report included</h2>

            <p className="body-xlarge">
              Instead of high-level summaries, the plugin generated granular changes like:
            </p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>Fill changed from hex to token</li>
              <li>Token A replaced with Token B</li>
              <li>Padding changed from 16 to 12</li>
              <li>Shadow removed</li>
              <li>Stroke width updated</li>
              <li>Typography style swapped</li>
            </ul>

            <p className="body-xlarge">And it did this across:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>pages</li>
              <li>frames</li>
              <li>components</li>
              <li>styles</li>
              <li>tokens</li>
            </ul>

            <p className="body-xlarge">That made reviews much faster and much more reliable.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              Unexpected second use: release notes
            </h2>

            <p className="body-xlarge">
              The change report quickly became useful beyond reviews.
            </p>

            <p className="body-xlarge">
              We started using it as the foundation for design system release notes.
            </p>

            <p className="body-xlarge">It helped us clearly communicate:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>major breaking changes</li>
              <li>minor improvements</li>
              <li>token migrations</li>
              <li>component updates</li>
            </ul>

            <p className="body-xlarge">
              Instead of vague update messages, teams now had clear changelogs they could trust.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              What used to take manual visual inspection now became a structured review workflow.
            </p>

            <p className="body-xlarge">The plugin helped us:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>review branch changes faster</li>
              <li>merge with more confidence</li>
              <li>reduce accidental regressions</li>
              <li>document releases properly</li>
              <li>communicate changes across teams clearly</li>
            </ul>

            <p className="body-xlarge">
              It turned Figma branches from &quot;hope this is fine&quot; into something much closer to
              an engineering workflow.
            </p>
          </section>

          <section className="flex w-full flex-col gap-4">
            <p className="title-medium text-neutral-700">Next case study</p>
            <Link
              href="/projects/plugin-4"
              className="group block w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-8 transition-colors hover:bg-neutral-100"
            >
              <div className="flex min-h-40 w-full items-center justify-center rounded-md border border-dashed border-neutral-300 bg-white">
                <p className="body-large text-neutral-500 transition-colors group-hover:text-neutral-700">
                  Thumbnail placeholder - Plugin 4 case study
                </p>
              </div>
            </Link>
          </section>
        </div>
      </Container>
    </main>
  );
}
