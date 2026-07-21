"use client";

import { useRef, MouseEvent, useEffect } from "react";
import Link from "next/link";
import {
  Monitor,
  Cpu,
  Palette,
  ShieldCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Domain {
  name: string;
  icon: LucideIcon;
  href: string;
  desc: string;
  tech: string[];
}

const DOMAINS: Domain[] = [
  {
    name: "Web Development",
    icon: Monitor,
    href: "/domains/web-development",
    desc: "Build modern, responsive, and dynamic web applications.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    href: "/domains/ai-ml",
    desc: "Explore the frontiers of artificial intelligence and data science.",
    tech: ["Python", "PyTorch", "Scikit-Learn"],
  },
  {
    name: "Graphics Design",
    icon: Palette,
    href: "/domains/graphics-design",
    desc: "Create stunning visuals and user interfaces.",
    tech: ["Figma", "Illustrator", "Three.js"],
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    href: "/domains/cyber-security",
    desc: "Learn to protect systems and networks from digital attacks.",
    tech: ["Linux", "Wireshark", "Metasploit"],
  },
];

export function DomainCards() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".domain-card-animate",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {DOMAINS.map((domain) => {
        const Icon = domain.icon;
        return (
          <Link
            key={domain.name}
            href={domain.href}
            onMouseMove={handleMouseMove}
            className="domain-card-animate group bg-background/50 hover:bg-background border-border/60 will-change-gp relative flex flex-col items-start overflow-hidden rounded-3xl border p-6 shadow-xs transition-all duration-300 hover:shadow-md"
            style={
              {
                "--mouse-x": "0px",
                "--mouse-y": "0px",
              } as React.CSSProperties
            }
          >
            {/* Spotlight overlay effect */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(var(--primary-rgb,80,200,180),0.05),transparent_80%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 rounded-2xl p-3.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="group-hover:text-primary mb-2 text-xl font-bold tracking-tight transition-colors duration-200">
              {domain.name}
            </h3>

            <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
              {domain.desc}
            </p>

            {/* Tech Badges */}
            <div className="mb-6 flex flex-wrap gap-1.5">
              {domain.tech.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted/80 text-muted-foreground border-border/40 hover:bg-muted hover:text-foreground rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-primary mt-auto flex items-center text-sm font-semibold opacity-90 group-hover:opacity-100">
              Learn more{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
