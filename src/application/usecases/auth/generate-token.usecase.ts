import { Inject, Injectable } from '@nestjs/common';
import { TokenRepository } from 'src/domain/repositories/token/token.interface';

@Injectable()
export class GenerateTokenUseCase {
  constructor(
    @Inject(TokenRepository)
    private readonly tokenRepository: TokenRepository,
  ) {}

  async execute(id: number, username: string): Promise<string | null> {
    return this.tokenRepository.generateToken(id, username);
  }
}
