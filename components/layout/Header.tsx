"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNav } from "./NavContext";
import { NAV_LINKS } from "./nav-data";

export function Header() {
  const pathname = usePathname();
  const { activeDropdown, setActiveDropdown } = useNav();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLoggedIn =
    pathname.startsWith("/admin") || pathname.startsWith("/member");

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const drawerOpen =
    activeDropdown &&
    NAV_LINKS.some((link) => link.name === activeDropdown && link.subLinks);

  return (
    <header
      onMouseLeave={() => setActiveDropdown(null)}
      className={cn(
        "sticky top-0 z-50 h-20 w-full transition-[padding,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "border-border/60 border-b py-2 shadow-xs backdrop-blur-xl"
          : "border-border/30 border-b py-3 backdrop-blur-md",
        drawerOpen
          ? "bg-background"
          : scrolled
            ? "bg-background/80"
            : "bg-background/50",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <img
            src="/yentech.svg"
            alt="YenTech Logo"
            className="h-7 w-7 transition-transform group-hover:scale-105"
          />
          <span className="font-heading bg-linear-to-r from-[#0CBAA6] to-[#10B981] bg-clip-text text-xl font-bold tracking-tight text-transparent">
            YenTech
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden h-full items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isOpen = activeDropdown === link.name;
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href)) ||
              activeDropdown === link.name;

            return (
              <div
                key={link.name}
                className="flex h-full items-center"
                onMouseEnter={() => setActiveDropdown(link.name)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 py-4 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "font-semibold text-[#0CBAA6]"
                      : "text-foreground/80 hover:text-[#0CBAA6]",
                  )}
                >
                  {link.name}
                  {link.subLinks &&
                    (isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#0CBAA6] transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="text-muted-foreground h-4 w-4 transition-transform duration-200" />
                    ))}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            {!isLoggedIn ? (
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/80 px-6 py-2 text-sm font-medium transition-colors hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Link href={pathname.startsWith("/admin") ? "/admin" : "/member"}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/80 px-6 py-2 text-sm font-medium hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
                >
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
            className="rounded-full md:hidden"
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

      {/* Desktop Full-Width Drawer Panel */}
      {drawerOpen && (
        <div
          className="animate-in fade-in slide-in-from-top-2 bg-background border-border/80 absolute top-full right-0 left-0 z-50 hidden w-full rounded-b-3xl border-b shadow-2xl duration-200 md:block"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {NAV_LINKS.filter(
            (link) => link.name === activeDropdown && link.subLinks,
          ).map((activeLink) => (
            <div
              key={activeLink.name}
              className="container mx-auto px-4 py-10 sm:px-8"
            >
              <div className="grid grid-cols-12 items-stretch gap-8">
                {/* Left Column: Title & Overview */}
                <div className="border-border/60 col-span-4 flex flex-col justify-center border-r pr-10">
                  <h2 className="font-heading text-foreground mb-3 text-4xl font-bold tracking-tight">
                    {activeLink.name}
                  </h2>
                  {activeLink.description && (
                    <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                      {activeLink.description}
                    </p>
                  )}
                </div>

                {/* Right Column: Sub-item Links */}
                <div className="col-span-8 flex flex-col justify-center gap-2 pl-6">
                  {activeLink.subLinks?.map((subLink) => {
                    const IconComponent = subLink.icon;
                    return (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="group text-foreground flex items-center justify-between rounded-2xl p-4 text-base font-bold transition-all duration-200 hover:bg-[#0CBAA6]/10 hover:text-[#0CBAA6]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center gap-4">
                          {IconComponent && (
                            <IconComponent className="text-foreground h-5 w-5 transition-all group-hover:scale-110 group-hover:text-[#0CBAA6]" />
                          )}
                          <span className="font-heading text-lg font-bold">
                            {subLink.name}
                          </span>
                        </div>
                        <ArrowUpRight className="text-foreground h-5 w-5 opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0CBAA6] group-hover:opacity-100" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="bg-background/95 animate-in slide-in-from-top-2 border-border/80 border-b p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="text-foreground flex w-full items-center justify-between py-2 text-base font-medium"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "text-muted-foreground h-4 w-4 transition-transform duration-200",
                          activeDropdown === link.name
                            ? "rotate-180 text-[#0CBAA6]"
                            : "",
                        )}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="mt-1 flex flex-col gap-2 border-l-2 border-[#0CBAA6]/30 pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="text-muted-foreground flex items-center justify-between py-1.5 text-sm font-medium hover:text-[#0CBAA6]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{subLink.name}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-foreground py-2 text-base font-medium hover:text-[#0CBAA6]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="border-border/60 mt-4 flex flex-col gap-3 border-t pt-4">
              {!isLoggedIn ? (
                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="border-border/80 w-full rounded-full"
                  >
                    Login
                  </Button>
                </Link>
              ) : (
                <Link
                  href={pathname.startsWith("/admin") ? "/admin" : "/member"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="border-border/80 w-full rounded-full"
                  >
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
