"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import YenepoyaLogo from "@/public/yenepoya.svg";
import YSETLogo from "@/public/yset.svg";
import YenTechLogo from "@/public/yentech.svg";
import { DotGridBackground } from "./DotGridBackground";

const ROTATING_TITLES = [
  "Tech Innovators",
  "Web Developers",
  "AI Engineers",
  "Graphic Designers",
  "Security Analysts",
];

const HERO_STATS = [
  {
    id: "members",
    label: "Members",
    value: "50+",
  },
  {
    id: "projects",
    label: "Projects",
    value: "5+",
  },
  {
    id: "events",
    label: "Events",
    value: "5+",
  },
  {
    id: "prizes",
    label: "Prizes",
    value: "₹1.5L+",
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial Page Load Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-brand-logo",
        { opacity: 0, y: 15, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      )
        .fromTo(
          ".hero-parent-logo",
          { opacity: 0, y: 15, scale: 0.9 },
          { opacity: 0.8, y: 0, scale: 1, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.5",
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.7",
        )
        .fromTo(
          ".hero-stats",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.6",
        );

      // 2. Synchronized Radial Spotlight Orbit & Word Rotator
      let index = 0;
      let loopCount = 0;

      const updateGradientForTimeline = (timelineProgress: number) => {
        const angle = (timelineProgress + 0.65) * 180;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 90 * Math.cos(rad);
        const y = 50 + 110 * Math.sin(rad);

        if (wordRef.current) {
          wordRef.current.style.backgroundImage = `radial-gradient(circle at ${x.toFixed(1)}% ${y.toFixed(1)}%, #D9FB02 0%, #0CBAA6 100%)`;
        }
      };

      const wordLoop = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          loopCount += 1;
        },
        onUpdate: function () {
          updateGradientForTimeline(loopCount + this.progress());
        },
      });

      wordLoop
        .to({}, { duration: 2.2 })
        .to(wordRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        })
        .add(() => {
          index = (index + 1) % ROTATING_TITLES.length;
          if (wordRef.current) {
            wordRef.current.textContent = ROTATING_TITLES[index];
          }
        })
        .set(wordRef.current, { y: 20 })
        .to(wordRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "back.out(1.7)",
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-background relative flex min-h-[calc(100svh-5rem)] flex-col justify-around overflow-hidden"
    >
      <DotGridBackground />
      <div className="relative z-10 container mx-auto flex max-w-4xl flex-col justify-center px-4 py-8 text-center sm:px-8">
        {/* Parent Organization Logos (Yenepoya & YSET) */}
        <div className="hero-parent-logo text-foreground mb-8 inline-flex items-center justify-center gap-4 opacity-0">
          <YenepoyaLogo className="h-6 w-auto object-contain md:h-8" />
          <div className="bg-border/70 h-2 w-px md:h-4" />
          <YSETLogo className="h-6 w-auto object-contain md:h-8" />
        </div>

        {/* Brand Logo & Name Badge */}
        <div className="hero-brand-logo mb-4 inline-flex items-center justify-center gap-2 opacity-0">
          <YenTechLogo className="h-12 w-auto md:h-20" />
        </div>

        {/* Hero Title */}
        <h1 className="hero-title text-foreground font-heading mb-6 text-4xl leading-[1.15] font-medium tracking-tight opacity-0 md:text-6xl">
          <span>Empowering the</span>
          <br />
          <span>Next Generation of</span>
          <br />
          <span className="relative inline-block leading-normal">
            <span
              ref={wordRef}
              className="inline-block bg-clip-text px-1 pb-1 font-bold text-transparent"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 140% -40%, #D9FB02 0%, #0CBAA6 100%)",
              }}
            >
              {ROTATING_TITLES[0]}
            </span>
          </span>
        </h1>

        {/* Hero Subtitle Description */}
        <div className="hero-desc text-muted-foreground mx-auto px-4 pb-8 text-center text-base leading-relaxed opacity-0 md:text-lg">
          <p>
            The official tech community of Yenepoya School of Engineering &
            Technology. <br className="hidden md:block" />
            Dive into diverse domains, join hands-on events, and turn ideas into
            real-world projects.
          </p>
        </div>

        {/* Action Pill Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="hero-cta w-full opacity-0 sm:w-auto">
            <Link href="/events">
              <Button
                size="lg"
                className="w-full rounded-full border-none bg-[#0CBAA6] px-8 py-6 text-base font-semibold text-white shadow-sm shadow-[#0CBAA6]/20 transition-all duration-200 hover:bg-[#0a9e8d] sm:w-auto"
              >
                Upcoming Events
              </Button>
            </Link>
          </div>
          <div className="hero-cta w-full opacity-0 sm:w-auto">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-border/80 bg-background dark:bg-card hover:bg-muted dark:hover:bg-muted w-full rounded-full px-8 py-6 text-base font-semibold shadow-xs transition-all duration-200 hover:border-[#0CBAA6] hover:text-[#0CBAA6] sm:w-auto"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Typographic Hero Stats (Docked at Section Bottom - Flex Space-Around, No Wrapping) */}
      <div className="hero-stats relative z-10 container mx-auto mb-6 max-w-5xl px-2 opacity-0 sm:mb-8 sm:px-8">
        <div className="divide-border/80 flex flex-nowrap items-center justify-around divide-x text-center">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-1 flex-col items-center px-1 text-center sm:px-4 md:px-8"
            >
              <div className="font-heading text-foreground text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-1 text-[10px] font-semibold tracking-wider uppercase sm:text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
