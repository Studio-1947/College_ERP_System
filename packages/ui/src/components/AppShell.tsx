import type { ReactNode } from "react";

export interface AppShellProps {
  sidebar?: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Provides a basic responsive shell suitable for ERP backoffice layouts.
 */
export function AppShell({ sidebar, header, children, className }: AppShellProps) {
  return (
    <div className={`flex min-h-screen flex-col bg-surface-25 ${className ?? ""}`}>
      {header ? <header className="border-b border-surface-200 bg-white">{header}</header> : null}
      <div className="flex flex-1">
        {sidebar ? (
          <aside className="hidden w-72 border-r border-surface-200 bg-white lg:block">{sidebar}</aside>
        ) : null}
        <main className="flex-1 bg-surface-25 p-6">{children}</main>
      </div>
    </div>
  );
}
