import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Photo } from '../model/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor( @Inject('PHOTO_REPOSITORY')
               private readonly photoRepository: Repository<Photo>) {
  }

  getHello(): string {
    return 'Hello World!';
  }
}
