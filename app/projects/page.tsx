import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import { MOCK_PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        badge="Community Showcase"
        title="Student Projects"
        description="Explore innovative software, hardware, and AI projects built by the YenTech student community."
      />

      <PageContainer>
        <div className="border-border/60 mb-8 flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex scrollbar-none gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button className="rounded-full bg-[#0CBAA6] px-4 py-1.5 text-xs font-medium text-white shadow-xs">
              All Projects
            </button>
            <button className="bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-xs font-medium transition-colors">
              Web Dev
            </button>
            <button className="bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-xs font-medium transition-colors">
              AI / ML
            </button>
            <button className="bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-xs font-medium transition-colors">
              Mobile Apps
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-border/70 rounded-full px-8 hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
          >
            Load More Projects
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
