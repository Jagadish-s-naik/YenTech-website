import { EventProps } from "@/components/shared/EventCard";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  ExternalLink,
  Video,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data (shared from the event details page)
const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "Intro to React & Next.js Workshop",
    type: "Workshop",
    date: "October 12, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Lab 1, Main Block",
    description:
      "Learn the fundamentals of building modern web applications using React and Next.js.",
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
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
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
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
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
      "Project Sankalp Code4Change is a premier 24-hour national hackathon designed to empower the next generation of innovators to solve critical real-world problems.",
    attendees: 350,
    imageUrl: "/images/Code4Change.jpg",
    status: "completed",
    newsUrl: "https://www.varthabharati.in/DakshinaKannada/--2249771",
    youtubeUrl: "https://youtu.be/Tss2pwHXhrA?si=6dZj1tw8uJKeWUBM",
    youtubeEmbedId: "Tss2pwHXhrA",
  },
];

export default async function EventHighlightsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id).toLowerCase();

  const event = MOCK_EVENTS.find(
    (e) =>
      e.id.toLowerCase() === decodedId ||
      (decodedId.includes("sankalp") && e.id.includes("sankalp")) ||
      (decodedId.includes("openloop") && e.id.includes("openloop")),
  );

  if (!event || event.status !== "completed") {
    notFound();
  }

  return (
    <div className="bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:px-8">
        <Link
          href={`/events/${id}`}
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Event Details
        </Link>

        <article className="bg-background mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-sm">
          {event.imageUrl && (
            <div className="bg-muted relative aspect-[21/9] w-full">
              <img
                src={event.imageUrl}
                alt={`${event.title} Highlights`}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-primary/10 text-primary flex items-center gap-1.5 rounded-full px-3 py-1 font-medium">
                Event Highlights
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                YenTech Media Team
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />3 min read
              </span>
            </div>

            <h1 className="text-foreground mb-8 text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
              {event.title} Concludes Successfully
            </h1>

            <div className="prose prose-neutral dark:prose-invert prose-lg prose-headings:font-bold prose-a:text-primary max-w-none">
              <p className="lead text-muted-foreground mb-8 text-xl font-medium">
                The highly anticipated "{event.title}" concluded with tremendous
                success, bringing together hundreds of enthusiastic participants
                for a remarkable experience.
              </p>

              <p>
                <strong>Mangaluru:</strong> '{event.title}', a premier
                national-level hackathon, concluded successfully at{" "}
                {event.location}. Organized by Yenepoya University, the event
                witnessed brilliant minds collaborating, building innovative
                solutions, and pushing technological boundaries.
              </p>

              <blockquote className="border-primary text-muted-foreground bg-muted/30 my-8 rounded-r-lg border-l-4 py-2 pl-6 text-lg italic">
                "The energy and innovation displayed by the students at{" "}
                {event.title} was truly inspiring. We witnessed groundbreaking
                projects that solve real-world problems." - Organizing Committee
              </blockquote>

              <h3>Key Highlights</h3>
              <ul>
                <li>
                  <strong>Record Participation:</strong> Over {event.attendees}{" "}
                  attendees registered and actively participated throughout the
                  event.
                </li>
                <li>
                  <strong>Mentorship & Support:</strong> Industry mentors and
                  university leaders provided guidance to all teams.
                </li>
                <li>
                  <strong>Impactful Solutions:</strong> Participants presented
                  software and hardware prototypes addressing critical social
                  and industrial challenges.
                </li>
              </ul>

              {event.youtubeEmbedId && (
                <div className="not-prose my-8">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                    <Video className="h-5 w-5 text-[#0CBAA6]" /> Event
                    Highlights Video
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
                <div className="not-prose bg-muted/40 border-border/60 my-8 space-y-3 rounded-2xl border p-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <Newspaper className="h-5 w-5 text-[#0CBAA6]" /> Official
                    Press Coverage
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Check out the official news published in Vartha Bharati
                    regarding the Project Sankalp Code4Change National
                    Hackathon.
                  </p>
                  <a
                    href={event.newsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[#0CBAA6] hover:underline"
                  >
                    Read published news article on Vartha Bharati
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <hr className="my-10" />

            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Share this article</h4>
              <div className="flex gap-2">
                <div className="bg-muted hover:bg-primary/20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors">
                  <span className="text-sm font-bold">X</span>
                </div>
                <div className="bg-muted hover:bg-primary/20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="bg-muted hover:bg-primary/20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
