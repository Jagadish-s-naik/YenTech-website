import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard, EventProps } from "@/components/shared/EventCard";

const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "Intro to React & Next.js Workshop",
    type: "Workshop",
    date: "October 12, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Lab 1, Main Block",
    description:
      "Learn the fundamentals of building modern web applications using React and Next.js. We will cover components, state, routing, and deployment.",
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
    id: "3",
    title: "Cyber Security in the Modern Age",
    type: "Seminar",
    date: "October 20, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall B",
    description:
      "An expert talk on the latest threats in cybersecurity and how organizations are defending against them. Guest speaker from TechDefend.",
    attendees: 85,
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Events Hub"
        description="Discover and register for upcoming workshops, hackathons, and seminars."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        {/* Filters placeholder */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium">
            All Events
          </button>
          <button className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 py-2 text-sm font-medium">
            Workshops
          </button>
          <button className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 py-2 text-sm font-medium">
            Hackathons
          </button>
          <button className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 py-2 text-sm font-medium">
            Seminars
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
