import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from "@nestjs/common";
import { Observable, tap } from "rxjs";

import { AppLogger } from "../../infra/logger/logger.service";
import type { Request } from "express";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: AppLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<Request>();
    const startedAt = Date.now();

    return next.handle().pipe(
      tap(() => {
        const elapsed = Date.now() - startedAt;
        const method = request?.method ?? "UNKNOWN";
        const url = request?.url ?? "UNKNOWN";
        this.logger.log(`${method} ${url} completed in ${elapsed}ms`, LoggingInterceptor.name);
      })
    );
  }
}
