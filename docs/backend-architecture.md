# Backend Architecture - College ERP System

## Overview
The backend stack is built on **NestJS** to deliver modular services covering authentication, ERP modules, admission workflows, and integrations. It targets maintainability, security, and integration-friendly APIs (REST first, GraphQL optional later).

## Core Principles
- **Domain-driven modules**: group controllers/services/entities per domain (Admissions, Students, Finance, HR, Library).
- **Hexagonal boundaries**: isolate business logic from persistence and external services.
- **Scalability**: support horizontal scaling via stateless services and shared cache/message queues.
- **Compliance**: enforce audit logging, RBAC, and data privacy per Indian government standards.

## Repository Layout
```
services/api/
  prisma/
    schema.prisma                # Prisma data model (tenants, campuses, students)
  src/
    app.module.ts                # Root module wiring configs and shared providers
    main.ts                      # Bootstrap (CORS, global pipes, logger, shutdown hooks)
    common/
      decorators/
        current-user.decorator.ts
      dto/
        pagination.dto.ts
      filters/
        http-exception.filter.ts
      guards/
        auth.guard.ts
      interceptors/
        logging.interceptor.ts
    config/
      app.config.ts
      database.config.ts
      env.validation.ts
    infra/
      database/
        database.module.ts
        prisma.service.ts
      logger/
        logger.module.ts
        logger.service.ts
    modules/
      health/
        health.controller.ts
        health.module.ts
        health.service.ts
      admissions/
        admissions.controller.ts
        admissions.module.ts
        admissions.service.ts
        dto/create-application.dto.ts
      students/
        students.controller.ts
        students.module.ts
        students.service.ts
  test/
    app.e2e-spec.ts              # Jest + Supertest smoke tests
```

## Tech Stack
- **Framework**: NestJS 10 (Express adapter initially; Fastify optional)
- **Database**: PostgreSQL + Prisma ORM (migrations via `prisma migrate`)
- **Caching/Queues**: Redis for caching, BullMQ/RSMQ for background jobs (next phase)
- **Auth**: Keycloak/OAuth2 provider integration, JWT access tokens, refresh token rotation
- **Search/Analytics**: OpenSearch/Elasticsearch for global search; ClickHouse for analytics
- **File Storage**: S3-compatible service for documents
- **Observability**: Pino structured logging, OpenTelemetry/Prometheus integration roadmap

## Configuration & Bootstrap
- Environment variables validated with Joi (`env.validation.ts`) to block invalid deployments.
- Config modules expose typed helpers (`app.config.ts`, `database.config.ts`) for reuse.
- Global pipes/interceptors/filters configured at bootstrap:
  - Validation pipe with whitelist + implicit conversion.
  - Logging interceptor powered by Pino.
  - HTTP exception filter returning consistent envelopes.
- Global prefix set to `/api`; CORS origins configurable via `CORS_ORIGIN`.

## Current Modules
- **Health**: `/api/health` readiness endpoint.
- **Admissions**: placeholder APIs for pipelines and draft applications (to be wired to Prisma models).
- **Students**: paginated roster and profile fetch leveraging Prisma relations.

## Roadmap
1. Expand Prisma schema (applications, fees, staff, documents) and generate migrations.
2. Add authentication/authorization layer (Keycloak or Cognito) with guards and decorators.
3. Introduce additional domain modules (Finance, HR, Library, Inventory) following current pattern.
4. Wire notifications (SMS/email) and file storage integrations under `infra/`.
5. Generate OpenAPI spec + Swagger UI for frontend contract testing.
6. Add background job processor (BullMQ) and observability stack (metrics, tracing).
