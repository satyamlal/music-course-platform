import HeroSection from "@/components/ui/HeroSection";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.2]">
      <Spotlight />
      <HeroSection />
    </main>
  );
}
