export interface ProjectProps {
  id: string;
  title: string;
  author: string;
  description: string;
  tags: string[];
  imageUrl: string;
  likes: number;
  comments: number;
  repoUrl?: string;
  demoUrl?: string;
}

export interface ProjectDetailProps extends ProjectProps {
  fullDescription?: string;
  features?: string[];
  team?: string[];
  techStack?: string[];
}
