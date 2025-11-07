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

export function PortalDashboard() {
  const [modal, setModal] = useState<ModalState | null>(null);

  const stats = [
    { label: "Active Students", value: "12,480", change: "+120 this week" },
    { label: "Pending Approvals", value: "38", change: "Student record updates" },
    { label: "Fee Collections (MTD)", value: "₹2.4 Cr", change: "92% of target" },
    { label: "Open Support Tickets", value: "64", change: "Avg SLA 3h 12m" }
  ];

  const studentUpdates = [
    {
      name: "Amrita Joseph",
      program: "BBA 2023",
      action: "Profile update awaiting registrar approval",
      time: "5 min ago"
    },
    {
      name: "Prakash N.",
      program: "MSc Physics 2022",
      action: "Document verification completed",
      time: "18 min ago"
    },
    {
      name: "Harshita Rao",
      program: "B.Tech CSE 2024",
      action: "New admission converted from applicant pool",
      time: "1 hr ago"
    }
  ];

  const feeAlerts = [
    { title: "Fee Plan: B.Tech 2024", detail: "Installment #2 due 12 Nov • 86% paid" },
    { title: "Scholarship Reconciliation", detail: "Pending verification for 14 students" },
    { title: "UPI Gateway", detail: "Reconciliation mismatch detected • Review now" }
  ];

  const enquiryQueue = [
    { id: "FR-2045", subject: "Transcript attestation", sla: "Due in 1h", owner: "Front Office" },
    { id: "FR-2046", subject: "Hostel fee query", sla: "Due in 3h", owner: "Finance Desk" },
    { id: "FR-2047", subject: "Bonafide certificate", sla: "Due in 5h", owner: "Registrar" }
  ];

  const complianceChecklist = [
    { title: "NAAC AQAR 2024", status: "Draft ready • 18 sections", due: "Due 20 Nov" },
    { title: "NIRF Data Pack", status: "Pending HR metrics", due: "Due 30 Nov" },
    { title: "Scholarship Portal Sync", status: "Last sync 2h ago", due: "Daily" }
  ];

  const openModal = (title: string, description: string, content: ReactNode) => {
    setModal({ title, description, content });
  };

  const closeModal = () => setModal(null);

  return (
    <>
      <section className="flex flex-col gap-8">
        <Reveal as="header" className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
            Baseline workspace
          </p>
          <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">
            Administration Portal
          </h2>
          <p className="max-w-3xl text-base text-surface-600 md:text-lg">
            Monitor student master data, finance operations, and campus-wide requests from one
            command center. The UI reflects the minimum viable workflows before deeper backend
            integrations.
          </p>
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
                {item.label}
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
                <h3 className="text-lg font-semibold text-surface-900">Student Information</h3>
                <p className="text-sm text-surface-600">Latest record changes awaiting attention</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Student Information module",
                    "Approval guardrails and quick actions",
                    <ul className="list-disc space-y-2 pl-4">
                      <li>Full-text search across ID, phone, enrollment, and RFID.</li>
                      <li>Draft → Pending → Published workflow with rollback snapshot.</li>
                      <li>Document locker preview with e-sign verification history.</li>
                      <li>Bulk approve queue with SLA badge and reassignment.</li>
                    </ul>
                  )
                }
              >
                View module
              </button>
            </div>
            <ul className="mt-6 divide-y divide-surface-100">
              {studentUpdates.map((student) => (
                <li key={student.name} className="py-4 transition-colors duration-200 hover:bg-surface-50">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-medium text-surface-900">{student.name}</p>
                      <p className="text-sm text-surface-500">{student.program}</p>
                      <p className="mt-1 text-sm text-surface-600">{student.action}</p>
                    </div>
                    <span className="text-xs text-surface-500">{student.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Finance & Fees</h3>
                <p className="text-sm text-surface-600">Upcoming dues and reconciliation alerts</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Finance & Fees overview",
                    "Installment tracker and reconciliation queue",
                    <div className="space-y-3">
                      <p>
                        Prioritized checklist of fee plans and scholarships needing attention. Use
                        this preview to triage before opening the full module.
                      </p>
                      <ul className="list-disc space-y-1 pl-4">
                        <li>B.Tech 2024 Installment #2 – 86% collected, ₹42L outstanding.</li>
                        <li>Scholarship reconciliation – 14 profiles need finance approval.</li>
                        <li>UPI gateway mismatch – 3 transactions awaiting webhook replay.</li>
                      </ul>
                      <p className="text-xs text-surface-500">
                        Tip: once backend is wired, this modal will include live ledger drilling.
                      </p>
                    </div>
                  )
                }
              >
                Review dues
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {feeAlerts.map((alert) => (
                <li
                  key={alert.title}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <p className="font-medium text-surface-900">{alert.title}</p>
                  <p className="mt-1 text-sm text-surface-600">{alert.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Front Office Queue</h3>
                <p className="text-sm text-surface-600">
                  Track pending enquiries and SLA expectations
                </p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Front Office actions",
                    "Escalate, reassign, or close tickets",
                    <div className="space-y-3">
                      <p>
                        SLA timers highlight which requests need immediate attention. Use these
                        quick actions:
                      </p>
                      <ul className="list-disc space-y-1 pl-4">
                        <li>
                          Transcript attestation – reassign to Registrar desk (deadline within 60
                          min).
                        </li>
                        <li>Hostel fee query – awaiting finance comment, add internal note.</li>
                        <li>Bonafide certificate – ready for printing, mark as resolved.</li>
                      </ul>
                      <p className="text-xs text-surface-500">
                        Future iteration will hook into workflow service for state changes.
                      </p>
                    </div>
                  )
                }
              >
                Manage queue
              </button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-surface-500">
                    <th className="pb-2">Ticket</th>
                    <th className="pb-2">Subject</th>
                    <th className="pb-2">Owner</th>
                    <th className="pb-2 text-right">SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {enquiryQueue.map((item) => (
                    <tr key={item.id} className="transition-colors duration-200 hover:bg-surface-50">
                      <td className="py-3 font-semibold text-surface-900">{item.id}</td>
                      <td className="py-3">{item.subject}</td>
                      <td className="py-3 text-surface-600">{item.owner}</td>
                      <td className="py-3 text-right text-sm font-medium text-warning-700">
                        {item.sla}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Reporting & Compliance</h3>
                <p className="text-sm text-surface-600">Upcoming submissions and monitoring</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Reporting workspace",
                    "NAAC / NIRF deliverables tracker",
                    <div className="space-y-3">
                      <p>
                        Snapshot of high-priority compliance packs. Assign reviewers, attach drafts,
                        and download templates from here.
                      </p>
                      <ol className="list-decimal space-y-1 pl-4">
                        <li>NAAC AQAR 2024 – 18 sections ready, finance metrics pending.</li>
                        <li>NIRF Data Pack – HR & research metrics blocked.</li>
                        <li>Scholarship portal sync – ensure nightly job stays green.</li>
                      </ol>
                      <p className="text-xs text-surface-500">
                        Backend hookup will enable direct export + submission receipts.
                      </p>
                    </div>
                  )
                }
              >
                Open reports
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {complianceChecklist.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <p className="font-semibold text-surface-900">{item.title}</p>
                  <p className="text-sm text-surface-600">{item.status}</p>
                  <p className="mt-1 text-xs font-medium text-warning-700">{item.due}</p>
                </li>
              ))}
            </ul>
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
