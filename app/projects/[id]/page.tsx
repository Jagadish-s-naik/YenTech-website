import { PageContainer } from "@/components/shared/PageContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { ExternalLink, Code, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="bg-background relative min-h-screen overflow-hidden pb-16">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <PageHeader
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        title={project.title}
        description={`Created by ${project.author}`}
      >
        <div className="flex items-center gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 rounded-full bg-[#0CBAA6] px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d]">
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </Button>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-border/80 gap-2 rounded-full px-5 py-2 text-xs font-semibold hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
              >
                <Code className="h-3.5 w-3.5" /> Code
              </Button>
            </a>
          )}
        </div>
      </PageHeader>

      <PageContainer>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="bg-muted/40 relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl shadow-sm backdrop-blur-xs">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="border-border/60 bg-card/60 rounded-3xl border p-8 shadow-sm backdrop-blur-xs">
              <h2 className="font-heading mb-4 text-2xl font-bold tracking-tight">
                About the Project
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {project.fullDescription || project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="border-border/50 mt-8 border-t pt-6">
                  <h3 className="font-heading mb-4 text-lg font-bold tracking-tight">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0CBAA6]/15 text-[#0CBAA6]">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-border/60 bg-card/60 rounded-3xl border p-7 shadow-sm backdrop-blur-md">
              <h3 className="font-heading mb-6 text-xl font-bold tracking-tight">
                Project Overview
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs font-semibold tracking-wider uppercase">
                    Creators / Team
                  </span>
                  <div className="mt-2 font-medium">
                    {project.team ? (
                      <ul className="space-y-2">
                        {project.team.map((m, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0CBAA6]/10 text-xs font-bold text-[#0CBAA6]">
                              {m[0]}
                            </span>
                            <span className="text-foreground text-sm font-semibold">
                              {m}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-foreground text-sm font-semibold">
                        {project.author}
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-border/50 border-t pt-4">
                  <span className="text-muted-foreground block text-xs font-semibold tracking-wider uppercase">
                    Technologies Used
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#0CBAA6]/20 bg-[#0CBAA6]/10 px-3 py-1 text-xs font-semibold text-[#0CBAA6]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {project.demoUrl && (
              <div className="rounded-3xl border border-[#0CBAA6]/30 bg-[#0CBAA6]/5 p-7 backdrop-blur-xs">
                <h4 className="font-heading text-lg font-bold text-[#0CBAA6]">
                  Try {project.title} Live
                </h4>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                  Experience the full live application on the web.
                </p>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block"
                >
                  <Button className="w-full rounded-full border-none bg-[#0CBAA6] py-3 text-sm font-semibold text-white shadow-sm shadow-[#0CBAA6]/20 hover:bg-[#0a9e8d]">
                    Visit {project.title}{" "}
                    <ExternalLink className="ml-1.5 h-4 w-4" />
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
