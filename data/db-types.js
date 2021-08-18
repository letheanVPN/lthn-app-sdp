fs = require('fs');
r = require('rethinkdb');
ion = require('ion-js');
//db.dvpm.io
r.connect({ host: 'rethink', port: 28015 }, async (err, conn) => {
  if (err) throw err;

  let result = await r.db('lethean-api').table('provider').run(conn);
  await result.eachAsync(async function (row) {
    await r
      .db('lethean-api')
      .table('provider')
      .get(row.id)
      .update({
        dateEnd: new Date(row.dateEnd),
        lastPayment: new Date(row.lastPayment),
        lastProviderUpdate: new Date(row.lastProviderUpdate),
      })
      .run(conn);
  });

  result = await r.db('lethean-api').table('services').run(conn);

  await result.eachAsync(async function (row) {
    if (row.date) {
      await r
        .db('lethean-api')
        .table('services')
        .get(row.id)
        .update({
          date: new Date(row.date),
        })
        .run(conn);
    }
  });

  result = await r.db('lethean-api').table('feedback').run(conn);

  await result.eachAsync(async function (row) {
    await r
      .db('lethean-api')
      .table('feedback')
      .get(row.id)
      .update({
        date: new Date(row.date),
      })
      .run(conn);
  });

  result = await r.db('lethean-api').table('payment_history').run(conn);

  await result.eachAsync(async function (row) {
    await r
      .db('lethean-api')
      .table('payment_history')
      .get(row.id)
      .update({
        lastPayment: new Date(row.lastPayment),
        lastProviderUpdate: new Date(row.lastProviderUpdate),
        LastdateEnd: new Date(row.LastdateEnd),
      })
      .run(conn);
  });

  result = await r.db('lethean-api').table('provider_history').run(conn);

  await result.eachAsync(async function (row) {
    await r
      .db('lethean-api')
      .table('provider_history')
      .get(row.id)
      .update({
        lastPayment: new Date(row.lastPayment),
        lastProviderUpdate: new Date(row.lastProviderUpdate),
        dateEnd: new Date(row.dateEnd),
      })
      .run(conn);
  });

  result = await r.db('lethean-api').table('services_history').run(conn);

  await result.eachAsync(async function (row) {
    if (row.lastUpdate) {
      await r
        .db('lethean-api')
        .table('services_history')
        .get(row.id)
        .update({
          lastUpdate: new Date(row.lastUpdate),
        })
        .run(conn);
    }
  });

  await conn.close();
});
