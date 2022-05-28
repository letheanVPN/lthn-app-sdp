import { r } from 'rethinkdb-ts';
export const RethinkProvider = {
  provide: 'RethinkProvider',
  useFactory: async () => {
    console.log('RethinkProvider.useFactory');
     return await r.connect({
      host: 'localhost',
      port: 28015,
      db: 'lethean-api',
    });
  },
};
