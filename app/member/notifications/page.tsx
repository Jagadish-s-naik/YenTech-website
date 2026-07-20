import { Bell, Calendar, Award, MessageSquare } from "lucide-react";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "event",
    title: "Upcoming Event Reminder",
    desc: "Advanced Next.js Routing starts in 2 hours. Don't forget to join!",
    time: "2 hours ago",
    icon: Calendar,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    unread: true,
  },
  {
    id: 2,
    type: "badge",
    title: "New Badge Earned!",
    desc: "You have been awarded the 'Frontend Wizard' badge.",
    time: "1 day ago",
    icon: Award,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    unread: true,
  },
  {
    id: 3,
    type: "system",
    title: "System Update",
    desc: "The member portal will be under maintenance this Sunday.",
    time: "3 days ago",
    icon: Bell,
    color: "text-gray-500",
    bg: "bg-gray-500/10",
    unread: false,
  },
  {
    id: 4,
    type: "message",
    title: "New Comment on Your Project",
    desc: "Someone left a comment on 'EcoTrack Mobile App'.",
    time: "1 week ago",
    icon: MessageSquare,
    color: "text-green-500",
    bg: "bg-green-500/10",
    unread: false,
  },
];

export default function NotificationsPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-bold">Notifications</h1>
          <p className="text-muted-foreground text-sm">
            Stay updated with the latest alerts and activities.
          </p>
        </div>
        <button className="text-primary text-sm font-medium hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="bg-background max-w-4xl overflow-hidden rounded-2xl border shadow-sm">
        {NOTIFICATIONS.length > 0 ? (
          <div className="divide-y">
            {NOTIFICATIONS.map((notif) => (
              <div
                key={notif.id}
                className={`hover:bg-muted/30 flex gap-4 p-6 transition-colors ${notif.unread ? "bg-primary/5" : ""}`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${notif.bg} ${notif.color}`}
                >
                  <notif.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-start justify-between">
                    <h3
                      className={`font-medium ${notif.unread ? "text-foreground font-bold" : "text-muted-foreground"}`}
                    >
                      {notif.title}
                    </h3>
                    <span className="text-muted-foreground ml-4 text-xs whitespace-nowrap">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{notif.desc}</p>
                </div>
                {notif.unread && (
                  <div className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-muted-foreground p-12 text-center">
            <Bell className="mx-auto mb-4 h-12 w-12 opacity-20" />
            <p>You have no new notifications.</p>
          </div>
        )}
      </div>
    </div>
  );
}
