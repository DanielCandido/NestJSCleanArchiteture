import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DomainModule } from './domain/domain.module';
import { AppService } from './app.service';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  providers: [AppService],
  imports: [
    PresentationModule,
    DomainModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
