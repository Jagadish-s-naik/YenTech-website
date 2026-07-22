import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { getDomainBySlug } from "@/data/domains";
import {
  BookOpen,
  Lightbulb,
  Users,
  Award,
  Monitor,
  Code,
  Database,
  Globe,
} from "lucide-react";

const SYLLABUS_ICONS = [BookOpen, Lightbulb, Users, Award];
const WEB_DEV_ICONS = [Globe, Code, Database, Monitor];

export default async function DomainSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);

  if (!domain) {
    notFound();
  }

  const icons = slug === "web-development" ? WEB_DEV_ICONS : SYLLABUS_ICONS;

  return (
    <div className="min-h-screen">
      <PageHeader title={domain.name} description={domain.desc} />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <section>
              <h2 className="mb-4 text-2xl font-bold">About this Domain</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {domain.description}
              </p>
            </section>
            <section>
              <h2 className="mb-6 text-2xl font-bold">Learning Path</h2>
              <div className="space-y-6">
                {domain.syllabus.map((item, index) => {
                  const Icon = icons[index] || BookOpen;
                  return (
                    <div
                      key={index}
                      className="bg-background flex gap-4 rounded-2xl border p-6 shadow-sm"
                    >
                      <div className="bg-primary/10 text-primary h-fit rounded-xl p-3">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {item.module}
                        </h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
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
