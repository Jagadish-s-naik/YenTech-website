"use client";

import { useSearchParams } from "next/navigation";
import { Search, User, Calendar as CalendarIcon, Award } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Dummy data for search results
  const results = [
    {
      type: "member",
      title: "John Doe",
      desc: "Web Developer",
      icon: User,
      href: "/member/profile",
    },
    {
      type: "event",
      title: "React Workshop",
      desc: "Next Tuesday, 5 PM",
      icon: CalendarIcon,
      href: "/member/events",
    },
    {
      type: "badge",
      title: "Contributor",
      desc: "Awarded for 5 PRs",
      icon: Award,
      href: "/member/badges",
    },
  ].filter(
    (item) =>
      query &&
      (item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Search Results</h1>
        <p className="text-muted-foreground">
          {query
            ? `Showing results for "${query}"`
            : "Enter a search query to see results."}
        </p>
      </div>

      {query && results.length > 0 ? (
        <div className="grid max-w-3xl gap-4">
          {results.map((result, index) => (
            <Link key={index} href={result.href}>
              <div className="bg-background hover:border-primary group flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors">
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-md p-2 transition-colors">
                  <result.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{result.title}</h3>
                  <p className="text-muted-foreground text-sm">{result.desc}</p>
                </div>
                <div className="text-muted-foreground bg-muted ml-auto rounded px-2 py-1 text-xs font-medium tracking-wider uppercase">
                  {result.type}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : query && results.length === 0 ? (
        <div className="bg-background flex max-w-3xl flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
          <Search className="text-muted-foreground mb-4 h-12 w-12" />
          <h3 className="mb-2 text-xl font-bold">No results found</h3>
          <p className="text-muted-foreground max-w-md">
            We couldn't find anything matching "{query}". Try adjusting your
            search term.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading search results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
