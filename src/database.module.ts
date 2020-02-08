import { Module } from '@nestjs/common';
import { databaseProviders } from './databes.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}