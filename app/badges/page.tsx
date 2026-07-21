import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Award, Star, Zap, Shield, Trophy } from "lucide-react";

const BADGES = [
  {
    name: "Frontend Wizard",
    icon: Zap,
    desc: "Completed all React, Next.js, and UI component challenges.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "Backend Guru",
    icon: Shield,
    desc: "Built 3 secure REST APIs and database schema migrations.",
    color: "text-[#0CBAA6]",
    bg: "bg-[#0CBAA6]/10 border-[#0CBAA6]/20",
  },
  {
    name: "Hackathon Champion",
    icon: Trophy,
    desc: "Won 1st place in the national-level OpenLoop hackathon.",
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
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
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Gamification & Ranks"
        title="Badges & Leaderboard"
        description="Earn verified achievement badges, complete community challenges, and climb the club leaderboard."
      />

      <PageContainer className="max-w-5xl space-y-12">
        <section>
          <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Available Badges</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BADGES.map((badge, i) => (
              <div
                key={i}
                className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full border ${badge.bg} ${badge.color} transition-transform duration-300 group-hover:scale-105`}
                >
                  <badge.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-foreground transition-colors group-hover:text-[#0CBAA6]">{badge.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Community Leaderboard</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-xs">
            <div className="bg-muted/40 grid grid-cols-4 p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/60">
              <div>Rank</div>
              <div className="col-span-2">Member Name</div>
              <div className="text-right">Total Points</div>
            </div>
            {LEADERBOARD.map((user, i) => (
              <div
                key={i}
                className="grid grid-cols-4 items-center border-b border-border/40 p-4 text-sm transition-colors hover:bg-muted/30 last:border-0"
              >
                <div className="flex items-center gap-2 font-bold text-foreground">
                  {user.rank <= 3 && (
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  )}
                  #{user.rank}
                </div>
                <div className="col-span-2 font-medium text-foreground">
                  {user.name}{" "}
                  <span className="text-muted-foreground ml-2 text-xs">
                    ({user.badges} badges)
                  </span>
                </div>
                <div className="text-right font-bold text-[#0CBAA6]">
                  {user.points} pts
                </div>
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}

