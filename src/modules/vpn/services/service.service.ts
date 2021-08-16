import { Injectable } from '@nestjs/common';
import { ServiceEntity } from './entities/service.entity';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

const TABLE = 'services';

@Injectable()
export class ServiceService {
  constructor(private httpService: HttpService) {}

  async listServices() {
    return this.httpService
      .get('https://sdp.lethean.io/v1/services/search')
      .pipe(
        map((res) => {
          return res.data as ServiceEntity[];
        }),
      );
  }
}
