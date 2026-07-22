import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard } from "@/components/shared/EventCard";
import { MOCK_EVENTS } from "@/data/events";

export default function WorkshopsPage() {
  const events = MOCK_EVENTS.filter((e) => e.type === "Workshop");

  return (
    <div className="min-h-screen">
      <PageHeader title="Workshops" description="Explore all our workshops." />
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
