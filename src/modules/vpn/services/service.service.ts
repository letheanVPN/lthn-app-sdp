import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as rethink from 'rethinkdb';

@Injectable()
export class ServiceService {
  private connection: rethink.Connection;

  constructor(
    private httpService: HttpService,
    @Inject('RethinkProvider') connection,
  ) {
    this.connection = connection;
  }
  async listServices(): Promise<rethink.Cursor> {
    return await rethink.table('providers').getAll().run(this.connection);
  }
}
