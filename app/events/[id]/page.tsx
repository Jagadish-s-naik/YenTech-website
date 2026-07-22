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
import { getEventById } from "@/data/events";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEventById(id);

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
