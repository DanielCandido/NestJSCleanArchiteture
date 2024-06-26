import { Inject, Injectable } from '@nestjs/common';
import { EmployeeOutputDTO } from 'src/application/dto/employee/employee.interface';
import { EmployeeMapper } from 'src/application/mappers/employee/employee.mapper';
import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface';
import { PasswordRepository } from 'src/domain/repositories/password/password.interface';

@Injectable()
export class ValidateEmployeeUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
    private readonly employeeMapper: EmployeeMapper,
    @Inject(PasswordRepository)
    private readonly passwordRepository: PasswordRepository,
  ) {}

  async execute(
    login: string,
    password: string,
  ): Promise<EmployeeOutputDTO | null> {
    const employee = await this.employeeRepository.findByUsername(login);
    if (employee) {
      const isValidPassword = await this.passwordRepository.comparePass(
        password,
        employee.password,
      );

      if (isValidPassword) {
        const result = this.employeeMapper.mapToDto(employee);
        return result;
      }
    }

    return null;
  }
}
