import * as Joi from "joi";

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid("development", "test", "production").default("development"),
  PORT: Joi.number().port().default(3001),
  DATABASE_URL: Joi.string()
    .uri()
    .default("postgresql://postgres:postgres@localhost:5432/college_erp"),
  DATABASE_SCHEMA: Joi.string().default("public"),
  PRISMA_LOG: Joi.string().valid("true", "false").default("false"),
  CORS_ORIGIN: Joi.string().default("*"),
  LOG_LEVEL: Joi.string()
    .valid("fatal", "error", "warn", "info", "debug", "trace", "silent")
    .default("info")
});
