import { themeSchema, type TenantTheme } from "./schemas/tenant";

const TENANT_STORE: Record<string, TenantTheme> = {};

export function registerTenant(slug: string, config: TenantTheme) {
  TENANT_STORE[slug] = themeSchema.parse(config);
}

export function getTenant(slug: string): TenantTheme | undefined {
  return TENANT_STORE[slug];
}

export function getDefaultTenant(): TenantTheme | undefined {
  return TENANT_STORE["default"];
}

// seed default tenant
registerTenant("default", {
  name: "Default College",
  branding: {
    primaryColor: "#4f46e5"
  },
  locales: ["en", "hi", "bn"],
  defaultLocale: "en",
  metadata: {
    title: "College ERP",
    description: "White-label ERP solution for educational institutions."
  }
});
