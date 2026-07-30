"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { CoreTeamSection } from "@/components/shared/CoreTeamSection";
import { CommunitySection } from "@/components/shared/CommunitySection";
import { YenTechIconDotGrid } from "@/components/shared/YenTechIconDotGrid";
import YenTechLogo from "@/public/yentech.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Mission Reveal Timeline
      gsap.fromTo(
        ".mission-card",
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mission-card",
            start: "top 85%",
          },
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-background min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="About Us"
        description="The story, leaders, and team powering Yenepoya School of Engineering & Technology's official tech community."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Hero Mission Section with YenTech Icon Dot Grid & Content */}
      <section className="bg-background relative overflow-hidden py-14 sm:py-20 md:py-28">
        <div className="max-w-8xl relative z-10 container mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Interactive YenTech Icon Dot Grid */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center px-6 opacity-20 sm:px-10 lg:pointer-events-auto lg:relative lg:inset-auto lg:col-span-5 lg:flex lg:opacity-100">
              <div className="relative aspect-[103.38/75.37] w-full max-w-120">
                <YenTechIconDotGrid />
              </div>
            </div>

            {/* Right Column: Logo & Description */}
            <div className="relative z-10 flex flex-col justify-center space-y-6 text-center lg:col-span-7 lg:text-left">
              <div className="space-y-16">
                <div className="text-foreground flex items-center justify-center">
                  <YenTechLogo className="h-16 w-auto max-w-full sm:h-20 md:h-24" />
                </div>

                <p className="text-muted-foreground text-base leading-relaxed font-normal sm:text-lg md:text-xl">
                  YenTech is the official tech community of Yenepoya School of
                  Engineering & Technology. Engineered to bridge classroom
                  concepts with production software engineering, we provide a
                  collaborative environment for student developers, security
                  researchers, and designers to build flagship tools, compete in
                  national hackathons, and shape the tech leaders of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Leadership Section */}
      <div
        id="team"
        className="border-border/40 bg-muted/30 dark:bg-card/40 border-t"
      >
        <CoreTeamSection />
      </div>

      {/* Community CTA Band */}
      <CommunitySection />
    </div>
  );
}
