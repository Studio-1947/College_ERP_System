import type { ReactNode } from "react";
import Link from "next/link";
import { AppShell } from "@college-erp/ui";

const navigation = [
  { href: "/admissions", label: "Dashboard" },
  { href: "/admissions/applicants", label: "Applicants", comingSoon: true },
  { href: "/admissions/verification", label: "Verification", comingSoon: true },
  { href: "/admissions/merit-lists", label: "Merit Lists", comingSoon: true }
];

interface AdmissionsLayoutProps {
  children: ReactNode;
}

export default function AdmissionsLayout({ children }: AdmissionsLayoutProps) {
  return (
    <AppShell
      header={
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              UG / PG Admissions
            </p>
            <h1 className="text-lg font-semibold text-surface-900">Admission Control Center</h1>
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
