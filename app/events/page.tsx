"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { EventCard } from "@/components/shared/EventCard";
import { MOCK_EVENTS } from "@/data/events";

const CATEGORIES = [
  { label: "All Events", slug: "all", value: "all" },
  { label: "Workshops", slug: "workshops", value: "Workshop" },
  { label: "Hackathons", slug: "hackathons", value: "Hackathon" },
  { label: "Tech Talks", slug: "tech-talks", value: "Tech Talk" },
];

function EventsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParam = searchParams.get("category") || searchParams.get("type");

  const activeCategory = useMemo(() => {
    if (!queryParam) return CATEGORIES[0];
    const found = CATEGORIES.find(
      (c) =>
        c.slug.toLowerCase() === queryParam.toLowerCase() ||
        c.value.toLowerCase() === queryParam.toLowerCase(),
    );
    return found || CATEGORIES[0];
  }, [queryParam]);

  const filteredEvents = useMemo(() => {
    if (activeCategory.slug === "all") return MOCK_EVENTS;
    return MOCK_EVENTS.filter(
      (e) =>
        e.type.toLowerCase() === activeCategory.value.toLowerCase() ||
        (activeCategory.value === "Tech Talk" &&
          (e.type === "Tech Talk" || e.type === "Seminar")),
    );
  }, [activeCategory]);

  const handleSelectCategory = (slug: string) => {
    if (slug === "all") {
      router.push("/events", { scroll: false });
    } else {
      router.push(`/events?category=${encodeURIComponent(slug)}`, {
        scroll: false,
      });
    }
  };

  const breadcrumbs = useMemo(() => {
    if (activeCategory.slug === "all") {
      return [{ label: "Events" }];
    }
    return [
      { label: "Events", href: "/events" },
      { label: activeCategory.label },
    ];
  }, [activeCategory]);

  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbs}
        title="Events Hub"
        description="Discover and register for upcoming technical workshops, national hackathons, and tech talks."
      />

      <PageContainer>
        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory.slug === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => handleSelectCategory(cat.slug)}
                className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#0CBAA6] text-white shadow-md shadow-[#0CBAA6]/20"
                    : "border-border/60 bg-card/60 text-muted-foreground border backdrop-blur-xs hover:border-[#0CBAA6]/50 hover:text-[#0CBAA6]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="border-border/60 bg-card/40 rounded-3xl border p-12 text-center backdrop-blur-xs">
            <h3 className="font-heading mb-2 text-xl font-bold">
              No events found
            </h3>
            <p className="text-muted-foreground text-sm">
              There are currently no events matching this filter.
            </p>
          </div>
        )}
      </PageContainer>
    </>
  );
}

export default function EventsPage() {
  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <Suspense
        fallback={
          <div className="text-muted-foreground container mx-auto px-4 py-20 text-center">
            Loading events...
          </div>
        }
      >
        <EventsContent />
      </Suspense>
    </div>
  );
}
