"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";
import { RoleGate } from "../../../components/auth/role-gate";

export default function PortalStudentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const stats = [
    { label: "Total Students", value: "12,480", detail: "Active across UG & PG" },
    { label: "New Admissions", value: "320", detail: "Last 30 days" },
    { label: "Updates Pending", value: "27", detail: "Awaiting approval" },
    { label: "Documents Expiring", value: "14", detail: "ID / Visa / Passports" }
  ];

  const pendingApprovals = [
    {
      name: "Ritika Banerjee",
      program: "MBA 2023",
      action: "Program change request",
      submitted: "Today, 10:22 AM",
      status: "Awaiting Registrar"
    },
    {
      name: "Girish Patnaik",
      program: "B.Tech ECE 2024",
      action: "Address proof update",
      submitted: "Today, 09:10 AM",
      status: "Compliance review"
    },
    {
      name: "Meena Joseph",
      program: "BSc Chemistry 2022",
      action: "Name correction",
      submitted: "Yesterday, 04:35 PM",
      status: "Draft ready"
    }
  ];

  const lifecycle = [
    { step: "Applicant converted", detail: "KYC & eligibility lock", owner: "Admissions" },
    { step: "Student master created", detail: "Program & semester mapped", owner: "Registrar" },
    { step: "Document locker synced", detail: "Certificates + photos", owner: "Student" },
    { step: "Access provisioned", detail: "Portal / LMS / Library", owner: "IT" }
  ];

  const duplicates = [
    { id: "STU-2024118", name: "Arjun Nair", issue: "Duplicate phone", action: "Merge records" },
    { id: "STU-2024122", name: "Sana Qureshi", issue: "Conflicting email", action: "Request confirmation" },
    { id: "STU-2024129", name: "Vivek Subramani", issue: "Unverified ID", action: "Escalate to compliance" }
  ];

  return (
    <RoleGate
      allowedRoles={["principal", "admin"]}
      description="Student master workspace requires principal or registrar admin permissions."
    >
      <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Module preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">Student Information</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Visual reference for how the student master module will behave once connected to the core service:
          approval workflow, lifecycle tracker, and data hygiene utilities.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
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
              <h3 className="text-lg font-semibold text-surface-900">Pending approvals</h3>
              <p className="text-sm text-surface-600">Preview of workflow queue + contextual info</p>
            </div>
            <span className="rounded-full bg-warning-100 px-3 py-1 text-xs font-semibold text-warning-700">
              SLA 6h
            </span>
          </div>
          <ul className="mt-6 space-y-4">
            {pendingApprovals.map((item) => (
              <li key={item.name} className="rounded-lg border border-surface-100 p-4">
                <p className="font-semibold text-surface-900">{item.name}</p>
                <p className="text-sm text-surface-600">{item.program}</p>
                <p className="mt-1 text-sm text-surface-500">{item.action}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-surface-500">
                  <span>{item.submitted}</span>
                  <span className="rounded-full bg-primary-50 px-2 py-0.5 text-primary-700">
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Lifecycle blueprint</h3>
          <p className="text-sm text-surface-600">
            Steps every student profile passes through, highlighting owners & checkpoints.
          </p>
          <ol className="mt-6 space-y-4">
            {lifecycle.map((item, index) => (
              <li key={item.step} className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 text-sm font-semibold text-primary-700">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-surface-900">{item.step}</p>
                  <p className="text-sm text-surface-600">{item.detail}</p>
                  <p className="text-xs text-surface-500">Owner: {item.owner}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Data health alerts</h3>
            <p className="text-sm text-surface-600">Potential duplicates & compliance issues</p>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            onClick={() => setModalOpen(true)}
          >
            Resolve all
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-2">Student ID</th>
                <th className="pb-2">Name</th>
                <th className="pb-2">Issue</th>
                <th className="pb-2">Suggested action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {duplicates.map((entry) => (
                <tr key={entry.id}>
                  <td className="py-3 font-semibold text-surface-900">{entry.id}</td>
                  <td className="py-3">{entry.name}</td>
                  <td className="py-3 text-surface-600">{entry.issue}</td>
                  <td className="py-3 font-medium text-primary-600">{entry.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Modal
        open={modalOpen}
        title="Resolve data issues"
        description="How the merge/approval flow will behave once APIs are connected."
        onClose={() => setModalOpen(false)}
      >
        <ol className="list-decimal space-y-2 pl-5 text-sm text-surface-600">
          <li>System flags duplicates via phone/email; admin reviews side-by-side records.</li>
          <li>Choose canonical data, merge documents, and notify downstream services.</li>
          <li>Changes are audited with before/after snapshot and approver signature.</li>
        </ol>
      </Modal>
      </section>
    </RoleGate>
  );
}
