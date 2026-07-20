import { PageHeader } from "@/components/shared/PageHeader";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ALUMNI = [
  {
    name: "Rahul Verma",
    role: "Software Engineer at Google",
    location: "Bangalore",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer at Adobe",
    location: "Remote",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Amit Kumar",
    role: "Security Analyst at IBM",
    location: "Pune",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Data Scientist at Amazon",
    location: "Hyderabad",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function AlumniPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Alumni Network"
        description="Connect with YenTech graduates who are changing the industry."
      />

      <div className="container mx-auto px-4 py-16 sm:px-8">
        {/* Success Story */}
        <div className="bg-primary text-primary-foreground mb-16 flex flex-col items-center gap-8 rounded-3xl p-8 shadow-xl md:flex-row md:p-12">
          <div className="border-primary-foreground/20 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 md:h-48 md:w-48">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
              alt="Sarah"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="bg-primary-foreground/20 mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold">
              Spotlight
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Sarah Jenkins
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl text-lg">
              "YenTech gave me the practical skills and the network I needed to
              land my dream job at Microsoft. The hackathons and open-source
              projects were the exact experiences interviewers were looking
              for."
            </p>
            <Button variant="secondary" className="rounded-full">
              Read Full Story
            </Button>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="mb-8 flex items-end justify-between">
          <h3 className="text-2xl font-bold">Alumni Directory</h3>
          <Button variant="outline" size="sm">
            Join Directory
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ALUMNI.map((alumnus, i) => (
            <div
              key={i}
              className="bg-background group flex flex-col items-center rounded-2xl border p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="border-muted mb-4 h-24 w-24 overflow-hidden rounded-full border-2">
                <img
                  src={alumnus.img}
                  alt={alumnus.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="mb-1 text-lg font-bold">{alumnus.name}</h4>
              <div className="text-primary mb-3 flex items-center justify-center gap-1 text-sm font-medium">
                <Briefcase className="h-3 w-3" /> {alumnus.role}
              </div>
              <div className="text-muted-foreground mb-6 flex items-center justify-center gap-1 text-xs">
                <MapPin className="h-3 w-3" /> {alumnus.location}
              </div>
              <Button
                variant="outline"
                className="mt-auto h-9 w-full gap-2 rounded-full text-xs"
              >
                <ExternalLink className="h-3 w-3" /> Connect
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
