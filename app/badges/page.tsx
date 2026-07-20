import { PageHeader } from "@/components/shared/PageHeader";
import { Award, Star, Zap, Shield, Trophy } from "lucide-react";

const BADGES = [
  {
    name: "Frontend Wizard",
    icon: Zap,
    desc: "Completed all React and UI challenges.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    name: "Backend Guru",
    icon: Shield,
    desc: "Built 3 secure REST APIs.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "Hackathon Champion",
    icon: Trophy,
    desc: "Won 1st place in the annual hackathon.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const LEADERBOARD = [
  { rank: 1, name: "Jane Smith", points: 2450, badges: 12 },
  { rank: 2, name: "John Doe", points: 2100, badges: 9 },
  { rank: 3, name: "Alice Johnson", points: 1950, badges: 8 },
  { rank: 4, name: "Bob Brown", points: 1800, badges: 7 },
  { rank: 5, name: "Charlie Davis", points: 1650, badges: 6 },
];

export default function BadgesPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Badges & Leaderboard"
        description="Compete, earn badges, and climb the ranks."
      />

      <div className="container mx-auto mt-16 max-w-5xl space-y-16 px-4 sm:px-8">
        <section>
          <h2 className="mb-6 text-2xl font-bold">Available Badges</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BADGES.map((badge, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${badge.bg} ${badge.color}`}
                >
                  <badge.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{badge.name}</h3>
                <p className="text-muted-foreground text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Top Members</h2>
          <div className="bg-background overflow-hidden rounded-2xl border shadow-sm">
            <div className="bg-muted/50 grid grid-cols-4 p-4 text-sm font-semibold">
              <div>Rank</div>
              <div className="col-span-2">Name</div>
              <div className="text-right">Points</div>
            </div>
            {LEADERBOARD.map((user, i) => (
              <div
                key={i}
                className="hover:bg-muted/30 grid grid-cols-4 items-center border-b p-4 transition-colors last:border-0"
              >
                <div className="flex items-center gap-2 font-bold">
                  {user.rank <= 3 && (
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  )}
                  #{user.rank}
                </div>
                <div className="col-span-2 font-medium">
                  {user.name}{" "}
                  <span className="text-muted-foreground ml-2 text-xs">
                    ({user.badges} badges)
                  </span>
                </div>
                <div className="text-primary text-right font-bold">
                  {user.points}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
