import { PageHeader } from "@/components/shared/PageHeader";
import { EventProps } from "@/components/shared/EventCard";
import { Calendar, MapPin, Clock, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// In a real app, this would be fetched from an API or database
const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "Intro to React & Next.js Workshop",
    type: "Workshop",
    date: "October 12, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Lab 1, Main Block",
    description:
      "Learn the fundamentals of building modern web applications using React and Next.js. We will cover components, state, routing, and deployment. This is a hands-on workshop, so please bring your laptops. Prerequisites include basic knowledge of HTML, CSS, and JavaScript.",
    attendees: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "OpenLoop 2026 National Hackathon",
    type: "Hackathon",
    date: "April 26-27, 2026",
    time: "24 Hours",
    location: "YMK Auditorium, Kulur Campus",
    description:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium. Join us for an exciting 24 hours of coding, problem-solving, and innovation. Prizes will be awarded to the top 3 teams.",
    attendees: 300,
    imageUrl:
      "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
    status: "completed",
  },
  {
    id: "3",
    title: "Cyber Security in the Modern Age",
    type: "Seminar",
    date: "October 20, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall B",
    description:
      "An expert talk on the latest threats in cybersecurity and how organizations are defending against them. Guest speaker from TechDefend. Learn about common attack vectors, phishing, ransomware, and the role of AI in cybersecurity.",
    attendees: 85,
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
];

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = MOCK_EVENTS.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const typeColors = {
    Workshop: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Hackathon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Seminar: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:px-8">
        <Link
          href="/events"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-sm font-semibold ${typeColors[event.type]}`}
                >
                  {event.type}
                </span>
                <span className="text-muted-foreground flex items-center gap-1 text-sm font-medium">
                  <Users className="h-4 w-4" />
                  {event.attendees} attendees registered
                </span>
              </div>
              <h1 className="text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {event.title}
              </h1>
            </div>

            {event.imageUrl && (
              <div className="bg-muted aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-sm">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div>
              <h2 className="mb-4 text-2xl font-bold">About this event</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-background sticky top-24 rounded-2xl border p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold">Event Details</h3>

              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary shrink-0 rounded-xl p-2.5">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold">Date</p>
                    <p className="text-muted-foreground text-sm">
                      {event.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary shrink-0 rounded-xl p-2.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold">Time</p>
                    <p className="text-muted-foreground text-sm">
                      {event.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary shrink-0 rounded-xl p-2.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold">Location</p>
                    <p className="text-muted-foreground text-sm">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {event.status === "completed" ? (
                  <>
                    <Button
                      className="bg-muted text-muted-foreground hover:bg-muted h-12 w-full text-base font-bold"
                      disabled
                    >
                      Event Concluded
                    </Button>
                    <Link href={`/events/${id}/highlights`} className="w-full">
                      <Button
                        variant="outline"
                        className="h-12 w-full text-base font-bold"
                      >
                        View Event Highlights
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Button className="h-12 w-full text-base font-bold">
                      Register Now
                    </Button>
                    <p className="text-muted-foreground text-center text-xs">
                      Free for Yenepoya students
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
