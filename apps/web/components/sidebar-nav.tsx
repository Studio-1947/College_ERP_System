"use client";

import clsx from "clsx";
import Link from "next/link";
import type { Route } from "next";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

export interface SidebarNavItem {
  href: Route;
  label: string;
}

interface SidebarNavProps {
  items: SidebarNavItem[];
  className?: string;
}

const normalize = (value: string) => {
  if (value === "/") return "/";
  return value.replace(/\/+$/, "");
};

export function SidebarNav({ items, className }: SidebarNavProps) {
  const pathname = usePathname();
  const normalizedPath = normalize(pathname ?? "/");

  const activeHref = useMemo(() => {
    return (
      items
        .map((item) => {
          const href = normalize(item.href);
          if (normalizedPath === href) {
            return { href: item.href, score: href.length + 1 };
          }
          if (normalizedPath.startsWith(`${href}/`)) {
            return { href: item.href, score: href.length };
          }
          return { href: item.href, score: -1 };
        })
        .sort((a, b) => b.score - a.score)[0]?.href ?? null
    );
  }, [items, normalizedPath]);

  return (
    <nav className={clsx("flex flex-col gap-1 p-4 text-sm text-surface-600", className)}>
      {items.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              "flex items-center justify-between rounded-md px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300",
              isActive
                ? "bg-primary-50 text-primary-700 font-semibold"
                : "hover:bg-primary-50 hover:text-primary-700"
            )}
            data-close-mobile-sidebar="true"
          >
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
