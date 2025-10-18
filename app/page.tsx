import { 
  Hero, 
  IntroSection, 
  WorkSection, 
  GallerySection, 
  ExperimentsSection, 
  BlogSection, 
  FooterSection 
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <IntroSection />
      <WorkSection />
      <GallerySection />
      <ExperimentsSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
