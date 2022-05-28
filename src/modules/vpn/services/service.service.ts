import { Inject, Injectable } from '@nestjs/common';
import { ServiceEntity } from './entities/service.entity';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';
import { r } from 'rethinkdb-ts';

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

  async queryServices() {


    const result = await r
      .table('services')
      .filter(function (row) {
        return row('disable').eq(false);
      })
      .eqJoin(r.row('provider'), r.table('provider'))
      .zip()
      .run();

    return result;
  }
}
