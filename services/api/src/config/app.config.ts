export default () => ({
  environment: process.env.NODE_ENV ?? "development",
  port: parseInt(process.env.PORT ?? "3001", 10)
});
