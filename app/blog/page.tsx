"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Clock, User, ArrowRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: "Event Reports" | "Engineering" | "Open Source";
  time: string;
  img: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    id: "project-sankalp",
    title: "Project Sankalp Code4Change National Hackathon",
    excerpt:
      "A premier 24-hour national hackathon organized at Yenepoya University empowering student innovators to solve critical real-world problems.",
    author: "YenTech Media",
    category: "Event Reports",
    time: "24 Hours • May 25",
    img: "/images/Code4Change.jpg",
    featured: true,
  },
  {
    id: "openloop-2026",
    title: "OpenLoop 2026 National Hackathon",
    excerpt:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
    author: "YenTech Media",
    category: "Event Reports",
    time: "24 Hours • Apr 26",
    img: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
  },
  {
    id: "building-scalable-ai-microservices",
    title: "Building Scalable AI Microservices with Modern Frameworks",
    excerpt:
      "Learn how YenTech engineers leverage lightweight microservice architectures to deploy inference models into production environments.",
    author: "AI/ML Guild",
    category: "Engineering",
    time: "6 min read • Jun 12",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    id: "navigating-open-source-communities",
    title: "Navigating Open Source Communities: A Student Guide",
    excerpt:
      "Tips, best practices, and lessons learned from contributing to global open-source projects during campus hackathons.",
    author: "Open Source Club",
    category: "Open Source",
    time: "8 min read • May 18",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "future-of-web-technologies",
    title: "The Future of Web Technologies: 2026 & Beyond",
    excerpt:
      "Explore the cutting-edge frameworks, paradigms, and web standards that are reshaping modern application development.",
    author: "YenTech Editorial",
    category: "Engineering",
    time: "10 min read • Apr 10",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  },
];

const CATEGORIES = [
  "All Articles",
  "Event Reports",
  "Engineering",
  "Open Source",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const featuredPost = useMemo(
    () => POSTS.find((p) => p.featured) || POSTS[0],
    [],
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Articles") return POSTS;
    return POSTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[#0CBAA6]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#D9FB02]/5 blur-3xl" />

      <PageHeader
        breadcrumbs={[{ label: "Blog" }]}
        title="Blog & Insights"
        description="Technical deep dives, event highlights, and ecosystem stories from the YenTech team."
      />

      <PageContainer>
        {/* Featured Hero Article */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-3.5 py-1 text-xs font-semibold text-[#0CBAA6]">
              <BookOpen className="h-3.5 w-3.5" /> Featured Publication
            </span>
          </div>
          <Link href={`/blog/${featuredPost.id}`}>
            <div className="border-border/60 bg-card/60 group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:flex-row">
              <div className="bg-muted relative h-64 overflow-hidden lg:h-auto lg:w-1/2">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-3 py-0.5 text-[11px] font-semibold text-[#0CBAA6]">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="font-heading text-foreground mb-3 text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6] md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed md:text-base">
                  {featuredPost.excerpt}
                </p>
                <div className="border-border/50 mt-auto flex items-center justify-between border-t pt-4">
                  <div className="text-muted-foreground flex items-center gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#0CBAA6]" />{" "}
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {featuredPost.time}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#0CBAA6]">
                    Read Article{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0CBAA6] text-white shadow-md shadow-[#0CBAA6]/20"
                    : "border-border/60 bg-card/60 text-muted-foreground hover:border-[#0CBAA6]/50 hover:text-[#0CBAA6] border backdrop-blur-xs"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="border-border/60 bg-card/60 group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border shadow-sm backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="border-border/50 relative h-48 w-full overflow-hidden border-b">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="border-border/60 bg-card/80 text-foreground flex items-center gap-1 rounded-full border px-3 py-0.5 text-[11px] font-semibold backdrop-blur-sm shadow-xs">
                      <Tag className="h-3 w-3 text-[#0CBAA6]" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-foreground mb-2 line-clamp-2 text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6]">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2 flex-1 text-xs leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-muted-foreground border-border/50 flex items-center justify-between border-t pt-4 text-xs">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-[#0CBAA6]" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.time}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
