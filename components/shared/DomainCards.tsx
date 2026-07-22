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
    desc: "Build modern, responsive, and dynamic web applications with state-of-the-art tooling.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    href: "/domains/ai-ml",
    desc: "Explore the frontiers of artificial intelligence, neural networks, and data science.",
    tech: ["Python", "PyTorch", "Scikit-Learn"],
  },
  {
    name: "Graphics Design",
    icon: Palette,
    href: "/domains/graphics-design",
    desc: "Create visually stunning UI/UX, brand identities, and 3D web graphics.",
    tech: ["Figma", "Illustrator", "Three.js"],
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    href: "/domains/cyber-security",
    desc: "Learn ethical hacking, defense mechanisms, and secure network infrastructure.",
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
        { opacity: 0, y: 40, scale: 0.96 },
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

    // Mouse spotlight values
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // Subtle 3D Tilt calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
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
            onMouseLeave={handleMouseLeave}
            className="domain-card-animate group bg-card/60 hover:bg-card border-border/80 relative flex flex-col items-start overflow-hidden rounded-3xl border p-7 shadow-sm backdrop-blur-xs transition-all duration-300 will-change-transform hover:border-[#0CBAA6]/50 hover:shadow-xl hover:shadow-[#0CBAA6]/10"
            style={
              {
                "--mouse-x": "0px",
                "--mouse-y": "0px",
                transition:
                  "transform 0.2s cubic-bezier(0.1, 0.4, 0.2, 1), border-color 0.3s, shadow 0.3s",
              } as React.CSSProperties
            }
          >
            {/* Radial Spotlight overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(12,186,166,0.12),transparent_80%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-5 rounded-2xl bg-[#0CBAA6]/10 p-4 text-[#0CBAA6] shadow-[#0CBAA6]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0CBAA6] group-hover:text-white group-hover:shadow-md">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mb-2.5 text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6]">
              {domain.name}
            </h3>

            <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
              {domain.desc}
            </p>

            {/* Tech Badges */}
            <div className="mb-6 flex flex-wrap gap-2">
              {domain.tech.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted/80 text-muted-foreground border-border/50 group-hover:text-foreground rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 group-hover:border-[#0CBAA6]/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center text-sm font-semibold text-[#0CBAA6] opacity-90 group-hover:opacity-100">
              Explore Domain
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
