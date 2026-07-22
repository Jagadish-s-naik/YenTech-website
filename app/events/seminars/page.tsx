import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard } from "@/components/shared/EventCard";
import { MOCK_EVENTS } from "@/data/events";

export default function SeminarsPage() {
  const events = MOCK_EVENTS.filter(
    (e) => e.type === "Tech Talk" || e.type === "Seminar",
  );

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Tech Talks"
        description="Explore all our tech talks."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
