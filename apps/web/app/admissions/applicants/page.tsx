"use client";

import { useMemo, useState } from "react";

const filters = ["All", "UG", "PG", "International", "Scholarship"] as const;

export default function AdmissionsApplicantsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const applicants = [
    {
      id: "AAR05621",
      name: "Keerthana Das",
      program: "B.Tech CSE",
      stage: "Submitted",
      score: "89%",
      updated: "5 min ago"
    },
    {
      id: "AAR05498",
      name: "Pranav Gupta",
      program: "MBA Finance",
      stage: "Verified",
      score: "82%",
      updated: "20 min ago"
    },
    {
      id: "AAR05412",
      name: "Sneha Singh",
      program: "BBA",
      stage: "Payment Pending",
      score: "78%",
      updated: "35 min ago"
    }
  ];

  const journeys = [
    {
      title: "Application form",
      detail: "Dynamic steps with autosave, validation summaries, and document checklist"
    },
    {
      title: "Communication log",
      detail: "Every email/SMS + notes aligned to timeline for multi-agent teams"
    },
    {
      title: "Tasks & reminders",
      detail: "Assign reviewers, set due dates, and escalate with one click"
    }
  ];

  const filteredApplicants = useMemo(() => {
    if (activeFilter === "All") {
      return applicants;
    }
    if (activeFilter === "UG") {
      return applicants.filter((applicant) => applicant.program.includes("B."));
    }
    if (activeFilter === "PG") {
      return applicants.filter((applicant) => applicant.program.includes("MBA"));
    }
    if (activeFilter === "International") {
      return applicants.filter((applicant) => applicant.id.endsWith("21")); // placeholder logic
    }
    return applicants.filter((applicant) => applicant.stage.includes("Scholarship"));
  }, [activeFilter, applicants]);

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Applicants module</p>
        <h2 className="text-3xl font-semibold text-surface-900">Applicant Workspace</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Preview illustrating how search, filters, and applicant details will look when connected to backend services.
        </p>
      </header>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-surface-900">Funnel filters</h3>
            <p className="text-sm text-surface-600">Switch between cohorts instantly</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  activeFilter === filter
                    ? "bg-primary-50 text-primary-700"
                    : "bg-surface-100 text-surface-600 hover:bg-surface-200"
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-surface-500">
                <th className="pb-2">Application #</th>
                <th className="pb-2">Name</th>
                <th className="pb-2">Program</th>
                <th className="pb-2">Stage</th>
                <th className="pb-2">Score</th>
                <th className="pb-2">Last updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {filteredApplicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td className="py-3 font-semibold text-surface-900">{applicant.id}</td>
                  <td className="py-3">{applicant.name}</td>
                  <td className="py-3 text-surface-600">{applicant.program}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700">
                      {applicant.stage}
                    </span>
                  </td>
                  <td className="py-3">{applicant.score}</td>
                  <td className="py-3 text-surface-500">{applicant.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {journeys.map((item) => (
          <article key={item.title} className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-primary-600">{item.title}</p>
            <p className="mt-3 text-sm text-surface-600">{item.detail}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
