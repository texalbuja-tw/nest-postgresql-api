import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhotoService } from '../service/photo.service';
import { Photo } from '../model/photo.entity';
import { Delete } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { DeleteResult } from 'typeorm';
import { PhotoDto } from '../model/photo.dto';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Delete(':id')
  deletePhoto(@Param('id') id): Promise<DeleteResult> {
    return this.photoService.delete(id);
  }

  @Post()
  postPhoto(@Body() photoDto: PhotoDto): Promise<Photo> {
    return this.photoService.create(photoDto);
  }
}