import { Inject, Injectable } from '@nestjs/common';
import { PayloadToken } from 'src/application/dto/token/token.interface';
import { TokenRepository } from 'src/domain/repositories/token/token.interface';

@Injectable()
export class DecodeTokenUseCase {
  constructor(
    @Inject(TokenRepository)
    private readonly tokenRepository: TokenRepository,
  ) {}

  async execute(token: string): Promise<PayloadToken | null> {
    return this.tokenRepository.validateToken(token);
  }
}
