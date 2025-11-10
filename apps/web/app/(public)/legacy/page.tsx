import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ThemePreview } from "../../../components/home/theme-preview";
import { PersonaTabs } from "../../../components/home/persona-tabs";
import { Reveal } from "../../../components/reveal";

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
  image: string;
}> = [
  {
    title: "ERP Operations",
    description: "Registrar, finance, HR, and reporting workbenches tailored for daily ops.",
    href: "/portal",
    badge: "Role-based",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Student Hub",
    description: "Mobile-ready dashboard for timetable, notices, results, and support.",
    href: "/student",
    badge: "Student-first",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Admissions Suite",
    description: "High-volume application processing with verification + seat allocation.",
    href: "/admissions",
    badge: "High volume",
    image: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=900&q=80"
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

const heroShots: Array<{ title: string; caption: string; image: string; href: Route }> = [
  {
    title: "Campus command",
    caption: "Registrar + finance squads reviewing dashboards during morning stand-up.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    href: "/portal"
  },
  {
    title: "Student life",
    caption: "Students accessing timetable & notices on shared kiosks.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    href: "/student"
  },
  {
    title: "Admissions desk",
    caption: "Helpdesk agents assisting applicants via the admissions suite.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
    href: "/admissions"
  }
];

const campusScenes: Array<{ title: string; description: string; image: string; badge: string; href: Route }> = [
  {
    title: "Founders' Building",
    description: "Heritage facade with revamped signage and AR-enabled campus tours.",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=1200&q=80",
    badge: "Campus heritage",
    href: "/"
  },
  {
    title: "Innovation Lab",
    description: "Modern computer lab mocked up with biometric attendance and IoT dashboards.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    badge: "Smart infrastructure",
    href: "/portal/students"
  },
  {
    title: "Admissions Helpdesk",
    description: "Guided onboarding desk with self-serve kiosks mirrored in the portal UI.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    badge: "Student-first",
    href: "/admissions"
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

const dynamicContentModules: Array<{ title: string; detail: string; meta: string; slug: string }> = [
  {
    slug: "news-events",
    title: "News & Events",
    detail: "Showcase seminars, conferences, and achievements with per-year filters.",
    meta: "Admin dashboard + scheduling"
  },
  {
    slug: "notices-circulars",
    title: "Notices & Circulars",
    detail: "Searchable board grouped by department, urgency, and attachment type.",
    meta: "Real-time updates"
  },
  {
    slug: "tender-documents",
    title: "Tender Documents",
    detail: "Secure uploads with expiry reminders and public download history.",
    meta: "Auto-archive"
  },
  {
    slug: "digital-prospectus",
    title: "Digital Prospectus",
    detail: "Host brochures, program booklets, and admission guides in PDF.",
    meta: "Track downloads"
  },
  {
    slug: "photo-video-gallery",
    title: "Photo & Video Gallery",
    detail: "Department and year-wise galleries with YouTube/Vimeo embeds.",
    meta: "Lightbox viewer"
  },
  {
    slug: "faculty-directory",
    title: "Faculty & Staff Directory",
    detail: "Searchable cards with designation, qualification, and contacts.",
    meta: "Filters by department"
  },
  {
    slug: "download-centre",
    title: "Download Centre",
    detail: "Central home for forms, syllabi, and exam resources with tagging.",
    meta: "Version history"
  },
  {
    slug: "feedback-grievance",
    title: "Feedback & Grievance",
    detail: "Secure forms with SLA tracking, escalation, and analytics dashboards.",
    meta: "Student voice"
  }
];

const spotlightStories: Array<{ title: string; summary: string; image: string; tag: string; href: Route }> = [
  {
    title: "Bethune Heritage Walk",
    summary: "Microsite built with the CMS to showcase culture week programming.",
    image: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?auto=format&fit=crop&w=1200&q=80",
    tag: "Culture",
    href: "/"
  },
  {
    title: "STEM Innovation Lab",
    summary: "Faculty portal + gallery for IoT, AI, and robotics exhibitions.",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    tag: "Innovation",
    href: "/portal/students"
  },
  {
    title: "Admissions Open House",
    summary: "Landing page with live chat, downloadable kits, and session calendar.",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80",
    tag: "Admissions",
    href: "/admissions"
  }
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {heroShots.map((shot) => (
            <Link
              key={shot.title}
              href={shot.href}
              className="group overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-lg shadow-primary-100/40"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={shot.image}
                  alt={shot.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{shot.title}</p>
                <p className="text-sm text-surface-600">{shot.caption}</p>
              </div>
            </Link>
          ))}
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
                className="group overflow-hidden rounded-2xl border border-surface-200 bg-surface-50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 90vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                    {module.badge}
                  </span>
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-lg font-semibold text-surface-900">{module.title}</p>
                  <p className="text-sm text-surface-600">{module.description}</p>
                  <p className="text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    Open {module.title.split(" ")[0]} workspace →
                  </p>
                </div>
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
              <Link
                key={scene.title}
                href={scene.href}
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
              </Link>
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
              <Link
                key={module.title}
                href={{ pathname: "/", hash: module.slug }}
                className="rounded-2xl border border-surface-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-surface-25"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-surface-900">{module.title}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-500">{module.meta}</span>
                </div>
                <p className="mt-2 text-sm text-surface-600">{module.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Spotlight journeys</p>
            <h2 className="text-2xl font-semibold text-surface-900">Scroll through live storyboards</h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Horizontal carousel mimics the experience of browsing key college campaigns once the CMS goes live.
            </p>
          </header>
          <div className="mt-8 overflow-x-auto pb-6">
            <div className="flex snap-x snap-mandatory gap-4">
              {spotlightStories.map((story) => (
                <Link
                  key={story.title}
                  href={story.href}
                  className="snap-start min-w-[280px] max-w-[320px] flex-1 rounded-3xl border border-surface-200 bg-surface-50 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(min-width: 768px) 25vw, 80vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                      {story.tag}
                    </span>
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="text-lg font-semibold text-surface-900">{story.title}</h3>
                    <p className="text-sm text-surface-600">{story.summary}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                      Storyboard preview
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
