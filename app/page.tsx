import { Hero, Statement, Projects, Articles, BuildingSoftware, ArtGallery } from "@/components/home";
import { getNavbarFeatureFlags, isFeatureEnabled } from "@/app/constants";

export default function Home() {
  const hideThinkingBeyondConstraints = isFeatureEnabled("homeHideThinkingBeyondConstraints");
  const hideReflections = isFeatureEnabled("homeHideReflections");
  const hideFormAndAesthetics = isFeatureEnabled("homeHideFormAndAesthetics");
  const showArtGallery = isFeatureEnabled("homeArtGallery");
  const hideStatement = isFeatureEnabled("homeHideStatement");
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full bg-neutral-950">
      <Hero navFeatureFlags={navFeatureFlags} />
      {!hideStatement ? <Statement /> : null}
      <Projects />
      {!hideThinkingBeyondConstraints ? <BuildingSoftware /> : null}
      {!hideReflections ? <Articles /> : null}
      {showArtGallery && !hideFormAndAesthetics ? <ArtGallery /> : null}
    </main>
  );
}
