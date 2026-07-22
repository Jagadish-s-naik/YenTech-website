import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DOMAINS } from "@/data/domains";

export default function DomainsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        badge="Specializations"
        title="Technical Domains"
        description="Explore our specialized domain tracks and build industry-ready skills for high-impact tech careers."
      />
      <PageContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <Link
                key={domain.name}
                href={domain.href}
                className="group border-border/70 bg-card flex flex-col items-start rounded-2xl border p-7 shadow-xs transition-colors duration-200 hover:border-[#0CBAA6]/40"
              >
                <div className="mb-5 rounded-2xl bg-[#0CBAA6]/10 p-4 text-[#0CBAA6]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-foreground mb-2.5 text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6]">
                  {domain.name}
                </h3>

                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {domain.desc}
                </p>

                {/* Tech Badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {domain.tech.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted/60 text-muted-foreground border-border/50 rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center text-sm font-semibold text-[#0CBAA6]">
                  Explore Domain
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </div>
  );
}
