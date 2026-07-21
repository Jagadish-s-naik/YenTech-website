import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProjectCard, ProjectProps } from "@/components/shared/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const MOCK_PROJECTS: ProjectProps[] = [
  {
    id: "1",
    title: "EcoTrack Mobile App",
    author: "Sarah J. & Team Alpha",
    description:
      "A mobile application built with React Native that tracks user's daily carbon footprint and suggests eco-friendly alternatives.",
    tags: ["React Native", "Firebase", "Node.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop",
    likes: 124,
    comments: 18,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "2",
    title: "AI Study Assistant",
    author: "David Chen",
    description:
      "An AI-powered tool that automatically generates flashcards and summaries from uploaded PDF textbooks.",
    tags: ["Python", "OpenAI API", "Next.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    likes: 89,
    comments: 12,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "3",
    title: "Smart Campus Navigation",
    author: "YenTech Dev Club",
    description:
      "Interactive 3D map for new students to navigate the Yenepoya campus easily, complete with indoor routing.",
    tags: ["Three.js", "WebGL", "React"],
    imageUrl:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
    likes: 215,
    comments: 34,
    demoUrl: "#",
  },
  {
    id: "4",
    title: "Crypto Portfolio Tracker",
    author: "Priya Sharma",
    description:
      "A sleek dashboard to track cryptocurrency investments across multiple exchanges using real-time APIs.",
    tags: ["Vue.js", "Tailwind CSS", "CoinGecko API"],
    imageUrl:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
    likes: 67,
    comments: 8,
    repoUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Community Showcase"
        title="Student Projects"
        description="Explore innovative software, hardware, and AI projects built by the YenTech student community."
      >
        <Link href="/projects/submit">
          <Button className="rounded-full bg-[#0CBAA6] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0CBAA6]/20 transition-all hover:bg-[#0a9e8d] hover:shadow-lg">
            <Plus className="mr-2 h-4 w-4" /> Submit Project
          </Button>
        </Link>
      </PageHeader>

      <PageContainer>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button className="rounded-full bg-[#0CBAA6] px-4 py-1.5 text-xs font-medium text-white shadow-xs">
              All Projects
            </button>
            <button className="rounded-full bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground px-4 py-1.5 text-xs font-medium transition-colors">
              Web Dev
            </button>
            <button className="rounded-full bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground px-4 py-1.5 text-xs font-medium transition-colors">
              AI / ML
            </button>
            <button className="rounded-full bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground px-4 py-1.5 text-xs font-medium transition-colors">
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
          <Button variant="outline" className="rounded-full border-border/70 px-8 hover:border-[#0CBAA6] hover:text-[#0CBAA6]">
            Load More Projects
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}

