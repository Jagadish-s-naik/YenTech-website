import { HeroSection } from "@/components/shared/HeroSection";
import { EventsSection } from "@/components/shared/EventsSection";
import { ProjectsSection } from "@/components/shared/ProjectsSection";
import { FEATURED_EVENTS } from "@/data/events";

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section (Layout strictly preserved) */}
      <HeroSection />

      {/* Events Section with GSAP Scroll Trigger Animations */}
      <EventsSection events={FEATURED_EVENTS} />

      {/* Featured Projects Section */}
      <ProjectsSection />
    </div>
  );
}
