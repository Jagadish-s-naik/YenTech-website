import { Heart, MessageSquare, ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  id: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
  imageUrl: string;
  likes: number;
  comments: number;
  repoUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="bg-background group flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md">
      <div className="bg-muted/40 relative flex h-48 w-full items-center justify-center overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="secondary"
                className="gap-2 rounded-full"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </Button>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="secondary"
                className="gap-2 rounded-full"
              >
                <Code className="h-4 w-4" /> Code
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
        <p className="text-muted-foreground mb-3 text-xs">
          by {project.author}
        </p>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-sm">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-muted-foreground rounded px-2 py-0.5 text-[10px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-muted-foreground flex gap-4">
            <button className="flex items-center gap-1 text-xs transition-colors hover:text-red-500">
              <Heart className="h-4 w-4" />
              <span>{project.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-xs transition-colors hover:text-blue-500">
              <MessageSquare className="h-4 w-4" />
              <span>{project.comments}</span>
            </button>
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="text-primary text-xs font-medium hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
