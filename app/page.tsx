import { Hero, Projects, Articles, BuildingSoftware, ArtGallery } from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Projects />
      <Articles />
      <BuildingSoftware />
      <ArtGallery />
    </main>
  );
}
