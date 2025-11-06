export const metadata = {
  title: "Admissions Portal | College ERP"
};

export default function AdmissionsHomePage() {
  return (
    <section className="flex flex-col gap-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">
          Admission Management Dashboard
        </h2>
        <p className="mx-auto max-w-2xl text-base text-surface-600 md:text-lg">
          Monitor application pipelines, document verification, merit lists, and counselling rounds
          from a unified interface tailored for high-volume admission cycles.
        </p>
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-surface-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Applicant Flow</h3>
          <p className="mt-2 text-sm text-surface-600">
            Dynamic multi-step forms with real-time validation and eligibility checks.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Payments</h3>
          <p className="mt-2 text-sm text-surface-600">
            Integrated payment workflows with automated receipts and reconciliation reports.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Merit Lists</h3>
          <p className="mt-2 text-sm text-surface-600">
            Category-aware rankings and seat allocation tools supporting multiple rounds.
          </p>
        </article>
      </section>
    </section>
  );
}
