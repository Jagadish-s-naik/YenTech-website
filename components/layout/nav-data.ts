import {
  Monitor,
  Cpu,
  Palette,
  ShieldCheck,
  Briefcase,
  Code2,
  Radio,
  Award,
  BookOpen,
  Newspaper,
  CheckCircle2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

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
    description:
      "Explore real-world projects built by YenTech members or submit your own work.",
    subLinks: [
      { name: "Showcase", href: "/projects", icon: Briefcase },
      { name: "Submit Project", href: "/projects/submit", icon: Code2 },
    ],
  },
  {
    name: "Domains",
    href: "/domains",
    description:
      "Explore specialized tracks in web development, AI, cybersecurity, and design.",
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
    name: "More",
    href: "#",
    description:
      "Access student leaderboards, learning resources, tech articles, and certificates.",
    subLinks: [
      { name: "Badges & Leaderboard", href: "/badges", icon: Award },
      { name: "Resource Library", href: "/resources", icon: BookOpen },
      { name: "Blog / Articles", href: "/blog", icon: Newspaper },
      { name: "Cert. Verification", href: "/verify", icon: CheckCircle2 },
    ],
  },
];
