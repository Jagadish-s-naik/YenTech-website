import { Button } from "@/components/ui/button";

export default function MyEventsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold">My Events</h1>
        <p className="text-muted-foreground text-sm">
          Manage the events you are attending.
        </p>
      </div>
      <div className="bg-background text-muted-foreground flex min-h-[40vh] items-center justify-center rounded-2xl border p-6 shadow-sm">
        <div className="text-center">
          <p className="mb-4">You have 2 upcoming events.</p>
          <Button variant="outline">Browse More Events</Button>
        </div>
      </div>
    </div>
  );
}
