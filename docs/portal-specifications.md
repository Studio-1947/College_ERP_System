# Portal Specifications

This document expands the functional and UX expectations for each of the three primary portals exposed by the College ERP platform. The goal is to give engineering, design, and QA teams a shared, implementation-ready view of scope, dependencies, and non-functional requirements.

## Implementation Approach

- **Phase 1 – UI Specifications:** Implement all baseline UI flows (layouts, components, navigation, validation states) using mock data or API contracts. Focus on responsive behavior, accessibility, and reusable component patterns per portal before wiring live services.
- **Phase 2 – Backend Integration:** Once UI/UX is approved, start connecting modules to backend services (NestJS) in order of dependency (Admissions → Student → Administration). Replace mocks with real endpoints, enforce auth, and enable data persistence.
- **Phase 3 – Enhancements:** After end-to-end paths are stable, layer advanced features and roadmap items (analytics, automation, AI assists) incrementally.
- Keep shared tokens/components in `packages/ui` synchronized with portal needs to minimize rework when backend hooks arrive.

## 1. Administration Portal (ERP Operations)

### Baseline Release Scope
- Command Overview with high-level student/finance widgets and alerts.
- Student Information module supporting search, view, edit, create, and approval workflow.
- Finance & Fees essentials: fee plan template selection, payment intake tracking, manual reconciliation log.
- Front Office CRM lite: enquiry intake form, visitor log, and SLA reminders.
- Reporting starter: curated NAAC/NIRF packet exports and saved report viewer.
- Settings basics: role template management, branding tokens, notification routing.

### Purpose & Personas
- Serves registrar office, department admins, finance officers, HR, exam cell, and principals.
- Acts as the control room for daily operations, compliance reporting, and master data governance.

### Key Screens & Capabilities
- **Command Overview (Default landing):** modular cards for Student Info health, fee inflows, ticket queue, statutory alerts.
- **Student Information Module:** CRUD on student master data, program mapping, document locker, audit log with rollback.
- **Finance & Fees:** fee plan templates, concession rules, payment reconciliation dashboard, bulk import/export (CSV + SFTP).
- **Front Office CRM:** enquiry intake, visitor logbook, SLA timers, omni-channel communication (email/SMS templates).
- **Reporting Workspace:** saved reports, NAAC/NIRF pack, drag-and-drop pivot builder, export to XLS/PDF.
- **Settings:** role templates, branding/theme overrides, notification routing, third-party API keys.

### Functional Requirements
- All CRUD flows must support draft, pending approval, and published states with RBAC controlled approvers.
- Provide global search (student, receipt, case ID) with 300 ms target latency using indexed backend queries.
- Enable bulk actions (e.g., tagging, status changes) with progress feedback and retry for failed rows.
- Offline-safe forms for critical modules; cache last 20 edited records for quick recall.

### Data & Integrations
- Direct integration with Admissions service for applicant-to-student conversion (idempotent create).
- Finance module consumes payment webhooks from gateway; requires signature validation and replay protection.
- Reporting pulls from analytics warehouse nightly; delta refresh triggers via message bus for intraday data.

### UX & Responsiveness
- Desktop-first layouts using AppShell two-pane view; mobile must collapse sidebar with quick filter access.
- Dense data tables need sticky headers, column visibility toggles, and accessible keyboard shortcuts.
- Critical alerts (compliance breaches, payment failures) surface via toast + badge count in header.

### Security & Access Control
- Enforce attribute-based permissions (department, program, academic year) in addition to role.
- Sensitive exports require OTP-based step-up verification.
- Session timeout 20 minutes idle; background token refresh with silent re-auth before expiry.

### Observability & Metrics
- Capture audit trail for every mutation (who, when, before/after).
- Emit usage metrics: active admins/day, report exports, failed jobs, webhook errors.
- Provide in-product diagnostics panel surfacing backend status (queue backlog, integration health).

### Roadmap Considerations
- Future micro-frontend packages for Library, Asset, Document Mgmt should plug into same nav schema.
- Plan for white-labeling (logos, colors, institution name) via design tokens fetched at runtime.
- Advanced items to defer until after baseline: offline-safe bulk imports, analytics designer, advanced scheduling, cross-institution tenancy.

## 2. Student Portal (My Campus Hub)

### Baseline Release Scope
- Dashboard tiles for upcoming classes, assignments, notices, and fee status snapshot.
- Courses view with timetable integration, attendance %, and resource links.
- Notices & Circulars list with filters and read/unread tracking plus attachment downloads.
- Results overview for latest term with GPA summary and mark sheet download.
- Support Center ticket submission and status tracker.
- Notification preferences (email/push/SMS toggles) and profile basics.

### Purpose & Personas
- Student self-service workspace for academic schedule, assessments, notices, and service requests.
- Primary persona: enrolled student (UG/PG). Secondary: guardians with read-only access.

### Key Screens & Capabilities
- **Dashboard:** upcoming classes, due assignments, fee status snippet, quick links (ID card, timetable PDF).
- **Courses:** course cards with credit info, faculty contact, resource links, attendance percentage.
- **Notices & Circulars:** filters by department/category, read/unread status, attachments preview.
- **Results & Assessments:** term-wise gradebook, downloadable mark sheets, grievance trigger.
- **Support Center:** ticket submission, conversation timeline, knowledge base suggest-as-you-type.

