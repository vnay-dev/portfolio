import { getNavbarFeatureFlags } from "@/app/constants";
import { Container, Navbar } from "@/components/shared/composite";

export default function Plugin4CaseStudyPage() {
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" featureFlags={navFeatureFlags} />
      <Container>
        <div className="flex w-full flex-col gap-8 py-16 text-neutral-900 sm:py-24 md:py-32">
          <h1 className="text-center text-4xl font-semibold sm:text-5xl">Plugin 4</h1>
          <p className="body-xlarge w-full text-neutral-700">
            While fixing our design system, I kept running into slow manual workflows inside Figma. So I
            built four internal plugins to solve them. This page is about the fourth one, a plugin that
            turned design system compliance into something measurable.
          </p>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Plugin 4: Daisy</h2>

            <p className="body-xlarge">
              By this stage, we had fixed most of the maintenance issues inside the design system file.
            </p>

            <p className="body-xlarge">The focus had shifted to:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>designing new components</li>
              <li>scaling the system</li>
              <li>auditing project files</li>
              <li>helping teams adopt the new standards</li>
            </ul>

            <p className="body-xlarge">That created a new problem.</p>

            <p className="body-xlarge">
              Even if the design system was clean, project-level designs could still drift away from it.
            </p>

            <p className="body-xlarge">
              A page might look correct visually, but from a DLS perspective it could still contain:
            </p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>components from external libraries</li>
              <li>wrong or missing tokens</li>
              <li>hardcoded values</li>
              <li>incorrect styles</li>
              <li>partially tokenized layouts</li>
            </ul>

            <p className="body-xlarge">We had no reliable way to measure compliance.</p>

            <p className="body-xlarge">
              And if adoption was the goal, compliance had to become part of the workflow, not an
              afterthought.
            </p>

            <p className="body-xlarge">So I built Daisy.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              A design system scorecard for Figma
            </h2>

            <p className="body-xlarge">
              Daisy starts by loading the latest data from the main design system file.
            </p>

            <p className="body-xlarge">
              Once synced, a designer can open any project file and run the plugin against:
            </p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>a component</li>
              <li>a frame</li>
              <li>or an entire page</li>
            </ul>

            <p className="body-xlarge">
              The plugin then generates a compliance score and shows categorized issues that need fixing.
            </p>

            <p className="body-xlarge">For every issue, Daisy explains:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>what is wrong</li>
              <li>how to fix it</li>
              <li>where the exact node exists on canvas</li>
            </ul>

            <p className="body-xlarge">
              Selecting an issue automatically focuses the node inside the file.
            </p>

            <p className="body-xlarge">
              That meant designers no longer had to guess what was compliant. They just had to move the
              score toward 100%.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Why this mattered</h2>

            <p className="body-xlarge">
              The new design system introduced better practices, but people still needed time to adapt.
            </p>

            <p className="body-xlarge">Daisy helped turn learning into feedback.</p>

            <p className="body-xlarge">
              Instead of reviewing files manually or correcting the same mistakes repeatedly, designers
              could self-audit their work and improve as they designed.
            </p>

            <p className="body-xlarge">
              What used to be tribal knowledge became a visible checklist.
            </p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">
              Then Figma launched something similar
            </h2>

            <p className="body-xlarge">
              A few days after building Daisy, Figma released an internal beta called Check Design.
            </p>

            <p className="body-xlarge">It overlapped with some of the same ideas:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>detecting components from outside added libraries</li>
              <li>spotting hardcoded values</li>
              <li>suggesting token matches</li>
            </ul>

            <p className="body-xlarge">So I compared both.</p>

            <p className="body-xlarge">
              Check Design was useful, but it lacked some of the deeper checks we needed, such as
              property-level validations like effect styles and more specific rules tied to our own design
              system.
            </p>

            <p className="body-xlarge">That meant Daisy still had value.</p>

            <p className="body-xlarge">
              While Check Design handled generic checks, Daisy could evolve around our internal standards
              and workflows.
            </p>

            <p className="body-xlarge">So the team continued using both.</p>
          </section>

          <section className="flex w-full flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Impact</h2>

            <p className="body-xlarge">
              Daisy helped make compliance measurable and repeatable.
            </p>

            <p className="body-xlarge">
              Instead of asking whether a design &quot;looked fine,&quot; teams could now verify whether it
              truly followed the system.
            </p>

            <p className="body-xlarge">It helped us:</p>

            <ul className="body-xlarge list-disc space-y-2 pl-6 text-neutral-900">
              <li>improve adoption of the new DLS</li>
              <li>train designers through feedback</li>
              <li>reduce manual review time</li>
              <li>catch issues early</li>
              <li>create a culture of compliance by default</li>
            </ul>

            <p className="body-xlarge">
              It became the bridge between a good design system and teams actually using it correctly.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
