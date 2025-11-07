import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-surface-50">
      <section className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600">
            College ERP Platform
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Modular, white-label ERP for modern educational institutions.
          </h1>
          <p className="max-w-2xl text-base text-surface-600 sm:text-lg">
            A unified platform covering dynamic college websites, office management systems, and
            admission workflows built on scalable architecture.
          </p>
        </header>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/portal"
            className="rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300"
          >
            Explore ERP Portal
          </Link>
          <Link
            href="/admissions"
            className="rounded-md border border-primary-600 px-5 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring focus:ring-primary-200"
          >
            Admission Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
