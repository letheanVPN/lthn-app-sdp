import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import qs from 'qs';
import { MempoolDTO } from './dto/mempool.dto';
import { SearchDTO } from './dto/search.dto';
import { BlockDTO } from './dto/block.dto';
import { BlockOutputsDTO } from './dto/block.outputs.dto';
import { RawBlockDTO } from './dto/raw.block.dto';
import { VersionDTO } from './dto/version.dto';
import { EmissionDTO } from './dto/emission.dto';
import { NetworkStatsDTO } from './dto/network.stats.dto';

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

  async getBlockData(id: string) {
    return this.httpService
      .get(`https://explorer.lethean.io/api/block/${id}`)
      .pipe(
        map((res) => {
          return res.data as BlockDTO;
        }),
      );
  }

  async getRawBlockData(id: string) {
    return this.httpService
      .get(`https://explorer.lethean.io/api/rawblock/${id}`)
      .pipe(
        map((res) => {
          return res.data as RawBlockDTO;
        }),
      );
  }

  async getNetworkStats() {
    return this.httpService
      .get('https://explorer.lethean.io/api/networkinfo')
      .pipe(
        map((res) => {
          return res.data as NetworkStatsDTO;
        }),
      );
  }
  async getVersion() {
    return this.httpService.get('https://explorer.lethean.io/api/version').pipe(
      map((res) => {
        return res.data as VersionDTO;
      }),
    );
  }

  async getEmission() {
    return this.httpService
      .get('https://explorer.lethean.io/api/emission')
      .pipe(
        map((res) => {
          return res.data as EmissionDTO;
        }),
      );
  }

  async getOutputBlocks(address, viewkey, limit, mempool) {
    return this.httpService
      .get('https://explorer.lethean.io/api/outputsblocks', {
        params: {
          address: address,
          viewkey: viewkey,
          limit: limit,
          mempool: mempool,
        },
      })
      .pipe(
        map((res) => {
          return res.data as BlockOutputsDTO;
        }),
      );
  }
}
