import { PageHeader } from "@/components/shared/PageHeader";
import { Monitor, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const SYLLABUS = [
  {
    module: "Module 1: Frontend Basics",
    desc: "HTML5, CSS3, JavaScript (ES6+), and Responsive Design principles.",
    icon: Globe,
  },
  {
    module: "Module 2: Modern Frameworks",
    desc: "Deep dive into React.js, component architecture, and state management.",
    icon: Code,
  },
  {
    module: "Module 3: Backend Integration",
    desc: "Node.js, Express, RESTful APIs, and database fundamentals (SQL/NoSQL).",
    icon: Database,
  },
  {
    module: "Module 4: Full Stack with Next.js",
    desc: "Server-side rendering, static site generation, routing, and deployment.",
    icon: Monitor,
  },
];

export default function WebDevPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Web Development"
        description="Master the art of building scalable, responsive, and interactive web applications from scratch."
      />

      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <section>
              <h2 className="mb-4 text-2xl font-bold">About this Domain</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Web Development domain at YenTech is designed for students
                who want to create the digital experiences of tomorrow. We cover
                everything from the structural basics of the web to advanced
                full-stack architectures using modern frameworks like React and
                Next.js.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">Learning Path</h2>
              <div className="space-y-6">
                {SYLLABUS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background flex gap-4 rounded-2xl border p-6 shadow-sm"
                  >
                    <div className="bg-primary/10 text-primary h-fit rounded-xl p-3">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {item.module}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/30 rounded-2xl border p-6">
              <h3 className="mb-2 text-xl font-bold">Join the Domain</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Get access to exclusive workshops, mentorship, and project
                collaborations.
              </p>
              <Button className="w-full">Enroll Now</Button>
            </div>

            <div className="bg-muted/30 rounded-2xl border p-6">
              <h3 className="mb-4 text-lg font-bold">Domain Leads</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 font-bold text-slate-600">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-muted-foreground text-xs">
                      Lead Instructor
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 font-bold text-slate-600">
                    AS
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alice Smith</p>
                    <p className="text-muted-foreground text-xs">
                      Community Manager
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
