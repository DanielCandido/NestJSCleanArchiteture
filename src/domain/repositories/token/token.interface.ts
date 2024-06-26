import { PayloadToken } from 'src/application/dto/token/token.interface';

export interface TokenRepository {
  generateToken(employeeId: number, username: string): string;

  validateToken(token: string): PayloadToken;
}

export const TokenRepository = Symbol('TokenRepository');
