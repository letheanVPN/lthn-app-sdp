fs = require('fs');
r = require('rethinkdb');
ion = require('ion-js');
config = require('../itw3.json');
//db.dvpm.io
r.connect(
  { host: config.rethinkdb.host, port: config.rethinkdb.port },
  async (err, conn) => {
    if (err) throw err;

    let providerData = ion.loadAll(
      fs.readFileSync(config.rethinkdb.tables.provider.file),
    );
    providerData.forEach((item) => {
      item.allFields().forEach((row) => {
        r.db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.provider.name)
          .insert(JSON.parse(JSON.stringify(row[1][0])))
          .run(conn, (err, result) => {
            if (err) {
              //console.log(err.msg);
            }
          });
      });
    });
    let services = ion.loadAll(fs.readFileSync(config.rethinkdb.tables.services.file));
    services.forEach((item) => {
      item.allFields().forEach((row) => {
        r.db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.services.name)
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

    let feedback = ion.loadAll(fs.readFileSync(config.rethinkdb.tables.feedback.file));
    feedback.forEach((item) => {
      item.allFields().forEach((row) => {
        r.db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.feedback.name)
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
      fs.readFileSync(config.rethinkdb.tables.payment_history.file),
    );
    paymentHistory.forEach((item) => {
      item.allFields().forEach((row) => {
        r.db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.payment_history.name)
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
      fs.readFileSync(config.rethinkdb.tables.provider_history.file),
    );
    providerHistory.forEach((item) => {
      item.allFields().forEach((row) => {
        r.db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.provider_history.name)
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
      fs.readFileSync(config.rethinkdb.tables.services_history.file),
    );
    servicesHistory.forEach((item) => {
      item.allFields().forEach((row) => {
        r.db(config.rethinkdb.db)
          .table(config.rethinkdb.tables.services_history.name)
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
  },
);
