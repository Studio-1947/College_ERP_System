import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { PrismaService } from "./infra/database/prisma.service";
import { AppLogger } from "./infra/logger/logger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const logger = app.get(AppLogger);
  app.useLogger(logger);

  const configService = app.get(ConfigService);
  const corsOrigins = configService.get<string[]>("cors.origins") ?? ["*"];
  const globalPrefix = configService.get<string>("globalPrefix", "api");

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  app.enableCors({
    origin: corsOrigins.includes("*") ? true : corsOrigins,
    credentials: true
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const port = configService.get<number>("port", 3001);
  await app.listen(port);
  logger.log(`API server running on port ${port}`, "Bootstrap");
}

void bootstrap();
