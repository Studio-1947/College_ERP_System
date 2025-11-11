"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useAuth } from "./auth-context";
import type { Role } from "./mock-accounts";

interface RoleGateProps {
  allowedRoles: Role[];
  children: ReactNode;
  heading?: string;
  description?: string;
}

const roleLabels: Record<Role, string> = {
  principal: "Principal",
  admin: "Admin",
  staff: "Admissions Staff",
  student: "Student"
};

export function RoleGate({
  allowedRoles,
  children,
  heading = "Access restricted",
  description = "You do not have the necessary permissions for this workspace."
}: RoleGateProps) {
  const { currentAccount, hydrated } = useAuth();

  if (!hydrated) {
    return (
      <section className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-surface-200 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Loading</p>
        <h2 className="text-2xl font-semibold text-surface-900">Restoring session…</h2>
        <p className="text-base text-surface-600">Please wait while we verify your persona.</p>
      </section>
    );
  }

  const isAllowed = currentAccount ? allowedRoles.includes(currentAccount.role) : false;

  if (isAllowed) {
    return <>{children}</>;
  }

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-surface-200 bg-white p-8 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Role required</p>
      <h2 className="text-2xl font-semibold text-surface-900">{heading}</h2>
      <p className="text-base text-surface-600">{description}</p>
      <div className="rounded-xl border border-dashed border-surface-200 bg-surface-50 p-4 text-sm text-surface-600">
        <p className="font-semibold text-surface-900">
          {currentAccount ? `Logged in as ${currentAccount.name}` : "No active persona"}
        </p>
        <p className="text-surface-600">
          Allowed roles: {allowedRoles.map((role) => roleLabels[role]).join(", ")}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-primary-600">
        <Link
          href="/login"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-500"
        >
          {currentAccount ? "Switch persona" : "Choose persona"}
        </Link>
        {currentAccount ? (
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-primary-200 px-4 py-2 text-primary-700 transition hover:border-primary-300"
          >
            Back to home
          </Link>
        ) : null}
      </div>
    </section>
  );
}
