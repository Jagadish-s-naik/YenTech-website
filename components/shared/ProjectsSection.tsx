"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOCK_PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredProjects = MOCK_PROJECTS.slice(0, 3);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal animation
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Cards reveal animation
      gsap.fromTo(
        ".project-card-animate",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
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
      className="bg-muted/10 border-border/40 relative border-y py-24 md:py-32"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0CBAA6]/5 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="projects-header mb-16 text-center opacity-0">
          <span className="mb-3 inline-block rounded-full bg-[#0CBAA6]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0CBAA6] uppercase">
            Innovation Showcase
          </span>
          <h2 className="font-heading text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
            Explore cutting-edge applications, AI platforms, and developer tools
            built by student engineers in the YenTech community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card-animate group bg-card/70 hover:bg-card border-border/80 relative flex flex-col overflow-hidden rounded-3xl border opacity-0 shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBAA6]/50 hover:shadow-xl hover:shadow-[#0CBAA6]/10"
            >
              {/* Thumbnail Image Container */}
              <div className="bg-muted/30 relative flex h-52 w-full items-center justify-center overflow-hidden border-b p-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with direct action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="gap-1.5 rounded-full bg-[#0CBAA6] text-xs font-medium text-white hover:bg-[#0a9e8d]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </Button>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-1.5 rounded-full text-xs font-medium"
                      >
                        <Code className="h-3.5 w-3.5" /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6]">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-3 text-xs font-medium">
                  by {project.author}
                </p>

                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted/80 text-muted-foreground border-border/50 rounded-full border px-3 py-0.5 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link to detail page */}
                <div className="mt-auto border-t pt-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center text-xs font-semibold text-[#0CBAA6] transition-colors duration-200 hover:text-[#0a9e8d]"
                  >
                    View Project Details
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-border/80 group rounded-full px-8 py-6 text-base font-semibold shadow-xs transition-all duration-300 hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
            >
              Explore All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
