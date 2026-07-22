import { EventProps, EventItem } from "@/types/event";

export const MOCK_EVENTS: EventProps[] = [
  {
    id: "1",
    title: "Intro to React & Next.js Workshop",
    type: "Workshop",
    date: "October 12, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Lab 1, Main Block",
    description:
      "Learn the fundamentals of building modern web applications using React and Next.js. We will cover components, state, routing, and deployment. This is a hands-on workshop, so please bring your laptops. Prerequisites include basic knowledge of HTML, CSS, and JavaScript.",
    attendees: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "openloop-2026",
    title: "OpenLoop 2026 National Hackathon",
    type: "Hackathon",
    date: "April 26-27, 2026",
    time: "24 Hours",
    location: "YMK Auditorium, Kulur Campus",
    description:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium. Join us for an exciting 24 hours of coding, problem-solving, and innovation. Prizes will be awarded to the top 3 teams.",
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
      "Project Sankalp Code4Change is a premier 24-hour national-level hackathon designed to empower student developers and innovators to build creative solutions for critical real-world challenges. Organized at Yenepoya University, this flagship event brought together passionate minds across the nation for an intensive hackathon experience.",
    attendees: 350,
    imageUrl: "/images/Code4Change.jpg",
    status: "completed",
    newsUrl: "https://www.varthabharati.in/DakshinaKannada/--2249771",
    youtubeUrl: "https://youtu.be/Tss2pwHXhrA?si=6dZj1tw8uJKeWUBM",
    youtubeEmbedId: "Tss2pwHXhrA",
  },
  {
    id: "3",
    title: "Cyber Security in the Modern Age",
    type: "Tech Talk",
    date: "October 20, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall B",
    description:
      "An expert talk on the latest threats in cybersecurity and how organizations are defending against them. Guest speaker from TechDefend. Learn about common attack vectors, phishing, ransomware, and the role of AI in cybersecurity.",
    attendees: 85,
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
];

export const FEATURED_EVENTS: EventItem[] = [
  {
    id: "openloop-2026",
    title: "OpenLoop 2026 National Hackathon",
    description:
      "A national-level 24-hour hackathon organized by Yenepoya School of Engineering and Technology in collaboration with DK24, Nxtwave, and Kalvium.",
    date: "April 26-27, 2026",
    location: "YMK Auditorium, YIASCM Kulur Campus",
    imageUrl:
      "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/ASM_hackathon_27042026_1.jpg",
    imageLeft: false,
  },
  {
    id: "project-sankalp",
    title: "Project Sankalp Code4Change National Hackathon",
    description:
      "Project Sankalp is a premier 24-hour hackathon designed to empower the next generation of innovators to solve critical real-world problems.",
    date: "May 25-26, 2026",
    location: "Yendance Zone, Yenepoya University, Deralakatte",
    imageUrl: "/images/Code4Change.jpg",
    imageLeft: true,
  },
];

export function getEventById(id: string): EventProps | undefined {
  const decodedId = decodeURIComponent(id).toLowerCase();
  return MOCK_EVENTS.find(
    (e) =>
      e.id.toLowerCase() === decodedId ||
      e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === decodedId ||
      (decodedId.includes("sankalp") && e.id.includes("sankalp")) ||
      (decodedId.includes("openloop") && e.id.includes("openloop")),
  );
}

export function getEventsByType(type: EventProps["type"]): EventProps[] {
  return MOCK_EVENTS.filter((e) => e.type === type);
}
