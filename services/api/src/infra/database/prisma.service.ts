import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly schema: string;

  constructor(private readonly configService: ConfigService) {
    const url = configService.get<string>("database.url");
    const enableLogging = configService.get<boolean>("database.enablePrismaLogging", false);
    super({
      datasources: {
        db: {
          url
        }
      },
      log: enableLogging ? ["query", "info", "warn", "error"] : ["error", "warn"]
    });
    this.schema = configService.get<string>("database.schema", "public");
  }

  async onModuleInit() {
    await this.$connect();
    if (this.schema && this.schema !== "public") {
      await this.$executeRawUnsafe(`SET search_path TO "${this.schema}"`);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
  }
}
