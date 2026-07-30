import { MemberProps } from "@/types/member";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/button";

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface MemberCardProps {
  member: MemberProps;
  variant?: "standard" | "spotlight";
}

export function MemberCard({ member, variant = "standard" }: MemberCardProps) {
  const initials = getInitials(member.name);
  const isSpotlight = variant === "spotlight";

  return (
    <div
      className={`border-border/60 bg-card/60 group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border text-center shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBAA6]/40 hover:shadow-lg ${
        isSpotlight ? "p-8 sm:p-10" : "p-6"
      }`}
    >
      {/* Background ambient lighting blur */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-36 w-48 -translate-x-1/2 rounded-full bg-[#0CBAA6]/15 blur-2xl transition-all duration-500 group-hover:bg-[#0CBAA6]/25" />

      {/* Avatar Container with Ring */}
      <div className="relative mb-5">
        <div
          className={`font-heading flex items-center justify-center rounded-2xl bg-linear-to-br from-[#0CBAA6] to-[#0a9e8d] font-black text-white shadow-md ring-2 ring-[#0CBAA6]/20 transition-transform duration-300 group-hover:scale-105 group-hover:ring-[#0CBAA6]/60 ${
            isSpotlight ? "h-24 w-24 text-2xl" : "h-16 w-16 text-lg"
          }`}
        >
          {initials}
        </div>
      </div>

      {/* Name */}
      <h3
        className={`font-heading text-foreground font-extrabold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6] ${
          isSpotlight ? "text-xl sm:text-2xl" : "text-lg"
        }`}
      >
        {member.name}
      </h3>

      {/* Role Pill */}
      <div className="mt-2 mb-4">
        <span className="inline-block rounded-full border border-[#0CBAA6]/30 bg-[#0CBAA6]/10 px-3 py-1 text-xs font-bold tracking-wider text-[#0CBAA6] uppercase">
          {member.role}
        </span>
      </div>

      {/* Punchy Tagline Container */}
      <div className="border-border/40 bg-muted/20 mb-6 flex w-full flex-1 items-center justify-center rounded-2xl border p-3.5 backdrop-blur-xs">
        <p className="text-muted-foreground text-xs leading-relaxed font-medium italic">
          "{member.tagline}"
        </p>
      </div>

      {/* Action Links */}
      <div className="border-border/40 mt-auto flex w-full items-center justify-center gap-2 border-t pt-4">
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s GitHub`}
          >
            <Button
              size="icon"
              variant="outline"
              className="border-border/60 bg-background/50 text-muted-foreground h-9 w-9 rounded-full hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
            >
              <GithubIcon className="h-4 w-4 fill-current" />
            </Button>
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Button
              size="icon"
              variant="outline"
              className="border-border/60 bg-background/50 text-muted-foreground h-9 w-9 rounded-full hover:border-[#0CBAA6] hover:text-[#0CBAA6]"
            >
              <LinkedinIcon className="h-4 w-4 fill-current" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
