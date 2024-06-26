import { Inject, Injectable } from '@nestjs/common';
import { EmployeeOutputDTO } from 'src/application/dto/employee/employee.interface';
import { EmployeeMapper } from 'src/application/mappers/employee/employee.mapper';
import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface';

@Injectable()
export class GetEmployeeByIdUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
    private readonly employeeMapper: EmployeeMapper,
  ) {}

  async execute(id: number): Promise<EmployeeOutputDTO | null> {
    return this.employeeRepository
      .findById(id)
      .then((employee) => this.employeeMapper.mapToDto(employee));
  }
}
