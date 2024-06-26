import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeMapper } from './employee.mapper';

describe('EmployeeService', () => {
  let service: EmployeeMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeMapper],
    }).compile();

    service = module.get<EmployeeMapper>(EmployeeMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
