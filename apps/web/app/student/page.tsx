export const metadata = {
  title: "Student Portal | College ERP"
};

export default function StudentHomePage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-surface-900 md:text-4xl">Student Dashboard</h2>
        <p className="max-w-2xl text-base text-surface-600 md:text-lg">
          Access your academic schedule, digital resources, notices, and performance insights. This
          area will evolve to include real-time attendance, fee status, and support interactions.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Upcoming Classes</h3>
          <p className="mt-2 text-sm text-surface-600">
            Personalized timetable view with room locations and faculty details. Sync to calendar.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Assignments & Assessments</h3>
          <p className="mt-2 text-sm text-surface-600">
            Track due dates, submission statuses, and grades; receive reminders and rubric feedback.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Notices & News</h3>
          <p className="mt-2 text-sm text-surface-600">
            Stay updated with campus announcements, circulars, events, and departmental updates.
          </p>
        </article>
        <article className="rounded-lg border border-surface-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-surface-900">Support & Grievances</h3>
          <p className="mt-2 text-sm text-surface-600">
            Raise tickets, monitor status, and communicate with administration for any assistance.
          </p>
        </article>
      </div>
    </section>
  );
}
