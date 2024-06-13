import { Inject, Injectable } from '@nestjs/common';
import { Employee } from 'src/domain/entities/employee/employee';
import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface';

@Injectable()
export class GetEmployeeByIdUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: number): Promise<Employee | null> {
    return this.employeeRepository.findById(id);
  }
}
