import { EventProps } from "@/components/shared/EventCard";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowLeft,
  ExternalLink,
  Video,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// In a real app, this would be fetched from an API or database
const MOCK_EVENTS: EventProps[] = [
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
    id: "openloop-2026",
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
    id: "project-sankalp",
    title: "Project Sankalp Code4Change National Hackathon",
    type: "Hackathon",
    date: "May 25-26, 2026",
    time: "24 Hours",
    location: "Yendance Zone, Yenepoya University, Deralakatte",
    description:
      "Project Sankalp Code4Change is a premier 24-hour national-level hackathon designed to empower student developers and innovators to build creative solutions for critical real-world challenges. Organized at Yenepoya University, this flagship event brought together passionate minds across the nation for an intensive hackathon experience.",
    attendees: 350,
    imageUrl: "/images/Code4Change.jpg",
    status: "completed",
    newsUrl: "https://www.varthabharati.in/DakshinaKannada/--2249771",
    youtubeUrl: "https://youtu.be/Tss2pwHXhrA?si=6dZj1tw8uJKeWUBM",
    youtubeEmbedId: "Tss2pwHXhrA",
  },
];

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id).toLowerCase();

  const event = MOCK_EVENTS.find(
    (e) =>
      e.id.toLowerCase() === decodedId ||
      e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === decodedId ||
      (decodedId.includes("sankalp") && e.id.includes("sankalp")) ||
      (decodedId.includes("openloop") && e.id.includes("openloop")),
  );

  if (!event) {
    notFound();
  }

  const typeColors = {
    Workshop: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Hackathon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Seminar: "bg-green-500/10 text-green-500 border-green-500/20",
    "Tech Talk": "bg-green-500/10 text-green-500 border-green-500/20",
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
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Video & News Coverage Section if available */}
            {(event.youtubeEmbedId || event.newsUrl) && (
              <div className="space-y-6 pt-4">
                {event.youtubeEmbedId && (
                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xl font-bold">
                      <Video className="h-5 w-5 text-[#0CBAA6]" /> Video
                      Highlights
                    </h3>
                    <div className="bg-muted aspect-video w-full overflow-hidden rounded-2xl border shadow-md">
                      <iframe
                        src={`https://www.youtube.com/embed/${event.youtubeEmbedId}`}
                        title={`${event.title} Video Highlights`}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {event.newsUrl && (
                  <div className="bg-muted/40 border-border/60 space-y-3 rounded-2xl border p-6">
                    <h3 className="flex items-center gap-2 text-xl font-bold">
                      <Newspaper className="h-5 w-5 text-[#0CBAA6]" /> Press
                      Coverage
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Read official news report and media coverage published in
                      Vartha Bharati:
                    </p>
                    <a
                      href={event.newsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#0CBAA6] hover:underline"
                    >
                      Read published article on Vartha Bharati
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            )}
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
                    <Link
                      href={`/events/${event.id}/highlights`}
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="h-12 w-full text-base font-bold"
                      >
                        View Event Highlights
                      </Button>
                    </Link>
                    {event.newsUrl && (
                      <a
                        href={event.newsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="secondary"
                          className="h-12 w-full gap-2 text-base font-bold"
                        >
                          <Newspaper className="h-4 w-4" />
                          View News Article
                        </Button>
                      </a>
                    )}
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
