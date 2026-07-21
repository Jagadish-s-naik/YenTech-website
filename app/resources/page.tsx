import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Book, FileText, Video, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESOURCES = [
  {
    title: "React Best Practices 2026",
    type: "E-Book",
    icon: Book,
    category: "Web Dev",
  },
  {
    title: "Intro to Neural Networks",
    type: "Video",
    icon: Video,
    category: "AI/ML",
  },
  {
    title: "Advanced CSS Patterns",
    type: "Snippet",
    icon: Code,
    category: "Design",
  },
  {
    title: "Cyber Security Cheat Sheet",
    type: "PDF",
    icon: FileText,
    category: "Security",
  },
  {
    title: "Next.js Authentication Boilerplate",
    type: "Code",
    icon: Code,
    category: "Web Dev",
  },
  { title: "Figma UI Kit", type: "Asset", icon: Download, category: "Design" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Learning Hub"
        title="Resource Library"
        description="Curated assets, interactive cheat sheets, boilerplates, and tutorials for YenTech members."
      />

      <PageContainer>
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="w-full space-y-6 md:w-64">
            <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-xs">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Categories</h3>
              <ul className="space-y-2 text-xs font-medium">
                <li className="rounded-lg bg-[#0CBAA6]/10 px-3 py-2 text-[#0CBAA6] font-semibold">
                  All Resources
                </li>
                <li className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                  Web Development
                </li>
                <li className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                  AI & ML
                </li>
                <li className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                  Cyber Security
                </li>
                <li className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
                  Design Assets
                </li>
              </ul>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RESOURCES.map((res, i) => (
                <div
                  key={i}
                  className="group flex flex-col rounded-xl border border-border/60 bg-card p-6 shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0CBAA6]/20 bg-[#0CBAA6]/10 text-[#0CBAA6] transition-colors duration-300 group-hover:bg-[#0CBAA6] group-hover:text-white">
                    <res.icon className="h-5 w-5" />
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#0CBAA6]">
                    {res.category} • {res.type}
                  </div>
                  <h3 className="mb-4 flex-1 text-base font-bold text-foreground transition-colors group-hover:text-[#0CBAA6]">{res.title}</h3>
                  <Button variant="outline" size="sm" className="mt-auto w-full gap-2 rounded-full border-border/70 text-xs font-medium hover:border-[#0CBAA6] hover:text-[#0CBAA6]">
                    <Download className="h-3.5 w-3.5" /> Download Asset
                  </Button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </PageContainer>
    </div>
  );
}

