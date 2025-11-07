import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { AppShell } from "@college-erp/ui";

const navigation: Array<{ href: Route; label: string }> = [
  { href: "/student", label: "Dashboard" },
  { href: "/student/courses", label: "Courses" },
  { href: "/student/notices", label: "Notices & Circulars" },
  { href: "/student/results", label: "Results" }
];

interface StudentLayoutProps {
  children: ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <AppShell
      header={
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Student Portal
            </p>
            <h1 className="text-lg font-semibold text-surface-900">My Campus Hub</h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center self-start rounded-md border border-primary-200 px-4 py-2 text-sm font-medium text-primary-600 transition hover:border-primary-400 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 sm:self-auto"
          >
            Back to site
          </Link>
        </div>
      }
      sidebar={
        <nav className="flex flex-col gap-1 p-4 text-sm text-surface-600">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline focus-visible:outline-primary-300"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      }
    >
      {children}
    </AppShell>
  );
}
