import { Module } from '@nestjs/common';
import { EmployeeResolver } from './resolvers/employee/employee.resolver';
import { ApplicationModule } from 'src/application/application.module';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  providers: [EmployeeResolver],
})
export class PresentationModule {}
