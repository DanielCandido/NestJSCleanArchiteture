import { Module } from '@nestjs/common';
import { UseCasesModule } from './usecases/usecases.module';

@Module({
  imports: [UseCasesModule],
})
export class ApplicationModule {}
