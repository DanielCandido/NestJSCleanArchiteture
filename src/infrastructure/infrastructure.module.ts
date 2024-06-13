import { Module } from '@nestjs/common';
import { MongoService } from './orm/mongodb/mongo/mongo.service';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './orm/prisma/prisma.module';
import { PrismaEmployeeRepository } from './orm/prisma/repositories/employee/employee';
import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface';

@Module({
  imports: [ConfigModule, PrismaModule],
  providers: [
    MongoService,
    {
      provide: EmployeeRepository,
      useClass: PrismaEmployeeRepository,
    },
  ],
  exports: [EmployeeRepository],
})
export class InfrastructureModule {}
