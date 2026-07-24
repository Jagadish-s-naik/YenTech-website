import { Code2, Radio, Wrench, type LucideIcon } from "lucide-react";

export interface SubLink {
  name: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  description?: string;
  subLinks?: SubLink[];
}

export const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Events",
    href: "/events",
    description:
      "Workshops, hackathons, and tech talks designed to help you learn, build, and connect.",
    subLinks: [
      { name: "Workshops", href: "/events/workshops", icon: Wrench },
      { name: "Hackathons", href: "/events/hackathons", icon: Code2 },
      { name: "Tech Talks", href: "/events/seminars", icon: Radio },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
