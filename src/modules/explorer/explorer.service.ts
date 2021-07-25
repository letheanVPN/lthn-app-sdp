import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import qs from 'qs';
import { MempoolDTO } from './dto/mempool.dto';
import { SearchDTO } from './dto/search.dto';

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
          return res.data as MempoolDTO;
        }),
      );
  }

  async performSearch(id: string) {
    return this.httpService
      .get(`https://explorer.lethean.io/api/search/${id}`)
      .pipe(
        map((res) => {
          return res.data as SearchDTO;
        }),
      );
  }
}
