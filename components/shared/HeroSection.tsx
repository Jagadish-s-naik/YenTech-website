import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-background relative overflow-hidden pt-24 pb-32">
      {/* Background decoration */}
      <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[bottom_1px_center] dark:border-b dark:border-slate-100/5 dark:bg-bottom"></div>
      <div className="from-primary/40 absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr to-blue-500/40 opacity-30 blur-3xl dark:opacity-20"></div>

      <div className="relative container mx-auto px-4 text-center sm:px-8">
        <div className="bg-muted/50 animate-in fade-in slide-in-from-bottom-4 mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium duration-500">
          <Sparkles className="text-primary h-4 w-4" />
          <span>Welcome to the future of technology</span>
        </div>

        <h1 className="font-heading animate-in fade-in slide-in-from-bottom-5 mb-8 text-5xl font-extrabold tracking-tight duration-700 sm:text-6xl md:text-7xl">
          Empowering Innovators <br className="hidden sm:block" />
          at{" "}
          <span className="from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent">
            YenTech
          </span>
        </h1>

        <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-6 mx-auto mb-10 max-w-2xl text-lg duration-1000 sm:text-xl">
          Yenepoya School of Engineering & Technology's premier tech community.
          Explore domains, participate in events, and build projects that
          matter.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-7 flex flex-col items-center justify-center gap-4 delay-150 duration-1000 sm:flex-row">
          <Link href="/domains">
            <Button
              size="lg"
              className="w-full gap-2 rounded-full font-semibold sm:w-auto"
            >
              Explore Domains <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-full font-semibold sm:w-auto"
            >
              View Upcoming Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
