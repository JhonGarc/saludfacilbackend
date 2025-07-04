import { IsString, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class CreateScheduleDto {
  @IsOptional()
  @IsUUID()
  paciente_id?: string;

  @IsOptional()
  @IsUUID()
  doctor_id?: string;

  @IsDateString()
  fecha: string;

  @IsDateString()
  hora: string;

  @IsOptional()
  @IsString()
  modalidad?: string;

  @IsOptional()
  @IsString()
  ubicacion?: string;

  @IsOptional()
  @IsString()
  estado?: string;
}
