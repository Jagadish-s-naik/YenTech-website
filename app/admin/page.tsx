import { Users, FileText, Activity, Settings } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="bg-muted/20 min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage the YenTech platform, users, and content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total Users",
              value: "1,245",
              icon: Users,
              color: "text-blue-500",
              gradient: "from-blue-500 to-blue-300",
              shadow: "hover:shadow-blue-500/10",
              border: "hover:border-blue-500/30",
            },
            {
              label: "Pending Projects",
              value: "12",
              icon: FileText,
              color: "text-orange-500",
              gradient: "from-orange-500 to-orange-300",
              shadow: "hover:shadow-orange-500/10",
              border: "hover:border-orange-500/30",
            },
            {
              label: "Active Events",
              value: "4",
              icon: Activity,
              color: "text-green-500",
              gradient: "from-green-500 to-green-300",
              shadow: "hover:shadow-green-500/10",
              border: "hover:border-green-500/30",
            },
            {
              label: "System Status",
              value: "Healthy",
              icon: Settings,
              color: "text-primary",
              gradient: "from-primary to-primary/60",
              shadow: "hover:shadow-primary/10",
              border: "hover:border-primary/30",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-background/80 flex flex-col rounded-2xl border p-6 shadow-sm backdrop-blur-md transition-all duration-300 ${stat.shadow} hover:-translate-y-1 ${stat.border} cursor-default`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </h3>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p
                className={`bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent ${stat.gradient}`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-background/80 rounded-2xl border p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              Recent Activity
            </h2>
            <button className="text-primary text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { id: 1, action: "New user registration", user: "John Doe", time: "2 mins ago" },
              { id: 2, action: "Project submitted", user: "Alice Smith", time: "1 hour ago" },
              { id: 3, action: "Event created: Web Dev Workshop", user: "Admin", time: "3 hours ago" },
              { id: 4, action: "System update applied", user: "System", time: "5 hours ago" },
              { id: 5, action: "New feedback received", user: "Bob Jones", time: "1 day ago" },
            ].map((activity) => (
              <div
                key={activity.id}
                className="border-muted/50 flex items-center gap-4 border-b py-3 last:border-0"
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full text-primary">
                  <Activity className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.action}</p>
                  <p className="text-muted-foreground text-xs">{activity.user}</p>
                </div>
                <div className="text-muted-foreground text-xs">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
