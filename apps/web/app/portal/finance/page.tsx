"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";
import { RoleGate } from "../../../components/auth/role-gate";

type ModalView = "plans" | "timeline" | null;

export default function PortalFinancePage() {
  const [modalView, setModalView] = useState<ModalView>(null);
  const kpis = [
    { label: "Month-to-date collections", value: "₹2.4 Cr", detail: "92% of target" },
    { label: "Outstanding dues", value: "₹38.6 L", detail: "412 students" },
    { label: "Scholarship disbursed", value: "₹41 L", detail: "138 beneficiaries" },
    { label: "Refund requests", value: "18", detail: "Avg. resolution 3d" }
  ];

  const feePlans = [
    { name: "B.Tech 2024", due: "12 Nov", installment: "2 / 4", coverage: "86%", amount: "₹1.2 Cr" },
    { name: "MBA 2023", due: "15 Nov", installment: "3 / 3", coverage: "61%", amount: "₹68 L" },
    { name: "MSc Research", due: "20 Nov", installment: "1 / 2", coverage: "74%", amount: "₹24 L" }
  ];

  const reconciliation = [
    { channel: "UPI Gateway", success: "98.6%", exceptions: 3, action: "Replay callbacks" },
    { channel: "NetBanking", success: "96.2%", exceptions: 11, action: "Manual verify" },
    { channel: "Cards PG", success: "99.3%", exceptions: 1, action: "Audit log" }
  ];

  const alerts = [
    { title: "Scholarship headroom", text: "Two programs exceed sanctioned percentage", severity: "warning" },
    { title: "GST filing", text: "Nov filing draft ready • needs approval", severity: "info" },
    { title: "Bank sync", text: "Last automatic sync 25 min ago • healthy", severity: "success" }
  ];

  return (
    <RoleGate
      allowedRoles={["principal", "admin"]}
      description="Finance workspace is limited to principal and registrar admins."
    >
      <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Finance preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">Finance &amp; Fees</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Demonstrates how fee plans, reconciliation, and alerts will render once connected to ledger APIs.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((item) => (
          <article key={item.label} className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-surface-900">{item.value}</p>
            <p className="mt-1 text-xs text-surface-500">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-surface-900">Fee plans</h3>
              <p className="text-sm text-surface-600">Coverage, due dates, and amount collected</p>
            </div>
            <button
              className="text-sm font-semibold text-primary-600 hover:text-primary-700"
              type="button"
              onClick={() => setModalView("plans")}
            >
              Configure plans
            </button>
          </div>
          <ul className="mt-6 space-y-4">
            {feePlans.map((plan) => (
              <li key={plan.name} className="rounded-lg border border-surface-100 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-surface-900">{plan.name}</p>
                    <p className="text-sm text-surface-600">
                      Installment {plan.installment} • Due {plan.due}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-primary-700">{plan.coverage}</span>
                </div>
                <p className="mt-2 text-xs text-surface-500">Collected {plan.amount}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Reconciliation status</h3>
          <p className="text-sm text-surface-600">Gateway health & outstanding exceptions</p>
          <div className="mt-6 space-y-4">
            {reconciliation.map((channel) => (
              <div key={channel.channel} className="rounded-lg border border-surface-100 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-surface-900">{channel.channel}</p>
                  <span className="text-sm font-semibold text-success-700">{channel.success}</span>
                </div>
                <p className="text-sm text-surface-600">{channel.exceptions} exception(s)</p>
                <p className="text-xs font-medium text-primary-600">{channel.action}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Compliance & Alerts</h3>
            <p className="text-sm text-surface-600">What finance teams should notice today</p>
          </div>
          <button
            className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            type="button"
            onClick={() => setModalView("timeline")}
          >
            View timeline
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {alerts.map((alert) => (
            <article
              key={alert.title}
              className="rounded-lg border border-surface-100 p-4"
            >
              <p className="font-semibold text-surface-900">{alert.title}</p>
              <p className="text-sm text-surface-600">{alert.text}</p>
              <span
                className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                  alert.severity === "warning"
                    ? "bg-warning-100 text-warning-700"
                    : alert.severity === "success"
                      ? "bg-success-100 text-success-700"
                      : "bg-primary-50 text-primary-700"
                }`}
              >
                {alert.severity === "warning"
                  ? "Attention"
                  : alert.severity === "success"
                    ? "Healthy"
                    : "Info"}
              </span>
            </article>
          ))}
        </div>
      </section>

      <Modal
        open={modalView === "plans"}
        title="Fee plan configuration"
        description="Snapshot of the builder flow before backend integration."
        onClose={() => setModalView(null)}
      >
        <ul className="list-disc space-y-2 pl-5 text-sm text-surface-600">
          <li>Set installment amounts, due dates, and auto-reminder cadence.</li>
          <li>Attach concessions/scholarship rules and preview student-wise ledger impact.</li>
          <li>Once APIs are live, this dialog will trigger actual plan publishing.</li>
        </ul>
      </Modal>

      <Modal
        open={modalView === "timeline"}
        title="Compliance timeline"
        description="Upcoming finance deadlines and required actions."
        onClose={() => setModalView(null)}
      >
        <ol className="list-decimal space-y-2 pl-5 text-sm text-surface-600">
          <li>GST filing draft requires CFO approval by 10 Nov.</li>
          <li>Scholarship utilization report to be shared with trustees by 12 Nov.</li>
          <li>Gateway settlement audit auto-runs nightly; alerts appear here.</li>
        </ol>
      </Modal>
      </section>
    </RoleGate>
  );
}
