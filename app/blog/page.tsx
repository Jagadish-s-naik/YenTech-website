import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const POSTS = [
  {
    title: "Project Sankalp Code4Change National Hackathon",
    excerpt:
      "A premier 24-hour national hackathon organized at Yenepoya University empowering student innovators to solve critical real-world problems.",
    author: "YenTech Events",
    time: "24 Hours • May 25",
    img: "/images/Code4Change.jpg",
    href: "/events/project-sankalp",
  },
  {
    title: "OpenLoop 2026 National Hackathon",
    excerpt:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
    author: "YenTech Events",
    time: "24 Hours • Apr 26",
    img: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
    href: "/events/openloop-2026",
  },
  {
    title: "How to Build a Next.js App from Scratch",
    excerpt: "A complete beginner's guide to modern React frameworks.",
    author: "Jane Smith",
    time: "5 min read",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    title: "Understanding React Server Components",
    excerpt: "Deep dive into the new paradigm of React rendering.",
    author: "John Doe",
    time: "8 min read",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "Mastering Tailwind CSS Transitions",
    excerpt: "Make your UI pop with smooth micro-animations.",
    author: "Alice Johnson",
    time: "4 min read",
    img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        badge="Editorial & Publications"
        title="Blog & Insights"
        description="Technical deep dives, tutorials, and ecosystem stories from the YenTech team."
      />

      <PageContainer>
        {/* Featured Post */}
        <div className="group border-border/60 bg-card mb-12 flex cursor-pointer flex-col overflow-hidden rounded-2xl border shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md lg:flex-row">
          <div className="relative h-64 overflow-hidden lg:h-auto lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
              alt="Featured"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-10">
            <div className="mb-2 text-xs font-semibold tracking-wider text-[#0CBAA6] uppercase">
              Featured • Web Development
            </div>
            <h2 className="text-foreground mb-3 text-2xl font-bold tracking-tight transition-colors group-hover:text-[#0CBAA6] md:text-3xl">
              The Future of Web Technologies in 2026
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed md:text-base">
              Explore the cutting-edge frameworks, paradigms, and tools that are
              reshaping how we build the internet today and tomorrow.
            </p>
            <div className="border-border/50 mt-auto flex items-center justify-between border-t pt-4">
              <div className="text-muted-foreground flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-[#0CBAA6]" /> YenTech
                  Editorial
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> 10 min read
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#0CBAA6]">
                Read Article{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="border-border/60 mb-6 flex items-center justify-between border-b pb-4">
          <h3 className="text-foreground text-xl font-bold tracking-tight">
            Recent Articles
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => {
            const cardContent = (
              <div className="group border-border/60 bg-card flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-foreground mb-2 line-clamp-2 text-lg font-bold transition-colors group-hover:text-[#0CBAA6]">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-xs leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-muted-foreground border-border/50 flex items-center justify-between border-t pt-3 text-xs">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3 text-[#0CBAA6]" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.time}
                    </span>
                  </div>
                </div>
              </div>
            );

            return post.href ? (
              <Link key={i} href={post.href}>
                {cardContent}
              </Link>
            ) : (
              <div key={i}>{cardContent}</div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-border/70 rounded-full px-8 hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
          >
            Load More Articles
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
