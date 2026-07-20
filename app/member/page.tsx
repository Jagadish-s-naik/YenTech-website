import { Calendar as CalendarIcon, Award, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MemberDashboardPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8">
        <h1 className="mb-1 text-2xl font-bold">Welcome back, Jane!</h1>
        <p className="text-muted-foreground text-sm">
          Here's what's happening with your YenTech account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-muted-foreground text-sm font-medium">
              Events Attended
            </h3>
            <CalendarIcon className="text-primary h-4 w-4" />
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="mt-2 text-xs text-green-500">+2 this month</p>
        </div>
        <div className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-muted-foreground text-sm font-medium">
              Badges Earned
            </h3>
            <Award className="h-4 w-4 text-orange-500" />
          </div>
          <p className="text-3xl font-bold">5</p>
          <p className="mt-2 text-xs text-green-500">Top 15% of members</p>
        </div>
        <div className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-muted-foreground text-sm font-medium">
              Projects Submitted
            </h3>
            <LayoutDashboard className="h-4 w-4 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">2</p>
          <p className="text-muted-foreground mt-2 text-xs">
            Latest: EcoTrack App
          </p>
        </div>
        <div className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-muted-foreground text-sm font-medium">
              Current Rank
            </h3>
            <Award className="h-4 w-4 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold">Gold</p>
          <p className="text-muted-foreground mt-2 text-xs">
            200 pts to Platinum
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="bg-background rounded-2xl border p-6 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-bold">Recent Activity</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b pb-6 last:border-0 last:pb-0"
              >
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Award className="text-primary h-4 w-4" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium">
                    Earned the "Frontend Wizard" Badge
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Completed all React modules in the Web Dev domain.
                  </p>
                  <p className="text-muted-foreground mt-2 text-xs">
                    {i} day{i !== 1 && "s"} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-2xl border p-6 shadow-sm">
          <h3 className="mb-6 font-bold">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="border-primary/20 bg-primary/5 rounded-xl border p-4">
              <div className="mb-2 flex items-start justify-between">
                <span className="text-primary text-xs font-medium">
                  Tomorrow
                </span>
              </div>
              <p className="mb-1 text-sm font-semibold">
                Advanced Next.js Routing
              </p>
              <p className="text-muted-foreground text-xs">2:00 PM - Online</p>
            </div>
            <div className="rounded-xl border p-4">
              <div className="mb-2 flex items-start justify-between">
                <span className="text-muted-foreground text-xs font-medium">
                  Oct 20
                </span>
              </div>
              <p className="mb-1 text-sm font-semibold">
                Cyber Security Seminar
              </p>
              <p className="text-muted-foreground text-xs">
                10:00 AM - Seminar Hall B
              </p>
            </div>
            <Button className="mt-2 w-full" variant="outline">
              Browse Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
