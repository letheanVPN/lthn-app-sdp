import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { MempoolEntityDTO } from './entites/mempool.entity';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import qs from 'qs';

@Injectable()
export class ExplorerService {
  constructor(private httpService: HttpService) {}

  async getMempool(limit, page) {
    return this.httpService
      .get('https://explorer.lethean.io/api/mempool', {
        params: { limit: limit, page: page },
      })
      .pipe(
        map((res) => {
          return res.data as MempoolEntityDTO;
        }),
      );
    // http://127.0.0.1:8081/api/mempool?limit=10
  }
}
