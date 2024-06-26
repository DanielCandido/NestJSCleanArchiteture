import { Injectable } from '@nestjs/common';
import { TokenRepository } from 'src/domain/repositories/token/token.interface';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from 'src/application/dto/token/token.interface';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { EnvironmentService } from 'src/infrastructure/config/environment/environment.service';
import config from 'src/infrastructure/config/environment/environment.config';

@Injectable()
export class JwtRepository
  extends PassportStrategy(Strategy)
  implements TokenRepository
{
  constructor(
    private readonly jwtService: JwtService,
    private readonly environmentService: EnvironmentService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.secretJWT,
    });
  }

  generateToken(employeeId: number, username: string): string {
    const payload: PayloadToken = { sub: employeeId, username };
    const token = this.jwtService.sign(payload, {
      secret: this.environmentService.getJwtSecret(),
    });

    return token;
  }

  validateToken(token: string): PayloadToken {
    const payload = this.jwtService.verify<PayloadToken>(token, {
      secret: this.environmentService.getJwtSecret(),
    });

    return payload;
  }
}
