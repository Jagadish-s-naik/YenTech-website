import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { EventProps } from "@/types/event";

export function EventCard({ event }: { event: EventProps }) {
  const isCompleted = event.status === "completed";

  return (
    <div
      className={`border-border/60 bg-card/60 relative flex flex-col overflow-hidden rounded-3xl border shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isCompleted ? "opacity-90" : ""
      }`}
    >
      {event.imageUrl && (
        <Link href={`/events/${event.id}`}>
          <div className="bg-muted relative h-48 w-full cursor-pointer overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className={`h-full w-full object-cover ${
                isCompleted ? "grayscale-[0.3]" : ""
              }`}
            />
            {isCompleted && (
              <div className="border-border/60 bg-card/80 text-foreground absolute top-3 right-3 rounded-full border px-3 py-1 text-xs font-semibold shadow-xs backdrop-blur-sm">
                Completed
              </div>
            )}
          </div>
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-[#0CBAA6]/20 bg-[#0CBAA6]/10 px-3 py-1 text-xs font-bold tracking-wider text-[#0CBAA6] uppercase">
            {event.type}
          </span>
          <div className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
            <Users className="h-3.5 w-3.5 text-[#0CBAA6]" />
            {event.attendees} attended
          </div>
        </div>

        <Link href={`/events/${event.id}`}>
          <h3 className="font-heading mb-2 line-clamp-2 text-xl font-bold tracking-tight transition-colors hover:text-[#0CBAA6]">
            {event.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
          {event.description}
        </p>

        <div className="border-border/50 bg-card/40 mb-6 space-y-2.5 rounded-2xl border p-4 text-xs font-medium backdrop-blur-xs">
          <div className="text-foreground/90 flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0CBAA6]/10 text-[#0CBAA6]">
              <Calendar className="h-3.5 w-3.5" />
            </div>
            <span>{event.date}</span>
          </div>
          <div className="text-foreground/90 flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0CBAA6]/10 text-[#0CBAA6]">
              <Clock className="h-3.5 w-3.5" />
            </div>
            <span>{event.time}</span>
          </div>
          <div className="text-foreground/90 flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0CBAA6]/10 text-[#0CBAA6]">
              <MapPin className="h-3.5 w-3.5" />
            </div>
            <span>{event.location}</span>
          </div>
        </div>

        <Link href={`/events/${event.id}`} className="mt-auto w-full">
          <Button
            className={`w-full rounded-full text-sm font-semibold transition-all duration-300 ${
              isCompleted
                ? "border-border/80 bg-background text-foreground hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
                : "border-none bg-[#0CBAA6] text-white shadow-sm shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d]"
            }`}
            variant={isCompleted ? "outline" : "default"}
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
