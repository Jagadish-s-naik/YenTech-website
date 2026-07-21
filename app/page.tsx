import { HeroSection } from "@/components/shared/HeroSection";
import { StatsRibbon } from "@/components/shared/StatsRibbon";
import { DomainCards } from "@/components/shared/DomainCards";
import { MagneticButton } from "@/components/shared/MagneticButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMPLETED_EVENTS = [
  {
    id: "2",
    title: "OpenLoop 2026 National Hackathon",
    date: "April 26-27, 2026",
    description:
      "A national-level 24-hour hackathon that saw over 300 participants building innovative solutions.",
    imageUrl:
      "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <HeroSection />

      {/* Stats Ribbon Component */}
      <StatsRibbon />

      {/* Featured Domains Section */}
      <section className="bg-muted/30 border-border/40 border-y py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Our Domains
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed sm:text-base">
              Dive into specialized fields of technology and master the skills
              needed for tomorrow's challenges.
            </p>
          </div>

          {/* Interactive spotlight domain cards list */}
          <DomainCards />
        </div>
      </section>

      {/* Highlights & Live Activity Feed Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-12 flex flex-col items-end justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Recent Highlights & Live Updates
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
                Catch up on our successfully concluded events and live community
                milestones.
              </p>
            </div>
            <Link href="/events">
              <Button variant="outline" className="hidden rounded-full sm:flex">
                View All Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {COMPLETED_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group bg-background border-border/60 relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-xs transition-all duration-300 hover:shadow-md sm:flex-row"
              >
                <div className="relative aspect-4/3 overflow-hidden sm:aspect-auto sm:w-2/5">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    Completed
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:w-3/5 sm:p-8">
                  <span className="text-primary mb-2 text-sm font-bold">
                    {event.date}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <Link href={`/events/${event.id}/highlights`}>
                    <Button variant="default" className="w-fit rounded-full">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/events" className="w-full">
              <Button variant="outline" className="w-full rounded-full">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/10 border-t py-24">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h2 className="font-heading mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-sm leading-relaxed sm:text-base">
            Join the YenTech community, participate in our upcoming hackathons,
            and start building your future today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Link href="/member">
                <Button
                  size="lg"
                  className="shadow-primary/20 rounded-full shadow-lg"
                >
                  Join the Community
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/projects/submit">
                <Button size="lg" variant="outline" className="rounded-full">
                  Submit a Project
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
