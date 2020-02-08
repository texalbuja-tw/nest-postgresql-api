import { Controller, Get } from '@nestjs/common';
import { PhotoService } from '../service/photo.service';
import { Photo } from '../model/photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}