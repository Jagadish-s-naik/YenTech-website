import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { MOCK_PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <PageHeader
        breadcrumbs={[{ label: "Projects" }]}
        title="Student Projects"
        description="Explore innovative software, hardware, and AI projects built by the YenTech student community."
      />

      <PageContainer>
        <div className="mb-10 flex flex-wrap gap-2.5">
          <button className="rounded-full bg-[#0CBAA6] px-5 py-2 text-xs font-semibold text-white shadow-md shadow-[#0CBAA6]/20 transition-all">
            All Projects
          </button>
          <button className="border-border/60 bg-card/60 text-muted-foreground rounded-full border px-5 py-2 text-xs font-semibold backdrop-blur-xs transition-all hover:border-[#0CBAA6]/50 hover:text-[#0CBAA6]">
            Web Dev
          </button>
          <button className="border-border/60 bg-card/60 text-muted-foreground rounded-full border px-5 py-2 text-xs font-semibold backdrop-blur-xs transition-all hover:border-[#0CBAA6]/50 hover:text-[#0CBAA6]">
            AI / ML
          </button>
          <button className="border-border/60 bg-card/60 text-muted-foreground rounded-full border px-5 py-2 text-xs font-semibold backdrop-blur-xs transition-all hover:border-[#0CBAA6]/50 hover:text-[#0CBAA6]">
            Mobile Apps
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
