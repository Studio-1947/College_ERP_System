import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

import { Reveal } from "../../components/reveal";

const heroMedia = {
  image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1600&q=80",
  alt: "Students walking through the campus quadrangle"
};

const dynamicModules = [
  {
    slug: "news-events",
    title: "News & Events",
    description: "Publish seminars, conferences, achievements, and alumni spotlights from one moderated dashboard.",
    image: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=900&q=80",
    badge: "Admin tools",
    chips: ["Scheduler", "Rich media", "Audience tags"]
  },
  {
    slug: "notices-circulars",
    title: "Notices & Circulars",
    description: "Categorised, searchable notice board with filters by department, urgency, and academic year.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    badge: "Always-on",
    chips: ["Real-time updates", "Auto-expiry", "Role-based drafts"]
  },
  {
    slug: "tender-documents",
    title: "Tender Documents",
    description: "Secure upload, watermarking, and archival of tender notifications with audit logs.",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80",
    badge: "Compliance",
    chips: ["Version history", "Download tracking", "OTP protected"]
  },
  {
    slug: "digital-prospectus",
    title: "Digital Prospectus",
    description: "Host downloadable prospectus, program booklets, and academic brochures in PDF.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    badge: "Admissions",
    chips: ["Multi-language", "One-click share", "Analytics"]
  },
  {
    slug: "photo-video-gallery",
    title: "Photo & Video Gallery",
    description: "Year-wise and department-wise media archives with embedded YouTube/Vimeo support.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    badge: "Media hub",
    chips: ["Lightbox", "Tag filters", "Bulk upload"]
  },
  {
    slug: "faculty-directory",
    title: "Faculty & Staff Profiles",
    description: "Searchable directory featuring photos, designations, qualifications, and contact details.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    badge: "Directory",
    chips: ["Department filters", "Contact cards", "Download vCard"]
  },
  {
    slug: "download-centre",
    title: "Download Centre",
    description: "Central repository for academic forms, syllabi, timetables, and exam-related documents.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    badge: "Resources",
    chips: ["Tagged PDFs", "Expiry reminders", "Bulk export"]
  },
  {
    slug: "feedback-grievance",
    title: "Feedback & Grievance",
    description: "Secure submission flows with ticket numbers, SLA tracking, and admin moderation.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    badge: "Student voice",
    chips: ["Escalations", "Auto acknowledgements", "Analytics"]
  }
];

const livePreviews = [
  {
    title: "Editorial workflow",
    description: "Role-based drafting, approvals, and instant publishing keep comms compliant.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Media grid",
    description: "Adaptive masonry layout renders both photos and embedded videos beautifully.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Directory cards",
    description: "Faculty profiles show expertise areas, office hours, and quick contact buttons.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
  }
];

const resourceLinks: Array<{ title: string; detail: string; href: Route; accent: string }> = [
  {
    title: "Preview CMS dashboard",
    detail: "Walk through the exact UI Bethune staff will use to publish updates.",
    href: "/portal",
    accent: "Go to ERP Operations"
  },
  {
    title: "Download mock prospectus",
    detail: "See how PDFs render inside the new Digital Prospectus viewer.",
    href: "/student",
    accent: "Open student hub"
  },
  {
    title: "Review grievance tracker",
    detail: "Experience the ticket escalation and response timeline.",
    href: "/portal/students",
    accent: "View workflow"
  }
];

const statHighlights = [
  { label: "Live modules", value: "8", detail: "Mapped 1:1 with tender scope" },
  { label: "CMS personas", value: "4", detail: "Admin, faculty, PR, compliance" },
  { label: "Media items mocked", value: "120+", detail: "Photos, videos, PDFs" },
  { label: "Localization packs", value: "3", detail: "English, Hindi, Bengali" }
];

