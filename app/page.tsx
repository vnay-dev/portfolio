import { Hero, Statement, Projects, Articles, BuildingSoftware, ArtGallery } from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Statement />
      <Projects />
      <BuildingSoftware />
      <Articles />
      <ArtGallery />
    </main>
  );
}
