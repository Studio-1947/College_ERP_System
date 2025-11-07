"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";

export default function AdmissionsMeritListsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const rounds = [
    { name: "Round 1", status: "Published", seats: "1,120 / 1,210", next: "Email reminders in 2h" },
    { name: "Round 2", status: "Configuring", seats: "Pending", next: "Awaiting quota approval" },
    { name: "Spot Round", status: "Draft", seats: "TBD", next: "Enable if vacancy >5%" }
  ];

  const seatMatrix = [
    { program: "B.Tech CSE", gen: 120, obc: 64, sc: 32, st: 16, total: 232 },
    { program: "B.Tech ECE", gen: 90, obc: 48, sc: 24, st: 12, total: 174 },
    { program: "MBA", gen: 60, obc: 32, sc: 16, st: 8, total: 116 }
  ];

  const actions = [
    { title: "Publish round", detail: "Lock seat matrix, sign PDF, notify applicants" },
    { title: "Generate offer letters", detail: "Use template with program-specific instructions" },
    { title: "Trigger counselling", detail: "Send slot booking links & attendance tracker" }
  ];

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Allocation preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">Merit Lists &amp; Seat Allocation</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Demonstration of rounds, seat matrix, and publishing workflow before backend hooks go live.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {rounds.map((round) => (
          <article key={round.name} className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{round.name}</p>
            <p className="mt-2 text-lg font-semibold text-surface-900">{round.status}</p>
            <p className="text-sm text-surface-600">{round.seats}</p>
            <p className="mt-1 text-xs text-surface-500">{round.next}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Seat matrix</h3>
            <p className="text-sm text-surface-600">Preview of quota distribution editor</p>
          </div>
          <button
            className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            type="button"
            onClick={() => setModalOpen(true)}
          >
            Edit matrix
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-2">Program</th>
                <th className="pb-2">GEN</th>
                <th className="pb-2">OBC</th>
                <th className="pb-2">SC</th>
                <th className="pb-2">ST</th>
                <th className="pb-2">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {seatMatrix.map((row) => (
                <tr key={row.program}>
                  <td className="py-3 font-semibold text-surface-900">{row.program}</td>
                  <td className="py-3">{row.gen}</td>
                  <td className="py-3">{row.obc}</td>
                  <td className="py-3">{row.sc}</td>
                  <td className="py-3">{row.st}</td>
                  <td className="py-3 text-primary-700">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {actions.map((action) => (
          <article key={action.title} className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-surface-900">{action.title}</p>
            <p className="mt-2 text-sm text-surface-600">{action.detail}</p>
          </article>
        ))}
      </section>

      <Modal
        open={modalOpen}
        title="Seat matrix editor"
        description="Illustrative controls shown until backend endpoints arrive."
        onClose={() => setModalOpen(false)}
      >
        <p className="text-sm text-surface-600">
          Future workflow: adjust quotas per category/program, validate totals, then lock the matrix
          for the upcoming round. Publishing generates signed PDFs + JSON exports for external systems.
        </p>
      </Modal>
    </section>
  );
}
