"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";

export default function AdmissionsVerificationPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const queue = [
    {
      applicant: "AAR05621",
      docs: "ID + Caste certificate",
      reviewers: "Team Alpha",
      sla: "1h",
      status: "Awaiting dual approval"
    },
    {
      applicant: "AAR05578",
      docs: "Marksheets",
      reviewers: "Team Beta",
      sla: "2h",
      status: "OCR discrepancy flagged"
    },
    {
      applicant: "AAR05412",
      docs: "Income certificate",
      reviewers: "Team Gamma",
      sla: "4h",
      status: "Pending applicant response"
    }
  ];

  const checklist = [
    "Photo ID proof",
    "Academic transcripts",
    "Category / reservation proof",
    "Income / scholarship certificate",
    "Migration / transfer certificate"
  ];

  const comments = [
    {
      user: "Priya (Verifier)",
      time: "5 min ago",
      text: "Need clearer scan of income certificate; current upload unreadable."
    },
    {
      user: "Rahul (Supervisor)",
      time: "12 min ago",
      text: "Reassign ticket to Team Beta for second-level approval."
    },
    {
      user: "Applicant",
      time: "15 min ago",
      text: "Uploaded revised PDF, please confirm."
    }
  ];

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Verification workspace</p>
        <h2 className="text-3xl font-semibold text-surface-900">Document Verification</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Simulated queue, checklist, and collaboration stream to communicate design intent before integration.
        </p>
      </header>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Queue overview</h3>
            <p className="text-sm text-surface-600">Dual approval, SLA, and ownership</p>
          </div>
          <button
            className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            type="button"
            onClick={() => setDialogOpen(true)}
          >
            Assign batches
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-2">Applicant</th>
                <th className="pb-2">Documents</th>
                <th className="pb-2">Reviewers</th>
                <th className="pb-2">SLA</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {queue.map((item) => (
                <tr key={item.applicant}>
                  <td className="py-3 font-semibold text-surface-900">{item.applicant}</td>
                  <td className="py-3 text-surface-600">{item.docs}</td>
                  <td className="py-3">{item.reviewers}</td>
                  <td className="py-3 text-warning-700">{item.sla}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Document checklist</h3>
          <p className="text-sm text-surface-600">Example of customizable requirements per program</p>
          <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-surface-700">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Collaboration feed</h3>
          <p className="text-sm text-surface-600">Notes, @mentions, and applicant replies</p>
          <ul className="mt-6 space-y-4">
            {comments.map((note) => (
              <li key={note.time} className="rounded-lg border border-surface-100 p-4">
                <div className="flex items-center justify-between text-xs text-surface-500">
                  <span className="font-semibold text-surface-900">{note.user}</span>
                  <span>{note.time}</span>
                </div>
                <p className="mt-2 text-sm text-surface-600">{note.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <Modal
        open={dialogOpen}
        title="Batch assignment preview"
        description="This is how the assignment modal will behave once verification APIs are wired."
        onClose={() => setDialogOpen(false)}
      >
        <ul className="list-disc space-y-2 pl-5 text-sm text-surface-600">
          <li>Select a reviewer pool and number of applications per batch.</li>
          <li>System distributes workload, respecting priority order and SLA remaining.</li>
          <li>Confirmation triggers notifications and locks applicants to assignees.</li>
        </ul>
      </Modal>
    </section>
  );
}
