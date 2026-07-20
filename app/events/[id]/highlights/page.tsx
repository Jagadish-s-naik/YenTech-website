import { PageHeader } from "@/components/shared/PageHeader";
import { EventProps } from "@/components/shared/EventCard";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
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
];

export default async function EventHighlightsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = MOCK_EVENTS.find((e) => e.id === id);

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
                Published April 28, 2026
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
                <strong>Mangaluru:</strong> '{event.title}', a national-level
                event, concluded successfully at the {event.location} on
                Saturday. Organized by the Yenepoya School of Engineering and
                Technology, the event was held in collaboration with industry
                leaders including DK24, Nxtwave, and Kalvium.
              </p>

              <p>
                Drawing participants from across the region, the 24-hour event
                saw brilliant minds collaborating, building innovative
                solutions, and pushing the boundaries of technology. The
                atmosphere was electric with non-stop coding, mentorship
                sessions, and engaging activities.
              </p>

              <blockquote className="border-primary text-muted-foreground bg-muted/30 my-8 rounded-r-lg border-l-4 py-2 pl-6 text-lg italic">
                "The energy and innovation displayed by the students at{" "}
                {event.title} was truly inspiring. We witnessed some incredible
                projects that have real-world potential." - Organizing Committee
              </blockquote>

              <h3>Key Highlights</h3>
              <ul>
                <li>
                  <strong>Record Participation:</strong> Over {event.attendees}{" "}
                  attendees registered and actively participated throughout the
                  event duration.
                </li>
                <li>
                  <strong>Industry Collaboration:</strong> Expert mentors from
                  DK24, Nxtwave, and Kalvium provided invaluable guidance to the
                  participants.
                </li>
                <li>
                  <strong>Innovative Solutions:</strong> Teams built outstanding
                  projects ranging from AI-powered applications to sustainable
                  tech solutions.
                </li>
              </ul>

              <p>
                The event culminated in an exciting presentation round where the
                top teams showcased their projects to a panel of esteemed
                judges. Prizes were awarded to the winners, but every
                participant left with new skills, connections, and an
                unforgettable experience.
              </p>

              <p>
                We look forward to hosting even more engaging and impactful
                events in the future. Stay tuned for our upcoming announcements!
              </p>
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
