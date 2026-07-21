"use client";

import { useEffect, useRef } from "react";
import { Users, Code2, Calendar, Trophy } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    label: "Members",
    display: "50+",
    icon: Users,
    iconBg:
      "bg-purple-500/10 text-purple-500 dark:bg-purple-400/20 dark:text-purple-400",
  },
  {
    label: "Projects",
    display: "5+",
    icon: Code2,
    iconBg:
      "bg-teal-500/10 text-teal-500 dark:bg-teal-400/20 dark:text-teal-400",
  },
  {
    label: "Events",
    display: "5+",
    icon: Calendar,
    iconBg:
      "bg-rose-500/10 text-rose-500 dark:bg-rose-400/20 dark:text-rose-400",
  },
  {
    label: "Prizes",
    display: "₹1.5L+",
    icon: Trophy,
    iconBg:
      "bg-amber-500/10 text-amber-500 dark:bg-amber-400/20 dark:text-amber-400",
  },
];

export function StatsRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto mb-8 max-w-6xl px-4 py-8 sm:px-8"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.label}
              className="stat-card bg-card/80 border-border/80 flex items-center gap-4 rounded-2xl border p-5 opacity-0 shadow-xs transition-all duration-200 hover:border-[#0CBAA6]/50 hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}
              >
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <div className="font-heading text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.display}
                </div>
                <div className="text-muted-foreground text-xs font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
