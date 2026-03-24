import { Hero, Statement, Projects, Articles, BuildingSoftware, ArtGallery } from "@/components/home";
import { isFeatureEnabled } from "@/app/constants";

export default function Home() {
  const hideThinkingBeyondConstraints = isFeatureEnabled("homeHideThinkingBeyondConstraints");
  const hideReflections = isFeatureEnabled("homeHideReflections");
  const hideFormAndAesthetics = isFeatureEnabled("homeHideFormAndAesthetics");
  const showArtGallery = isFeatureEnabled("homeArtGallery");

  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Statement />
      <Projects />
      {!hideThinkingBeyondConstraints ? <BuildingSoftware /> : null}
      {!hideReflections ? <Articles /> : null}
      {showArtGallery && !hideFormAndAesthetics ? <ArtGallery /> : null}
    </main>
  );
}
