import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <div className="border-border/60 bg-card/50 relative overflow-hidden border-b py-10 backdrop-blur-sm md:py-14">
      {/* Background ambient teal glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[#0CBAA6]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} className="mb-4" />
        )}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading text-foreground text-3xl font-extrabold tracking-tight md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
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
