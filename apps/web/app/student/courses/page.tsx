"use client";

import { useState } from "react";
import { Modal } from "../../../components/modal";

export default function StudentCoursesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const courses = [
    {
      code: "CSE-302",
      name: "Data Structures & Algorithms",
      credits: 4,
      faculty: "Prof. Mehra",
      attendance: "94%",
      nextSession: "Tue • 10:00 AM"
    },
    {
      code: "MAT-211",
      name: "Probability & Statistics",
      credits: 3,
      faculty: "Dr. Kulkarni",
      attendance: "89%",
      nextSession: "Wed • 09:00 AM"
    },
    {
      code: "CSE-312",
      name: "Operating Systems Lab",
      credits: 2,
      faculty: "Ms. Fernandes",
      attendance: "97%",
      nextSession: "Thu • 01:30 PM"
    }
  ];

  const resources = [
    { title: "Academic calendar", detail: "Key dates for assessments & breaks" },
    { title: "Syllabus repository", detail: "Latest PDF for every course" },
    { title: "Faculty hours", detail: "Book slots for mentoring" }
  ];

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Courses preview</p>
        <h2 className="text-3xl font-semibold text-surface-900">My Courses</h2>
        <p className="max-w-2xl text-sm text-surface-600 md:text-base">
          Shows how enrolled courses, faculty info, and session reminders will appear once data flows in.
        </p>
      </header>

      <section className="rounded-xl border border-surface-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-surface-900">Current semester</h3>
              <p className="text-sm text-surface-600">Tap any card for materials & attendance</p>
            </div>
            <button
              className="text-sm font-semibold text-primary-600 hover:text-primary-700"
              type="button"
              onClick={() => setModalOpen(true)}
            >
              Download timetable
            </button>
          </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <article key={course.code} className="rounded-lg border border-surface-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{course.code}</p>
              <p className="mt-2 text-lg font-semibold text-surface-900">{course.name}</p>
              <p className="text-sm text-surface-600">Faculty: {course.faculty}</p>
              <p className="mt-2 text-xs text-surface-500">
                Credits {course.credits} • Attendance {course.attendance}
              </p>
              <p className="text-sm font-medium text-surface-900">{course.nextSession}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.title} className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-surface-900">{resource.title}</p>
            <p className="mt-2 text-sm text-surface-600">{resource.detail}</p>
          </article>
        ))}
      </section>

      <Modal
        open={modalOpen}
        title="Timetable download"
        description="Select a format; this will call the schedule API in the backend phase."
        onClose={() => setModalOpen(false)}
      >
        <ul className="list-disc space-y-2 pl-5 text-sm text-surface-600">
          <li>.ICS calendar feed (auto-sync to Google/Apple/Outlook).</li>
          <li>Printable PDF with room numbers & faculty contacts.</li>
          <li>Shareable link for messaging apps.</li>
        </ul>
      </Modal>
    </section>
  );
}
