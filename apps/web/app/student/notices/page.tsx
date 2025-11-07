"use client";

import { useMemo, useState } from "react";

const tags = ["All", "Department", "Exams", "Events", "Hostel"] as const;

export default function StudentNoticesPage() {
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>("All");

  const notices = [
    {
      title: "Mid-sem Exam Timetable",
      dept: "Exam Cell",
      tag: "Exams",
      posted: "Today, 11:00 AM",
      summary: "Paper-wise schedule, reporting time, and permitted materials."
    },
    {
      title: "CSE Hackathon Shortlist",
      dept: "CSE Department",
      tag: "Department",
      posted: "Today, 09:30 AM",
      summary: "Teams shortlisted for 24hr build sprint; briefing on 8 Nov."
    },
    {
      title: "Diwali Break Advisory",
      dept: "Administration",
      tag: "Events",
      posted: "Yesterday",
      summary: "Campus timings, leave approvals, and transport arrangements."
    }
  ];

  const filteredNotices = useMemo(() => {
    if (activeTag === "All") return notices;
    return notices.filter((notice) => notice.tag === activeTag);
  }, [activeTag, notices]);

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Notices preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">Notices &amp; Circulars</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Demonstrates the Inbox UI with filters, summaries, and attachment callouts.
        </p>
      </header>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                activeTag === tag
                  ? "bg-primary-50 text-primary-700"
                  : "bg-surface-100 text-surface-600 hover:bg-surface-200"
              }`}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
        <ul className="mt-6 space-y-4">
          {filteredNotices.map((notice) => (
            <li key={notice.title} className="rounded-lg border border-surface-100 p-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
                    {notice.tag}
                  </p>
                  <p className="text-lg font-semibold text-surface-900">{notice.title}</p>
                  <p className="text-sm text-surface-600">{notice.summary}</p>
                </div>
                <div className="text-sm text-surface-500">
                  <p>{notice.dept}</p>
                  <p>{notice.posted}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
