import { PageHeader } from "@/components/shared/PageHeader";
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
    <div className="min-h-screen">
      <PageHeader
        title="Resource Library"
        description="Curated assets, tutorials, and tools for students."
      />

      <div className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-8 md:flex-row">
        <aside className="w-full space-y-6 md:w-64">
          <div className="bg-background rounded-2xl border p-6">
            <h3 className="mb-4 font-bold">Categories</h3>
            <ul className="text-muted-foreground space-y-3 text-sm">
              <li className="text-foreground font-medium">All Resources</li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Web Development
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                AI & ML
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Cyber Security
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
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
                className="bg-background flex flex-col rounded-2xl border p-6 transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <res.icon className="h-6 w-6" />
                </div>
                <div className="text-primary mb-2 text-xs font-medium">
                  {res.category} • {res.type}
                </div>
                <h3 className="mb-4 flex-1 text-lg font-bold">{res.title}</h3>
                <Button variant="outline" className="mt-auto w-full gap-2">
                  <Download className="h-4 w-4" /> Download
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
