import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard, EventProps } from "@/components/shared/EventCard";

const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "Upcoming Tech Talk 1",
    type: "Tech Talk",
    date: "Next Month",
    time: "10:00 AM",
    location: "Main Hall",
    description: "Join us for an exciting tech talk.",
    attendees: 50,
  },
  {
    id: "2",
    title: "Past Tech Talk 2",
    type: "Tech Talk",
    date: "Last Month",
    time: "2:00 PM",
    location: "Online",
    description: "A great tech talk that happened recently.",
    attendees: 120,
  },
];

export default function EventsSubPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Tech Talks"
        description="Explore all our tech talks."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
