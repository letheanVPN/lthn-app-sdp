import * as rethink from "rethinkdb";

export const RethinkProvider = {
  provide: 'RethinkProvider',
  useFactory: async () => {
    return await rethink.connect('localhost');
  },
};
