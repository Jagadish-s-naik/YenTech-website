"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Users,
  Activity,
  Settings,
  LogOut,
  Loader2,
  Plus,
  Search,
  Trash2,
  CheckCircle2,
  Clock,
  Shield,
  RefreshCw,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WhitelistEntry {
  campus_id: string;
  created_at: string;
}

interface MemberEntry {
  id: string;
  campus_id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

function getErrorMessage(err: unknown, fallback: string): string {
  if (err instanceof Error) return err.message;
  if (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    typeof (err as { message: unknown }).message === "string"
  ) {
    return (err as { message: string }).message;
  }
  if (typeof err === "string") return err;
  return fallback;
}

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Whitelist management states
  const [whitelist, setWhitelist] = useState<WhitelistEntry[]>([]);
  const [members, setMembers] = useState<MemberEntry[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [newCampusId, setNewCampusId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Authenticate Admin
  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth/login");
        return;
      }

      const { data: isAdmin } = await supabase.rpc("is_admin");

      if (!isAdmin) {
        router.push("/member");
        return;
      }

      setCheckingAuth(false);
    }

    checkAdmin();
  }, [router, supabase]);

  // Load Whitelist and Member Data
  const fetchData = useCallback(async () => {
    setLoadingData(true);
    setErrorMessage(null);
    try {
      const [whitelistRes, membersRes] = await Promise.all([
        supabase
          .from("whitelist")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase.from("members").select("*"),
      ]);

      if (whitelistRes.error) throw whitelistRes.error;
      if (membersRes.error) throw membersRes.error;

      setWhitelist(whitelistRes.data || []);
      setMembers(membersRes.data || []);
    } catch (err: unknown) {
      setErrorMessage(getErrorMessage(err, "Failed to load database records."));
    } finally {
      setLoadingData(false);
    }
  }, [supabase]);

  useEffect(() => {
    if (!checkingAuth) {
      const timer = setTimeout(() => {
        fetchData();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [checkingAuth, fetchData]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  // Add Campus ID to Whitelist
  const handleAddCampusId = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = newCampusId.trim().toLowerCase();
    if (!cleanId) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const { error } = await supabase
        .from("whitelist")
        .insert({ campus_id: cleanId });

      if (error) {
        setErrorMessage(error.message);
      } else {
        setNewCampusId("");
        await fetchData();
      }
    } catch (err: unknown) {
      setErrorMessage(getErrorMessage(err, "An unexpected error occurred"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove Campus ID from Whitelist
  const handleDeleteCampusId = async (campusId: string) => {
    if (
      !confirm(
        `Are you sure you want to revoke whitelist access for campus ID: ${campusId}?`,
      )
    )
      return;

    setErrorMessage(null);
    try {
      const { error } = await supabase
        .from("whitelist")
        .delete()
        .eq("campus_id", campusId);

      if (error) {
        setErrorMessage(error.message);
      } else {
        await fetchData();
      }
    } catch (err: unknown) {
      setErrorMessage(getErrorMessage(err, "An unexpected error occurred"));
    }
  };

  // Filter Whitelist Items based on Search Query
  const filteredWhitelist = whitelist.filter((item) => {
    const matchedMember = members.find((m) => m.campus_id === item.campus_id);
    const query = searchQuery.toLowerCase();
    const matchesCampusId = item.campus_id.toLowerCase().includes(query);
    const matchesName =
      matchedMember?.full_name?.toLowerCase().includes(query) || false;
    const matchesEmail =
      matchedMember?.email?.toLowerCase().includes(query) || false;
    return matchesCampusId || matchesName || matchesEmail;
  });

  if (checkingAuth) {
    return (
      <div className="bg-muted/20 flex min-h-screen items-center justify-center">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-muted/20 min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-1 text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground text-sm">
              Manage the YenTech platform, whitelist allowed members, and track
              logins.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchData}
              disabled={loadingData}
              className="h-9 cursor-pointer"
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${loadingData ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="flex h-9 cursor-pointer items-center gap-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Global Error Banner */}
        {errorMessage && (
          <div className="border-destructive/30 bg-destructive/10 text-destructive flex items-center gap-2.5 rounded-xl border p-4 text-xs font-medium">
            <Activity className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full max-w-100 grid-cols-2">
            <TabsTrigger value="overview" className="cursor-pointer">
              Overview
            </TabsTrigger>
            <TabsTrigger value="members" className="cursor-pointer">
              Member Whitelist
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8 outline-none">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Whitelisted Members",
                  value: whitelist.length.toString(),
                  icon: Shield,
                  color: "text-[#0CBAA6]",
                  gradient: "from-[#0CBAA6] to-[#0CBAA6]/60",
                  shadow: "hover:shadow-[#0CBAA6]/10",
                  border: "hover:border-[#0CBAA6]/30",
                },
                {
                  label: "Active Users (Logged In)",
                  value: members.length.toString(),
                  icon: Users,
                  color: "text-blue-500",
                  gradient: "from-blue-500 to-blue-300",
                  shadow: "hover:shadow-blue-500/10",
                  border: "hover:border-blue-500/30",
                },
                {
                  label: "Pending Logins",
                  value: Math.max(
                    0,
                    whitelist.length - members.length,
                  ).toString(),
                  icon: Clock,
                  color: "text-orange-500",
                  gradient: "from-orange-500 to-orange-300",
                  shadow: "hover:shadow-orange-500/10",
                  border: "hover:border-orange-500/30",
                },
                {
                  label: "System Status",
                  value: "Healthy",
                  icon: Settings,
                  color: "text-[#D9FB02]",
                  gradient: "from-[#0CBAA6] to-[#D9FB02]",
                  shadow: "hover:shadow-[#D9FB02]/10",
                  border: "hover:border-[#D9FB02]/30",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`bg-background/80 flex flex-col rounded-2xl border p-6 shadow-sm backdrop-blur-md transition-all duration-300 ${stat.shadow} hover:-translate-y-1 ${stat.border} cursor-default`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-muted-foreground text-sm font-medium">
                      {stat.label}
                    </h3>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <p
                    className={`bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent ${stat.gradient}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="bg-background/80 rounded-2xl border p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">
                  Recent Active Members
                </h2>
              </div>
              <div className="space-y-4">
                {members.length === 0 ? (
                  <p className="text-muted-foreground py-4 text-center text-sm">
                    No active members have logged in yet.
                  </p>
                ) : (
                  members.slice(0, 5).map((member) => (
                    <div
                      key={member.id}
                      className="border-muted/50 flex items-center gap-4 border-b py-3 last:border-0"
                    >
                      {member.avatar_url ? (
                        <img
                          src={member.avatar_url}
                          alt={member.full_name || member.campus_id}
                          className="border-border h-10 w-10 rounded-full border"
                        />
                      ) : (
                        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-bold">
                          {(member.full_name || member.campus_id)
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>
                      )}
                      <div className="flex-1 space-y-1">
                        <p className="text-sm leading-none font-medium">
                          {member.full_name || "New YenTech Member"}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Campus ID: {member.campus_id} &bull; {member.email}
                        </p>
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {new Date(member.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </TabsContent>

          {/* Member Whitelist Tab */}
          <TabsContent value="members" className="space-y-6 outline-none">
            {/* Top Form and Search Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Add Member Form */}
              <div className="bg-background/80 rounded-2xl border p-6 shadow-sm backdrop-blur-md md:col-span-1">
                <h3 className="text-muted-foreground mb-2 text-sm font-semibold tracking-tight uppercase">
                  Authorize Campus ID
                </h3>
                <p className="text-muted-foreground mb-4 text-xs">
                  Add a student or staff campus ID to whitelist their access.
                </p>
                <form onSubmit={handleAddCampusId} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="e.g. 12345"
                      value={newCampusId}
                      onChange={(e) => setNewCampusId(e.target.value)}
                      required
                      className="bg-background/50 h-10 text-sm"
                    />
                    <p className="text-muted-foreground text-[10px]">
                      Will authorize:{" "}
                      <span className="text-foreground font-semibold">
                        {newCampusId
                          ? newCampusId.trim().toLowerCase()
                          : "<campusID>"}
                        @yenepoya.edu.in
                      </span>
                    </p>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 w-full cursor-pointer text-sm font-semibold transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Adding...
                      </>
                    ) : (
                      <>
                        <Plus className="mr-2 h-4 w-4" />
                        Add to Whitelist
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Members List Table Container */}
              <div className="bg-background/80 space-y-4 rounded-2xl border p-6 shadow-sm backdrop-blur-md md:col-span-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-muted-foreground text-sm font-semibold tracking-tight uppercase">
                    Whitelisted Members
                  </h3>
                  <div className="relative w-full max-w-60">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      type="text"
                      placeholder="Search whitelisted members..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-background/50 h-9 pr-3 pl-9 text-xs"
                    />
                  </div>
                </div>

                {loadingData ? (
                  <div className="flex h-40 items-center justify-center">
                    <Loader2 className="text-primary h-6 w-6 animate-spin" />
                  </div>
                ) : filteredWhitelist.length === 0 ? (
                  <div className="flex h-40 items-center justify-center rounded-xl border border-dashed p-6">
                    <p className="text-muted-foreground text-sm">
                      No whitelisted campus IDs found matching filters.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs">
                      <thead>
                        <tr className="border-border text-muted-foreground border-b">
                          <th className="pb-3 font-semibold">Campus ID</th>
                          <th className="pb-3 font-semibold">Derived Email</th>
                          <th className="pb-3 font-semibold">Login Status</th>
                          <th className="pb-3 text-right font-semibold">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredWhitelist.map((item) => {
                          const matchedMember = members.find(
                            (m) => m.campus_id === item.campus_id,
                          );
                          const isLoggedIn = !!matchedMember;

                          return (
                            <tr
                              key={item.campus_id}
                              className="border-border/40 hover:bg-muted/10 border-b"
                            >
                              <td className="py-3.5 font-medium">
                                {item.campus_id}
                              </td>
                              <td className="text-muted-foreground py-3.5">
                                {item.campus_id}@yenepoya.edu.in
                              </td>
                              <td className="py-3.5">
                                {isLoggedIn ? (
                                  <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-500">
                                      <CheckCircle2 className="h-3 w-3" />
                                      Logged In
                                    </span>
                                    {matchedMember.avatar_url ? (
                                      <img
                                        src={matchedMember.avatar_url}
                                        alt={matchedMember.full_name || ""}
                                        className="border-border h-5 w-5 rounded-full border"
                                        title={matchedMember.full_name || ""}
                                      />
                                    ) : (
                                      <span
                                        className="text-muted-foreground max-w-20 truncate text-[10px]"
                                        title={matchedMember.full_name || ""}
                                      >
                                        {matchedMember.full_name}
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/20 bg-orange-500/10 px-2 py-0.5 text-[10px] font-medium text-orange-500">
                                    <Clock className="h-3 w-3" />
                                    Pending
                                  </span>
                                )}
                              </td>
                              <td className="py-3.5 text-right">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    handleDeleteCampusId(item.campus_id)
                                  }
                                  className="h-8 w-8 cursor-pointer rounded-lg text-red-500 hover:bg-red-500/10 hover:text-red-600"
                                  title="Revoke Whitelist Access"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
