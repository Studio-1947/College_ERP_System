import { Injectable, LoggerService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import pino, { Logger as PinoLogger } from "pino";

@Injectable()
export class AppLogger implements LoggerService {
  private readonly logger: PinoLogger;

  constructor(private readonly configService: ConfigService) {
    const level = configService.get<string>("logLevel", "info");
    this.logger = pino({
      name: "college-erp-api",
      level,
      transport:
        level === "debug"
          ? {
              target: "pino-pretty",
              options: {
                translateTime: true,
                colorize: true
              }
            }
          : undefined
    });
  }

  log(message: string, context?: string) {
    this.logger.info({ context }, message);
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error({ context, trace }, message);
  }

  warn(message: string, context?: string) {
    this.logger.warn({ context }, message);
  }

  debug(message: string, context?: string) {
    this.logger.debug({ context }, message);
  }

  verbose(message: string, context?: string) {
    this.logger.trace({ context }, message);
  }
}
