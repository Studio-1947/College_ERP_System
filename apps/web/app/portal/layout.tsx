import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { AppShell } from "@college-erp/ui";
import { SidebarNav } from "../../components/sidebar-nav";

const navigation: Array<{ href: Route; label: string }> = [
  { href: "/portal", label: "Overview" },
  { href: "/portal/students", label: "Student Information" },
  { href: "/portal/finance", label: "Finance & Fees" },
  { href: "/portal/hr", label: "HR & Payroll" }
];

interface PortalLayoutProps {
  children: ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <AppShell
      header={
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Administration
            </p>
            <h1 className="text-lg font-semibold text-surface-900">ERP Operations Portal</h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center self-start rounded-md border border-primary-200 px-4 py-2 text-sm font-medium text-primary-600 transition hover:border-primary-400 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 sm:self-auto"
          >
            Back to site
          </Link>
        </div>
      }
      sidebar={<SidebarNav items={navigation} />}
    >
      {children}
    </AppShell>
  );
}
