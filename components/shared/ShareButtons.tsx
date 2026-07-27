"use client";

import React, { useSyncExternalStore } from "react";
import { Share2 } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

const subscribe = () => () => {};
const getSnapshot = () =>
  typeof window !== "undefined" ? window.location.href : "https://yentech.org";
const getServerSnapshot = () => "https://yentech.org";

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const windowUrl = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const activeUrl = url || windowUrl;

  const shareText = `Check out this article on YenTech: "${title}"\n\n${activeUrl}`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    shareText,
  )}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
    shareText,
  )}`;

  return (
    <div className="border-border/60 bg-card/60 space-y-4 rounded-3xl border p-6 shadow-sm backdrop-blur-md">
      <h4 className="font-heading text-foreground flex items-center gap-2 text-sm font-bold">
        <Share2 className="h-4 w-4 text-[#0CBAA6]" /> Share Article
      </h4>
      <div className="grid grid-cols-3 gap-2">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
          className="border-border/60 bg-card/40 text-foreground/80 flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold backdrop-blur-xs transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-xs"
        >
          <svg className="h-4 w-4 shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001L2 22l5.127-1.341c1.464.798 3.116 1.218 4.882 1.219h.004c5.503 0 9.987-4.478 9.989-9.985 0-2.667-1.037-5.176-2.922-7.062C17.197 3.037 14.686 2 12.012 2zm5.836 14.286c-.247.693-1.43 1.325-1.998 1.41-.51.077-1.156.108-1.865-.117-.43-.137-.981-.32-1.688-.625-2.977-1.285-4.919-4.28-5.068-4.478-.148-.198-1.211-1.61-1.211-3.07 0-1.46.766-2.177 1.038-2.474.272-.297.592-.371.79-.371.198 0 .396.001.568.01.182.008.426-.069.667.51.246.59.839 2.05.912 2.199.074.148.123.321.025.519-.099.198-.148.321-.296.494-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.297.77 1.267 1.65 2.05 1.13 1.01 2.087 1.322 2.384 1.47.297.148.471.124.644-.075.173-.198.742-.866.939-1.163.198-.297.396-.247.693-.099.297.148 1.884.888 2.206 1.048.321.16.535.238.61.362.075.124.075.718-.172 1.411z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* X / Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X (Twitter)"
          className="border-border/60 bg-card/40 text-foreground/80 flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold backdrop-blur-xs transition-all hover:border-[#0CBAA6]/50 hover:bg-[#0CBAA6]/10 hover:text-[#0CBAA6] hover:shadow-xs"
        >
          <svg
            className="text-foreground h-3.5 w-3.5 shrink-0 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>X/Twitter</span>
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="border-border/60 bg-card/40 text-foreground/80 flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold backdrop-blur-xs transition-all hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:shadow-xs"
        >
          <svg
            className="h-3.5 w-3.5 shrink-0 fill-[#0A66C2]"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
