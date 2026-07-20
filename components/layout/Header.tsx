"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  Cpu,
  Palette,
  ShieldCheck,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Domains",
    href: "/domains",
    subLinks: [
      {
        name: "Web Development",
        href: "/domains/web-development",
        icon: Monitor,
      },
      { name: "AI & ML", href: "/domains/ai-ml", icon: Cpu },
      {
        name: "Graphics Design",
        href: "/domains/graphics-design",
        icon: Palette,
      },
      {
        name: "Cyber Security",
        href: "/domains/cyber-security",
        icon: ShieldCheck,
      },
    ],
  },
  {
    name: "Events",
    href: "/events",
    subLinks: [
      { name: "Workshops", href: "/events/workshops", icon: Calendar },
      { name: "Hackathons", href: "/events/hackathons", icon: Calendar },
      { name: "Seminars", href: "/events/seminars", icon: Calendar },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    subLinks: [
      { name: "Showcase", href: "/projects", icon: Briefcase },
      { name: "Submit Project", href: "/projects/submit", icon: Briefcase },
    ],
  },
  {
    name: "More",
    href: "#",
    subLinks: [
      { name: "Badges & Leaderboard", href: "/badges", icon: undefined },
      { name: "Resource Library", href: "/resources", icon: undefined },
      { name: "Blog / Articles", href: "/blog", icon: undefined },
      { name: "Cert. Verification", href: "/verify", icon: undefined },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isLoggedIn = pathname.startsWith('/admin') || pathname.startsWith('/member');

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-primary text-xl font-bold tracking-tight">
            YenTech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="group relative flex h-full items-center"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {link.name}
                {link.subLinks && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.subLinks && activeDropdown === link.name && (
                <div className="animate-in fade-in zoom-in-95 absolute top-full left-0 w-56 pt-2">
                  <div className="bg-popover rounded-md border p-2 shadow-md">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="text-popover-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-sm px-3 py-2 text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subLink.icon && <subLink.icon className="h-4 w-4" />}
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            {!isLoggedIn ? (
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
            ) : (
              <Link href={pathname.startsWith('/admin') ? "/admin" : "/member"}>
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
            )}
          </div>
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="bg-background animate-in slide-in-from-top-2 border-t p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="text-muted-foreground flex w-full items-center justify-between py-2 text-sm font-medium"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          activeDropdown === link.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="border-muted mt-1 flex flex-col gap-2 border-l-2 pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="text-muted-foreground hover:text-primary py-1 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t pt-4">
              {!isLoggedIn ? (
                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
              ) : (
                <Link href={pathname.startsWith('/admin') ? "/admin" : "/member"} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
