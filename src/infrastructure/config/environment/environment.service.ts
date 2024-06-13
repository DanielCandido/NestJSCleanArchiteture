import { Injectable } from '@nestjs/common';
import { HttpConfig } from 'src/domain/config/http/http.interface';
import { JwtConfig } from 'src/domain/config/jwt/jwt.interface';
import config from './environment.config';

@Injectable()
export class EnvironmentService implements HttpConfig, JwtConfig {
  getBaseUrl(): string {
    return config.baseUrl;
  }

  getJwtSecret(): string {
    return config.secretJWT;
  }
}
