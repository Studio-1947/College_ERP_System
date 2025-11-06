import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  courseCode!: string;

  @IsString()
  @IsOptional()
  category?: string;
}
