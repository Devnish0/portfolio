"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-45 w-full rounded-xl border border-border bg-muted/40" />
    ),
  },
);

export function GitHubActivityCalendar({ username }: { username: string }) {
  return <GitHubCalendar username={username} />;
}
