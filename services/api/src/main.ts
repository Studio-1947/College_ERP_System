import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CORS_ORIGIN?.split(",") ?? "*",
      credentials: true
    }
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`API server running on port ${port}`);
}

void bootstrap();
