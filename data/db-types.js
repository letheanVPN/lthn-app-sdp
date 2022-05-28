fs = require('fs');
r = require('rethinkdb');
ion = require('ion-js');
config = require('../itw3.json');

//db.dvpm.io
r.connect(
  { host: config.rethinkdb.host, port: config.rethinkdb.port },
  async (err, conn) => {
    if (err) throw err;

    let result = await r.db(config.rethinkdb.db).table(config.rethinkdb.tables.provider.name).run(conn);
    await result.eachAsync(async function (row) {
      await r
        .db(config.rethinkdb.db)
        .table(config.rethinkdb.tables.provider.name)
        .get(row.id)
        .update({
          dateEnd: new Date(row.dateEnd),
          lastPayment: new Date(row.lastPayment),
          lastProviderUpdate: new Date(row.lastProviderUpdate),
        })
        .run(conn);
    });

    result = await r.db(config.rethinkdb.db).table(config.rethinkdb.tables.services.name).run(conn);

    await result.eachAsync(async function (row) {
      if (row.date) {
        await r
          .db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.services.name)
          .get(row.id)
          .update({
            date: new Date(row.date),
          })
          .run(conn);
      }
    });

    result = await r.db(config.rethinkdb.db).table(config.rethinkdb.tables.feedback.name).run(conn);

    await result.eachAsync(async function (row) {
      await r
        .db(config.rethinkdb.db)
        .table(config.rethinkdb.tables.feedback.name)
        .get(row.id)
        .update({
          date: new Date(row.date),
        })
        .run(conn);
    });

    result = await r.db(config.rethinkdb.db).table(config.rethinkdb.tables.services_history.name).run(conn);

    await result.eachAsync(async function (row) {
      await r
        .db(config.rethinkdb.db)
        .table(config.rethinkdb.tables.services_history.name)
        .get(row.id)
        .update({
          lastPayment: new Date(row.lastPayment),
          lastProviderUpdate: new Date(row.lastProviderUpdate),
          LastdateEnd: new Date(row.LastdateEnd),
        })
        .run(conn);
    });

    result = await r.db(config.rethinkdb.db).table(config.rethinkdb.tables.provider_history.name).run(conn);

    await result.eachAsync(async function (row) {
      await r
        .db(config.rethinkdb.db)
        .table(config.rethinkdb.tables.provider_history.name)
        .get(row.id)
        .update({
          lastPayment: new Date(row.lastPayment),
          lastProviderUpdate: new Date(row.lastProviderUpdate),
          dateEnd: new Date(row.dateEnd),
        })
        .run(conn);
    });

    result = await r.db(config.rethinkdb.db).table(config.rethinkdb.tables.services_history.name).run(conn);

    await result.eachAsync(async function (row) {
      if (row.lastUpdate) {
        await r
          .db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.services_history.name)
          .get(row.id)
          .update({
            lastUpdate: new Date(row.lastUpdate),
          })
          .run(conn);
      }
    });

    await conn.close();
  },
);
