import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface';
import { PrismaService } from '../../prisma.service';
import { Employee } from 'src/domain/entities/employee/employee';

@Injectable()
export class PrismaEmployeeRepository implements EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { employee_id: id },
    });

    if (!employee) {
      return null;
    }

    const data = new Employee();
    data.id = employee.employee_id;
    data.login = employee.login;
    data.name = employee.name;
    data.role = employee.role;
    data.status = employee.status;
    data.password = '';

    return data;
  }

  async findByUsername(login: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { login },
    });

    if (!employee) {
      return null;
    }

    const data = new Employee();

    data.id = employee.employee_id;
    data.login = employee.login;
    data.name = employee.name;
    data.role = employee.role;
    data.status = employee.status;
    data.password = employee.password;

    return data;
  }
}
