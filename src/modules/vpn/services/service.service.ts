import { Injectable } from '@nestjs/common';
import { ServiceEntity } from './entities/service.entity';
import { RethinkService } from '../../../providers/rethink/rethink.service';

const TABLE = 'services';

@Injectable()
export class ServiceService {
  private readonly cats: ServiceEntity[] = [];
  constructor(private rethinkService: RethinkService) {}

  async newService(service: ServiceEntity) {
    return await this.rethinkService.insert(TABLE, service);
  }

  async listServices() {
    return await this.rethinkService
      .fetch(TABLE)
      .then((results) => {
        return results;
      })
      .catch((error) => {
        return error;
      });
  }
}
