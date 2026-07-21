"use client";

import { useEffect, useRef } from "react";
import { Users, Code2, Calendar, Trophy } from "lucide-react";
import { gsap } from "gsap";

const STATS = [
  {
    id: "members",
    label: "Members",
    targetValue: 50,
    prefix: "",
    suffix: "+",
    icon: Users,
    iconBg:
      "bg-purple-500/10 text-purple-500 dark:bg-purple-400/20 dark:text-purple-400",
  },
  {
    id: "projects",
    label: "Projects",
    targetValue: 5,
    prefix: "",
    suffix: "+",
    icon: Code2,
    iconBg:
      "bg-teal-500/10 text-teal-500 dark:bg-teal-400/20 dark:text-teal-400",
  },
  {
    id: "events",
    label: "Events",
    targetValue: 5,
    prefix: "",
    suffix: "+",
    icon: Calendar,
    iconBg:
      "bg-rose-500/10 text-rose-500 dark:bg-rose-400/20 dark:text-rose-400",
  },
  {
    id: "prizes",
    label: "Prizes",
    targetValue: 1.5,
    prefix: "₹",
    suffix: "L+",
    isDecimal: true,
    icon: Trophy,
    iconBg:
      "bg-amber-500/10 text-amber-500 dark:bg-amber-400/20 dark:text-amber-400",
  },
];

export function StatsRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Fade up cards on page load
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 20, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
        },
      );

      // 2. Increment numbers on page load
      STATS.forEach((stat) => {
        const el = numberRefs.current[stat.id];
        if (!el) return;

        const counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: stat.targetValue,
          duration: 1.8,
          ease: "none",
          delay: 0.4,
          onUpdate: () => {
            if (stat.isDecimal) {
              el.innerText = `${stat.prefix}${counterObj.val.toFixed(1)}${stat.suffix}`;
            } else {
              el.innerText = `${stat.prefix}${Math.floor(counterObj.val)}${stat.suffix}`;
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto mb-8 max-w-6xl px-4 py-6 sm:px-8"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((stat) => {
          const IconComponent = stat.icon;
          const initialDisplay = `${stat.prefix}0${stat.suffix}`;
          return (
            <div
              key={stat.id}
              className="stat-card bg-card/60 border-border/80 hover:border-[#0CBAA6]/40 flex items-center gap-4 rounded-2xl border p-4.5 opacity-0 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-110 ${stat.iconBg}`}
              >
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <div className="font-heading text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
                  <span
                    ref={(el) => {
                      numberRefs.current[stat.id] = el;
                    }}
                  >
                    {initialDisplay}
                  </span>
                </div>
                <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
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
