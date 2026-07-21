import { HeroSection } from "@/components/shared/HeroSection";
import { EventsSection } from "@/components/shared/EventsSection";
import { DomainCards } from "@/components/shared/DomainCards";
import { CtaSection } from "@/components/shared/CtaSection";

const FEATURED_EVENTS = [
  {
    id: "openloop-2026",
    title: "OpenLoop 2026 National Hackathon",
    description:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
    date: "April 26-27, 2026",
    location: "YMK Auditorium, YIASCM Kulur Campus",
    imageUrl:
      "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
    imageLeft: false,
  },
  {
    id: "project-sankalp",
    title: "Project Sankalp Code4Change National Hackathon",
    description:
      "Project Sankalp is a premier 24-hour hackathon designed to empower the next generation of innovators to solve critical real-world problems.",
    date: "May 25-26, 2026",
    location: "Yendance Zone, Yenepoya University, Deralakatte",
    imageUrl: "/images/Code4Change.jpg",
    imageLeft: true,
  },
];

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section (Layout strictly preserved) */}
      <HeroSection />

      {/* Events Section with GSAP Scroll Trigger Animations */}
      <EventsSection events={FEATURED_EVENTS} />

      {/* Featured Domains Section */}
      <section className="bg-muted/10 border-border/40 relative border-y py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block rounded-full bg-[#0CBAA6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0CBAA6]">
              Core Specializations
            </span>
            <h2 className="font-heading text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Explore Our Tech Domains
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
              Dive into specialized fields of technology and master the skills
              needed for tomorrow's challenges.
            </p>
          </div>

          <DomainCards />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
