# Getting Started

## Prerequisites
- Node.js >= 18.17 (ships with npm 9+)
- npm >= 9 (bundled with Node installer)
- Turbo CLI is invoked through npm scripts (no global install needed)

Install dependencies:

```bash
npm install
```

## Development Scripts
- `npm run dev` - launch the Next.js application (public site, portal, admissions routes)
- `npm run build` - build every package/app
- `npm run lint` - lint all workspaces
- `npm run test` - execute unit tests (where configured)

To run the Next.js app explicitly:
```bash
npm run dev --workspace=@college-erp/web
```

To run the API service:
```bash
npm run start:dev --workspace=@college-erp/api
```

## Workspace Layout
```
apps/
  web/          # Next.js App Router hosting public, portal, admissions routes

packages/
  ui/           # Design system components, tokens, tailwind preset
  config/       # Tenant registry & configuration schemas
  hooks/        # Shared React hooks (React Query bindings, theme loaders)
  utils/        # Fetch helpers, date utilities, formatters

services/
  api/          # NestJS core API (auth, modules, integrations)

docs/           # Architecture and project documentation
tooling/        # Shared linting/tsconfig presets (to be expanded)
```

## Next Steps
1. Verify dependency installation (no unmet peer deps).
2. Flesh out Storybook setup in `packages/ui`.
3. Define OpenAPI schema for backend and generate typed clients in `packages/utils`.
