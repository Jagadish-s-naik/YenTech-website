import Link from "next/link";
import {
  Monitor,
  Cpu,
  Palette,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/40 text-muted-foreground mt-auto w-full border-t">
      <div className="container mx-auto px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/yentech.svg" alt="YenTech Logo" className="h-7 w-7" />
              <span className="font-heading bg-linear-to-r from-[#0cbaa6] to-[#dbfb02] bg-clip-text text-xl font-bold tracking-tight text-transparent">
                YenTech
              </span>
            </Link>
            <p className="text-sm">
              Yenepoya School of Engineering & Technology. Building the future
              of innovation through technology.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h3 className="text-foreground text-sm font-semibold">Domains</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/domains/web-development"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Monitor className="h-4 w-4" /> Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/ai-ml"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Cpu className="h-4 w-4" /> AI & ML
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/graphics-design"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Palette className="h-4 w-4" /> Graphics Design
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/cyber-security"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <ShieldCheck className="h-4 w-4" /> Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground text-sm font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/events"
                  className="hover:text-primary transition-colors"
                >
                  Events Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary transition-colors"
                >
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/badges"
                  className="hover:text-primary transition-colors"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary transition-colors"
                >
                  Resource Library
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Yenepoya Institute of Technology, Moodbidri, Mangaluru,
                  Karnataka 574227
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@yentech.edu"
                  className="hover:text-primary transition-colors"
                >
                  info@yentech.edu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-primary transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row">
          <p>&copy; {new Date().getFullYear()} YenTech. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/admin"
              className="hover:text-primary transition-colors"
            >
              Admin
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
