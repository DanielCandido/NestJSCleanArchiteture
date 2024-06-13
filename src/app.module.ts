import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { EmployeeResolver } from './infrastructure/graphql/employee/employee.resolver';
import { DomainModule } from './domain/domain.module';
import { GetEmployeeByIdUseCase } from './application/usecases/employee/get-employee-by-id.usecase';

@Module({
  providers: [AppService, EmployeeResolver, GetEmployeeByIdUseCase],
  imports: [
    InfrastructureModule,
    ApplicationModule,
    DomainModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
