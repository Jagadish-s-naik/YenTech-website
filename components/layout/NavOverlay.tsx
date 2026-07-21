"use client";

import { useNav } from "./NavContext";
import { NAV_LINKS, type NavItem } from "./nav-data";

export function NavOverlay() {
  const { activeDropdown, setActiveDropdown } = useNav();

  if (
    !activeDropdown ||
    !NAV_LINKS.some((link) => link.name === activeDropdown && link.subLinks)
  ) {
    return null;
  }

  const hasContent = NAV_LINKS.some(
    (link) => link.name === activeDropdown && link.subLinks,
  );
  if (!hasContent) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-40 hidden bg-black/40 backdrop-blur-xs duration-200 md:block"
      onClick={() => setActiveDropdown(null)}
    />
  );
}
