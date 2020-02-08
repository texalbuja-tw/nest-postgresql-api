
import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Photo } from '../model/photo.entity';
import { PhotoDto } from '../model/photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly photoRepository: Repository<Photo>,
  ) {

  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }


  async delete(id: number): Promise<DeleteResult> {
    return this.photoRepository.delete({ id: id });
  }

  async create(photo: PhotoDto ): Promise<Photo> {
    return this.photoRepository.save(photo);
  }
}