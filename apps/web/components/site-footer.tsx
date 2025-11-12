"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const quickLinks = [
  { label: "ERP Portal", href: "/portal" as const },
  { label: "Admissions", href: "/admissions" as const },
  { label: "Student Hub", href: "/student" as const },
  { label: "Super Admin", href: "/super-admin" as const }
] as const;

const resources = [
  {
    label: "Project plan",
    href: "https://github.com/example/college-erp/blob/main/docs/project-plan.md"
  },
  {
    label: "Frontend architecture",
    href: "https://github.com/example/college-erp/blob/main/docs/frontend-architecture.md"
  },
  {
    label: "Backend architecture",
    href: "https://github.com/example/college-erp/blob/main/docs/backend-architecture.md"
  }
] as const;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300"
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
        <path
          d="M8 4l4 4m-4-4l-4 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to top
    </button>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-primary-700">College ERP</p>
            <p className="text-sm text-surface-600">
              Unified platform for admissions, ERP operations, and student experience tailored for
              higher-education institutions.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-surface-500">
              Quick links
            </p>
            <ul className="mt-3 space-y-2 text-sm text-surface-600">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-primary-600" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-surface-500">
              Resources
            </p>
            <ul className="mt-3 space-y-2 text-sm text-surface-600">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    className="transition hover:text-primary-600"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 text-sm text-surface-600">
            <p className="text-sm font-semibold uppercase tracking-wide text-surface-500">
              Get in touch
            </p>
            <p>demo@college-erp.example</p>
            <p>+91 98765 43210</p>
            <p>Park Street, Kolkata, WB</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-surface-100 pt-4 text-xs text-surface-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00A9"} {year} College ERP. All rights reserved.</p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex gap-4 text-sm">
              <Link className="transition hover:text-primary-600" href={"/admissions"}>
                Documentation
              </Link>
              <Link className="transition hover:text-primary-600" href="/login">
                Demo access
              </Link>
            </div>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
