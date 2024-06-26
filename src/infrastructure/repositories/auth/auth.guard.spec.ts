import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { EnvironmentService } from 'src/infrastructure/config/environment/environment.service';
import { JwtRepository } from '../jwt/jwt';
import { ExecutionContext } from '@nestjs/common';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let jwtService: JwtService;
  let environmentService: EnvironmentService;
  let jwtRepository: JwtRepository;

  beforeEach(() => {
    jwtService = new JwtService(null);

    environmentService = new EnvironmentService();
    jwtRepository = new JwtRepository(jwtService, environmentService);

    // Criando mocks com jest
    jwtService = { sign: jest.fn(), verify: jest.fn() } as any;
    environmentService = { getJwtSecret: jest.fn() } as any;
    jwtRepository = { validateToken: jest.fn() } as any;

    authGuard = new AuthGuard(jwtRepository);
  });

  it('should be defined', () => {
    expect(authGuard).toBeDefined();
  });

  it('should returned correct token', () => {
    let context: ExecutionContext;

    context = { switchToHttp: jest.fn() } as any;

    const result = authGuard.canActivate(context);

    expect(result).toEqual(true);
  });
});
