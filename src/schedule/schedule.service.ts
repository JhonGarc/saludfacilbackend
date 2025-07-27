import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}
  async create(createScheduleDto: CreateScheduleDto) {
    try {
      return this.prisma.cita_medica.create({
        data: createScheduleDto,
        include: {
          usuario: true,
          doctor: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return this.prisma.cita_medica.findMany({
        include: {
          usuario: true,
          doctor: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.cita_medica.findUnique({
        where: { id },
        include: {
          usuario: true,
          doctor: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    try {
      return this.prisma.cita_medica.update({
        where: { id },
        data: updateScheduleDto,
        include: {
          usuario: true,
          doctor: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return this.prisma.cita_medica.delete({
        where: { id },
        include: {
          usuario: true,
          doctor: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}
