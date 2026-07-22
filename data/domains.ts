import { Monitor, Cpu, Palette, ShieldCheck, LucideIcon } from "lucide-react";

export interface Domain {
  name: string;
  slug: string;
  icon: LucideIcon;
  href: string;
  desc: string;
  tech: string[];
  syllabus: { module: string; desc: string }[];
  description: string;
}

export const DOMAINS: Domain[] = [
  {
    name: "Web Development",
    slug: "web-development",
    icon: Monitor,
    href: "/domains/web-development",
    desc: "Build modern, responsive, and dynamic web applications with state-of-the-art tooling.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "Master the art of building scalable, responsive, and interactive web applications from scratch. The Web Development domain at YenTech is designed for students who want to create the digital experiences of tomorrow. We cover everything from the structural basics of the web to advanced full-stack architectures using modern frameworks like React and Next.js.",
    syllabus: [
      {
        module: "Module 1: Frontend Basics",
        desc: "HTML5, CSS3, JavaScript (ES6+), and Responsive Design principles.",
      },
      {
        module: "Module 2: Modern Frameworks",
        desc: "Deep dive into React.js, component architecture, and state management.",
      },
      {
        module: "Module 3: Backend Integration",
        desc: "Node.js, Express, RESTful APIs, and database fundamentals (SQL/NoSQL).",
      },
      {
        module: "Module 4: Full Stack with Next.js",
        desc: "Server-side rendering, static site generation, routing, and deployment.",
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-ml",
    icon: Cpu,
    href: "/domains/ai-ml",
    desc: "Explore the frontiers of artificial intelligence, neural networks, and data science.",
    tech: ["Python", "PyTorch", "Scikit-Learn"],
    description:
      "Dive deep into AI & Machine Learning. Our curriculum is designed to take you from fundamentals to advanced concepts, preparing you for real-world challenges and industry demands.",
    syllabus: [
      { module: "Module 1", desc: "Python & Data Math" },
      { module: "Module 2", desc: "Machine Learning Algorithms" },
      { module: "Module 3", desc: "Deep Learning & Neural Nets" },
      { module: "Module 4", desc: "AI in Production" },
    ],
  },
  {
    name: "Graphics Design",
    slug: "graphics-design",
    icon: Palette,
    href: "/domains/graphics-design",
    desc: "Create visually stunning UI/UX, brand identities, and 3D web graphics.",
    tech: ["Figma", "Illustrator", "Three.js"],
    description:
      "Dive deep into Graphics Design. Our curriculum is designed to take you from fundamentals to advanced concepts, preparing you for real-world challenges and industry demands.",
    syllabus: [
      { module: "Module 1", desc: "Design Fundamentals" },
      { module: "Module 2", desc: "UI/UX Principles" },
      { module: "Module 3", desc: "Advanced Prototyping" },
      { module: "Module 4", desc: "3D Modeling Basics" },
    ],
  },
  {
    name: "Cyber Security",
    slug: "cyber-security",
    icon: ShieldCheck,
    href: "/domains/cyber-security",
    desc: "Learn ethical hacking, defense mechanisms, and secure network infrastructure.",
    tech: ["Linux", "Wireshark", "Metasploit"],
    description:
      "Dive deep into Cyber Security. Our curriculum is designed to take you from fundamentals to advanced concepts, preparing you for real-world challenges and industry demands.",
    syllabus: [
      { module: "Module 1", desc: "Network Fundamentals" },
      { module: "Module 2", desc: "Ethical Hacking" },
      { module: "Module 3", desc: "Cryptography" },
      { module: "Module 4", desc: "Security Auditing" },
    ],
  },
];

export function getDomainBySlug(slug: string): Domain | undefined {
  return DOMAINS.find((d) => d.slug === slug);
}
