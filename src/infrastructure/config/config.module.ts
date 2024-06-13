import { Module } from '@nestjs/common';
import { EnvironmentModule } from './environment/environment.module';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    EnvironmentModule,
  ],
})
export class ConfigModule {}
