"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "../../../components/modal";
import { Reveal } from "../../../components/reveal";

type ModalState = {
  title: string;
  description?: string;
  content: ReactNode;
};

type Notice = {
  title: string;
  dept: string;
  time: string;
  category: "Department" | "Exams" | "Events";
};

export function StudentDashboard() {
  const [modal, setModal] = useState<ModalState | null>(null);
  const [noticeFilter, setNoticeFilter] = useState<"All" | "Department" | "Exams" | "Events">("All");

  const highlights = [
    { label: "Classes Today", value: "4", detail: "First lecture 9:00 AM" },
    { label: "Assignments Due", value: "2", detail: "Both due by Fri" },
    { label: "Attendance", value: "92%", detail: "Target ≥ 85%" },
    { label: "Fees", value: "₹18,500", detail: "Next installment 15 Nov" }
  ];

  const timetable = [
    { time: "09:00 - 10:00", course: "Data Structures", location: "Block B - 204", faculty: "Prof. Mehra" },
    { time: "11:00 - 12:00", course: "Probability & Stats", location: "Block C - 115", faculty: "Dr. Kulkarni" },
    { time: "13:30 - 15:00", course: "Operating Systems Lab", location: "Lab 3", faculty: "Ms. Fernandes" }
  ];

  const assignments = [
    { title: "OS Lab Evaluation", due: "Today, 5 PM", status: "Pending upload", type: "Lab" },
    { title: "Probability Worksheet", due: "Fri, 8 Nov", status: "In progress", type: "Coursework" },
    { title: "Open Elective Essay", due: "Mon, 11 Nov", status: "Draft saved", type: "Humanities" }
  ];

  const notices: Notice[] = [
    { title: "Diwali Break Schedule", dept: "Administration", time: "1h ago", category: "Events" },
    { title: "Hackathon Shortlist", dept: "CSE", time: "3h ago", category: "Department" },
    { title: "Exam Form Submission", dept: "Exam Cell", time: "Today", category: "Exams" },
    { title: "Library Timing Update", dept: "Library", time: "Yesterday", category: "Department" }
  ];

  const results = [
    { term: "Semester 5", gpa: "8.9", credits: "24 / 24 completed" },
    { term: "Semester 4", gpa: "8.7", credits: "23 / 24 completed" }
  ];

  const filteredNotices = useMemo(() => {
    if (noticeFilter === "All") {
      return notices;
    }
    return notices.filter((notice) => notice.category === noticeFilter);
  }, [noticeFilter, notices]);

  const openModal = (title: string, description: string, content: ReactNode) => {
    setModal({ title, description, content });
  };

  const closeModal = () => setModal(null);

  return (
    <>
      <section className="flex flex-col gap-8">
        <Reveal as="header" className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
            Student workspace
          </p>
          <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">Student Dashboard</h2>
          <p className="max-w-2xl text-base text-surface-600 md:text-lg">
            Review your schedule, coursework, notices, and performance snapshots. This baseline UI uses
            mocked data but mirrors the workflows that will connect to live services.
          </p>
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
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

        <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Today&apos;s Timetable</h3>
                <p className="text-sm text-surface-600">Automatically syncs with calendar & reminders</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Download timetable",
                    "Choose the format best suited for you",
                    <div className="space-y-3">
                      <p>You can download a calendar file or shareable PDF for offline use.</p>
                      <ul className="list-disc space-y-1 pl-4">
                        <li>.ICS calendar feed for Google / iCal.</li>
                        <li>Printable PDF with room numbers.</li>
                        <li>Share link to send timetable via email.</li>
                      </ul>
                    </div>
                  )
                }
              >
                Download
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {timetable.map((slot) => (
                <li
                  key={slot.course}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                        {slot.time}
                      </p>
                      <p className="text-lg font-semibold text-surface-900">{slot.course}</p>
                      <p className="text-sm text-surface-600">{slot.location}</p>
                    </div>
                    <p className="text-sm font-medium text-surface-500">Faculty: {slot.faculty}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Assignments</h3>
                <p className="text-sm text-surface-600">Track due dates and submission states</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Assignment planner",
                    "Upcoming submissions and quick links",
                    <div className="space-y-3">
                      {assignments.map((task) => (
                        <div key={task.title} className="rounded-lg border border-surface-100 p-3">
                          <p className="font-semibold text-surface-900">{task.title}</p>
                          <p className="text-xs uppercase tracking-wide text-surface-500">{task.type}</p>
                          <p className="text-sm text-surface-600">{task.status}</p>
                          <p className="text-xs font-semibold text-warning-700">{task.due}</p>
                        </div>
                      ))}
                      <p className="text-xs text-surface-500">
                        Once backend APIs are ready, this modal will include file upload + rubric preview.
                      </p>
                    </div>
                  )
                }
              >
                View all
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {assignments.map((task) => (
                <li
                  key={task.title}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-surface-900">{task.title}</p>
                      <p className="text-xs uppercase tracking-wide text-surface-500">{task.type}</p>
                    </div>
                    <span className="text-xs font-semibold text-warning-700">{task.due}</span>
                  </div>
                  <p className="mt-2 text-sm text-surface-600">{task.status}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal as="section" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Notices & Circulars</h3>
                <p className="text-sm text-surface-600">Filters: All / Department / Exams / Events</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Inbox preview",
                    "Mark as read or download attachments",
                    <ul className="space-y-3">
                      {notices.map((notice) => (
                        <li key={notice.title} className="rounded-lg border border-surface-100 p-3">
                          <p className="font-semibold text-surface-900">{notice.title}</p>
                          <p className="text-sm text-surface-600">
                            {notice.dept} • {notice.time}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )
                }
              >
                Open inbox
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {(["All", "Department", "Exams", "Events"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setNoticeFilter(filter)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    noticeFilter === filter
                      ? "bg-primary-50 text-primary-700"
                      : "bg-surface-100 text-surface-600 hover:bg-surface-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <ul className="mt-6 space-y-4">
              {filteredNotices.map((notice) => (
                <li
                  key={notice.title}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <p className="font-semibold text-surface-900">{notice.title}</p>
                  <p className="text-sm text-surface-600">{notice.dept}</p>
                  <p className="mt-1 text-xs text-surface-500">{notice.time}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Results Snapshot</h3>
                <p className="text-sm text-surface-600">Gradebook preview with GPA trend</p>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
                onClick={() =>
                  openModal(
                    "Gradebook details",
                    "Term-wise marks and download options",
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs uppercase tracking-wide text-surface-500">
                          <th className="pb-2">Term</th>
                          <th className="pb-2">GPA</th>
                          <th className="pb-2">Credits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-100">
                        {results.map((term) => (
                          <tr key={term.term} className="transition-colors duration-200 hover:bg-surface-50">
                            <td className="py-2 font-semibold text-surface-900">{term.term}</td>
                            <td className="py-2 text-primary-700">{term.gpa}</td>
                            <td className="py-2 text-surface-600">{term.credits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
                }
              >
                View gradebook
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {results.map((term) => (
                <li
                  key={term.term}
                  className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">
                    {term.term}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-primary-700">{term.gpa}</p>
                  <p className="text-sm text-surface-600">{term.credits}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-surface-900">Support & Requests</h3>
                <p className="text-sm text-surface-600">Raise tickets or continue conversations</p>
              </div>
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
                  onClick={() =>
                    openModal(
                      "New support ticket",
                      "Describe your issue so the team can help",
                      <form className="space-y-4">
                        <label className="block text-sm font-medium text-surface-700">
                          Category
                          <select className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2">
                            <option>Academics</option>
                            <option>Finance</option>
                            <option>Hostel</option>
                            <option>General</option>
                          </select>
                        </label>
                        <label className="block text-sm font-medium text-surface-700">
                          Subject
                          <input
                            type="text"
                            className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2"
                            placeholder="e.g., Clarification on attendance"
                          />
                        </label>
                        <label className="block text-sm font-medium text-surface-700">
                          Description
                          <textarea
                            className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2"
                            rows={4}
                            placeholder="Add context and attachments"
                          />
                        </label>
                        <button
                          type="button"
                          className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
                          onClick={closeModal}
                        >
                          Submit ticket
                        </button>
                      </form>
                    )
                  }
                >
                  New ticket
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg border border-primary-200 px-4 py-3 text-sm font-semibold text-primary-600 transition hover:border-primary-400 hover:bg-primary-50"
                  onClick={() =>
                    openModal(
                      "Conversation history",
                      "Recent replies from administration",
                      <ul className="space-y-3">
                        <li className="rounded-lg border border-surface-100 p-3">
                          <p className="font-semibold text-surface-900">Ticket #4521</p>
                          <p className="text-sm text-surface-600">
                            Finance desk replied 2h ago • awaiting confirmation
                          </p>
                        </li>
                        <li className="rounded-lg border border-surface-100 p-3">
                          <p className="font-semibold text-surface-900">Ticket #4498</p>
                          <p className="text-sm text-surface-600">
                            Registrar shared attachment • mark resolved?
                          </p>
                        </li>
                      </ul>
                    )
                  }
                >
                  View responses
                </button>
                <div className="rounded-lg border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200">
                  <p className="text-sm font-medium text-surface-900">Knowledge base</p>
                  <p className="text-xs text-surface-500">Popular answers surfaced automatically</p>
                </div>
              </div>
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
