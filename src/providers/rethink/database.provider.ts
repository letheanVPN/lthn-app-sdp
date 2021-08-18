import { r } from 'rethinkdb-ts';
export const RethinkProvider = {
  provide: 'RethinkProvider',
  useFactory: async () => {
    return await r.connectPool({
      host: 'rethink',
      port: 28015,
      db: 'lethean-api',
    });
  },
};
