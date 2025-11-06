import { Controller, Get, Param, Query } from "@nestjs/common";

import { PaginationDto } from "../../common/dto/pagination.dto";
import { StudentsService } from "./students.service";

@Controller("students")
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findMany(@Query() pagination: PaginationDto) {
    return this.studentsService.listStudents(pagination);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.studentsService.getStudentProfile(id);
  }
}
