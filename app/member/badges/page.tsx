import { Zap, Shield, Trophy, Award, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EARNED_BADGES = [
  {
    id: "1",
    name: "Frontend Wizard",
    icon: Zap,
    earnedDate: "Earned Oct 2026",
    desc: "Completed React & Next.js challenges.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    id: "2",
    name: "Backend Guru",
    icon: Shield,
    earnedDate: "Earned Sep 2026",
    desc: "Built 3 secure REST API endpoints.",
    color: "text-[#0CBAA6]",
    bg: "bg-[#0CBAA6]/10 border-[#0CBAA6]/20",
  },
];

const LOCKED_BADGES = [
  {
    id: "3",
    name: "Hackathon Champion",
    icon: Trophy,
    desc: "Win 1st place in a YenTech hackathon.",
  },
  {
    id: "4",
    name: "Open Source Contributor",
    icon: Award,
    desc: "Submit 5 merged pull requests.",
  },
];

export default function MyBadgesPage() {
  return (
    <div className="flex-1 overflow-auto p-6 md:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-foreground mb-1 text-2xl font-bold tracking-tight">
            My Badges
          </h1>
          <p className="text-muted-foreground text-sm">
            View your earned badges, achievements, and unlockable rewards.
          </p>
        </div>
        <Link href="/badges">
          <Button
            size="sm"
            className="rounded-full bg-[#0CBAA6] px-5 text-xs font-semibold text-white shadow-sm hover:bg-[#0a9e8d]"
          >
            View Leaderboard
          </Button>
        </Link>
      </div>

      <div className="space-y-8">
        {/* Earned Badges Section */}
        <div>
          <h2 className="text-muted-foreground mb-4 text-sm font-bold tracking-wider uppercase">
            Earned Badges ({EARNED_BADGES.length})
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {EARNED_BADGES.map((badge) => (
              <div
                key={badge.id}
                className="group border-border/60 bg-card relative flex flex-col items-center rounded-xl border p-5 text-center shadow-xs transition-all duration-200 hover:border-[#0CBAA6]/40"
              >
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full border ${badge.bg} ${badge.color}`}
                >
                  <badge.icon className="h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-1 text-sm font-bold">
                  {badge.name}
                </h3>
                <p className="text-muted-foreground mb-3 text-xs leading-relaxed">
                  {badge.desc}
                </p>
                <span className="mt-auto rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                  {badge.earnedDate}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Badges Section */}
        <div>
          <h2 className="text-muted-foreground mb-4 text-sm font-bold tracking-wider uppercase">
            Locked Achievements
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {LOCKED_BADGES.map((badge) => (
              <div
                key={badge.id}
                className="border-border/40 bg-muted/20 relative flex flex-col items-center rounded-xl border p-5 text-center opacity-70"
              >
                <div className="text-muted-foreground/60 absolute top-3 right-3">
                  <Lock className="h-3.5 w-3.5" />
                </div>
                <div className="border-border/40 bg-muted/40 text-muted-foreground mb-3 flex h-14 w-14 items-center justify-center rounded-full border">
                  <badge.icon className="h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-1 text-sm font-bold">
                  {badge.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
