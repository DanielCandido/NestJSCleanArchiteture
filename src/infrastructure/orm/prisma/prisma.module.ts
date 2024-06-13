import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaEmployeeRepository } from './repositories/employee/employee';

@Module({
  providers: [PrismaService, PrismaEmployeeRepository],
  exports: [PrismaService],
})
export class PrismaModule {}
