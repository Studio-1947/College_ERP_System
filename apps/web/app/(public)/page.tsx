import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ThemePreview } from "../../components/home/theme-preview";
import { PersonaTabs } from "../../components/home/persona-tabs";
import { Reveal } from "../../components/reveal";

const stats = [
  { label: "Campuses Onboarded", value: "42+", detail: "Autonomous & multi-campus groups" },
  { label: "Workflow Automations", value: "180+", detail: "Across admissions, finance, HR" },
  { label: "Avg. Go-live", value: "6 weeks", detail: "From kickoff to first module" },
  { label: "Languages Supported", value: "12", detail: "Localized UI + communications" }
];

const modules: Array<{
  title: string;
  description: string;
  href: Route;
  badge: string;
}> = [
  {
    title: "ERP Operations",
    description: "Registrar, finance, HR, and reporting workbenches tailored for daily ops.",
    href: "/portal",
    badge: "Role-based"
  },
  {
    title: "Student Hub",
    description: "Mobile-ready dashboard for timetable, notices, results, and support.",
    href: "/student",
    badge: "Student-first"
  },
  {
    title: "Admissions Suite",
    description: "High-volume application processing with verification + seat allocation.",
    href: "/admissions",
    badge: "High volume"
  }
];

const overviewHighlights = [
  {
    title: "Front-office CRM",
    detail: "Omni-channel enquiries, SLA timers, visitor logs, and escalations."
  },
  {
    title: "Finance fabric",
    detail: "Fee plans, concessions, reconciliation, refunds, statutory filings."
  },
  {
    title: "HR & payroll",
    detail: "Onboarding, leave calendar, payroll cycles, document expiry alerts."
  },
  {
    title: "Data backbone",
    detail: "Audit trails, granular RBAC, analytics warehouse feeds, API-first design."
  }
];

const architecture = [
  { title: "Modular apps", detail: "Next.js frontends backed by NestJS services and event bus." },
  { title: "Design system", detail: "Tokens/presets exported from one package shared across portals." },
  { title: "State sync", detail: "React Query + TanStack tables enable optimistic UI and offline hints." },
  { title: "Observability", detail: "Structured logs, tracing hooks, health dashboards built in." }
];

const timeline = [
  { phase: "Week 1", title: "Discovery Sprint", detail: "Branding, data import strategy, success metrics." },
  { phase: "Weeks 2-3", title: "UI Baseline", detail: "Design tokens, layouts, and mock journeys approved." },
  { phase: "Weeks 4-5", title: "Service Wiring", detail: "APIs connected, role-based access configured." },
  { phase: "Week 6", title: "Readiness & Launch", detail: "User acceptance, training, go-live support." }
];

const whiteLabelHighlights = [
  { title: "Theme tokens", detail: "Swap palette/typography per institution without redeployments." },
  { title: "Runtime branding", detail: "Upload logos, favicons, and hero imagery through CMS hooks." },
  { title: "Locale bundles", detail: "Ship custom copy packs for regional languages from day zero." }
];

const themePresets = [
  { name: "Metro Indigo", primary: "#4f46e5", accent: "#22d3ee" },
  { name: "Heritage Maroon", primary: "#7c2d12", accent: "#fcd34d" },
  { name: "Coastal Teal", primary: "#0f766e", accent: "#fac1a9" }
];

const personas = [
  {
    id: "leadership",
    label: "Leadership",
    summary: "CIOs and principals monitor compliance, finances, and macro adoption metrics.",
    bullets: [
      "KPI dashboards for NAAC/NIRF, fee health, and support SLAs.",
      "Theme packs + branding toggles to white-label multiple campuses.",
      "Role-based audit logs for every mutation."
    ]
  },
  {
    id: "staff",
    label: "Operations staff",
    summary: "Registrar, finance, HR, and admissions teams need streamlined day-to-day workflows.",
    bullets: [
      "Two-pane AppShell with responsive sidebar for quick task switching.",
      "Bulk import/export and verification flows with SLA badges.",
      "Inline toasts/modals describing backend workflows before they land."
    ]
  },
  {
    id: "students",
    label: "Students & guardians",
    summary: "Mobile-first dashboards for schedules, fees, notices, and support interactions.",
    bullets: [
      "React Query caching for offline-ready timetable and ID cards.",
      "Notification preferences per module (push/email/SMS).",
      "Self-service ticketing with knowledge base suggestions."
    ]
  }
];

