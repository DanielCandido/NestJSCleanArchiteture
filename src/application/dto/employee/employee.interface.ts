type Role = 'ANALITICA' | 'DIRECTOR' | 'MANAGER' | 'OPERATOR';

export interface EmployeeOutputDTO {
  id: number;
  login: string;
  name: string;
  role: Role;
  status: boolean;
}
