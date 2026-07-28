"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOCK_PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredProject =
    MOCK_PROJECTS.find((p) => p.featured) || MOCK_PROJECTS[0];
  const secondaryProjects = MOCK_PROJECTS.filter(
    (p) => p.id !== featuredProject.id,
  ).slice(0, 2);

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

      // Featured card reveal animation
      gsap.fromTo(
        ".project-featured-card",
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".project-featured-card",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Secondary grid cards reveal animation
      gsap.fromTo(
        ".project-secondary-card",
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".projects-secondary-grid",
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

        {/* Featured Card (Full Width Hero Card) */}
        {featuredProject && (
          <div className="project-featured-card group border-border/70 bg-card/60 relative mb-10 overflow-hidden rounded-3xl border opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="grid grid-cols-1 items-center lg:grid-cols-12">
              {/* Image Side */}
              <div className="relative aspect-16/10 w-full overflow-hidden lg:col-span-6 lg:aspect-auto lg:h-full">
                <img
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover object-left"
                />
              </div>

              {/* Info Side */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10">
                <div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold tracking-widest text-[#0CBAA6] uppercase">
                      {featuredProject.tags[0] || "AI / ML"}
                    </span>
                    <span className="rounded-full bg-[#0CBAA6] px-3 py-0.5 text-[11px] font-bold text-white shadow-xs">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="font-heading text-foreground mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {featuredProject.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-xs font-medium">
                    by {featuredProject.author}
                  </p>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-8 flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#0CBAA6]/20 bg-[#0CBAA6]/10 px-3 py-1 text-[11px] font-semibold text-[#0CBAA6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Uniform Bottom CTA Bar */}
                <div className="border-border/50 mt-auto flex w-full items-center gap-2 border-t pt-4">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full rounded-full border-none bg-[#0CBAA6] text-xs font-semibold text-white shadow-xs hover:bg-[#0a9e8d]"
                    >
                      View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>

                  {featuredProject.demoUrl && (
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border/80 w-full rounded-full text-xs font-medium"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                        Demo
                      </Button>
                    </a>
                  )}

                  {featuredProject.repoUrl && (
                    <a
                      href={featuredProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border/80 w-full rounded-full text-xs font-medium"
                      >
                        <Code className="mr-1.5 h-3.5 w-3.5" /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Grid (2 Columns) */}
        <div className="projects-secondary-grid grid grid-cols-1 gap-8 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="project-secondary-card group bg-card/60 hover:bg-card border-border/70 relative flex flex-col overflow-hidden rounded-3xl border opacity-0 shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover object-left"
                />
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-widest text-[#0CBAA6] uppercase">
                    {project.tags[0]}
                  </span>
                </div>

                <h3 className="font-heading mb-1 text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6]">
                  {project.title}
                </h3>

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
                      className="rounded-full border border-[#0CBAA6]/20 bg-[#0CBAA6]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0CBAA6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Uniform Bottom CTA Bar */}
                <div className="border-border/50 mt-auto flex w-full items-center gap-2 border-t pt-4">
                  <Link href={`/projects/${project.id}`} className="flex-1">
                    <Button
                      size="sm"
                      className="w-full rounded-full border-none bg-[#0CBAA6] text-xs font-semibold text-white shadow-xs hover:bg-[#0a9e8d]"
                    >
                      View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border/80 w-full rounded-full text-xs font-medium"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                        Demo
                      </Button>
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border/80 w-full rounded-full text-xs font-medium"
                      >
                        <Code className="mr-1.5 h-3.5 w-3.5" /> Code
                      </Button>
                    </a>
                  )}
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
              className="border-border/80 group hover:border-foreground/40 hover:text-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xs transition-all duration-300"
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
