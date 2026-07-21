"use client";

import { useEffect, useRef } from "react";
import { Users, Code2, Calendar, Trophy } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    label: "Active Members",
    target: 450,
    suffix: "+",
    icon: Users,
    color: "text-blue-500",
  },
  {
    label: "Shipped Projects",
    target: 15,
    suffix: "+",
    icon: Code2,
    color: "text-emerald-500",
  },
  {
    label: "Workshops & Hackathons",
    target: 25,
    suffix: "+",
    icon: Calendar,
    color: "text-purple-500",
  },
  {
    label: "Earned Prizes",
    target: 150000,
    prefix: "₹",
    suffix: "+",
    icon: Trophy,
    color: "text-amber-500",
  },
];

export function StatsRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in the container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );

      // Count animations for each stat
      STATS.forEach((stat, index) => {
        const element = countsRef.current[index];
        if (!element) return;

        const countObj = { val: 0 };

        gsap.to(countObj, {
          val: stat.target,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (element) {
              if (stat.target >= 1000) {
                // Format Indian Rupee style or simple locale style
                element.innerText = Math.floor(countObj.val).toLocaleString(
                  "en-IN",
                );
              } else {
                element.innerText = Math.floor(countObj.val).toString();
              }
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container mx-auto px-4 py-8 sm:px-8">
      <div className="bg-card/50 border-border/60 will-change-gp grid grid-cols-2 gap-6 rounded-3xl border p-8 shadow-sm backdrop-blur-sm lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-start sm:text-left"
          >
            <div className={`bg-muted/60 rounded-2xl p-3 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-heading flex items-center justify-center text-2xl font-bold tracking-tight sm:justify-start sm:text-3xl">
                {stat.prefix && <span>{stat.prefix}</span>}
                <span
                  ref={(el) => {
                    countsRef.current[i] = el;
                  }}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-primary">{stat.suffix}</span>
                )}
              </div>
              <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
