import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { AppShell } from "@college-erp/ui";

const navigation: Array<{ href: Route; label: string; comingSoon?: boolean }> = [
  { href: "/portal", label: "Overview" },
  { href: "/portal/students", label: "Student Information", comingSoon: true },
  { href: "/portal/finance", label: "Finance & Fees", comingSoon: true },
  { href: "/portal/hr", label: "HR & Payroll", comingSoon: true }
];

interface PortalLayoutProps {
  children: ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <AppShell
      header={
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Administration
            </p>
            <h1 className="text-lg font-semibold text-surface-900">ERP Operations Portal</h1>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 focus-visible:outline focus-visible:outline-primary-300"
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
              {item.comingSoon ? (
                <span className="text-xs font-medium uppercase tracking-wide text-primary-400">
                  Soon
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
      }
    >
      {children}
    </AppShell>
  );
}
