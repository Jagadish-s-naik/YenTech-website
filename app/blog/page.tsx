import { PageHeader } from "@/components/shared/PageHeader";
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
    <div className="min-h-screen">
      <PageHeader
        title="Blog & Articles"
        description="Insights, tutorials, and stories from the YenTech team."
      />

      <div className="container mx-auto px-4 py-16 sm:px-8">
        {/* Featured Post */}
        <div className="bg-background group mb-16 flex cursor-pointer flex-col overflow-hidden rounded-3xl border shadow-sm transition-all hover:shadow-lg lg:flex-row">
          <div className="relative h-64 overflow-hidden lg:h-auto lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
              alt="Featured"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
            <div className="text-primary mb-3 text-sm font-semibold">
              Featured • Web Development
            </div>
            <h2 className="group-hover:text-primary mb-4 text-3xl font-bold transition-colors">
              The Future of Web Technologies in 2026
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3 text-lg">
              Explore the cutting-edge frameworks, paradigms, and tools that are
              reshaping how we build the internet today and tomorrow.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" /> YenTech Editorial
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> 10 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <h3 className="mb-8 text-2xl font-bold">Recent Articles</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <div
              key={i}
              className="bg-background group flex cursor-pointer flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="group-hover:text-primary mb-3 line-clamp-2 text-xl font-bold transition-colors">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 text-sm">
                  {post.excerpt}
                </p>
                <div className="text-muted-foreground flex items-center justify-between border-t pt-4 text-xs">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
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
          <Button variant="outline" className="rounded-full px-8">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
