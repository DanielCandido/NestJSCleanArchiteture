import { Module } from '@nestjs/common';
import { MongoService } from './orm/mongodb/mongo/mongo.service';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './orm/prisma/prisma.module';
import { PrismaEmployeeRepository } from './orm/prisma/repositories/employee/employee';
import { EmployeeRepository } from 'src/domain/repositories/employee/employee.interface';
import { PasswordRepository } from 'src/domain/repositories/password/password.interface';
import { BcryptRepository } from './repositories/bcrypt/bcrypt';
import { JwtModule, JwtService } from '@nestjs/jwt';
import config from './config/environment/environment.config';
import { JwtRepository } from './repositories/jwt/jwt';
import { TokenRepository } from 'src/domain/repositories/token/token.interface';
import { AuthGuard } from './repositories/auth/auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: config.secretJWT,
      signOptions: { expiresIn: '60s' },
    }),
    ConfigModule,
    PrismaModule,
  ],
  providers: [
    MongoService,
    JwtService,
    AuthGuard,
    {
      provide: EmployeeRepository,
      useClass: PrismaEmployeeRepository,
    },
    {
      provide: PasswordRepository,
      useClass: BcryptRepository,
    },
    {
      provide: TokenRepository,
      useClass: JwtRepository,
    },
  ],
  exports: [EmployeeRepository, PasswordRepository, TokenRepository],
})
export class InfrastructureModule {}
