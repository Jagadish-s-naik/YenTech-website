import { ProjectProps, ProjectDetailProps } from "@/types/project";

export const MOCK_PROJECTS: ProjectProps[] = [
  {
    id: "1",
    title: "AgroNova",
    author: "Dhanush Shenoy H, Anand M, Jagadish S Naik & Ashwin Nethan",
    description:
      "An AI-powered farming assistant. Empowering Indian farmers with AI-driven insights, pest detection, real-time mandi prices, and soil health analysis. To know more, just check out the app.",
    tags: ["AI / ML", "Next.js", "AgriTech", "Python"],
    imageUrl: "/images/Agronova_Thumbnail.png",
    likes: 184,
    comments: 24,
    demoUrl: "https://www.agronova.in/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/Agro-Nova",
  },
  {
    id: "2",
    title: "JoByte",
    author: "Dhanush Shenoy H, Anand M, Jagadish S Naik & Ashwin Nethan",
    description:
      "An editorial-grade ATS and career platform engineered for high-stakes tech teams. JoByte bridges the gap between resume claims and proven technical mastery.",
    tags: ["Web Dev", "Next.js", "ATS", "TypeScript"],
    imageUrl: "/images/Jobyte_thumbnail.png",
    likes: 142,
    comments: 19,
    demoUrl: "https://jobyte.vercel.app/",
    repoUrl: "https://github.com/Jagadish-s-naik/JoByte",
  },
  {
    id: "3",
    title: "checkDK",
    author: "Dhanush Shenoy H & Radhesh Pai",
    description:
      "An AI-powered CLI tool & dev environment designed to predict, diagnose, and fix Docker and Kubernetes issues before execution.",
    tags: ["DevOps", "AI / ML", "CLI", "Docker", "Kubernetes"],
    imageUrl: "/images/checkdk_thumbnail.png",
    likes: 168,
    comments: 21,
    demoUrl: "https://checkdk.app/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/checkDK",
  },
  {
    id: "4",
    title: "HACK-MATE",
    author: "Anand Mahadev, Dhanush Shenoy H & Dinesh A",
    description:
      "The ultimate AI hackathon copilot. Transform problem statements into winning demo roadmaps, architecture plans, and sprint execution schedules.",
    tags: ["AI / ML", "Next.js", "Hackathon", "TypeScript"],
    imageUrl: "/images/Hackmate_thumbnail.png",
    likes: 195,
    comments: 27,
    demoUrl: "https://hackmate.anandmahadev.in/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/HACK-MATE",
  },
  {
    id: "5",
    title: "ThreatVision",
    author: "Ashwin Nethan, Jagadish S Naik, Swara Hedge & Prajna",
    description:
      "AI-powered transaction intelligence platform that uncovers hidden money-laundering rings, mule networks, and suspicious payment patterns in real time.",
    tags: ["Cyber Security", "AI / ML", "Next.js", "FinTech"],
    imageUrl: "/images/Threat-vision_thumbnail.png",
    likes: 210,
    comments: 31,
    demoUrl: "https://threat-vision-five.vercel.app/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/ThreatVision",
  },
];

