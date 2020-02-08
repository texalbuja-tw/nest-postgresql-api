import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../../src/controller/app.controller';
import { AppService } from '../../../src/service/app.service';
import { DatabaseModule } from '../../../src/database.module';
import { PhotoModule } from '../../../src/model/photo.module';
import { PhotoController } from '../../../src/controller/photo.controller';
import { PhotoService } from '../../../src/service/photo.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, PhotoModule],
      controllers: [AppController, PhotoController],
      providers: [AppService, PhotoService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
