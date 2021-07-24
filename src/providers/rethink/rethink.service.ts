import { Inject, Injectable } from '@nestjs/common';
import * as rethink from 'rethinkdb';

@Injectable()
export class RethinkService {
  private connection: rethink.Connection;

  constructor(@Inject('RethinkProvider') connection) {
    this.connection = connection;
  }

  /**
   * Creates a new table in the RethinkDB instance
   * @param tableName Name of the new Table
   * @returns Creation status promise
   */
  async createTable(tableName: string): Promise<rethink.CreateResult> {
    return await rethink
      .db('lethean-api')
      .tableCreate(tableName)
      .run(this.connection);
  }

  /**
   * Inserts data in the specified table
   * @param tableName Table where insert data
   * @param content Data to insert
   */
  async insert(
    tableName: string,
    content: object,
  ): Promise<rethink.WriteResult> {
    return await rethink
      .db('lethean-api')
      .table(tableName)
      .insert(content)
      .run(this.connection);
  }

  async fetch(tableName: string): Promise<rethink.Cursor> {
    return await rethink
      .db('lethean-api')
      .table(tableName)
      .getAll()
      .run(this.connection);
  }
}
