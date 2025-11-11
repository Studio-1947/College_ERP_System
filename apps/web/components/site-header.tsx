"use client";

import clsx from "clsx";
import Link from "next/link";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "./auth/auth-context";

const navigation: Array<{ href: Route; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/portal", label: "ERP Portal" },
  { href: "/super-admin", label: "Super Admin" },
  { href: "/student", label: "Student Portal" },
  { href: "/admissions", label: "Admissions" }
];

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { currentAccount, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "height") return;
      if (isMobileOpen) {
        el.style.height = "auto";
      }
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [isMobileOpen]);

  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;

    if (isMobileOpen) {
      const scrollHeight = el.scrollHeight;
      el.style.height = "0px";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";

      requestAnimationFrame(() => {
        el.style.height = `${scrollHeight}px`;
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      });
    } else {
      const scrollHeight = el.scrollHeight;
      if (el.style.height === "auto" || el.style.height === "") {
        el.style.height = `${scrollHeight}px`;
      }
      requestAnimationFrame(() => {
        el.style.height = "0px";
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      });
    }
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-surface-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-primary-700">
          College ERP
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 ${
                  isActive(item.href)
                    ? "text-primary-700"
                    : "text-surface-600 hover:text-primary-600"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {currentAccount ? (
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
                {currentAccount.role}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm font-semibold text-surface-600 transition hover:text-primary-600"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary-500"
            >
              Log in
            </Link>
          )}
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-surface-200 text-surface-600 transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5">
            {isMobileOpen ? (
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        ref={drawerRef}
        className="border-t border-surface-100 bg-white shadow-sm transition-[height,opacity] duration-200 ease-out sm:hidden"
        style={{ height: 0, opacity: 0, pointerEvents: "none", overflow: "hidden" }}
        aria-hidden={!isMobileOpen}
      >
        <div className="mx-auto max-w-6xl px-4 py-3">
          <nav className="flex flex-col gap-1 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 ${
                  isActive(item.href)
                    ? "bg-primary-50 text-primary-700"
                    : "text-surface-600 hover:bg-primary-50 hover:text-primary-700"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 text-sm font-semibold text-primary-700">
            {currentAccount ? (
              <>
                <span className="inline-flex items-center gap-2 rounded-md bg-primary-50 px-3 py-2 text-primary-700">
                  Signed in as {currentAccount.role}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-md border border-primary-200 px-3 py-2 text-primary-700"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="rounded-md bg-primary-600 px-3 py-2 text-center text-white"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
