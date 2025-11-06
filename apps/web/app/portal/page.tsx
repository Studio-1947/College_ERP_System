export const metadata = {
  title: "ERP Portal | College ERP"
};

export default function PortalHomePage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">
          Administration Portal
        </h2>
        <p className="max-w-2xl text-base text-surface-600">
          Manage daily campus operations across student records, finance, HR, academics, and support
          services. Module access and dashboards will surface here as features roll out.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-surface-900">Student Information</h3>
          <p className="mt-2 text-sm text-surface-600">
            Centralize student profiles, academic history, and document workflows with fine-grained
            permissions.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-surface-900">Finance & Fees</h3>
          <p className="mt-2 text-sm text-surface-600">
            Track payments, concessions, and financial analytics with transparent reporting and
            reconciliation.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-surface-900">Front Office</h3>
          <p className="mt-2 text-sm text-surface-600">
            Record enquiries, visitor logs, and service requests with SLA tracking and escalations.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-surface-900">Reporting</h3>
          <p className="mt-2 text-sm text-surface-600">
            Build dashboards and exports aligned to NAAC/NIRF and internal KPIs.
          </p>
        </article>
      </div>
    </section>
  );
}