export default function ModuleOneHomePage() {
  return (
    <main className="bg-surface-50">
      <Reveal
        as="section"
        className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-6xl flex-col gap-10 overflow-hidden rounded-3xl px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroMedia.image}
            alt={heroMedia.alt}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 drop-shadow">
            Module 01 · Dynamic Website
          </p>
          <h1 className="text-3xl font-semibold text-surface-900 sm:text-4xl md:text-5xl">
            Public-facing experiences that mirror Bethune College&apos;s proposal, pixel by pixel.
          </h1>
          <p className="max-w-3xl text-base text-surface-700 sm:text-lg">
            Every section below is already mocked with imagery, copy, and navigation so stakeholders can browse the
            future college website before backend integration begins.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/50 bg-white/80 p-6 shadow-lg shadow-primary-100/40 sm:grid-cols-2 lg:grid-cols-4">
          {statHighlights.map((item) => (
            <article key={item.label} className="rounded-xl border border-surface-100/70 bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-surface-500">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold text-primary-700">{item.value}</p>
              <p className="mt-1 text-sm text-surface-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/portal"
            className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-400/40 transition hover:bg-primary-700"
          >
            Launch CMS preview
          </Link>
          <Link
            href="/legacy"
            className="rounded-full border border-primary-600 px-6 py-3 text-sm font-semibold text-primary-600 transition hover:bg-primary-50"
          >
            View platform overview
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Dynamic modules</p>
            <h2 className="text-3xl font-semibold text-surface-900">Everything the tender lists, already visualized</h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              Click into any card to understand what the UI looks like, how content is organized, and what workflows are
              available for day-one go-live.
            </p>
          </header>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {dynamicModules.map((module) => (
              <article
                id={module.slug}
                key={module.title}
                className="group rounded-3xl border border-surface-200 bg-surface-25 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={640}
                    height={360}
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
                    className="h-56 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                    {module.badge}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <h3 className="text-xl font-semibold text-surface-900">{module.title}</h3>
                  <p className="text-sm text-surface-600">{module.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.chips.map((chip) => (
                      <span key={chip} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-surface-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Visual walk-throughs</p>
            <h2 className="text-2xl font-semibold text-surface-900">Relatable mock screens for Module 01</h2>
            <p className="max-w-3xl text-sm text-surface-600 sm:text-base">
              These preview frames will evolve into live CMS pages once we wire the backend, but they already match the
              content taxonomy and workflows Bethune College requested.
            </p>
          </header>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {livePreviews.map((preview) => (
              <article key={preview.title} className="rounded-2xl border border-surface-200 bg-white shadow-sm">
                <Image
                  src={preview.image}
                  alt={preview.title}
                  width={480}
                  height={320}
                  className="h-56 w-full rounded-t-2xl object-cover"
                />
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-surface-900">{preview.title}</h3>
                  <p className="text-sm text-surface-600">{preview.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-surface-200 bg-surface-25 p-8 shadow-sm sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Guided exploration</p>
                <h2 className="text-2xl font-semibold text-surface-900">Jump into the live mock portals</h2>
                <p className="text-sm text-surface-600 sm:text-base">
                  We linked the website modules to the ERP workspaces so you can seamlessly move from public views to
                  admin dashboards without losing context.
                </p>
                <ul className="space-y-4">
                  {resourceLinks.map((resource) => (
                    <li
                      key={resource.title}
                      className="rounded-2xl border border-surface-100 bg-white/90 p-5 transition hover:border-primary-200 hover:shadow-lg"
                    >
                      <p className="text-sm font-semibold text-primary-600">{resource.title}</p>
                      <p className="text-sm text-surface-600">{resource.detail}</p>
                      <Link href={resource.href} className="mt-2 inline-flex items-center text-sm font-semibold text-primary-700">
                        {resource.accent} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5 rounded-3xl border border-dashed border-primary-200 bg-primary-50/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Storytelling anchors</p>
                <p className="text-sm text-primary-900">
                  • Admin preview explains how communication, approvals, and publishing rights map to Bethune&apos;s org
                  chart.
                </p>
                <p className="text-sm text-primary-900">
                  • Student-facing views emphasise accessibility, mobile layouts, and language toggles.
                </p>
                <p className="text-sm text-primary-900">
                  • Compliance callouts highlight tender-specific needs like tender archives, download logs, and OTP
                  protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-t border-surface-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-surface-200 bg-primary-900 px-6 py-12 text-white sm:px-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">Next steps</p>
                <h2 className="text-2xl font-semibold">Lock the website scope, then wire the APIs.</h2>
                <p className="text-sm text-primary-100 sm:text-base">
                  Once stakeholders approve this Module 01 walkthrough, we immediately start connecting NestJS services
                  for content, media, and document workflows.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-end">
                <Link
                  href="/portal/hr"
                  className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-primary-900 transition hover:bg-primary-50"
                >
                  Explore admin workspace
                </Link>
                <Link
                  href="mailto:white-label@college-erp.test?subject=Module%2001%20sign-off"
                  className="rounded-md border border-white px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request stakeholder demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
