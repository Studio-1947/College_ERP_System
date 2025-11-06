export default () => {
  const rawOrigins = process.env.CORS_ORIGIN ?? "*";
  const origins = rawOrigins === "*" ? ["*"] : rawOrigins.split(",").map((origin) => origin.trim());

  return {
    environment: process.env.NODE_ENV ?? "development",
    port: parseInt(process.env.PORT ?? "3001", 10),
    cors: {
      origins
    },
    logLevel: process.env.LOG_LEVEL ?? "info",
    globalPrefix: "api"
  };
};
