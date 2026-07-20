import { HeroSection } from "@/components/shared/HeroSection";
import Link from "next/link";
import { Monitor, Cpu, Palette, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURED_DOMAINS = [
  {
    name: "Web Development",
    icon: Monitor,
    href: "/domains/web-development",
    desc: "Build modern, responsive, and dynamic web applications.",
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    href: "/domains/ai-ml",
    desc: "Explore the frontiers of artificial intelligence and data science.",
  },
  {
    name: "Graphics Design",
    icon: Palette,
    href: "/domains/graphics-design",
    desc: "Create stunning visuals and user interfaces.",
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    href: "/domains/cyber-security",
    desc: "Learn to protect systems and networks from digital attacks.",
  },
];

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
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Featured Domains Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Our Domains
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Dive into specialized fields of technology and master the skills
              needed for tomorrow's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_DOMAINS.map((domain) => (
              <Link
                key={domain.name}
                href={domain.href}
                className="group bg-background hover:border-primary/50 flex flex-col items-start rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 rounded-xl p-3 transition-all group-hover:scale-110">
                  <domain.icon className="h-6 w-6" />
                </div>
                <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                  {domain.name}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm">
                  {domain.desc}
                </p>
                <div className="text-primary mt-auto flex items-center text-sm font-medium opacity-80 group-hover:opacity-100">
                  Learn more{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Events / Highlights Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-12 flex flex-col items-end justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Recent Highlights
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Catch up on our successfully concluded events and activities.
              </p>
            </div>
            <Link href="/events">
              <Button variant="outline" className="hidden sm:flex">
                View All Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {COMPLETED_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group bg-background relative flex flex-col overflow-hidden rounded-3xl border shadow-sm sm:flex-row"
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-2/5">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    Completed
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:w-3/5 sm:p-8">
                  <span className="text-primary mb-2 text-sm font-semibold">
                    {event.date}
                  </span>
                  <h3 className="mb-3 line-clamp-2 text-2xl font-bold">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  <Link href={`/events/${event.id}/highlights`}>
                    <Button variant="default" className="w-fit">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/events" className="w-full">
              <Button variant="outline" className="w-full">
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
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
            Join the YenTech community, participate in our upcoming hackathons,
            and start building your future today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/member">
              <Button size="lg" className="rounded-full">
                Join the Community
              </Button>
            </Link>
            <Link href="/projects/submit">
              <Button size="lg" variant="outline" className="rounded-full">
                Submit a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
