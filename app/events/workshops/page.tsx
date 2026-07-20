import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard, EventProps } from "@/components/shared/EventCard";

const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "Upcoming Workshop 1",
    type: "Workshop",
    date: "Next Month",
    time: "10:00 AM",
    location: "Main Hall",
    description: "Join us for an exciting workshop.",
    attendees: 50,
  },
  {
    id: "2",
    title: "Past Workshop 2",
    type: "Workshop",
    date: "Last Month",
    time: "2:00 PM",
    location: "Online",
    description: "A great workshop that happened recently.",
    attendees: 120,
  },
];

export default function EventsSubPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Workshops" description="Explore all our workshops." />
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
