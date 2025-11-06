# Backend Architecture – College ERP System

## Overview
The backend stack is built on **NestJS** to deliver modular services covering authentication, ERP modules, admission workflows, and integrations. It targets maintainability, security, and integration-friendly APIs (REST + GraphQL future option).

## Core Principles
- **Domain-driven modules**: group controllers/services/entities per domain (Admissions, Finance, HR, Library).
- **Hexagonal architecture**: isolate business logic from persistence and external services.
- **Scalability**: support horizontal scaling via stateless services and shared cache/message queues.
- **Compliance**: enforce audit logging, RBAC, and data privacy per Indian government standards.

## Directory Structure
```
services/api/
├─ src/
│  ├─ app.module.ts          # Root module wiring configs and shared providers
│  ├─ main.ts                # Bootstrap (CORS, global pipes, logging)
│  ├─ config/                # Config factories (env parsing, service endpoints)
│  ├─ common/                # Guards, interceptors, decorators, filters
│  ├─ modules/
│  │  ├─ admissions/         # Application, verification, merit list logic
│  │  ├─ academics/          # Attendance, timetable, results
│  │  ├─ finance/            # Fees, accounting, receipts
│  │  ├─ hr/                 # Payroll, compliance, leave
│  │  ├─ library/            # Catalog, issue/return
│  │  ├─ inventory/          # Asset tracking
│  │  └─ reporting/          # Dashboards, exports
│  ├─ integrations/          # Payment gateway, SMS/Email, OCR, SSO adapters
│  └─ infra/                 # Database modules (TypeORM/Prisma), cache, queues
├─ test/                     # E2E tests (Jest + Supertest)
├─ tsconfig*.json            # TypeScript config
└─ nest-cli.json             # Nest CLI configuration
```

## Tech Stack
- **Framework**: NestJS 10 (Express adapter initially; Fastify optional)
- **Database**: PostgreSQL with Prisma ORM (future migrations folder under `infra/database`)
- **Caching/Queues**: Redis for caching + BullMQ for background jobs
- **Auth**: Keycloak/OAuth2 provider integration, JWT access tokens, refresh token rotation
- **Search/Analytics**: OpenSearch/Elasticsearch for global search; ClickHouse for analytics
- **File Storage**: S3-compatible service for documents
- **Observability**: OpenTelemetry tracing, Winston logging, Prometheus metrics

## Configuration Strategy
- Use `@nestjs/config` with schema validation (zod or Joi) per module.
- Store secrets in Vault/AWS Secrets Manager; load via environment variables.
- Namespaced config modules (e.g., `config/database.config.ts`) exported for reuse.

## API Layer
- REST endpoints with versioning (`/api/v1`).
- Standard response envelope with correlation IDs.
- Auto-generated OpenAPI spec (Swagger module) for client generation.
- Future: GraphQL gateway for analytics dashboards if required.

## Security Baseline
- Global validation pipe (class-validator) with whitelisting and transformation.
- Rate limiting (Nest rate-limiter or API gateway).
- CSRF protection for session-based flows; CORS configuration for Next.js apps.
- Audit trail middleware logging user actions and data changes.

## Next Steps
1. Add Prisma/TypeORM setup under `src/infra/database`.
2. Define `common` utilities (exceptions filters, interceptors).
3. Scaffold first domain module (e.g., `modules/admissions`) with DTOs and controllers.
4. Configure Swagger + health checks for readiness probes.
