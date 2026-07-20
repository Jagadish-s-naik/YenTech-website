import { PageHeader } from "@/components/shared/PageHeader";
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
    <div className="min-h-screen">
      <PageHeader
        title="Project Showcase"
        description="Explore innovative projects built by the YenTech student community."
      />

      <div className="container mx-auto border-b px-4 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex w-full gap-2 overflow-x-auto pb-2 sm:w-auto sm:pb-0">
            <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">
              All Projects
            </button>
            <button className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">
              Web Dev
            </button>
            <button className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">
              AI/ML
            </button>
            <button className="bg-muted hover:bg-muted/80 text-foreground rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">
              Apps
            </button>
          </div>
          <Link href="/projects/submit" className="w-full sm:w-auto">
            <Button className="shadow-primary/20 w-full gap-2 rounded-full shadow-lg sm:w-auto">
              <Plus className="h-4 w-4" /> Submit Project
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full px-8">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
