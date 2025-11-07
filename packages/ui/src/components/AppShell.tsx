"use client";

import { clsx } from "clsx";
import type { ReactNode } from "react";
import { useState } from "react";

export interface AppShellProps {
  sidebar?: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Provides a responsive shell suitable for ERP backoffice layouts with mobile navigation support.
 */
export function AppShell({ sidebar, header, children, className }: AppShellProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const hasSidebar = Boolean(sidebar);

  return (
    <div className={clsx("flex min-h-screen flex-col bg-surface-25", className)}>
      {(header || hasSidebar) && (
        <header className="border-b border-surface-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 lg:py-4">
            {hasSidebar ? (
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-surface-200 bg-white text-surface-600 transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400 lg:hidden"
                aria-label="Open navigation"
              >
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            ) : null}
            <div className="flex-1">{header}</div>
          </div>
        </header>
      )}
      <div className="flex flex-1">
        {hasSidebar ? (
          <>
            <div
              onClick={() => setMobileSidebarOpen(false)}
              className={clsx(
                "fixed inset-0 z-40 bg-surface-900/40 transition-opacity lg:hidden",
                mobileSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              aria-hidden="true"
            />
            <aside
              className={clsx(
                "fixed inset-y-0 left-0 z-50 flex w-72 max-w-full flex-col border-r border-surface-200 bg-white shadow-lg transition-transform duration-300 lg:static lg:z-auto lg:w-72 lg:translate-x-0 lg:shadow-none",
                mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="flex items-center justify-between border-b border-surface-200 px-4 py-3 lg:hidden">
                <p className="text-sm font-semibold text-surface-900">Menu</p>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-surface-200 text-surface-600 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400"
                  aria-label="Close navigation"
                >
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-4 w-4">
                    <path
                      d="M6 6l12 12M18 6l-12 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">{sidebar}</div>
            </aside>
          </>
        ) : null}
        <main className="flex-1 bg-surface-25 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