const campusScenes = [
  {
    title: "Founders' Building",
    description: "Heritage facade with revamped signage and AR-enabled campus tours.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    badge: "Campus heritage"
  },
  {
    title: "Innovation Lab",
    description: "Modern computer lab mocked up with biometric attendance and IoT dashboards.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0?auto=format&fit=crop&w=1200&q=80",
    badge: "Smart infrastructure"
  },
  {
    title: "Admissions Helpdesk",
    description: "Guided onboarding desk with self-serve kiosks mirrored in the portal UI.",
    image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1200&q=80",
    badge: "Student-first"
  }
];

const cmsHighlights: Array<{ title: string; detail: string; meta?: string }> = [
  {
    title: "Drag-and-drop hero layouts",
    detail: "Update sliders, hero copy, and galleries without touching code."
  },
  {
    title: "Role-based publishing",
    detail: "Department heads and faculty publish notices with approval workflows."
  },
  {
    title: "Multilingual ready",
    detail: "English, Hindi, and Bengali content blocks share the same schema."
  },
  {
    title: "Accessibility & compliance",
    detail: "WCAG-friendly components with audit trails for every change."
  }
];

const dynamicContentModules: Array<{ title: string; detail: string; meta: string }> = [
  {
    title: "News & Events",
    detail: "Showcase seminars, conferences, and achievements with per-year filters.",
    meta: "Admin dashboard + scheduling"
  },
  {
    title: "Notices & Circulars",
    detail: "Searchable board grouped by department, urgency, and attachment type.",
    meta: "Real-time updates"
  },
  {
    title: "Tender Documents",
    detail: "Secure uploads with expiry reminders and public download history.",
    meta: "Auto-archive"
  },
  {
    title: "Digital Prospectus",
    detail: "Host brochures, program booklets, and admission guides in PDF.",
    meta: "Track downloads"
  },
  {
    title: "Photo & Video Gallery",
    detail: "Department and year-wise galleries with YouTube/Vimeo embeds.",
    meta: "Lightbox viewer"
  },
  {
    title: "Faculty & Staff Directory",
    detail: "Searchable cards with designation, qualification, and contacts.",
    meta: "Filters by department"
  },
  {
    title: "Download Centre",
    detail: "Central home for forms, syllabi, and exam resources with tagging.",
    meta: "Version history"
  }
];

const courseCatalog = [
  { program: "B.Tech CSE", duration: "4 Years", intake: "120 seats", mode: "Full-time" },
  { program: "BBA (Hons)", duration: "3 Years", intake: "90 seats", mode: "Full-time" },
  { program: "MSc Physics", duration: "2 Years", intake: "40 seats", mode: "Research + Coursework" },
  { program: "PG Diploma AI", duration: "1 Year", intake: "60 seats", mode: "Weekend" }
];

const facultyShowcase = [
  {
    name: "Dr. Manas Roy",
    designation: "Dean, Technology",
    qualification: "PhD, IIT Delhi",
    email: "manas.roy@college.edu"
  },
  {
    name: "Prof. Anjali Sinha",
    designation: "Head, Admissions",
    qualification: "MBA, XLRI",
    email: "anjali.sinha@college.edu"
  },
  {
    name: "Dr. Koushik Das",
    designation: "Registrar",
    qualification: "PhD, Jadavpur University",
    email: "koushik.das@college.edu"
  }
];

