import React from "react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ badge, title, description, children }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-border/60 bg-muted/20 py-12 md:py-16">
      {/* Subtle background ambient teal glow */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-[#0CBAA6]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            {badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-3 py-1 text-xs font-semibold text-[#0CBAA6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0CBAA6]" />
                {badge}
              </span>
            )}
            <h1 className="font-heading text-3xl font-bold tracking-tight md:text-5xl text-foreground">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {children && <div className="shrink-0">{children}</div>}
        </div>
      </div>
    </div>
  );
}

