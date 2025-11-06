# Frontend Architecture - College ERP System

## Overview
This document defines the frontend architecture for the College ERP initiative using **Next.js 14 + TypeScript**. It focuses on modularity, white-label support, and scalability across four key surfaces: public website, office management portal, student experience portal, and UG/PG admission portal.

## Goals
- Deliver SEO-friendly, accessible experiences with hybrid SSR/SSG.
- Enable white-label branding per institution without redeployments.
- Support modular micro-frontends for ERP modules while sharing a common design system.
- Ensure maintainable development workflows with strong DX, testing, and automation.

## Core Stack
- `Next.js 14 (App Router)` with `TypeScript`
- Styling via `Tailwind CSS` + CSS variables (design tokens)
- Component library exposed from `@college-erp/ui` with Storybook
- Data/fetching: `@tanstack/react-query` for server state, `Zustand` for lightweight client state
- Internationalization via `next-intl`
- Form handling: `react-hook-form` + `zod` schema validation
- Testing & quality: `playwright`, `vitest`, `jest-axe`, `eslint`, `prettier`

## Repository Structure (Turborepo)
```
college-erp/
  apps/
    web/           # Next.js App Router hosting public, portal, student, and admissions routes
  packages/
    ui/            # Shared component library + design tokens
    config/        # White-label metadata & runtime theme resolver
    hooks/         # Shared hooks (auth, analytics, accessibility)
    utils/         # Shared utilities (date, formatting, API clients)
  services/
    api/           # NestJS backend service (modular ERP APIs)
  tooling/         # Shared linting/tsconfig presets (to be expanded)
  docs/            # Architecture and project documentation
```

## White-Label Theming
- Theme tokens defined in `packages/ui/theme/tokens.ts` (colors, typography, spacing).
- Runtime branding config delivered via JSON (e.g., `packages/config/themes/<tenant>.json`).
- CSS variables applied at layout boundary to allow dynamic swapping without rebuild.
- Asset strategy: tenant-specific logos/hero media sourced via CDN keyed by tenant slug.

## Routing & Layout Strategy
- Single Next.js app with dedicated route groups: public pages (`app/(public)`), ERP portal (`app/portal`), student hub (`app/student`), admissions hub (`app/admissions`).
- Nested layouts handle module shells (e.g., `/portal/students`, `/student/courses`), enabling future lazy loading or micro-frontends.
- Guard components (middleware + layout wrappers) will enforce auth and role-based routing; ready for future SSO integration.
- Dynamic metadata API routes ensure SEO for public pages and tenant-specific branding.

## State & Data Flow
- `React Query` manages server-side data caching, pagination, background refresh.
- `Zustand` stores UI state that should persist across route changes (e.g., filters, theme selection).
- API clients auto-generated via OpenAPI (once backend contracts exist) and shared via `packages/utils/api`.
- Implement optimistic updates and skeleton loading patterns for high-traffic modules.

## Accessibility & Internationalization
- Enforce WCAG 2.1 AA: keyboard-first navigation, ARIA semantics, focus management utilities.
- `next-intl` provides locale-based routing (`/en`, `/hi`, `/bn`); translation files per tenant.
- Automated checks: `jest-axe` unit tests and Storybook accessibility addon.

## Tooling & Quality Gates
- Storybook CI for visual regression via Chromatic (or equivalent).
- Linting: ESLint with TypeScript + accessibility + Tailwind plugins.
- Testing pyramid: unit (Vitest), integration (React Testing Library), E2E (Playwright).
- Pre-commit hooks with lint-staged for formatting and type checks.
- Vercel Preview deployments per PR for stakeholder feedback.

## Initial Setup Milestones
1. **Turborepo Bootstrap** - scaffold repo, configure npm workspaces, base lint/test tooling.
2. **Design System Foundation** - install Tailwind, create token system, build core components (Button, Typography, Shell).
3. **Layout & Routing Skeleton** - implement shared layouts, navigation, placeholder pages for major routes.
4. **Theming Engine** - load tenant configs, apply runtime theme switching, document usage.
5. **Data Layer Integration** - configure React Query providers, sample API client, example fetch pages.
6. **Accessibility & i18n Baseline** - integrate `next-intl`, add translation scaffolding, run initial accessibility audits.
7. **CI/CD Setup** - implement GitHub Actions (lint/test/storybook), configure preview deployments.

## Student Portal Roadmap
- **Dashboard Widgets**: timetable, attendance snapshot, fee dues, notifications.
- **Academic Resources**: course outlines, study materials, assignment submission tracker.
- **Communication Center**: two-way messaging with faculty, announcements, grievance tickets.
- **Self-Service**: profile updates, certificate requests, hostel/mess management, support FAQs.
- **Analytics**: performance charts, credit completion progress, exam schedules.
- **Integrations**: LMS embedding, payment gateways for fees, push notifications/mobile-ready APIs.

## Next Actions
- Prepare ticket breakdown for Milestone 1 (repo bootstrap) including tooling decisions.
- Align with backend team on API contract format and OpenAPI generation workflow.
- Gather white-label branding requirements to populate initial tenant configs.
