import { Module } from '@nestjs/common';
import { photoProviders } from './photo.providers';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders],
  exports: [...photoProviders],
})
export class PhotoModule {}