import { HeroSection } from "@/components/shared/HeroSection";
import { DomainCards } from "@/components/shared/DomainCards";
import { MagneticButton } from "@/components/shared/MagneticButton";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {/* Hero Section */}
      <HeroSection />

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <h2 className="font-heading text-foreground mb-16 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
            Events
          </h2>

          <div className="flex flex-col gap-20">
            {FEATURED_EVENTS.map((event) => (
              <div
                key={event.id}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
              >
                {/* Text Side */}
                <div
                  className={`flex flex-col justify-center space-y-5 lg:col-span-6 ${
                    event.imageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="font-heading text-foreground text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {event.description}
                  </p>

                  <div className="text-muted-foreground space-y-2.5 pt-1 text-sm font-medium">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="h-4 w-4 text-[#0CBAA6]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 text-[#0CBAA6]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link href={`/events/${event.id}`}>
                      <Button
                        size="lg"
                        className="rounded-full bg-[#0CBAA6] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0a9e8d]"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`order-first lg:col-span-6 ${
                    event.imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="group border-border/80 relative aspect-16/10 overflow-hidden rounded-3xl border shadow-md transition-all duration-300 hover:shadow-xl">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domains Section */}
      <section className="bg-muted/20 border-border/40 border-y py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Explore Our Domains
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
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-8">
          <div className="border-border/80 bg-card/60 rounded-3xl border p-12 shadow-sm backdrop-blur-sm">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base leading-relaxed">
              Join the YenTech community, participate in our upcoming
              hackathons, and start building your future today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton>
                <Link href="/member">
                  <Button
                    size="lg"
                    className="rounded-full bg-[#0CBAA6] px-8 py-6 text-base font-semibold text-white shadow-md shadow-[#0CBAA6]/20 transition-all duration-200 hover:bg-[#0a9e8d]"
                  >
                    Join the Community
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/projects/submit">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border/80 rounded-full px-8 py-6 text-base font-semibold transition-all duration-200 hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
                  >
                    Submit a Project
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
