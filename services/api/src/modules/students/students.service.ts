import { Injectable, NotFoundException } from "@nestjs/common";

import { PaginationDto } from "../../common/dto/pagination.dto";
import { PrismaService } from "../../infra/database/prisma.service";

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async listStudents(pagination: PaginationDto) {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;

    const [total, students] = await Promise.all([
      this.prisma.student.count(),
      this.prisma.student.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          campus: {
            select: {
              id: true,
              name: true
            }
          }
        }
      })
    ]);

    return {
      total,
      page,
      limit,
      data: students
    };
  }

  async getStudentProfile(id: string) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        campus: true
      }
    });

    if (!student) {
      throw new NotFoundException(`Student ${id} not found`);
    }

    return student;
  }
}
