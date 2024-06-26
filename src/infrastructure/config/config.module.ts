import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { EnvironmentService } from './environment/environment.service';

@Module({
  providers: [EnvironmentService],
  imports: [NestConfigModule.forRoot({ envFilePath: '.env', isGlobal: true })],
  exports: [EnvironmentService],
})
export class ConfigModule {}
