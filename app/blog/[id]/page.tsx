import {
  Calendar,
  User,
  Clock,
  ExternalLink,
  Video,
  Newspaper,
  ArrowLeft,
  MapPin,
  Users,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventById } from "@/data/events";
import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { ShareButtons } from "@/components/shared/ShareButtons";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEventById(id);

  // Default article mock fallback if id is a blog post slug without an event
  const title = event ? `${event.title} Highlights` : "Blog Article";
  const date = event ? event.date : "May 2026";
  const author = event ? "YenTech Media" : "YenTech Editorial";
  const location = event ? event.location : "Yenepoya University";
  const attendees = event ? event.attendees : "250+";

  if (
    !event &&
    id !== "building-scalable-ai-microservices" &&
    id !== "navigating-open-source-communities" &&
    id !== "future-of-web-technologies"
  ) {
    notFound();
  }

  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <PageHeader
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: event ? event.title : "Article Details" },
        ]}
        title={title}
        description={
          event
            ? `Official report and key takeaways from ${event.title}`
            : "Technical insights and tutorials from YenTech engineers."
        }
      />

      <PageContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main Article Content Column */}
          <div className="lg:col-span-8">
            <article className="border-border/60 bg-card/60 overflow-hidden rounded-3xl border shadow-sm backdrop-blur-md">
              {event?.imageUrl ? (
                <div className="bg-muted border-border/50 relative aspect-21/9 w-full overflow-hidden border-b">
                  <img
                    src={event.imageUrl}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="bg-muted border-border/50 relative aspect-21/9 w-full overflow-hidden border-b">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-3.5 py-1 text-[#0CBAA6]">
                    {event ? "Event Report" : "Engineering"}
                  </span>
                  <span className="border-border/60 bg-card/40 flex items-center gap-1.5 rounded-full border px-3 py-1 backdrop-blur-xs">
                    <Calendar className="h-3.5 w-3.5 text-[#0CBAA6]" />
                    {date}
                  </span>
                  <span className="border-border/60 bg-card/40 flex items-center gap-1.5 rounded-full border px-3 py-1 backdrop-blur-xs">
                    <User className="h-3.5 w-3.5 text-[#0CBAA6]" />
                    {author}
                  </span>
                  <span className="border-border/60 bg-card/40 flex items-center gap-1.5 rounded-full border px-3 py-1 backdrop-blur-xs">
                    <Clock className="h-3.5 w-3.5 text-[#0CBAA6]" />4 min read
                  </span>
                </div>

                <h1 className="font-heading text-foreground mb-8 text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
                  {event
                    ? `${event.title} Concludes Successfully`
                    : "Building Modern Scalable Systems"}
                </h1>

                <div className="text-foreground/90 space-y-6 leading-relaxed font-normal">
                  <p className="text-muted-foreground border-border/50 border-b pb-6 text-lg leading-relaxed font-medium md:text-xl">
                    {event
                      ? `The highly anticipated "${event.title}" concluded with tremendous success, bringing together hundreds of enthusiastic participants for a remarkable experience.`
                      : "Explore modern design patterns, scalable architectures, and developer workflows for building high-performance web applications."}
                  </p>

                  {event && (
                    <>
                      <p className="text-base leading-relaxed md:text-lg">
                        <strong className="text-foreground font-semibold">
                          Mangaluru:
                        </strong>{" "}
                        '{event.title}', a premier national-level hackathon,
                        concluded successfully at {location}. Organized by
                        Yenepoya University, the event witnessed brilliant minds
                        collaborating, building innovative solutions, and
                        pushing technological boundaries.
                      </p>

                      {/* Custom Blockquote with Fixed Left Border */}
                      <blockquote className="text-foreground/90 my-8 border-l-4 border-l-[#0CBAA6] bg-[#0CBAA6]/8 px-6 py-5 text-base font-medium italic backdrop-blur-xs md:text-lg">
                        "The energy and innovation displayed by the participants
                        at {event.title} was truly inspiring. We witnessed
                        groundbreaking projects that solve real-world problems."
                        <span className="mt-2 block text-xs font-semibold tracking-wider text-[#0CBAA6] uppercase not-italic">
                          — Organizing Committee
                        </span>
                      </blockquote>

                      <div className="pt-4">
                        <h3 className="font-heading text-foreground mb-4 text-xl font-bold tracking-tight md:text-2xl">
                          Key Highlights
                        </h3>
                        <ul className="space-y-3.5 pl-1 text-base md:text-lg">
                          <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0CBAA6]" />
                            <span>
                              <strong className="text-foreground font-semibold">
                                Record Participation:
                              </strong>{" "}
                              Over {attendees} attendees registered and actively
                              participated throughout the event.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0CBAA6]" />
                            <span>
                              <strong className="text-foreground font-semibold">
                                Mentorship & Support:
                              </strong>{" "}
                              Industry mentors and university leaders provided
                              guidance to all teams.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0CBAA6]" />
                            <span>
                              <strong className="text-foreground font-semibold">
                                Impactful Solutions:
                              </strong>{" "}
                              Participants presented software and hardware
                              prototypes addressing critical social and
                              industrial challenges.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {event.youtubeEmbedId && (
                        <div className="not-prose my-10">
                          <h3 className="font-heading mb-4 flex items-center gap-2 text-xl font-bold tracking-tight">
                            <Video className="h-5 w-5 text-[#0CBAA6]" /> Event
                            Highlights Video
                          </h3>
                          <div className="bg-card/60 aspect-video w-full overflow-hidden rounded-3xl shadow-sm backdrop-blur-xs">
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
                        <div className="not-prose border-border/60 bg-card/60 my-10 space-y-3.5 rounded-3xl border p-8 shadow-sm backdrop-blur-xs">
                          <h3 className="font-heading flex items-center gap-2 text-xl font-bold tracking-tight">
                            <Newspaper className="h-5 w-5 text-[#0CBAA6]" />{" "}
                            Official Press Coverage
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Check out the official news published in Vartha
                            Bharati regarding the Project Sankalp Code4Change
                            National Hackathon.
                          </p>
                          <a
                            href={event.newsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0CBAA6] transition-colors hover:underline"
                          >
                            Read published news article on Vartha Bharati
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="border-border/50 mt-12 flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      className="border-border/80 rounded-full px-5 py-2 text-xs font-semibold hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
                    >
                      <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to Blog
                    </Button>
                  </Link>

                  {event && (
                    <Link href={`/events/${id}`}>
                      <Button
                        variant="ghost"
                        className="text-muted-foreground rounded-full px-5 py-2 text-xs font-semibold hover:text-[#0CBAA6]"
                      >
                        View Event Details
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </div>

          {/* Sticky Sidebar Column */}
          <div className="space-y-6 lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Article Meta Card */}
              <div className="border-border/60 bg-card/60 space-y-4 rounded-3xl border p-6 shadow-sm backdrop-blur-md">
                <h4 className="font-heading text-foreground flex items-center gap-2 text-base font-bold">
                  <Bookmark className="h-4 w-4 text-[#0CBAA6]" /> Publication
                  Info
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="border-border/50 flex items-center justify-between border-b pb-2.5">
                    <span className="text-muted-foreground font-medium">
                      Author
                    </span>
                    <span className="text-foreground font-semibold">
                      {author}
                    </span>
                  </div>
                  <div className="border-border/50 flex items-center justify-between border-b pb-2.5">
                    <span className="text-muted-foreground font-medium">
                      Published
                    </span>
                    <span className="text-foreground font-semibold">
                      {date}
                    </span>
                  </div>
                  <div className="border-border/50 flex items-center justify-between border-b pb-2.5">
                    <span className="text-muted-foreground font-medium">
                      Category
                    </span>
                    <span className="font-semibold text-[#0CBAA6]">
                      {event ? "Event Report" : "Engineering"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-medium">
                      Read Time
                    </span>
                    <span className="text-foreground font-semibold">4 min</span>
                  </div>
                </div>
              </div>

              {/* Event CTA Card */}
              {event && (
                <div className="border-border/60 bg-card/60 space-y-4 rounded-3xl border p-6 shadow-sm backdrop-blur-md">
                  <span className="rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-3 py-0.5 text-[11px] font-semibold text-[#0CBAA6]">
                    Related Event
                  </span>
                  <h4 className="font-heading text-foreground text-lg font-bold">
                    {event.title}
                  </h4>
                  <div className="text-muted-foreground space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-[#0CBAA6]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#0CBAA6]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-[#0CBAA6]" />
                      <span>{event.attendees} Participants</span>
                    </div>
                  </div>

                  <Link href={`/events/${id}`} className="block pt-2">
                    <Button className="h-10 w-full rounded-full border-none bg-[#0CBAA6] text-xs font-semibold text-white shadow-sm shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d]">
                      View Event Details
                    </Button>
                  </Link>
                </div>
              )}

              {/* Share Card */}
              <ShareButtons title={title} />
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
