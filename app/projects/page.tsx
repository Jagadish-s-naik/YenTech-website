import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProjectCard, ProjectProps } from "@/components/shared/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const MOCK_PROJECTS: ProjectProps[] = [
  {
    id: "1",
    title: "AgroNova",
    author: "Dhanush Shenoy H, Anand M, Jagadish S Naik & Ashwin Nethan",
    description:
      "An AI-powered farming assistant. Empowering Indian farmers with AI-driven insights, pest detection, real-time mandi prices, and soil health analysis. To know more, just check out the app.",
    tags: ["AI / ML", "Next.js", "AgriTech", "Python"],
    imageUrl: "/images/Agronova_Thumbnail.png",
    likes: 184,
    comments: 24,
    demoUrl: "https://www.agronova.in/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/Agro-Nova",
  },
  {
    id: "2",
    title: "JoByte",
    author: "Dhanush Shenoy H, Anand M, Jagadish S Naik & Ashwin Nethan",
    description:
      "An editorial-grade ATS and career platform engineered for high-stakes tech teams. JoByte bridges the gap between resume claims and proven technical mastery.",
    tags: ["Web Dev", "Next.js", "ATS", "TypeScript"],
    imageUrl: "/images/Jobyte_thumbnail.png",
    likes: 142,
    comments: 19,
    demoUrl: "https://jobyte.vercel.app/",
    repoUrl: "https://github.com/Jagadish-s-naik/JoByte",
  },
  {
    id: "3",
    title: "checkDK",
    author: "Dhanush Shenoy H & Radhesh Pai",
    description:
      "An AI-powered CLI tool & dev environment designed to predict, diagnose, and fix Docker and Kubernetes issues before execution.",
    tags: ["DevOps", "AI / ML", "CLI", "Docker", "Kubernetes"],
    imageUrl: "/images/checkdk_thumbnail.png",
    likes: 168,
    comments: 21,
    demoUrl: "https://checkdk.app/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/checkDK",
  },
  {
    id: "4",
    title: "HACK-MATE",
    author: "Anand Mahadev, Dhanush Shenoy H & Dinesh A",
    description:
      "The ultimate AI hackathon copilot. Transform problem statements into winning demo roadmaps, architecture plans, and sprint execution schedules.",
    tags: ["AI / ML", "Next.js", "Hackathon", "TypeScript"],
    imageUrl: "/images/Hackmate_thumbnail.png",
    likes: 195,
    comments: 27,
    demoUrl: "https://hackmate.anandmahadev.in/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/HACK-MATE",
  },
  {
    id: "5",
    title: "ThreatVision",
    author: "Ashwin Nethan, Jagadish S Naik, Swara Hedge & Prajna",
    description:
      "AI-powered transaction intelligence platform that uncovers hidden money-laundering rings, mule networks, and suspicious payment patterns in real time.",
    tags: ["Cyber Security", "AI / ML", "Next.js", "FinTech"],
    imageUrl: "/images/Threat-vision_thumbnail.png",
    likes: 210,
    comments: 31,
    demoUrl: "https://threat-vision-five.vercel.app/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/ThreatVision",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
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
