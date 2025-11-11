"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";
import { Reveal } from "../../../components/reveal";
import { RoleGate } from "../../../components/auth/role-gate";

type ModalView = "checklist" | "payroll" | null;

export default function PortalHRPage() {
  const [modalView, setModalView] = useState<ModalView>(null);
  const headcount = [
    { label: "Total staff", value: "812", detail: "64 departments" },
    { label: "Open positions", value: "38", detail: "12 in interview" },
    { label: "Documents expiring", value: "21", detail: "Contracts / visas" },
    { label: "Payroll cycle", value: "On track", detail: "Disbursement 28 Nov" }
  ];

  const onboarding = [
    { name: "Vikram Shetty", role: "Assistant Professor · CSE", status: "Contract upload pending" },
    { name: "Ria Kapoor", role: "Lab Assistant · Physics", status: "Medical check scheduled" },
    { name: "Ajay Thomas", role: "Finance Analyst", status: "Verification approved" }
  ];

  const leave = [
    { employee: "Divya Kulkarni", dept: "Admissions", type: "Sabbatical", dates: "Dec 1 - Jan 31" },
    { employee: "Mohit Bansal", dept: "Exams", type: "Casual leave", dates: "Nov 10 - Nov 14" },
    { employee: "Leena George", dept: "Library", type: "Maternity", dates: "Feb 1 onwards" }
  ];

  const payroll = [
    { component: "Teaching Staff", amount: "₹1.2 Cr", variance: "+2.5%" },
    { component: "Non-Teaching", amount: "₹58 L", variance: "+1.1%" },
    { component: "Adjunct / Visiting", amount: "₹12 L", variance: "-0.8%" },
    { component: "Deductions & Taxes", amount: "₹32 L", variance: "Settled" }
  ];

  return (
    <RoleGate
      allowedRoles={["principal", "admin"]}
      description="HR workspace is limited to principal and registrar admins."
    >
      <section className="flex flex-col gap-8">
      <Reveal as="header" className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">HR preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">HR &amp; Payroll</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Illustrates how workforce management widgets, onboarding status, and payroll summaries will appear once
          connected to HRMS + payroll APIs.
        </p>
      </Reveal>

      <Reveal as="section" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {headcount.map((item) => (
          <article
            key={item.label}
            className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-surface-900">{item.value}</p>
            <p className="mt-1 text-xs text-surface-500">{item.detail}</p>
          </article>
        ))}
      </Reveal>

      <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-surface-900">Onboarding pipeline</h3>
              <p className="text-sm text-surface-600">Track offer acceptance to day-zero readiness</p>
            </div>
            <button
              className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
              type="button"
              onClick={() => setModalView("checklist")}
            >
              View checklist
            </button>
          </div>
          <ul className="mt-6 space-y-4">
            {onboarding.map((item) => (
              <li
                key={item.name}
                className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
              >
                <p className="font-semibold text-surface-900">{item.name}</p>
                <p className="text-sm text-surface-600">{item.role}</p>
                <p className="mt-1 text-xs font-medium text-warning-700">{item.status}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-surface-900">Leave calendar</h3>
          <p className="text-sm text-surface-600">Upcoming long leaves impacting operations</p>
          <ul className="mt-6 space-y-4">
            {leave.map((entry) => (
              <li
                key={entry.employee}
                className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
              >
                <p className="font-semibold text-surface-900">{entry.employee}</p>
                <p className="text-sm text-surface-600">{entry.dept}</p>
                <p className="text-xs uppercase tracking-wide text-surface-500">{entry.type}</p>
                <p className="mt-1 text-sm text-surface-500">{entry.dates}</p>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      <Reveal as="section" className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Payroll summary</h3>
            <p className="text-sm text-surface-600">Snapshot of current cycle</p>
          </div>
          <button
            className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            type="button"
            onClick={() => setModalView("payroll")}
          >
            Export sheet
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-2">Component</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Variance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {payroll.map((row) => (
                <tr key={row.component} className="transition-colors duration-200 hover:bg-surface-50">
                  <td className="py-3 font-semibold text-surface-900">{row.component}</td>
                  <td className="py-3">{row.amount}</td>
                  <td className="py-3 text-surface-600">{row.variance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Modal
        open={modalView === "checklist"}
        title="Onboarding checklist"
        description="Steps the HRMS workflow will surface per hire."
        onClose={() => setModalView(null)}
      >
        <ul className="list-disc space-y-2 pl-5 text-sm text-surface-600">
          <li>Offer acceptance + background verification.</li>
          <li>Digital document signing (contract, NDA, ID proofs).</li>
          <li>IT provisioning, mentor assignment, and first-day briefing.</li>
        </ul>
      </Modal>

      <Modal
        open={modalView === "payroll"}
        title="Payroll export preview"
        description="Illustrates the export format pending backend hookup."
        onClose={() => setModalView(null)}
      >
        <p className="text-sm text-surface-600">
          Once live, this action will trigger generation of XLS/CSV with employee-wise breakdown,
          statutory deductions, and bank advice ready for upload to the payment gateway.
        </p>
      </Modal>
      </section>
    </RoleGate>
  );
}
