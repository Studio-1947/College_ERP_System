import "./globals.css";
import Link from "next/link";
import type { Metadata, Route } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "College ERP",
  description: "White-label ERP platform for educational institutions."
};

interface RootLayoutProps {
  children: ReactNode;
}

const navigation: Array<{ href: Route; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/portal", label: "ERP Portal" },
  { href: "/student", label: "Student Portal" },
  { href: "/admissions", label: "Admissions" }
];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface-50 text-surface-900 antialiased">
        <header className="border-b border-surface-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold text-primary-700">
              College ERP
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-surface-600">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-1 py-1 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      </body>
    </html>
  );
}
