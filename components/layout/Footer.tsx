"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Cpu,
  Palette,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <footer className="bg-card/50 text-muted-foreground border-border/60 mt-auto w-full border-t backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="group flex items-center gap-2.5">
              <img
                src="/yentech.svg"
                alt="YenTech Logo"
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading text-foreground text-base font-bold tracking-widest uppercase transition-colors group-hover:text-[#0CBAA6]">
                YENTECH
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed">
              Yenepoya School of Engineering & Technology. Building the future
              of innovation through technology.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://github.com/Jagadish-s-naik/YenTech-website"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#0CBAA6]"
              >
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
              </a>
              <a
                href="https://www.linkedin.com/company/yentech-community/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#0CBAA6]"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yentech.community/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#0CBAA6]"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Domains */}
          <div className="border-border/40 border-t pt-4 md:border-t-0 md:pt-0">
            <button
              onClick={() => toggleSection("domains")}
              className="font-heading text-foreground flex w-full items-center justify-between text-sm font-semibold tracking-wider uppercase md:cursor-default"
              aria-expanded={openSections["domains"]}
            >
              <span>Domains</span>
              <ChevronDown
                className={`text-muted-foreground h-4 w-4 transition-transform duration-200 md:hidden ${
                  openSections["domains"] ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`mt-3 space-y-2 text-sm md:block ${
                openSections["domains"] ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/domains/web-development"
                  className="flex items-center gap-2 transition-colors hover:text-[#0CBAA6]"
                >
                  <Monitor className="h-4 w-4 text-[#0CBAA6]" /> Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/ai-ml"
                  className="flex items-center gap-2 transition-colors hover:text-[#0CBAA6]"
                >
                  <Cpu className="h-4 w-4 text-[#0CBAA6]" /> AI & ML
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/graphics-design"
                  className="flex items-center gap-2 transition-colors hover:text-[#0CBAA6]"
                >
                  <Palette className="h-4 w-4 text-[#0CBAA6]" /> Graphics Design
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/cyber-security"
                  className="flex items-center gap-2 transition-colors hover:text-[#0CBAA6]"
                >
                  <ShieldCheck className="h-4 w-4 text-[#0CBAA6]" /> Cyber
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border-border/40 border-t pt-4 md:border-t-0 md:pt-0">
            <button
              onClick={() => toggleSection("quickLinks")}
              className="font-heading text-foreground flex w-full items-center justify-between text-sm font-semibold tracking-wider uppercase md:cursor-default"
              aria-expanded={openSections["quickLinks"]}
            >
              <span>Quick Links</span>
              <ChevronDown
                className={`text-muted-foreground h-4 w-4 transition-transform duration-200 md:hidden ${
                  openSections["quickLinks"] ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`mt-3 space-y-2 text-sm md:block ${
                openSections["quickLinks"] ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/events"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  Events Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/badges"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  Resource Library
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border-border/40 border-t pt-4 md:border-t-0 md:pt-0">
            <button
              onClick={() => toggleSection("contact")}
              className="font-heading text-foreground flex w-full items-center justify-between text-sm font-semibold tracking-wider uppercase md:cursor-default"
              aria-expanded={openSections["contact"]}
            >
              <span>Contact</span>
              <ChevronDown
                className={`text-muted-foreground h-4 w-4 transition-transform duration-200 md:hidden ${
                  openSections["contact"] ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`mt-3 space-y-3 text-sm md:block ${
                openSections["contact"] ? "block" : "hidden"
              }`}
            >
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0CBAA6]" />
                <span>
                  Yenepoya School of Engineering & Technology, Balmatta,
                  Mangaluru, Karnataka 575002
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#0CBAA6]" />
                <a
                  href="mailto:info@yentech.edu"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  info@yentech.edu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#0CBAA6]" />
                <a
                  href="tel:+911234567890"
                  className="transition-colors hover:text-[#0CBAA6]"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & links */}
        <div className="border-border/60 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-xs sm:mt-12 md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} YenTech. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/admin"
              className="transition-colors hover:text-[#0CBAA6]"
            >
              Admin
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#0CBAA6]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#0CBAA6]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
