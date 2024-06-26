import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface.js';
import { GetEmployeeByIdUseCase } from './get-employee-by-id.usecase.js';
import { EmployeeMapper } from 'src/application/mappers/employee/employee.mapper.js';

describe('GetEmployeeByIdUsecase', () => {
  let employeeRepository: EmployeeRepository;
  let employeeMapper: EmployeeMapper;

  beforeEach(() => {
    employeeMapper = new EmployeeMapper();
  });

  it('should be defined', () => {
    const employee: EmployeeRepository = {} as EmployeeRepository;
    expect(
      new GetEmployeeByIdUseCase(employeeRepository, employeeMapper),
    ).toBeDefined();
  });
});
