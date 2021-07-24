import { Injectable } from '@nestjs/common';
import { ServiceEntity } from './interfaces/service.entity';
import { RethinkService } from '../../providers/rethink/rethink.service';

const TABLE = 'services';

@Injectable()
export class ServiceService {
  private readonly cats: ServiceEntity[] = [];
  constructor(private rethinkService: RethinkService) {}

  async newService(service: ServiceEntity) {
    return await this.rethinkService.insert(TABLE, service);
  }

  findAll(): ServiceEntity[] {
    return this.cats;
  }
}
