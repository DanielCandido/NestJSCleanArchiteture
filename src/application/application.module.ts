import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { GetEmployeeByIdUseCase } from './usecases/employee/get-employee-by-id.usecase';
import { ValidateEmployeeUseCase } from './usecases/auth/validate-employee.usecase';
import { GenerateTokenUseCase } from './usecases/auth/generate-token.usecase';
import { EmployeeMapper } from './mappers/employee/employee.mapper';
import { DecodeTokenUseCase } from './usecases/auth/decode-token.usecase';

@Module({
  providers: [
    GetEmployeeByIdUseCase,
    ValidateEmployeeUseCase,
    GenerateTokenUseCase,
    EmployeeMapper,
    DecodeTokenUseCase,
  ],
  imports: [InfrastructureModule],
  exports: [
    GetEmployeeByIdUseCase,
    ValidateEmployeeUseCase,
    GenerateTokenUseCase,
    EmployeeMapper,
    DecodeTokenUseCase,
  ],
})
export class ApplicationModule {}
