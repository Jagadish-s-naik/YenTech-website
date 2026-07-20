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
            },
            {
              label: "Pending Projects",
              value: "12",
              icon: FileText,
              color: "text-orange-500",
            },
            {
              label: "Active Events",
              value: "4",
              icon: Activity,
              color: "text-green-500",
            },
            {
              label: "System Status",
              value: "Healthy",
              icon: Settings,
              color: "text-primary",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </h3>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-background text-muted-foreground flex min-h-[400px] items-center justify-center rounded-2xl border p-6 shadow-sm">
          Detailed management tables and charts will appear here.
        </div>
      </div>
    </div>
  );
}
