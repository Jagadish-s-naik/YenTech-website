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
      className={`text-muted-foreground flex min-w-0 items-center text-xs font-medium ${className}`}
    >
      <ol className="flex min-w-0 flex-wrap items-center gap-1.5">
        <li className="inline-flex shrink-0 items-center">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-[#0CBAA6]"
          >
            <Home className="text-muted-foreground/80 h-3.5 w-3.5 shrink-0" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className="inline-flex min-w-0 items-center gap-1.5"
            >
              <ChevronRight className="text-muted-foreground/60 h-3.5 w-3.5 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  title={item.label}
                  className="max-w-27.5 truncate transition-colors hover:text-[#0CBAA6] sm:max-w-45 md:max-w-65"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  title={item.label}
                  className="text-foreground max-w-35 truncate font-semibold sm:max-w-60 md:max-w-95"
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
