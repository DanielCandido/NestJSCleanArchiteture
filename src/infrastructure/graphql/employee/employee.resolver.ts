import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetEmployeeByIdUseCase } from 'src/application/usecases/employee/get-employee-by-id.usecase';
import { Employee } from 'src/domain/entities/employee/employee';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(
    private readonly getEmployeeByIdUseCase: GetEmployeeByIdUseCase,
  ) {}

  @Query(() => Employee)
  async getEmployeeById(@Args('id') id: number) {
    const data = this.getEmployeeByIdUseCase.execute(id);
    return data;
  }
}
