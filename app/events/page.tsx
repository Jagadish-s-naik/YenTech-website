import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { EventCard } from "@/components/shared/EventCard";
import { MOCK_EVENTS } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        badge="Community Gatherings"
        title="Events Hub"
        description="Discover and register for upcoming technical workshops, national hackathons, and tech talks."
      />
      <PageContainer>
        {/* Filters */}
        <div className="border-border/60 mb-8 flex scrollbar-none gap-2 overflow-x-auto border-b pb-2">
          <button className="rounded-full bg-[#0CBAA6] px-4 py-1.5 text-xs font-medium text-white shadow-xs">
            All Events
          </button>
          <button className="bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-xs font-medium transition-colors">
            Workshops
          </button>
          <button className="bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-xs font-medium transition-colors">
            Hackathons
          </button>
          <button className="bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-xs font-medium transition-colors">
            Tech Talks
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