### Functional Requirements
- All widgets must refresh in near real time using React Query with stale-while-revalidate strategy.
- Provide deep links for LMS/third-party tools with SSO tokens (valid for 5 minutes).
- Allow students to manage notification preferences (push, email, SMS) granularly per module.
- Implement local caching for timetable and ID card for offline availability, auto-expiring after 7 days.

### Data & Integrations
- Consumes schedules from Academics service, attendance from RFID/biometric feed, notices from CMS.
- Results fetched from Exams service with signed payload to prevent tampering.
- Support upload of documents (fee receipts, requests) with virus scan and size limit 10 MB.

### UX & Responsiveness
- Mobile-first layout with card stacks; avoid wide tables except in results (use horizontal scroll with summary chips).
- Provide theming hooks for institution colors while honoring contrast ratios.
- Include quick action FAB on mobile linking to Support, Fees, and Timetable downloads.
- Ensure animations are subtle (<200 ms) and respect reduced motion preferences.

### Security & Access Control
- Enforce device binding for optional guardian accounts; student must approve via OTP.
- Display privacy notice when sharing data with third-party integrations.
- Support session continuation across tabs but force logout on password change or profile suspension.

### Observability & Metrics
- Track engagement metrics (daily active students, notice read rate, support ticket SLAs).
- Log failed API calls with correlation IDs to map frontend errors to backend traces.
- Provide lightweight client-side feature flagging to roll out new widgets gradually.

### Roadmap Considerations
- Future modules: hostel management, transport routes, internship tracking.
- Plan for multilingual UI; copy should be externalized to localization files.
- Deferred enhancements: guardian delegate portal, FAB quick actions, offline caching, feature flags (enable after base portal adoption).

## 3. Admissions Portal (Admission Control Center)

### Baseline Release Scope
- Dashboard funnel for applied > verified > paid > allotted and SLA alerts.
- Applicant Workspace with timeline, checklist, comments, and status transitions.
- Multi-step application form with autosave and conditional sections.
- Verification queue with dual approval, document preview, and discrepancy tagging.
- Payment tracker board with manual adjustment workflow and receipt exports.
- Merit list generator (single round) with rule builder and signed export.

### Purpose & Personas
- Handles the entire applicant lifecycle for UG/PG programs.
- Personas: admission officers, verifiers, finance desk, counselling coordinators.

### Key Screens & Capabilities
- **Dashboard:** funnel visualization (applied > verified > paid > allotted), SLA alerts, batch actions.
- **Applicant Workspace:** detail view with timeline, document checklist, communication log, adjudication controls.
- **Verification Module:** queue-based processing with dual approval, OCR-assisted document preview, discrepancy tagging.
- **Payments & Receipts:** status board, manual adjustment tool, automated reconciliation summary.
- **Merit & Allocation:** rule builder (quota, category, weightage), seat matrix editor, round management, auto email/SMS triggers.
- **Counselling Scheduler:** slot booking, attendance tracking, waitlist auto-promotion.

### Functional Requirements
- Multi-step application forms with autosave, conditional sections (program-specific), and resumable drafts.
- Document uploads must support multi-file drag/drop, validation (format, size), and checksum dedupe.
- Verification workflow requires reroute/escalate actions, comments with @mentions, and audit snapshots.
- Merit list engine must be deterministic and re-runnable; produce signed PDF and JSON exports.
- Payment module should poll gateway status and fall back to manual verification when callback fails.

### Data & Integrations
- Connects to external academic record APIs (e.g., DigiLocker) for verified transcripts.
- Interfaces with SMS/email providers for transactional messaging; templates configurable per round.
- Exposes data pipeline to analytics warehouse for forecasting and occupancy dashboards.

### UX & Responsiveness
- Use split-pane layout for applicant detail (list on left, detail on right) with responsive collapse.
- Long forms chunked into sections with progress bar, validation summary, and inline guidance.
- Provide keyboard shortcuts for power users (next applicant, approve, reject) and bulk selection on tablets.
- Sticky action bars on mobile to surface primary decisions without scrolling back to top.

### Security & Access Control
- Applicant PII encrypted at rest; access requires two-factor auth for all staff roles.
- Field-level masking for sensitive data (e.g., caste, income) based on reviewer role.
- Automatic session lock when tab is idle for 5 minutes; unlock via PIN to avoid full logout.
- Maintain tamper-proof log for merit list changes with regeneration diff reports.

### Observability & Metrics
- Emit funnel conversion metrics per program, verification turnaround time, payment success vs failure.
- Monitor document processing errors (OCR, antivirus) and surface toops.
- Provide operator console for stuck workflows (e.g., pending webhooks, queue backlog) with reprocess controls.

### Roadmap Considerations
- Planned additions: counsellor mobile app, AI-assisted document classification, integration with government counselling APIs.
- Support multi-institution tenancy to onboard franchise colleges under same backend.
- Future phase items: counselling scheduler, waitlist automations, OCR-powered verification, analytics warehouse push, franchise management console.