export const MOCK_PROJECTS_DETAIL: ProjectDetailProps[] = [
  {
    id: "1",
    title: "AgroNova",
    author: "Dhanush Shenoy H, Anand M, Jagadish S Naik & Ashwin Nethan",
    description:
      "An AI-powered farming assistant. Empowering Indian farmers with AI-driven insights, pest detection, real-time mandi prices, and soil health analysis.",
    fullDescription:
      "AgroNova is a state-of-the-art AI-powered smart farming platform designed specifically to empower Indian farmers. By combining advanced computer vision, machine learning, and real-time market data feeds, AgroNova helps farmers identify crop diseases in seconds, monitor soil health, track live Mandi prices across India, and receive hyper-local weather alerts for optimal harvesting and irrigation decisions.",
    tags: ["AI / ML", "Next.js", "AgriTech", "Python"],
    imageUrl: "/images/Agronova_Thumbnail.png",
    likes: 184,
    comments: 24,
    demoUrl: "https://www.agronova.in/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/Agro-Nova",
    team: ["Dhanush Shenoy H", "Anand M", "Jagadish S Naik", "Ashwin Nethan"],
    features: [
      "AI Crop Disease & Pest Detection from camera photos",
      "Real-time Mandi Market Prices from across India",
      "Soil Health & NPK / pH Balance Insights",
      "Hyper-local Precision Weather Advisories",
      "Agri-Marketplace for direct buyer-seller connection",
      "Vibrant Progressive Farmer Community hub",
    ],
  },
  {
    id: "2",
    title: "JoByte",
    author: "Dhanush Shenoy H, Anand M, Jagadish S Naik & Ashwin Nethan",
    description:
      "An editorial-grade ATS and career platform engineered for high-stakes tech teams. JoByte bridges the gap between resume claims and proven technical mastery.",
    fullDescription:
      "JoByte is an editorial-grade Applicant Tracking System (ATS) and career recruitment platform built specifically for high-stakes tech teams and top engineering talent. Designed to empower candidates while streamlining hiring workflows, JoByte bridges the gap between resume claims and proven technical mastery through interactive evaluation, candidate tracking, and intuitive job matching.",
    tags: ["Web Dev", "Next.js", "ATS", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/Jobyte_thumbnail.png",
    likes: 142,
    comments: 19,
    demoUrl: "https://jobyte.vercel.app/",
    repoUrl: "https://github.com/Jagadish-s-naik/JoByte",
    team: ["Dhanush Shenoy H", "Anand M", "Jagadish S Naik", "Ashwin Nethan"],
    features: [
      "Editorial-grade Applicant Tracking System (ATS) dashboard",
      "Seamless job discovery & application workflows",
      "Comprehensive candidate profile & skill verification management",
      "Real-time hiring pipelines & modern recruiter portal",
      "Responsive, high-performance tech candidate matching",
    ],
  },
  {
    id: "3",
    title: "checkDK",
    author: "Dhanush Shenoy H & Radhesh Pai",
    description:
      "An AI-powered CLI tool & dev environment designed to predict, diagnose, and fix Docker and Kubernetes issues before execution.",
    fullDescription:
      "checkDK is an AI-powered developer CLI tool and diagnostics environment built to eliminate container debugging frustration. By analyzing Dockerfiles, Docker Compose files, and Kubernetes manifests before deployment, checkDK detects syntax errors, misconfigurations, security vulnerabilities, and runtime conflicts before execution, saving engineers hours of debugging time.",
    tags: ["DevOps", "AI / ML", "CLI", "Docker", "Kubernetes"],
    imageUrl: "/images/checkdk_thumbnail.png",
    likes: 168,
    comments: 21,
    demoUrl: "https://checkdk.app/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/checkDK",
    team: ["Dhanush Shenoy H", "Radhesh Pai"],
    features: [
      "Predictive static analysis for Docker & Kubernetes configurations",
      "Automated root-cause diagnosis and AI-suggested error fixes",
      "Interactive dev playground for testing container specifications",
      "Seamless CLI tool integration into existing DevOps build pipelines",
      "Comprehensive vulnerability & security policy auditor",
    ],
  },
  {
    id: "4",
    title: "HACK-MATE",
    author: "Anand Mahadev, Dhanush Shenoy H & Dinesh A",
    description:
      "The ultimate AI hackathon copilot. Transform problem statements into winning demo roadmaps, architecture plans, and sprint execution schedules.",
    fullDescription:
      "HACK-MATE (Hackathon Copilot) is an intelligent AI assistant engineered to take hackathon teams from initial problem statement to a polished, demo-ready project. It helps builders scaffold technical architecture, outline step-by-step sprint roadmaps, craft compelling pitch stories, and generate real-time execution guides during timed code sprints.",
    tags: ["AI / ML", "Next.js", "Hackathon", "TypeScript"],
    imageUrl: "/images/Hackmate_thumbnail.png",
    likes: 195,
    comments: 27,
    demoUrl: "https://hackmate.anandmahadev.in/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/HACK-MATE",
    team: ["Anand Mahadev", "Dhanush Shenoy H", "Dinesh A"],
    features: [
      "AI-assisted problem statement parsing and feature breakdown",
      "Automated system architecture & tech stack planning",
      "Interactive 24h & 48h hackathon sprint execution roadmap",
      "Pitch deck & demo presentation story generator",
      "Live team collaboration & project milestone tracker",
    ],
  },
  {
    id: "5",
    title: "ThreatVision",
    author: "Ashwin Nethan, Jagadish S Naik, Swara Hedge & Prajna",
    description:
      "AI-powered transaction intelligence platform that uncovers hidden money-laundering rings, mule networks, and suspicious payment patterns in real time.",
    fullDescription:
      "ThreatVision is a cutting-edge cybersecurity and financial intelligence engine designed to detect financial crime before it happens. Powered by graph neural analytics and explainable AI, ThreatVision visualizes complex transaction networks, identifies circular money flows across accounts, flags mule accounts and shell entities instantly, and prioritizes high-risk security alerts for fraud investigation teams.",
    tags: ["Cyber Security", "AI / ML", "Next.js", "FinTech"],
    imageUrl: "/images/Threat-vision_thumbnail.png",
    likes: 210,
    comments: 31,
    demoUrl: "https://threat-vision-five.vercel.app/",
    repoUrl: "https://github.com/Ashwinnethan64-maker/ThreatVision",
    team: ["Ashwin Nethan", "Jagadish S Naik", "Swara Hedge", "Prajna"],
    features: [
      "Real-time graph analysis to detect circular money-flow patterns",
      "Instant identification of money mule accounts & shell entities",
      "Explainable AI scoring model for prioritized threat alerts",
      "Interactive suspicious transaction network visualizer",
      "Automated compliance and risk report generation",
    ],
  },
];

export function getProjectById(id: string): ProjectDetailProps | undefined {
  return MOCK_PROJECTS_DETAIL.find((p) => p.id === id);
}
