import { Employee } from 'src/domain/entities/employee/employee';

export interface EmployeeRepository {
  findById(id: number): Promise<Employee | null>;
}

export const EmployeeRepository = Symbol('EmployeeRepository');
