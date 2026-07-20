import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface EventProps {
  id: string;
  title: string;
  type: "Workshop" | "Hackathon" | "Seminar";
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  imageUrl?: string;
  status?: "upcoming" | "completed";
}

export function EventCard({ event }: { event: EventProps }) {
  const typeColors = {
    Workshop: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Hackathon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Seminar: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  const isCompleted = event.status === "completed";

  return (
    <div
      className={`bg-background flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md ${isCompleted ? "opacity-80" : ""}`}
    >
      {event.imageUrl && (
        <div className="bg-muted relative h-48 w-full overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className={`h-full w-full object-cover transition-transform hover:scale-105 ${isCompleted ? "grayscale-[0.5]" : ""}`}
          />
          {isCompleted && (
            <div className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
              Completed
            </div>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeColors[event.type]}`}
          >
            {event.type}
          </span>
          <div className="text-muted-foreground flex items-center gap-1 text-xs font-medium">
            <Users className="h-3 w-3" />
            {event.attendees} attended
          </div>
        </div>

        <h3 className="mb-2 line-clamp-2 text-xl font-bold">{event.title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 text-sm">
          {event.description}
        </p>

        <div className="mb-6 space-y-2">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        <Link href={`/events/${event.id}`} className="mt-auto w-full">
          <Button
            className="w-full"
            variant={isCompleted ? "secondary" : "default"}
          >
            {isCompleted ? "View Highlights" : "View Details"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
