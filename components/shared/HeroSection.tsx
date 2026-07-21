"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.0 },
          "-=0.6",
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.8",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.96, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-background relative overflow-hidden pt-24 pb-32"
    >
      {/* Background decoration */}
      <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-position-[bottom_1px_center] dark:border-b dark:border-slate-100/5 dark:bg-bottom"></div>
      <div className="from-primary/40 absolute top-0 left-1/2 -z-10 h-125 w-250 -translate-x-1/2 rounded-full bg-linear-to-tr to-blue-500/40 opacity-30 blur-3xl dark:opacity-20"></div>

      <div className="relative container mx-auto px-4 text-center sm:px-8">
        <div className="hero-badge bg-muted/50 mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium opacity-0">
          <Sparkles className="text-primary h-4 w-4" />
          <span>Welcome to the future of technology</span>
        </div>

        <h1 className="hero-title font-heading mb-8 text-5xl font-extrabold tracking-tight opacity-0 sm:text-6xl md:text-7xl">
          Empowering Innovators <br className="hidden sm:block" />
          at{" "}
          <span className="bg-linear-to-r from-[#0cbaa6] to-[#dbfb02] bg-clip-text text-transparent">
            YenTech
          </span>
        </h1>

        <p className="hero-desc text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed opacity-0 sm:text-xl">
          Yenepoya School of Engineering & Technology's premier tech community.
          Explore domains, participate in events, and build projects that
          matter.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="hero-cta w-full opacity-0 sm:w-auto">
            <Link href="/domains">
              <Button
                size="lg"
                className="w-full gap-2 rounded-full font-semibold sm:w-auto"
              >
                Explore Domains <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="hero-cta w-full opacity-0 sm:w-auto">
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full font-semibold sm:w-auto"
              >
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
