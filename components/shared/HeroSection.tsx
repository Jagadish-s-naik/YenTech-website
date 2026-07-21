"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { StatsRibbon } from "./StatsRibbon";
import { DotGridBackground } from "./DotGridBackground";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-logo",
        { opacity: 0, y: 15, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
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
          ".hero-cta",
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-background relative flex flex-col overflow-hidden md:h-[calc(100svh-5rem)]"
    >
      <DotGridBackground />
      <div className="relative z-10 container mx-auto flex max-w-4xl flex-1 flex-col justify-center px-4 py-8 text-center sm:px-8">
        {/* Brand Logo & Name Badge */}
        <div className="hero-logo mb-6 inline-flex items-center justify-center gap-2.5 opacity-0">
          <img src="/yentech.svg" alt="YenTech Logo" className="h-16 w-16" />
          <span className="font-heading text-foreground text-3xl font-bold tracking-widest uppercase">
            YENTECH
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title font-heading text-foreground mb-6 text-4xl leading-[1.1] font-medium tracking-tight opacity-0 md:text-6xl">
          Empowering the Next <br />
          Generation of Innovators
        </h1>

        {/* Hero Subtitle Description */}
        <div className="hero-desc text-muted-foreground mx-auto px-4 pb-12 text-center text-base leading-relaxed opacity-0 md:text-lg">
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
                className="w-full rounded-full bg-[#0CBAA6] px-8 py-6 text-base font-semibold text-white shadow-md shadow-[#0CBAA6]/20 transition-all duration-200 hover:bg-[#0a9e8d] sm:w-auto"
              >
                Upcoming Events
              </Button>
            </Link>
          </div>
          <div className="hero-cta w-full opacity-0 sm:w-auto">
            <Link href="/domains">
              <Button
                size="lg"
                variant="outline"
                className="border-border/80 bg-background dark:bg-card hover:bg-muted dark:hover:bg-muted w-full rounded-full px-8 py-6 text-base font-semibold transition-all duration-200 hover:border-[#0CBAA6] hover:text-[#0CBAA6] sm:w-auto shadow-xs"
              >
                Explore Domains
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <StatsRibbon />
    </section>
  );
}
