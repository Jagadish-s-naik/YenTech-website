import { PageContainer } from "@/components/shared/PageContainer";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Heart,
  MessageSquare,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="border-border/60 bg-muted/20 border-b py-8">
        <PageContainer>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Student Projects
          </Link>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#0CBAA6]/10 px-3 py-1 text-xs font-semibold text-[#0CBAA6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <p className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span>
                  Created by{" "}
                  <strong className="text-foreground">{project.author}</strong>
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2 rounded-full bg-[#0CBAA6] font-semibold text-white hover:bg-[#0a9e8d]">
                    <ExternalLink className="h-4 w-4" /> Live App / Demo
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
                    variant="outline"
                    className="gap-2 rounded-full font-semibold"
                  >
                    <Code className="h-4 w-4" /> View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </PageContainer>
      </div>

      <PageContainer className="mt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="border-border/60 bg-muted/40 relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="bg-card border-border/60 rounded-2xl border p-6 shadow-xs">
              <h2 className="mb-4 text-xl font-bold">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2.5 text-sm"
                      >
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0CBAA6]/20 text-[10px] font-bold text-[#0CBAA6]">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border-border/60 rounded-2xl border p-6 shadow-xs">
              <h3 className="mb-4 font-bold">Project Info</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs">
                    Creators / Team
                  </span>
                  <div className="mt-1 font-medium">
                    {project.team ? (
                      <ul className="space-y-1">
                        {project.team.map((m, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="bg-muted flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold">
                              {m[0]}
                            </span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      project.author
                    )}
                  </div>
                </div>

                <div className="border-border/60 border-t pt-3">
                  <span className="text-muted-foreground block text-xs">
                    Technologies
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-muted rounded px-2.5 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-border/60 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1 text-red-500">
                      <Heart className="h-4 w-4 fill-red-500/20" />{" "}
                      {project.likes} Likes
                    </span>
                    <span className="flex items-center gap-1 text-blue-500">
                      <MessageSquare className="h-4 w-4" /> {project.comments}{" "}
                      Comments
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {project.demoUrl && (
              <div className="rounded-2xl border border-[#0CBAA6]/30 bg-[#0CBAA6]/5 p-6">
                <h4 className="font-bold text-[#0CBAA6]">
                  Try {project.title} Live
                </h4>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                  Experience the full live application on the web.
                </p>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <Button className="w-full rounded-xl bg-[#0CBAA6] font-semibold text-white shadow-sm hover:bg-[#0a9e8d]">
                    Visit {project.title}{" "}
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
