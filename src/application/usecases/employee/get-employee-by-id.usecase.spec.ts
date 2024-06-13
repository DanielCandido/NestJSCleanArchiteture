import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface.js';
import { GetEmployeeByIdUseCase } from './get-employee-by-id.usecase.js';

describe('GetEmployeeByIdUsecase', () => {
  it('should be defined', () => {
    const employee: EmployeeRepository = {} as EmployeeRepository;
    expect(new GetEmployeeByIdUseCase(employee)).toBeDefined();
  });
});
