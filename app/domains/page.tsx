import { PageHeader } from "@/components/shared/PageHeader";
import Link from "next/link";
import { Monitor, Cpu, Palette, ShieldCheck, ArrowRight } from "lucide-react";

const DOMAINS = [
  {
    name: "Web Development",
    icon: Monitor,
    href: "/domains/web-development",
    desc: "Build modern, responsive, and dynamic web applications.",
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    href: "/domains/ai-ml",
    desc: "Explore the frontiers of artificial intelligence and data science.",
  },
  {
    name: "Graphics Design",
    icon: Palette,
    href: "/domains/graphics-design",
    desc: "Create stunning visuals and user interfaces.",
  },
  {
    name: "Cyber Security",
    icon: ShieldCheck,
    href: "/domains/cyber-security",
    desc: "Learn to protect systems and networks from digital attacks.",
  },
];

export default function DomainsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Technical Domains"
        description="Explore our specialized domains and master the skills needed for tomorrow's challenges."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {DOMAINS.map((domain) => (
            <Link
              key={domain.name}
              href={domain.href}
              className="group bg-background hover:border-primary/50 flex rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mr-6 shrink-0 rounded-xl p-4 transition-all">
                <domain.icon className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <h3 className="group-hover:text-primary mb-2 text-2xl font-semibold transition-colors">
                  {domain.name}
                </h3>
                <p className="text-muted-foreground mb-4">{domain.desc}</p>
                <div className="text-primary mt-auto flex items-center text-sm font-medium opacity-80 group-hover:opacity-100">
                  Explore domain{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
