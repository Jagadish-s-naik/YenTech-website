import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Video,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventById } from "@/data/events";
import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";

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

  const isCompleted = event.status === "completed";

  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <PageHeader
        breadcrumbs={[
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
        title={event.title}
        description={`${event.date} • ${event.location}`}
      />

      <PageContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {event.imageUrl && (
              <div className="border-border/60 bg-muted/40 aspect-[16/9] w-full overflow-hidden rounded-3xl border shadow-sm">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="border-border/60 bg-card/60 rounded-3xl border p-8 shadow-sm backdrop-blur-xs">
              <h2 className="font-heading mb-4 text-2xl font-bold tracking-tight">
                About this event
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Video & News Coverage Section if available */}
            {(event.youtubeEmbedId || event.newsUrl) && (
              <div className="space-y-8 pt-2">
                {event.youtubeEmbedId && (
                  <div className="space-y-4">
                    <h3 className="font-heading flex items-center gap-2 text-xl font-bold tracking-tight">
                      <Video className="h-5 w-5 text-[#0CBAA6]" /> Video
                      Highlights
                    </h3>
                    <div className="border-border/60 bg-card/60 aspect-video w-full overflow-hidden rounded-3xl border shadow-sm backdrop-blur-xs">
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
                  <div className="border-border/60 bg-card/60 space-y-3.5 rounded-3xl border p-8 shadow-sm backdrop-blur-xs">
                    <h3 className="font-heading flex items-center gap-2 text-xl font-bold tracking-tight">
                      <Newspaper className="h-5 w-5 text-[#0CBAA6]" /> Press
                      Coverage
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Read official news report and media coverage published in
                      Vartha Bharati:
                    </p>
                    <a
                      href={event.newsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0CBAA6] transition-colors hover:underline"
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
            <div className="border-border/60 bg-card/60 sticky top-28 rounded-3xl border p-7 shadow-sm backdrop-blur-md">
              <h3 className="font-heading mb-6 text-xl font-bold tracking-tight">
                Event Details
              </h3>

              <div className="mb-8 space-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0CBAA6]/10 text-[#0CBAA6]">
                    <Calendar className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</p>
                    <p className="text-foreground text-sm font-medium">
                      {event.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0CBAA6]/10 text-[#0CBAA6]">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Time</p>
                    <p className="text-foreground text-sm font-medium">
                      {event.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0CBAA6]/10 text-[#0CBAA6]">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground text-sm font-medium">
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0CBAA6]/10 text-[#0CBAA6]">
                    <Users className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Attendance</p>
                    <p className="text-foreground text-sm font-medium">
                      {event.attendees} Registered
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 border-t border-border/50 pt-6">
                {isCompleted ? (
                  <>
                    <Link
                      href={`/blog/${event.id}`}
                      className="w-full"
                    >
                      <Button
                        className="border-none bg-[#0CBAA6] text-white shadow-md shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d] h-11 w-full rounded-full text-sm font-semibold"
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
                          variant="outline"
                          className="border-border/80 hover:border-[#0CBAA6] hover:text-[#0CBAA6] h-11 w-full gap-2 rounded-full border text-sm font-semibold backdrop-blur-xs transition-colors"
                        >
                          <Newspaper className="h-4 w-4 text-[#0CBAA6]" />
                          View News Article
                        </Button>
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <Button className="h-12 w-full rounded-full border-none bg-[#0CBAA6] text-sm font-semibold text-white shadow-md shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d]">
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
      </PageContainer>
    </div>
  );
}
