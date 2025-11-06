import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";

import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor";
import appConfig from "./config/app.config";
import databaseConfig from "./config/database.config";
import { envValidationSchema } from "./config/env.validation";
import { DatabaseModule } from "./infra/database/database.module";
import { LoggerModule } from "./infra/logger/logger.module";
import { AdmissionsModule } from "./modules/admissions/admissions.module";
import { HealthModule } from "./modules/health/health.module";
import { StudentsModule } from "./modules/students/students.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validationSchema: envValidationSchema
    }),
    LoggerModule,
    DatabaseModule,
    HealthModule,
    AdmissionsModule,
    StudentsModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ]
})
export class AppModule {}
