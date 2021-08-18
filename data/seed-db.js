fs = require('fs');
r = require('rethinkdb');
ion = require('ion-js');
//db.dvpm.io
r.connect({ host: 'rethink', port: 28015 }, async (err, conn) => {
  if (err) throw err;

  let providerData = ion.loadAll(
    fs.readFileSync('data/sets/providers_prod.ion'),
  );
  providerData.forEach((item) => {
    item.allFields().forEach((row) => {
      r.db('lethean-api')
        .table('provider')
        .insert(JSON.parse(JSON.stringify(row[1][0])))
        .run(conn, (err, result) => {
          if (err) {
            //console.log(err.msg);
          }
        });
    });
  });
  let services = ion.loadAll(fs.readFileSync('data/sets/services_prod.ion'));
  services.forEach((item) => {
    item.allFields().forEach((row) => {
      r.db('lethean-api')
        .table('services')
        .insert(JSON.parse(JSON.stringify(row[1][0])))
        .run(conn, (err, result) => {
          if (err) {
            //console.log(err.msg);
          } else {
            console.log('Created Provider');
          }
        });
    });
  });

  let feedback = ion.loadAll(fs.readFileSync('data/sets/fback_prod.ion'));
  feedback.forEach((item) => {
    item.allFields().forEach((row) => {
      r.db('lethean-api')
        .table('feedback')
        .insert(JSON.parse(JSON.stringify(row[1][0])))
        .run(conn, (err, result) => {
          if (err) {
            //console.log(err.msg);
          } else {
            console.log('Created Provider');
          }
        });
    });
  });

  let paymentHistory = ion.loadAll(
    fs.readFileSync('data/sets/payment_history_prod.ion'),
  );
  paymentHistory.forEach((item) => {
    item.allFields().forEach((row) => {
      r.db('lethean-api')
        .table('payment_history')
        .insert(JSON.parse(JSON.stringify(row[1][0])))
        .run(conn, (err, result) => {
          if (err) {
            //console.log(err.msg);
          } else {
            console.log('Created Provider');
          }
        });
    });
  });

  let providerHistory = ion.loadAll(
    fs.readFileSync('data/sets/provider_history_prod.ion'),
  );
  providerHistory.forEach((item) => {
    item.allFields().forEach((row) => {
      r.db('lethean-api')
        .table('provider_history')
        .insert(JSON.parse(JSON.stringify(row[1][0])))
        .run(conn, (err, result) => {
          if (err) {
            //console.log(err.msg);
          } else {
            console.log('Created Provider');
          }
        });
    });
  });
  let servicesHistory = ion.loadAll(
    fs.readFileSync('data/sets/services_history_prod.ion'),
  );
  servicesHistory.forEach((item) => {
    item.allFields().forEach((row) => {
      r.db('lethean-api')
        .table('services_history')
        .insert(JSON.parse(JSON.stringify(row[1][0])))
        .run(conn, (err, result) => {
          if (err) {
            //console.log(err.msg);
          } else {
            console.log('Created Provider');
          }
        });
    });
  });

  await conn.close();
});
