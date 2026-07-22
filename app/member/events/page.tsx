import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";

const MY_EVENTS = [
  {
    id: "openloop-2026",
    title: "OpenLoop 2026 National Hackathon",
    type: "Hackathon",
    date: "April 26-27, 2026",
    time: "24 Hours",
    location: "YMK Auditorium, Kulur Campus",
    status: "Completed",
  },
  {
    id: "project-sankalp",
    title: "Project Sankalp Code4Change National Hackathon",
    type: "Hackathon",
    date: "May 25-26, 2026",
    time: "24 Hours",
    location: "Yendance Zone, Yenepoya University, Deralakatte",
    status: "Completed",
  },
];

export default function MyEventsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-foreground mb-1 text-2xl font-bold tracking-tight">
            My Events
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage your event registrations and upcoming schedules.
          </p>
        </div>
        <Link href="/events">
          <Button
            size="sm"
            className="rounded-full bg-[#0CBAA6] px-5 text-xs font-semibold text-white shadow-sm hover:bg-[#0a9e8d]"
          >
            Browse All Events
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {MY_EVENTS.map((event) => (
          <div
            key={event.id}
            className="border-border/60 bg-card flex flex-col gap-4 rounded-xl border p-5 shadow-xs transition-all duration-200 hover:border-[#0CBAA6]/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#0CBAA6]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0CBAA6]">
                  {event.type}
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500">
                  {event.status}
                </span>
              </div>
              <h3 className="text-foreground text-base font-bold">
                {event.title}
              </h3>
              <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#0CBAA6]" />{" "}
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {event.location}
                </span>
              </div>
            </div>

            <Link href={`/events/${event.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="border-border/70 w-full rounded-full text-xs font-medium hover:border-[#0CBAA6] hover:text-[#0CBAA6] sm:w-auto"
              >
                View Ticket <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
