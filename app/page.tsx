import { HeroWithIntro, Projects, Articles, BuildingSoftware, ArtGallery, PlayArena } from "@/components/home";
import { getNavbarFeatureFlags, isFeatureEnabled } from "@/app/constants";

export default function Home() {
  const hideThinkingBeyondConstraints = isFeatureEnabled("homeHideThinkingBeyondConstraints");
  const hideReflections = isFeatureEnabled("homeHideReflections");
  const hideFormAndAesthetics = isFeatureEnabled("homeHideFormAndAesthetics");
  const showArtGallery = isFeatureEnabled("homeArtGallery");
  const navFeatureFlags = getNavbarFeatureFlags();

  return (
    <main className="min-h-screen w-full bg-neutral-950">
      <HeroWithIntro navFeatureFlags={navFeatureFlags} />
      <Projects />
      {!hideThinkingBeyondConstraints ? <BuildingSoftware /> : null}
      {!hideReflections ? <Articles /> : null}
      {showArtGallery && !hideFormAndAesthetics ? <ArtGallery /> : null}
      <PlayArena />
    </main>
  );
}
