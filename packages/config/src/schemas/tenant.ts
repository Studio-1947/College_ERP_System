import { z } from "zod";

export const themeSchema = z.object({
  name: z.string(),
  branding: z.object({
    primaryColor: z.string(),
    secondaryColor: z.string().optional(),
    accentColor: z.string().optional(),
    logo: z.string().url().optional()
  }),
  locales: z.array(z.string()).default(["en"]),
  defaultLocale: z.string().default("en"),
  assetsCdn: z.string().url().optional(),
  metadata: z
    .object({
      title: z.string().optional(),
      description: z.string().optional()
    })
    .default({})
});

export type TenantTheme = z.infer<typeof themeSchema>;
