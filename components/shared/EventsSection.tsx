"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { EventItem } from "@/types/event";

gsap.registerPlugin(ScrollTrigger);

interface EventsSectionProps {
  events: EventItem[];
}

export function EventsSection({ events }: EventsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal animation
      gsap.fromTo(
        ".events-eyebrow",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".events-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".events-title",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".events-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".events-subtitle",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".events-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // 2. Event rows reveal animation with staggered card entry
      const rows = gsap.utils.toArray<HTMLElement>(".event-row");
      rows.forEach((row, idx) => {
        const textSide = row.querySelector(".event-text");
        const imageSide = row.querySelector(".event-image");
        const delay = idx * 0.15;

        gsap.fromTo(
          row,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );

        if (textSide) {
          gsap.fromTo(
            textSide,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: delay + 0.1,
              ease: "power3.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        if (imageSide) {
          gsap.fromTo(
            imageSide,
            { opacity: 0, x: 20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: delay + 0.15,
              ease: "power3.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background ambient lighting - Dual offset glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="events-header mb-20 text-center">
          <span className="events-eyebrow mb-3 inline-block rounded-full bg-[#0CBAA6]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#0CBAA6] uppercase opacity-0">
            Featured Events
          </span>
          <h2 className="events-title font-heading text-foreground mb-4 text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl">
            Where Ideas Collide
          </h2>
          <p className="events-subtitle text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed opacity-0 md:text-lg">
            Immerse yourself in high-energy hackathons, technical workshops, and
            talks led by industry leaders and top student builders.
          </p>
        </div>

        {/* Event Cards List */}
        <div className="flex flex-col gap-16 md:gap-24">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-row border-border/40 bg-card/20 relative grid grid-cols-1 items-stretch gap-8 rounded-3xl border p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-12"
            >
              {/* Text Side */}
              <div
                className={`event-text flex flex-col justify-center space-y-6 opacity-0 lg:col-span-7 ${
                  event.imageLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#0CBAA6]/15 px-3 py-1 text-xs font-bold tracking-wider text-[#0CBAA6] uppercase">
                      {event.type || "Hackathon"}
                    </span>
                    <span className="bg-foreground/10 text-foreground/70 rounded-full px-3 py-1 text-xs font-semibold uppercase">
                      Completed
                    </span>
                  </div>
                  <Link href={`/events/${event.id}`}>
                    <h3 className="font-heading text-foreground text-2xl leading-tight font-bold tracking-tight transition-colors hover:text-[#0CBAA6] sm:text-3xl md:text-4xl">
                      {event.title}
                    </h3>
                  </Link>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed">
                  {event.description}
                </p>

                <div className="border-border/60 bg-card/60 space-y-3 rounded-2xl border p-4 text-sm font-medium backdrop-blur-md">
                  <div className="text-foreground/90 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0CBAA6]/10 text-[#0CBAA6]">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <span>{event.date}</span>
                  </div>
                  <div className="text-foreground/90 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0CBAA6]/10 text-[#0CBAA6]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Image Side with flex-1 image filling space */}
              <div
                className={`event-image order-first flex h-full flex-col justify-between gap-4 opacity-0 lg:col-span-5 ${
                  event.imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Link href={`/events/${event.id}`} className="min-h-55 w-full flex-1">
                  <div className="border-border/70 bg-card relative h-full w-full overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 cursor-pointer">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>

                <Link
                  href={`/events/${event.id}`}
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="group w-full rounded-full border-none bg-[#0CBAA6] py-3 text-sm font-semibold text-white shadow-md shadow-[#0CBAA6]/20 transition-all duration-300 hover:bg-[#0a9e8d]"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-16 text-center">
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="border-border/80 group hover:border-foreground/40 hover:text-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xs transition-all duration-300"
            >
              Explore All Events
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
