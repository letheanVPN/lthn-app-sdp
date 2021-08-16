import * as rethink from 'rethinkdb';

export const RethinkProvider = {
  provide: 'RethinkProvider',
  useFactory: async () => {
    return await rethink.connect({
      host: 'rethink',
      port: 28015,
      db: 'lethean-api',
    });
  },
};
