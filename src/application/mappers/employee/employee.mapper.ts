import { Injectable } from '@nestjs/common';
import { EmployeeOutputDTO } from 'src/application/dto/employee/employee.interface';
import { Employee } from 'src/domain/entities/employee/employee';

@Injectable()
export class EmployeeMapper {
  mapFromDto(dto: EmployeeOutputDTO): Employee {
    return {
      id: dto.id,
      login: dto.login,
      name: dto.name,
      password: '',
      role: dto.role,
      status: dto.status,
    };
  }

  mapToDto(employee: Employee): EmployeeOutputDTO {
    return {
      id: employee.id,
      login: employee.login,
      name: employee.name,
      role: employee.role,
      status: employee.status,
    };
  }
}
