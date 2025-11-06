import { Body, Controller, Get, Post } from "@nestjs/common";

import { AdmissionsService } from "./admissions.service";
import { CreateApplicationDto } from "./dto/create-application.dto";

@Controller("admissions")
export class AdmissionsController {
  constructor(private readonly admissionsService: AdmissionsService) {}

  @Get("pipelines")
  listPipelines() {
    return this.admissionsService.listPipelines();
  }

  @Post("applications")
  createApplication(@Body() payload: CreateApplicationDto) {
    return this.admissionsService.createApplicationDraft(payload);
  }
}
