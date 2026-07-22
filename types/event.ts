export interface EventProps {
  id: string;
  title: string;
  type: "Workshop" | "Hackathon" | "Seminar" | "Tech Talk";
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  imageUrl?: string;
  status?: "upcoming" | "completed";
  newsUrl?: string;
  youtubeUrl?: string;
  youtubeEmbedId?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  imageLeft: boolean;
}
