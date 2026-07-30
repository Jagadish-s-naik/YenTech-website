"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CommunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".community-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".community-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-10 md:py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        <div className="community-card border-border/80 bg-card relative overflow-hidden rounded-3xl border p-8 text-center opacity-0 shadow-lg sm:p-12 md:p-16">
          {/* Subtle ambient lighting inside card */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[#0CBAA6]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-4 py-1.5 text-xs font-semibold text-[#0CBAA6]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Join the Community</span>
            </div>

            <h2 className="font-heading text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Build Something Real?
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              YenTech is open to all students across technology, design, and
              engineering disciplines. Join our workshops, build flagship
              projects, and network with passionate peers.
            </p>

            <div className="flex justify-center pt-4">
              <a
                href="https://www.linkedin.com/company/yentech-community/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group rounded-full border-none bg-[#0CBAA6] px-8 py-6 text-base font-semibold text-white shadow-sm shadow-[#0CBAA6]/20 transition-all duration-300 hover:bg-[#0a9e8d]"
                >
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
