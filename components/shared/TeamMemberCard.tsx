import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { InteractiveDotGridCanvas } from "@/components/shared/InteractiveDotGridCanvas";

interface TeamMemberCardProps {
  name: string;
  role: string;
  blurb: string;
  photo?: string;
  github?: string;
  linkedin?: string;
  avatarIndex?: number;
  showRoleStrip?: boolean;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  blurb,
  photo,
  github,
  linkedin,
  avatarIndex = 0,
  showRoleStrip = true,
  className = "",
}: TeamMemberCardProps) {
  const hasSocials = github || linkedin;

  return (
    <div
      className={`group border-border/50 bg-card/80 relative flex h-full min-h-95 w-full flex-col overflow-hidden rounded-3xl border shadow-sm transition-all duration-500 hover:shadow-lg sm:min-h-102.5 ${className}`}
    >
      {/* 1. Top Strip: Centered Role text only (Optional) */}
      {showRoleStrip && (
        <div className="border-border/40 bg-background/80 group-hover:bg-background/90 relative z-10 flex flex-col items-center justify-center border-b px-5 py-3.5 text-center backdrop-blur-md transition-colors">
          <span className="font-heading text-foreground text-base font-extrabold tracking-wide uppercase sm:text-lg">
            {role}
          </span>
        </div>
      )}

      {/* 2. Middle Section: Topographic Marching Squares Canvas */}
      <div className="relative h-64 w-full overflow-hidden sm:h-72">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <InteractiveDotGridCanvas seed={avatarIndex + name.length * 13} />
        )}
      </div>

      {/* 3. Bottom Strip: Name -> Blurb -> Social Links (3rd line, centered) */}
      <div className="border-border/40 bg-background/90 group-hover:bg-background relative z-10 flex flex-col items-center justify-end space-y-2 border-t p-5 text-center backdrop-blur-md transition-colors duration-300 sm:p-6">
        {/* Line 1: Member Name */}
        <h3 className="font-heading text-foreground text-xl font-extrabold tracking-tight transition-colors duration-200 group-hover:text-[#0CBAA6] sm:text-2xl">
          {name}
        </h3>

        {/* Line 2: Quip / Personal Blurb */}
        <p className="text-muted-foreground text-xs leading-relaxed font-medium italic sm:text-sm">
          {blurb}
        </p>

        {/* Line 3: Social Links (Centered) */}
        {hasSocials && (
          <div className="flex items-center justify-center gap-2 pt-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s GitHub`}
                className="border-border/60 bg-muted/50 text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-[#0CBAA6]/40 hover:bg-[#0CBAA6]/10 hover:text-[#0CBAA6]"
              >
                <GithubIcon className="h-4 w-4 fill-current" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
                className="border-border/60 bg-muted/50 text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border transition-all hover:border-[#0CBAA6]/40 hover:bg-[#0CBAA6]/10 hover:text-[#0CBAA6]"
              >
                <LinkedinIcon className="h-4 w-4 fill-current" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
