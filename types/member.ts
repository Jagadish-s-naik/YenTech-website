export type DomainType = "web" | "ai" | "security" | "design";

export interface MemberProps {
  id: string;
  name: string;
  role: string;
  tagline: string;
  domain: DomainType;
  isCore: boolean;
  github?: string;
  linkedin?: string;
}
