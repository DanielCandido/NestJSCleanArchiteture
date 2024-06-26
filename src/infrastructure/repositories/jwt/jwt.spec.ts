import { JwtService } from '@nestjs/jwt';
import { JwtRepository } from './jwt';
import { EnvironmentService } from 'src/infrastructure/config/environment/environment.service';

describe('Jwt', () => {
  let jwtService: JwtService;
  let environmentService: EnvironmentService;

  beforeEach(() => {
    jwtService = new JwtService(null);

    environmentService = new EnvironmentService();

    // Criando mocks com jest
    jwtService = { sign: jest.fn(), verify: jest.fn() } as any;
    environmentService = { getJwtSecret: jest.fn() } as any;
  });

  it('should be defined', () => {
    expect(new JwtRepository(jwtService, environmentService)).toBeDefined();
  });
});
