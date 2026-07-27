import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ProjectProps } from "@/types/project";

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="border-border/60 bg-card/60 group relative flex flex-col overflow-hidden rounded-3xl border shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="border-border/50 bg-muted/40 relative flex h-48 w-full items-center justify-center overflow-hidden border-b">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="gap-1.5 rounded-full border-none bg-[#0CBAA6] text-xs font-semibold text-white shadow-xs hover:bg-[#0a9e8d]"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Demo
              </Button>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="border-border/80 gap-1.5 rounded-full bg-background/80 text-xs font-semibold backdrop-blur-xs hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
              >
                <Code className="h-3.5 w-3.5" /> Code
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading mb-1 text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6]">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-3 text-xs font-medium">
          by {project.author}
        </p>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-sm leading-relaxed">
          {project.description}
        </p>

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

        <div className="border-border/50 border-t pt-4">
          <Link href={`/projects/${project.id}`} className="block w-full">
            <Button
              size="sm"
              variant="outline"
              className="border-border/70 w-full rounded-full text-xs font-semibold hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
