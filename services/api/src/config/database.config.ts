export default () => ({
  database: {
    url: process.env.DATABASE_URL ?? "postgresql://postgres:postgres@localhost:5432/college_erp",
    schema: process.env.DATABASE_SCHEMA ?? "public",
    enablePrismaLogging: (process.env.PRISMA_LOG ?? "false").toLowerCase() === "true"
  }
});
