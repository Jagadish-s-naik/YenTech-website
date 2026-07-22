"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  LayoutDashboard,
  Calendar as CalendarIcon,
  Award,
  Settings,
  User,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

const SIDEBAR_LINKS = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/member" },
  { name: "My Events", icon: CalendarIcon, href: "/member/events" },
  { name: "Badges", icon: Award, href: "/member/badges" },
  { name: "Profile", icon: User, href: "/member/profile" },
  { name: "Settings", icon: Settings, href: "/member/settings" },
];

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdminStatus() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: adminRow } = await supabase
          .from("admins")
          .select("user_id")
          .eq("user_id", user.id)
          .maybeSingle();

        if (adminRow) {
          setIsAdmin(true);
        }
      }
    }

    checkAdminStatus();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <div className="bg-muted/20 flex min-h-screen flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="bg-background hidden border-r md:flex md:w-64 md:shrink-0 md:flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <span className="font-heading text-lg font-bold">Member Portal</span>
        </div>
        <div className="flex-1 p-4">
          <nav className="space-y-1">
            {SIDEBAR_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Link>
              );
            })}

            {/* Render Admin Panel link ONLY for admins */}
            {isAdmin && (
              <Link
                href="/admin"
                className="text-primary hover:bg-primary/10 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors"
              >
                <ShieldCheck className="h-4 w-4" />
                Admin Panel
              </Link>
            )}
          </nav>
        </div>
        <div className="border-t p-4">
          <button
            onClick={handleSignOut}
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/10"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Top Header */}
        <header className="bg-background flex h-16 items-center justify-between border-b px-4 md:px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const query = formData.get("q");
              if (query) {
                const searchParams = new URLSearchParams(
                  window.location.search,
                );
                searchParams.set("q", query.toString());
                router.push(`/member/search?${searchParams.toString()}`);
              }
            }}
            className="flex w-full max-w-xs items-center gap-2 sm:max-w-sm sm:gap-4"
          >
            <Search className="text-muted-foreground h-4 w-4 shrink-0" />
            <input
              type="text"
              name="q"
              placeholder="Search members, events, badges..."
              className="w-full border-none bg-transparent text-xs focus:outline-none sm:text-sm"
            />
          </form>
          <div className="flex items-center gap-3 md:gap-4">
            {isAdmin && (
              <Link
                href="/admin"
                className="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Admin
              </Link>
            )}
            <Link href="/member/notifications">
              <button className="text-muted-foreground hover:bg-muted relative rounded-full p-2 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </Link>
            <Link href="/member/profile">
              <div className="bg-primary/20 text-primary hover:ring-primary/50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm font-bold transition-all hover:ring-2">
                JS
              </div>
            </Link>
          </div>
        </header>

        {/* Mobile Horizontal Navigation Tabs */}
        <div className="bg-background flex items-center justify-between border-b px-4 py-2 md:hidden">
          <nav className="no-scrollbar flex items-center gap-1 overflow-x-auto py-0.5">
            {SIDEBAR_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <link.icon className="h-3.5 w-3.5" />
                  {link.name}
                </Link>
              );
            })}
            {isAdmin && (
              <Link
                href="/admin"
                className="bg-primary/10 text-primary flex shrink-0 items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Admin
              </Link>
            )}
          </nav>
          <button
            onClick={handleSignOut}
            title="Sign Out"
            className="text-muted-foreground ml-2 shrink-0 cursor-pointer rounded-lg p-2 transition-colors hover:bg-red-500/10 hover:text-red-500"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>

        {/* Dashboard Content */}
        {children}
      </main>
    </div>
  );
}
