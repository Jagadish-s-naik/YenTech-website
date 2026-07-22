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
        ".events-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".events-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // 2. Event rows reveal animation
      const rows = gsap.utils.toArray<HTMLElement>(".event-row");
      rows.forEach((row) => {
        const textSide = row.querySelector(".event-text");
        const imageSide = row.querySelector(".event-image");

        if (textSide) {
          gsap.fromTo(
            textSide,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        if (imageSide) {
          gsap.fromTo(
            imageSide,
            { opacity: 0, x: 40, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
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
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0CBAA6]/5 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        <div className="events-header mb-20 text-center opacity-0">
          <h2 className="font-heading text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Events
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-row grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
            >
              {/* Text Side */}
              <div
                className={`event-text flex flex-col justify-center space-y-6 opacity-0 lg:col-span-6 ${
                  event.imageLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest text-[#0CBAA6] uppercase">
                    Hackathon
                  </span>
                  <h3 className="font-heading text-foreground text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
                    {event.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed">
                  {event.description}
                </p>

                <div className="border-border/60 bg-card/40 space-y-3 rounded-2xl border p-4 text-sm font-medium backdrop-blur-xs">
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

                <div className="pt-2">
                  <Link href={`/events/${event.id}/highlights`}>
                    <Button
                      size="lg"
                      className="group rounded-full bg-[#0CBAA6] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#0CBAA6]/20 transition-all duration-300 hover:bg-[#0a9e8d] hover:shadow-lg hover:shadow-[#0CBAA6]/30"
                    >
                      View Highlights
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div
                className={`event-image order-first opacity-0 lg:col-span-6 ${
                  event.imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="group border-border/70 bg-card relative aspect-16/10 overflow-hidden rounded-3xl border shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0CBAA6]/10">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
