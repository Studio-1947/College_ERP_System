import { useQuery } from "@tanstack/react-query";
import { getTenant } from "@college-erp/config";

export function useTenantTheme(tenantSlug: string) {
  return useQuery({
    queryKey: ["tenant-theme", tenantSlug],
    queryFn: async () => {
      const config = getTenant(tenantSlug);
      if (!config) {
        throw new Error(`Tenant ${tenantSlug} not registered`);
      }
      return config;
    },
    staleTime: 60_000
  });
}
