"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-card-box",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-[#0CBAA6]/10 blur-3xl" />

      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-8">
        <div className="cta-card-box border-border/80 bg-card/70 relative overflow-hidden rounded-3xl border p-10 opacity-0 shadow-xl backdrop-blur-md sm:p-14">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-[#0CBAA6]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#0CBAA6] uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Join the Movement</span>
          </div>

          <h2 className="font-heading text-foreground mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready to Build Something Amazing?
          </h2>

          <p className="text-muted-foreground mx-auto mb-9 max-w-2xl text-base leading-relaxed sm:text-lg">
            Join the YenTech community, participate in our upcoming hackathons,
            and collaborate with passionate builders shaping the tech ecosystem.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/member">
              <Button
                size="lg"
                className="rounded-full border-none bg-[#0CBAA6] px-8 py-6 text-base font-semibold text-white shadow-md shadow-[#0CBAA6]/25 transition-all duration-300 hover:bg-[#0a9e8d] hover:shadow-lg hover:shadow-[#0CBAA6]/35"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Join the Community
              </Button>
            </Link>

            <Link href="/projects/submit">
              <Button
                size="lg"
                variant="outline"
                className="border-border/80 bg-background dark:bg-card hover:bg-muted dark:hover:bg-muted rounded-full px-8 py-6 text-base font-semibold shadow-xs transition-all duration-300 hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
              >
                Submit a Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
