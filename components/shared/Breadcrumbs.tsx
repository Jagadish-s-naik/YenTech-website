import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center min-w-0 text-xs font-medium text-muted-foreground ${className}`}
    >
      <ol className="flex items-center flex-wrap min-w-0 gap-1.5">
        <li className="inline-flex items-center shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-[#0CBAA6]"
          >
            <Home className="h-3.5 w-3.5 text-muted-foreground/80 shrink-0" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center min-w-0 gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  title={item.label}
                  className="truncate max-w-[110px] sm:max-w-[180px] md:max-w-[260px] transition-colors hover:text-[#0CBAA6]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  title={item.label}
                  className="truncate font-semibold text-foreground max-w-[140px] sm:max-w-[240px] md:max-w-[380px]"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
