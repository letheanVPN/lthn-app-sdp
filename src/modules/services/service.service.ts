import { Injectable } from '@nestjs/common';
import { ServiceEntity } from './interfaces/service.entity';

@Injectable()
export class ServiceService {
  private readonly cats: ServiceEntity[] = [];

  create(service: ServiceEntity) {
    this.cats.push(service);
    return 'This action returns all cats';
  }

  findAll(): ServiceEntity[] {
    return this.cats;
  }
}
