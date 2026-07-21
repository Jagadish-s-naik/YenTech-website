import { PageHeader } from "@/components/shared/PageHeader";
import { PageContainer } from "@/components/shared/PageContainer";
import { Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = [
  {
    title: "OpenLoop 2026 National Hackathon",
    excerpt:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
    author: "YenTech Events",
    time: "24 Hours • Apr 26",
    img: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
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
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Editorial & Publications"
        title="Blog & Insights"
        description="Technical deep dives, tutorials, and ecosystem stories from the YenTech team."
      />

      <PageContainer>
        {/* Featured Post */}
        <div className="group mb-12 flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md lg:flex-row">
          <div className="relative h-64 overflow-hidden lg:h-auto lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
              alt="Featured"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-10">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0CBAA6]">
              Featured • Web Development
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0CBAA6] md:text-3xl">
              The Future of Web Technologies in 2026
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3 text-sm md:text-base leading-relaxed">
              Explore the cutting-edge frameworks, paradigms, and tools that are
              reshaping how we build the internet today and tomorrow.
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
              <div className="text-muted-foreground flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-[#0CBAA6]" /> YenTech Editorial
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> 10 min read
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#0CBAA6]">
                Read Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-4">
          <h3 className="text-xl font-bold tracking-tight text-foreground">Recent Articles</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <div
              key={i}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-xs transition-all duration-300 hover:border-[#0CBAA6]/40 hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="mb-2 line-clamp-2 text-lg font-bold text-foreground transition-colors group-hover:text-[#0CBAA6]">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-xs leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-muted-foreground flex items-center justify-between border-t border-border/50 pt-3 text-xs">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3 text-[#0CBAA6]" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full border-border/70 px-8 hover:border-[#0CBAA6] hover:text-[#0CBAA6]">
            Load More Articles
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}

