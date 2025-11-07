"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";

export default function StudentResultsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const terms = [
    { term: "Semester 5", gpa: "8.9", credits: "24 / 24", status: "Passed", remarks: "Dean's list" },
    { term: "Semester 4", gpa: "8.7", credits: "23 / 24", status: "Passed", remarks: "One back paper cleared" }
  ];

  const breakdown = [
    { course: "CSE-302: Data Structures", grade: "A", credits: 4 },
    { course: "MAT-211: Probability & Statistics", grade: "A-", credits: 3 },
    { course: "CSE-312: Operating Systems Lab", grade: "A+", credits: 2 },
    { course: "CSE-318: Networks", grade: "B+", credits: 4 }
  ];

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Academic preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">Results</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Shows how cumulative GPA, term summaries, and course-wise grades will display for students.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {terms.map((term) => (
          <article key={term.term} className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{term.term}</p>
            <p className="mt-2 text-2xl font-semibold text-primary-700">{term.gpa} GPA</p>
            <p className="text-sm text-surface-600">Credits {term.credits}</p>
            <p className="text-sm text-surface-600">Status: {term.status}</p>
            <p className="text-xs text-surface-500">{term.remarks}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Course-wise grades</h3>
            <p className="text-sm text-surface-600">Sample table for latest term</p>
          </div>
          <button
            className="text-sm font-semibold text-primary-600 hover:text-primary-700"
            type="button"
            onClick={() => setModalOpen(true)}
          >
            Download marksheet
          </button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-2">Course</th>
                <th className="pb-2">Grade</th>
                <th className="pb-2">Credits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {breakdown.map((row) => (
                <tr key={row.course}>
                  <td className="py-3 font-semibold text-surface-900">{row.course}</td>
                  <td className="py-3 text-primary-700">{row.grade}</td>
                  <td className="py-3 text-surface-600">{row.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        open={modalOpen}
        title="Marksheet download"
        description="In production this will fetch a signed PDF for the selected semester."
        onClose={() => setModalOpen(false)}
      >
        <p className="text-sm text-surface-600">
          Choose the term and format (PDF/CSV) and the system will generate a signed document with QR
          verification. Integration with the backend will also email the document to your registered address.
        </p>
      </Modal>
    </section>
  );
}
