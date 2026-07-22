"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Book, FileText, Video, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { id: "all", label: "All Resources" },
  { id: "web-dev", label: "Web Development", match: "Web Dev" },
  { id: "ai-ml", label: "AI & ML", match: "AI/ML" },
  { id: "security", label: "Cyber Security", match: "Security" },
  { id: "design", label: "Design Assets", match: "Design" },
];

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
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources =
    activeCategory === "all"
      ? RESOURCES
      : RESOURCES.filter((res) => {
          const catObj = CATEGORIES.find((c) => c.id === activeCategory);
          return catObj?.match ? res.category === catObj.match : true;
        });

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        badge="Learning Hub"
        title="Resource Library"
        description="Curated assets, interactive cheat sheets, boilerplates, and tutorials for YenTech members."
      />

      <PageContainer>
        {/* Horizontal Scrollable Category Filter Pills */}
        <div className="border-border/60 mb-8 flex scrollbar-none items-center gap-2 overflow-x-auto border-b pb-4">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#0CBAA6] text-white shadow-xs"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((res, i) => (
            <div
              key={i}
              className="group border-border/60 bg-card flex flex-col rounded-xl border p-6 shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0CBAA6]/20 bg-[#0CBAA6]/10 text-[#0CBAA6] transition-colors duration-300 group-hover:bg-[#0CBAA6] group-hover:text-white">
                <res.icon className="h-5 w-5" />
              </div>
              <div className="mb-1 text-xs font-semibold tracking-wider text-[#0CBAA6] uppercase">
                {res.category} • {res.type}
              </div>
              <h3 className="text-foreground mb-4 flex-1 text-base font-bold transition-colors group-hover:text-[#0CBAA6]">
                {res.title}
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="border-border/70 mt-auto w-full gap-2 rounded-full text-xs font-medium hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
              >
                <Download className="h-3.5 w-3.5" /> Download Asset
              </Button>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-muted-foreground py-16 text-center text-sm">
            No resources found for this category.
          </div>
        )}
      </PageContainer>
    </div>
  );
}