const noticeBoard = [
  {
    id: "NT-204",
    category: "Examination",
    title: "Mid-semester timetable published",
    date: "12 Nov 2025",
    audience: "All UG students",
    attachment: "Download PDF"
  },
  {
    id: "NT-205",
    category: "Admissions",
    title: "UG provisional list Round 1",
    date: "10 Nov 2025",
    audience: "New applicants",
    attachment: "View list"
  },
  {
    id: "NT-206",
    category: "HR",
    title: "Faculty orientation schedule",
    date: "08 Nov 2025",
    audience: "New hires",
    attachment: "ICS file"
  }
];

const tenderBoard = [
  {
    id: "TDR-18/2025",
    title: "Smart classroom procurement",
    closing: "30 Nov 2025",
    department: "Infrastructure",
    download: "Tender notice",
    security: "EMD ₹2,00,000"
  },
  {
    id: "TDR-19/2025",
    title: "CCTV & surveillance AMC",
    closing: "05 Dec 2025",
    department: "Security",
    download: "Scope document",
    security: "EMD ₹80,000"
  }
];

const downloadCentre = [
  { title: "Academic calendar 2025-26", type: "PDF", size: "1.2 MB" },
  { title: "UG admission brochure", type: "PDF", size: "3.8 MB" },
  { title: "Hostel application form", type: "DOCX", size: "450 KB" }
];

const eventsFeed = [
  {
    title: "National Research Summit",
    schedule: "25 Nov · Auditorium A",
    detail: "24 papers + NAAC showcase",
    link: "/portal" as Route
  },
  {
    title: "Founders' Day Cultural",
    schedule: "18 Dec · Open lawns",
    detail: "Clubs + alumni performances",
    link: "/student" as Route
  }
];

const galleryClips = [
  {
    title: "Campus walkthrough",
    videoUrl: "https://www.youtube.com/embed/1Ne1hqOXKKI",
    description: "360° view of labs, library, and sports complex."
  }
];

const erpCapabilityMatrix = [
  { module: "Front Office", detail: "Visitor log, enquiries, ticketing, postal tracker" },
  { module: "Student Information", detail: "Master data, documents, counselling history" },
  { module: "Admissions", detail: "Applications, merit logic, verification, counselling" },
  { module: "Fees & Accounting", detail: "Payment gateways, concessions, receipts, reports" },
  { module: "Attendance", detail: "Biometric/RFID sync with SMS/email alerts" },
  { module: "HR & Payroll", detail: "Staff database, leave, payroll, PF/ESI/TDS" },
  { module: "Examination", detail: "Schedule, hall tickets, marks entry, GPA/CGPA" },
  { module: "Library", detail: "Cataloguing, issue/return, fines, reservations" },
  { module: "Asset & Inventory", detail: "Procurement, stock, depreciation, disposal" },
  { module: "Document Management", detail: "Audit logs, approval chains, version control" },
  { module: "Calendar & Events", detail: "Academic calendar builder, venue booking" },
  { module: "Reporting & Analytics", detail: "Dashboards, KPIs, Excel/PDF export" }
];

const admissionsWorkflow = [
  { stage: "Application", detail: "Course-wise forms, eligibility checks, auto validation" },
  { stage: "Document Vetting", detail: "OCR preview with dual approval and remarks" },
  { stage: "Merit & Seat Matrix", detail: "Reservation-aware ranking, counselling rounds" },
  { stage: "Fee & Confirmation", detail: "UPI/cards, GST-ready receipts, upgrade window" }
];

const communicationChannels = [
  { title: "Notifications", detail: "Email/SMS in English, Hindi, Bengali at each milestone." },
  { title: "Applicant dashboard", detail: "Status tracker, grievance form, counselling slots." },
  { title: "Admin cockpit", detail: "Monitor payments, merit lists, seat matrix in real time." }
];

