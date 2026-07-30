import { MemberProps } from "@/types/member";

export interface TeamMember {
  name: string;
  role: string;
  blurb: string;
  photo?: string;
  github?: string;
  linkedin?: string;
  domain?: string;
}

// Curated stock photos from Unsplash for realistic presentation
export const CORE_TEAM: TeamMember[] = [
  {
    name: "Radhesh Pai",
    role: "President",
    blurb: "golden hour chaser",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Muhammed Shameer",
    role: "Vice President",
    blurb: "chai enthusiast",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Keerthana",
    role: "Secretary",
    blurb: "unread book collector",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Safwan M",
    role: "Media Head",
    blurb: "camera always ready",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rinu Manoj",
    role: "Program Manager",
    blurb: "master of lists",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

export const DOMAIN_HEADS: TeamMember[] = [
  {
    name: "Ashwin Nethan",
    role: "Web Dev Head",
    blurb: "retro music addict",
    domain: "Web Development",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Jagadish Naik",
    role: "Web Dev Head",
    blurb: "midnight energy",
    domain: "Web Development",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Dhanush Shenoy",
    role: "AI/ML Head",
    blurb: "tactical chess mind",
    domain: "AI/ML",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ashwin R",
    role: "AI/ML Head",
    blurb: "shortcut route finder",
    domain: "AI/ML",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Fadi Subair",
    role: "Cyber Security Head",
    blurb: "silent observer",
    domain: "Cyber Security",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Anand M",
    role: "Design Head",
    blurb: "retro sneaker head",
    domain: "Graphic Design",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sana Zainaba",
    role: "Design Head",
    blurb: "post card collector",
    domain: "Graphic Design",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

export const ORGANIZING_COMMITTEE: TeamMember[] = [
  {
    name: "Chethan",
    role: "Organizing Committee",
    blurb: "always early",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Amal VS",
    role: "Organizing Committee",
    blurb: "calm in chaos",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Divya Shettar",
    role: "Organizing Committee",
    blurb: "color coded notes",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Reehan",
    role: "Organizing Committee",
    blurb: "street food connoisseur",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Fathimath Roza",
    role: "Organizing Committee",
    blurb: "playlist curator",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

// Legacy exports for backward compatibility
export const CORE_MEMBERS: MemberProps[] = [];
export const GENERAL_MEMBERS: MemberProps[] = [];
export const ALL_MEMBERS: MemberProps[] = [];
