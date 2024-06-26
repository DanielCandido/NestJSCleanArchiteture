import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { DecodeTokenUseCase } from 'src/application/usecases/auth/decode-token.usecase';
import { GenerateTokenUseCase } from 'src/application/usecases/auth/generate-token.usecase';
import { ValidateEmployeeUseCase } from 'src/application/usecases/auth/validate-employee.usecase';
import { GetEmployeeByIdUseCase } from 'src/application/usecases/employee/get-employee-by-id.usecase';
import { Employee } from 'src/domain/entities/employee/employee';
import { Token } from 'src/domain/entities/token/token';
import { AuthGuard } from 'src/infrastructure/repositories/auth/auth.guard';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(
    private readonly getEmployeeByIdUseCase: GetEmployeeByIdUseCase,
    private readonly validateEmployee: ValidateEmployeeUseCase,
    private readonly generateToken: GenerateTokenUseCase,
    private readonly decodeTokenUseCase: DecodeTokenUseCase,
  ) {}

  @Query(() => Employee)
  @UseGuards(AuthGuard)
  async getEmployeeById(@Args('id') id: number) {
    const data = this.getEmployeeByIdUseCase.execute(id);
    return data;
  }

  @Query(() => Token)
  async authenticate(
    @Args('login') login: string,
    @Args('password') password: string,
  ) {
    const validEmployee = await this.validateEmployee.execute(login, password);

    if (validEmployee) {
      return Promise.resolve({
        accessToken: this.generateToken.execute(
          validEmployee.id,
          validEmployee.name,
        ),
      });
    }
  }

  @Query(() => Employee)
  async me(@Args('token') token: string) {
    const decode = await this.decodeTokenUseCase.execute(token);

    return this.getEmployeeByIdUseCase.execute(decode.sub);
  }
}
