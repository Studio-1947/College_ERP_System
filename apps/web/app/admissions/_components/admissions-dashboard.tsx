"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "../../../components/modal";
import { Reveal } from "../../../components/reveal";

type ModalState = {
  title: string;
  description?: string;
  content: ReactNode;
};

export function AdmissionsDashboard() {
  const [modal, setModal] = useState<ModalState | null>(null);

  const pipelineStats = [
    { stage: "Applied", value: "8,420", change: "+4.2% vs last year" },
    { stage: "Verified", value: "5,610", change: "68% of applicants" },
    { stage: "Payments Complete", value: "4,032", change: "₹3.8 Cr collected" },
    { stage: "Seats Allotted", value: "2,880", change: "Round 1 in progress" }
  ];

  const verificationQueue = [
    {
      applicant: "AAR05621",
      program: "B.Tech CSE",
      checklist: "ID + Caste certificate pending",
      sla: "1h",
      reviewer: "Team Alpha"
    },
    {
      applicant: "AAR05298",
      program: "BBA",
      checklist: "UG marksheet flagged",
      sla: "3h",
      reviewer: "Team Beta"
    },
    {
      applicant: "AAR05412",
      program: "MSc Physics",
      checklist: "Awaiting dual approval",
      sla: "5h",
      reviewer: "Team Gamma"
    }
  ];

  const paymentAlerts = [
    { title: "UPI Gateway", detail: "3 callbacks missed • manual verification required", severity: "warning" },
    { title: "NetBanking", detail: "₹18.7L settled today • recon pending", severity: "neutral" },
    { title: "Card PG", detail: "No issues detected • last audit 30 mins ago", severity: "success" }
  ] as const;

  const meritRounds = [
    {
      round: "Round 1",
      status: "Publishing",
      detail: "Seat matrix locked • emails queued",
      type: "primary"
    },
    {
      round: "Round 2",
      status: "Configuration",
      detail: "Quota tweaks from academic council",
      type: "secondary"
    },
    {
      round: "Spot Round",
      status: "Draft",
      detail: "To be enabled if vacancy > 5%",
      type: "neutral"
    }
  ] as const;

  const applicationStages = [
    { label: "Application Submitted", value: "8,420" },
    { label: "Eligibility Check", value: "6,210" },
    { label: "Document Verification", value: "5,610" },
    { label: "Payment Confirmed", value: "4,032" },
    { label: "Seat Allocation", value: "2,880" }
  ];

  const openModal = (title: string, description: string, content: ReactNode) => {
    setModal({ title, description, content });
  };

  const closeModal = () => setModal(null);

  return (
    <>
      <section className="flex flex-col gap-10">
        <Reveal as="header" className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
            Admissions control center
          </p>
          <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">
            Admission Management Dashboard
          </h2>
          <p className="mx-auto max-w-3xl text-base text-surface-600 md:text-lg">
            Visualize funnel health, verification throughput, payment status, and merit list readiness.
            This UI focuses on the baseline interactions while backend workflows are wired up.
          </p>
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pipelineStats.map((item) => (
            <article
              key={item.stage}
              className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
                {item.stage}
              </p>
              <p className="mt-3 text-2xl font-semibold text-surface-900">{item.value}</p>
              <p className="mt-1 text-xs text-surface-500">{item.change}</p>
            </article>
          ))}
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Application Stages</h3>
                <p className="text-sm text-surface-600">
                  Track drop-off and progress across the funnel before counselling
                </p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Export funnel report",
                    "Download counts and trends for stakeholders",
                    <div className="space-y-3">
                      <p>Select the format you need:</p>
                      <ul className="list-disc space-y-1 pl-4">
                        <li>CSV with per-program counts.</li>
                        <li>PDF deck including charts for presentations.</li>
                        <li>Scheduled email summary to leadership.</li>
                      </ul>
                      <button
                        type="button"
                        className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
                        onClick={closeModal}
                      >
                        Queue export
                      </button>
                    </div>
                  )
                }
              >
                Export report
              </button>
            </div>
            <ol className="mt-6 space-y-4">
              {applicationStages.map((stage, index) => (
                <li key={stage.label} className="group flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 text-sm font-semibold text-primary-700 transition-transform duration-300 group-hover:scale-105">
                    {index + 1}
                  </span>
                  <div className="flex flex-1 items-center justify-between rounded-lg border border-surface-100 p-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary-200 group-hover:bg-surface-25">
                    <div>
                      <p className="font-semibold text-surface-900">{stage.label}</p>
                      <p className="text-sm text-surface-600">
                        {index === 0 ? "Form submissions complete" : "Auto-sync from previous stage"}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-primary-700">{stage.value}</span>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Verification Queue</h3>
                <p className="text-sm text-surface-600">Dual approval with SLA tracking</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Verification controls",
                    "Adjust reviewer load or escalate cases",
                    <div className="space-y-3">
                      {verificationQueue.map((item) => (
                        <div key={item.applicant} className="rounded-lg border border-surface-100 p-3">
                          <p className="text-sm font-semibold uppercase tracking-wide text-surface-500">
                            {item.applicant}
                          </p>
                          <p className="font-semibold text-surface-900">{item.program}</p>
                          <p className="text-sm text-surface-600">{item.checklist}</p>
                          <p className="text-xs text-surface-500">
                            Reviewer: {item.reviewer} • SLA {item.sla}
                          </p>
                        </div>
                      ))}
                      <p className="text-xs text-surface-500">
                        Real data will allow approve / reject actions directly from here.
                      </p>
                    </div>
                  )
                }
              >
                Open queue
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {verificationQueue.map((item) => (
                <li
                  key={item.applicant}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-surface-500">
                        {item.applicant}
                      </p>
                      <p className="text-lg font-semibold text-surface-900">{item.program}</p>
                    </div>
                    <span className="rounded-full bg-warning-100 px-3 py-1 text-xs font-semibold text-warning-700">
                      SLA {item.sla}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-surface-600">{item.checklist}</p>
                  <p className="text-xs text-surface-500">Reviewer: {item.reviewer}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Payments & Receipts</h3>
                <p className="text-sm text-surface-600">Monitor gateways and reconciliation status</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Payment ledger snapshot",
                    "Recent settlements and actions",
                    <ul className="space-y-3">
                      {paymentAlerts.map((alert) => (
                        <li key={alert.title} className="rounded-lg border border-surface-100 p-3">
                          <p className="font-semibold text-surface-900">{alert.title}</p>
                          <p className="text-sm text-surface-600">{alert.detail}</p>
                        </li>
                      ))}
                      <p className="text-xs text-surface-500">
                        Ledger view will soon display real transactions with filters & exports.
                      </p>
                    </ul>
                  )
                }
              >
                View ledger
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {paymentAlerts.map((alert) => (
                <li
                  key={alert.title}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <p className="font-semibold text-surface-900">{alert.title}</p>
                  <p className="text-sm text-surface-600">{alert.detail}</p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      alert.severity === "warning"
                        ? "bg-warning-100 text-warning-700"
                        : alert.severity === "success"
                          ? "bg-success-100 text-success-700"
                          : "bg-surface-100 text-surface-600"
                    }`}
                  >
                    {alert.severity === "warning"
                      ? "Action needed"
                      : alert.severity === "success"
                        ? "Healthy"
                        : "Monitoring"}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Merit & Allocation Rounds</h3>
                <p className="text-sm text-surface-600">Configure quotas, publish lists, and trigger notices</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Manage rounds",
                    "Preview of configuration workflow",
                    <div className="space-y-3">
                      {meritRounds.map((round) => (
                        <div key={round.round} className="rounded-lg border border-surface-100 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
                            {round.round}
                          </p>
                          <p className="font-semibold text-surface-900">{round.status}</p>
                          <p className="text-sm text-surface-600">{round.detail}</p>
                        </div>
                      ))}
                      <p className="text-xs text-surface-500">
                        Once backend APIs land, you&apos;ll be able to publish rounds and send communication in one step.
                      </p>
                    </div>
                  )
                }
              >
                Manage rounds
              </button>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {meritRounds.map((round) => (
                <article
                  key={round.round}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
                    {round.round}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-surface-900">{round.status}</p>
                  <p className="text-sm text-surface-600">{round.detail}</p>
                  <span
                    className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      round.type === "primary"
                        ? "bg-primary-50 text-primary-700"
                        : round.type === "secondary"
                          ? "bg-secondary-50 text-secondary-700"
                          : "bg-surface-100 text-surface-600"
                    }`}
                  >
                    {round.type === "primary"
                      ? "Publishing"
                      : round.type === "secondary"
                        ? "Configuring"
                        : "Draft"}
                  </span>
                </article>
              ))}
            </div>
          </article>
        </Reveal>
      </section>

      <Modal
        open={modal !== null}
        title={modal?.title}
        description={modal?.description}
        onClose={closeModal}
      >
        {modal?.content}
      </Modal>
    </>
  );
}
