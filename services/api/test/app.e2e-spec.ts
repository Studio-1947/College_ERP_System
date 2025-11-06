import { INestApplication, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Test } from "@nestjs/testing";
import * as request from "supertest";

import { AppModule } from "../src/app.module";
import { AppLogger } from "../src/infra/logger/logger.service";
import { PrismaService } from "../src/infra/database/prisma.service";

describe("AppModule (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication({ bufferLogs: true });

    const logger = app.get(AppLogger);
    const configService = app.get(ConfigService);

    app.useLogger(logger);
    app.setGlobalPrefix(configService.get<string>("globalPrefix", "api"));
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true }
      })
    );

    await app.init();
  });

  afterAll(async () => {
    const prismaService = app.get(PrismaService);
    await prismaService.onModuleDestroy();

    await app.close();
  });

  it("/api/health (GET)", async () => {
    const response = await request(app.getHttpServer()).get("/api/health").expect(200);

    expect(response.body.status).toBe("ok");
    expect(response.body).toHaveProperty("timestamp");
  });
});
