import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../infra/database/prisma.service";
import { CreateApplicationDto } from "./dto/create-application.dto";

@Injectable()
export class AdmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async listPipelines() {
    // Placeholder response until pipelines are modeled.
    return [
      {
        id: "ug-2025",
        title: "UG Admissions 2025",
        totalApplications: 0,
        status: "draft"
      }
    ];
  }

  async createApplicationDraft(payload: CreateApplicationDto) {
    // Temporary persistence stub until schema is extended.
    return {
      id: "draft-" + Date.now().toString(36),
      applicantName: `${payload.firstName} ${payload.lastName}`,
      courseApplied: payload.courseCode,
      status: "draft"
    };
  }
}
