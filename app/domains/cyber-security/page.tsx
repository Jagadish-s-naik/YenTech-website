import { PageHeader } from "@/components/shared/PageHeader";
import { BookOpen, Lightbulb, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const SYLLABUS = [
  { module: "Module 1", desc: "Network Fundamentals", icon: BookOpen },
  { module: "Module 2", desc: "Ethical Hacking", icon: Lightbulb },
  { module: "Module 3", desc: "Cryptography", icon: Users },
  { module: "Module 4", desc: "Security Auditing", icon: Award },
];

export default function DomainPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Cyber Security"
        description="Learn to protect systems and networks from digital attacks."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <section>
              <h2 className="mb-4 text-2xl font-bold">About this Domain</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dive deep into Cyber Security. Our curriculum is designed to
                take you from fundamentals to advanced concepts, preparing you
                for real-world challenges and industry demands.
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
          </div>
        </div>
      </div>
    </div>
  );
}
