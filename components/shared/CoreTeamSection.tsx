"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CORE_TEAM, DOMAIN_HEADS, ORGANIZING_COMMITTEE } from "@/data/team";
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { Crown, Sparkles, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CoreTeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".team-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Core Team Cards reveal
      gsap.fromTo(
        ".core-card-anim",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#core-team-block",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Domain Heads reveal
      gsap.fromTo(
        ".domain-card-anim",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#domain-heads-block",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Organizing Committee reveal
      gsap.fromTo(
        ".committee-card-anim",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#committee-block",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <div className="container mx-auto max-w-6xl space-y-20 px-4 sm:px-8">
        {/* Section Header */}
        <div className="team-header text-center opacity-0">
          <span className="mb-3 inline-block rounded-full bg-[#0CBAA6]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#0CBAA6] uppercase">
            Leadership & Organization
          </span>
          <h2 className="font-heading text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Meet the Team
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
            The student leaders, domain leads, and organizing committee driving
            YenTech&apos;s events and initiatives.
          </p>
        </div>

        {/* 1. Core Team Block */}
        <div id="core-team-block" className="space-y-8">
          <div className="border-border/40 flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-xl border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 text-[#0CBAA6]">
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  Core Team
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Executive leadership guiding YenTech
                </p>
              </div>
            </div>
            <span className="border-border/40 bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs font-semibold">
              {CORE_TEAM.length} Members
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_TEAM.map((member, index) => (
              <div key={index} className="core-card-anim flex h-full opacity-0">
                <TeamMemberCard
                  {...member}
                  avatarIndex={index}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Domain Heads Block */}
        <div id="domain-heads-block" className="space-y-8">
          <div className="border-border/40 flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-xl border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 text-[#0CBAA6]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  Domain Heads
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Leads directing specialized engineering and design tracks
                </p>
              </div>
            </div>
            <span className="border-border/40 bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs font-semibold">
              {DOMAIN_HEADS.length} Leads
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAIN_HEADS.map((member, index) => (
              <div
                key={index}
                className="domain-card-anim flex h-full opacity-0"
              >
                <TeamMemberCard
                  {...member}
                  avatarIndex={index + 6}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Organizing Committee Block */}
        <div id="committee-block" className="space-y-8">
          <div className="border-border/40 flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-xl border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 text-[#0CBAA6]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  Organizing Committee
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Driving event operations and logistics on-ground
                </p>
              </div>
            </div>
            <span className="border-border/40 bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs font-semibold">
              {ORGANIZING_COMMITTEE.length} Members
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ORGANIZING_COMMITTEE.map((member, index) => (
              <div
                key={index}
                className="committee-card-anim flex h-full opacity-0"
              >
                <TeamMemberCard
                  {...member}
                  avatarIndex={index + 13}
                  showRoleStrip={false}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