const feedbackPipelines = [
  { label: "Feedback type", options: ["Academic", "Facility", "IT Support", "Grievance"] },
  { label: "Contact preference", options: ["Email", "SMS", "Phone call"] }
];

export default function HomePage() {
  return (
    <main className="bg-surface-50">
      <Reveal
        as="section"
        className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-6xl flex-col gap-10 overflow-hidden rounded-3xl px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="pointer-events-none hero-gradient absolute left-1/2 -top-24 h-[28rem] w-[110%] -translate-x-1/2 rounded-full blur-[140px]" />
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600">
            College ERP Platform
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Modular, white-label ERP for modern educational institutions.
          </h1>
          <p className="max-w-2xl text-base text-surface-600 sm:text-lg">
            A unified platform covering dynamic college websites, office management systems, and
            admission workflows built on scalable architecture.
          </p>
        </header>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/portal"
            className="rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300"
          >
            Explore ERP Portal
          </Link>
          <Link
            href="/admissions"
            className="rounded-md border border-primary-600 px-5 py-3 text-sm font-semibold text-primary-600 transition-transform duration-200 hover:scale-[1.02] hover:bg-primary-50 focus:outline-none focus:ring focus:ring-primary-200"
          >
            Admission Experience
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-primary-100 bg-white/80 p-6 shadow-lg shadow-primary-100/40 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-surface-100/70 bg-white/80 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold text-primary-700">{item.value}</p>
              <p className="mt-1 text-sm text-surface-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </Reveal>
      <Reveal as="section" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Academic programs & faculty
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              Courses, intake plans, and the people who keep them running
            </h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Each program card mirrors the CMS schema used on the public site while the faculty panel highlights the
              searchable profile directory with emails and qualifications.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-surface-200 bg-surface-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Course catalog</h3>
              <p className="text-sm text-surface-600">Auto-syncs with admissions and download centre.</p>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                {courseCatalog.map((course) => (
                  <li key={course.program} className="rounded-xl border border-surface-100 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-surface-900">{course.program}</p>
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                        {course.mode}
                      </span>
                    </div>
                    <p className="text-surface-600">{course.duration}</p>
                    <p className="text-xs text-surface-500">{course.intake}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Faculty directory</h3>
              <p className="text-sm text-surface-600">Role-based publishing keeps profiles up to date.</p>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                {facultyShowcase.map((faculty) => (
                  <li key={faculty.email} className="rounded-xl border border-surface-100 p-4">
                    <p className="font-semibold text-surface-900">{faculty.name}</p>
                    <p className="text-surface-600">{faculty.designation}</p>
                    <p className="text-xs text-surface-500">{faculty.qualification}</p>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="mt-2 inline-flex text-xs font-semibold text-primary-600 hover:underline"
                    >
                      {faculty.email}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-surface-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Notices, tenders, downloads
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              Real-time bulletin board mirrored from the CMS
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-surface-900">Notice board</h3>
                <span className="text-xs font-semibold text-primary-500">Live feed</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                {noticeBoard.map((notice) => (
                  <li key={notice.id} className="rounded-xl border border-surface-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                      {notice.category} · {notice.date}
                    </p>
                    <p className="mt-1 font-semibold text-surface-900">{notice.title}</p>
                    <p className="text-xs text-surface-500">{notice.audience}</p>
                    <button
                      type="button"
                      className="mt-2 text-xs font-semibold text-primary-600 hover:underline"
                    >
                      {notice.attachment}
                    </button>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-surface-900">Tenders + downloads</h3>
                <span className="text-xs font-semibold text-primary-500">Secure archive</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                {tenderBoard.map((tender) => (
                  <li key={tender.id} className="rounded-xl border border-dashed border-surface-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">{tender.id}</p>
                    <p className="font-semibold text-surface-900">{tender.title}</p>
                    <p className="text-xs text-surface-500">
                      Closes {tender.closing} · {tender.department}
                    </p>
                    <p className="text-xs text-surface-500">{tender.security}</p>
                    <button
                      type="button"
                      className="mt-2 text-xs font-semibold text-primary-600 hover:underline"
                    >
                      {tender.download}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl border border-surface-100 bg-surface-50 p-4 text-sm text-surface-600">
                <p className="font-semibold text-surface-900">Download centre</p>
                <ul className="mt-2 space-y-1 text-xs">
                  {downloadCentre.map((item) => (
                    <li key={item.title} className="flex items-center justify-between">
                      <span>{item.title}</span>
                      <span className="text-surface-500">
                        {item.type} · {item.size}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-surface-900">News & events</h3>
                <span className="text-xs font-semibold text-primary-500">Admin dashboard</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                {eventsFeed.map((event) => (
                  <li key={event.title} className="rounded-xl border border-surface-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                      {event.schedule}
                    </p>
                    <p className="font-semibold text-surface-900">{event.title}</p>
                    <p className="text-xs text-surface-500">{event.detail}</p>
                    <Link
                      href={event.link}
                      className="mt-2 inline-flex text-xs font-semibold text-primary-600 hover:underline"
                    >
                      View agenda
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Galleries & media
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              Year-wise archives with embedded video support
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Campus scenes</h3>
              <p className="text-sm text-surface-600">Reusable gallery cards for every department.</p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {campusScenes.map((scene) => (
                  <div key={scene.title} className="rounded-xl border border-surface-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">{scene.badge}</p>
                    <p className="font-semibold text-surface-900">{scene.title}</p>
                    <p className="text-xs text-surface-600">{scene.description}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-surface-200 bg-surface-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Video spotlight</h3>
              {galleryClips.map((clip) => (
                <div key={clip.title} className="mt-4 space-y-2">
                  <div className="aspect-video overflow-hidden rounded-xl border border-surface-200">
                    <iframe
                      title={clip.title}
                      src={clip.videoUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-sm font-semibold text-surface-900">{clip.title}</p>
                  <p className="text-sm text-surface-600">{clip.description}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-surface-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              ERP capability matrix
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">Every tender module represented visually</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {erpCapabilityMatrix.map((item) => (
              <article
                key={item.module}
                className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200"
              >
                <p className="text-sm font-semibold text-surface-900">{item.module}</p>
                <p className="text-sm text-surface-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Admissions workflow + communication
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              Transparent stages with automated messaging and dashboards
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-surface-200 bg-surface-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Workflow</h3>
              <ol className="mt-4 space-y-3 text-sm text-surface-700">
                {admissionsWorkflow.map((stage, index) => (
                  <li key={stage.stage} className="rounded-xl border border-surface-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                      Step {index + 1}
                    </p>
                    <p className="font-semibold text-surface-900">{stage.stage}</p>
                    <p className="text-surface-600">{stage.detail}</p>
                  </li>
                ))}
              </ol>
            </article>
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Communication stack</h3>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                {communicationChannels.map((channel) => (
                  <li key={channel.title} className="rounded-xl border border-surface-100 p-4">
                    <p className="font-semibold text-surface-900">{channel.title}</p>
                    <p className="text-surface-600">{channel.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-surface-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Feedback & grievance redressal
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">Secure submissions with admin tracking</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Feedback form preview</h3>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="feedback-name" className="text-sm font-semibold text-surface-700">
                    Name
                  </label>
                  <input
                    id="feedback-name"
                    type="text"
                    autoComplete="name"
                    className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2 text-sm text-surface-900 focus:outline focus:outline-primary-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="feedback-email" className="text-sm font-semibold text-surface-700">
                    Email / Phone
                  </label>
                  <input
                    id="feedback-email"
                    type="text"
                    autoComplete="email"
                    className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2 text-sm text-surface-900 focus:outline focus:outline-primary-300"
                    placeholder="demo@college.edu"
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {feedbackPipelines.map((pipeline) => (
                    <label key={pipeline.label} className="text-sm font-semibold text-surface-700">
                      {pipeline.label}
                      <select className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2 text-sm text-surface-900 focus:outline focus:outline-primary-300">
                        {pipeline.options.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  ))}
                </div>
                <div>
                  <label htmlFor="feedback-message" className="text-sm font-semibold text-surface-700">
                    Message
                  </label>
                  <textarea
                    id="feedback-message"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-surface-200 px-3 py-2 text-sm text-surface-900 focus:outline focus:outline-primary-300"
                    placeholder="Describe your feedback or grievance..."
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-500"
                >
                  Submit securely
                </button>
              </form>
            </article>
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-surface-900">Escalation timeline</h3>
              <p className="text-sm text-surface-600">
                Admins track acknowledgements, resolutions, and communication logs with audit trails.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-surface-700">
                <li className="rounded-xl border border-surface-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Acknowledged</p>
                  <p className="font-semibold text-surface-900">Auto-ticket creation</p>
                  <p className="text-surface-600">Unique ID shared with student via SMS/email.</p>
                </li>
                <li className="rounded-xl border border-surface-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Assigned</p>
                  <p className="font-semibold text-surface-900">Department routing</p>
                  <p className="text-surface-600">Escalates to dean if pending beyond SLA.</p>
                </li>
                <li className="rounded-xl border border-surface-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Resolved</p>
                  <p className="font-semibold text-surface-900">Closure note</p>
                  <p className="text-surface-600">Downloadable PDF evidence stored in document management.</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
          <header className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Portals at a glance</p>
            <h2 className="text-2xl font-semibold text-surface-900">Pick the workspace you want to explore</h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Each entry point ships with the UI you just previewed—no imagination required. Toggle into any module
              and see how it behaves before backend data arrives.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="group rounded-2xl border border-surface-200 bg-surface-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-surface-900">{module.title}</p>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {module.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm text-surface-600">{module.description}</p>
                <p className="mt-4 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                  Jump to {module.title.split(" ")[0]} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                Persona focus
              </p>
              <h2 className="text-2xl font-semibold text-surface-900">
                Tailored journeys for leadership, staff, and students
              </h2>
              <p className="text-sm text-surface-600 sm:text-base">
                Toggle through the personas we design for and see the responsibilities we target in each portal.
              </p>
              <PersonaTabs personas={personas} />
            </div>
            <div className="rounded-3xl border border-dashed border-primary-200 bg-primary-50/70 p-6 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">Micro interactions</p>
              <h3 className="mt-2 text-xl font-semibold text-primary-900">UI-first, backend-ready</h3>
              <p className="mt-2 text-sm text-primary-900/80">
                Every action—CTA, modal, hover state—already communicates intent. When backend services arrive, the
                same UI simply swaps mocked data for live APIs, preserving the micro interactions you are previewing.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-primary-900">
                <li>• Buttons and cards animate with subtle translation/opacity cues.</li>
                <li>• Modals describe future workflows so stakeholders know what to expect.</li>
                <li>• Mobile AppShell auto-closes after navigation for a frictionless feel.</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Relatable previews</p>
            <h2 className="text-2xl font-semibold text-surface-900">Real-world scenes paired with the UI mocks</h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Each visual anchors a portal module so decision makers can map requirements from the Bethune proposal to a
              tangible experience.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {campusScenes.map((scene) => (
              <article
                key={scene.title}
                className="group rounded-3xl border border-surface-200 bg-surface-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    width={640}
                    height={360}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="h-48 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
                    priority
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                    {scene.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-surface-900">{scene.title}</h3>
                <p className="mt-2 text-sm text-surface-600">{scene.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-surface-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                ERP overview
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-surface-900">
                Every module modern campuses expect
              </h2>
              <p className="mt-3 text-sm text-surface-600 sm:text-base">
                We built the UI/UX first so you can visualize the experience before wiring in services.
              </p>
              <ul className="mt-6 space-y-4">
                {overviewHighlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-surface-100 bg-surface-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-primary-600">{item.title}</p>
                    <p className="mt-1 text-sm text-surface-600">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                Architecture DNA
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-surface-900">
                Opinionated scaffolding for white-label partners
              </h2>
              <p className="mt-3 text-sm text-surface-600 sm:text-base">
                Shared packages, multi-tenant aware APIs, and strict observability keep onboarding predictable.
              </p>
              <ul className="mt-6 space-y-3">
                {architecture.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-surface-25"
                  >
                    <p className="text-sm font-semibold text-surface-900">{item.title}</p>
                    <p className="text-sm text-surface-600">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-surface-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              White-label foundation
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              Brand kits, runtime theme swaps, and localized copy packs
            </h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Every workspace pulls its identity from design tokens—flip a switch to match any institution without
              forking code.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-surface-900">Live theme presets</h3>
              <p className="text-sm text-surface-600">
                Swap colors, typography, and roundedness from a control panel.
              </p>
              <div className="mt-6">
                <ThemePreview presets={themePresets} />
              </div>
            </article>
            <article className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {whiteLabelHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-surface-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-primary-600">{item.title}</p>
                    <p className="mt-2 text-sm text-surface-600">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-dashed border-primary-200 bg-primary-50/60 p-5 text-sm text-primary-900">
                <strong className="font-semibold">Coming up:</strong> tenant-aware branding API so partner agencies
                can upload assets programmatically.
              </div>
            </article>
          </div>
        </div>
      </Reveal>
      <Reveal
        as="section"
        className="bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 py-16 text-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
          <header className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
              Fast-track rollout
            </p>
            <h2 className="text-2xl font-semibold">From prototype to production in six weeks</h2>
            <p className="max-w-3xl text-sm text-primary-100 sm:text-base">
              Follow the same activation playbook we use with every institution.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-100">{item.phase}</p>
                <p className="mt-2 text-lg font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-primary-100">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Dynamic college website
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              CMS-first approach for Bethune's public presence
            </h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Everything the proposal highlights—responsive layouts, CMS guardrails, and multilingual support—is already
              mocked so stakeholders can click through the experience.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cmsHighlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-surface-200 bg-surface-50 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">{item.meta ?? "CMS"}</p>
                <h3 className="mt-2 text-lg font-semibold text-surface-900">{item.title}</h3>
                <p className="mt-2 text-sm text-surface-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-surface-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
              Proposal modules
            </p>
            <h2 className="text-2xl font-semibold text-surface-900">
              Dynamic sections mirrored from the tender requirements
            </h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Each tile represents a ready-to-wire module on the public website so evaluators can validate scope during
              demos.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {dynamicContentModules.map((module) => (
              <article
                key={module.title}
                className="rounded-2xl border border-surface-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-surface-25"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-surface-900">{module.title}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-500">{module.meta}</span>
                </div>
                <p className="mt-2 text-sm text-surface-600">{module.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-surface-200 bg-surface-50 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Preview + Sandbox</p>
                <h3 className="text-2xl font-semibold text-surface-900">
                  Want a guided white-label walkthrough?
                </h3>
                <p className="max-w-2xl text-sm text-surface-600 sm:text-base">
                  Spin up a sandbox with mocked data, then invite your stakeholders to click around the portals you
                  just saw. We’ll layer backend services and your branding kit only after you sign off.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portal"
                  className="rounded-md bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-300"
                >
                  Launch sandbox
                </Link>
                <Link
                  href="mailto:white-label@college-erp.test?subject=White-label%20ERP%20demo"
                  className="rounded-md border border-primary-600 px-5 py-3 text-center text-sm font-semibold text-primary-600 transition hover:bg-primary-50 focus:outline-none focus:ring focus:ring-primary-200"
                >
                  Request white-label kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
