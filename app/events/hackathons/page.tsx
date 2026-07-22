import { PageHeader } from "@/components/shared/PageHeader";
import { EventCard, EventProps } from "@/components/shared/EventCard";

const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "OpenLoop 2026 National Hackathon",
    type: "Hackathon",
    date: "April 26-27, 2026",
    time: "24 Hours",
    location: "YMK Auditorium, Kulur Campus",
    description:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
    attendees: 300,
    imageUrl:
      "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
    status: "completed",
  },
  {
    id: "project-sankalp",
    title: "Project Sankalp Code4Change National Hackathon",
    type: "Hackathon",
    date: "May 25-26, 2026",
    time: "24 Hours",
    location: "Yendance Zone, Yenepoya University, Deralakatte",
    description:
      "Project Sankalp Code4Change is a premier 24-hour national hackathon designed to empower the next generation of innovators to solve critical real-world problems.",
    attendees: 350,
    imageUrl: "/images/Code4Change.jpg",
    status: "completed",
    newsUrl: "https://www.varthabharati.in/DakshinaKannada/--2249771",
    youtubeUrl: "https://youtu.be/Tss2pwHXhrA?si=6dZj1tw8uJKeWUBM",
    youtubeEmbedId: "Tss2pwHXhrA",
  },
];

export default function EventsSubPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Hackathons"
        description="Explore all our hackathons."
      />
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
