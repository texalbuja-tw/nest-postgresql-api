import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { DatabaseModule } from './database.module';
import { PhotoModule } from './model/photo.module';
import { PhotoController } from './controller/photo.controller';
import { PhotoService } from './service/photo.service';

@Module({
  imports: [DatabaseModule, PhotoModule],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule {}
