r = require('rethinkdb');
config = require('../itw3.json');

//db.dvpm.io
r.connect(
  { host: config.rethinkdb.host, port: config.rethinkdb.port },
  async (err, conn) => {
    if (err) throw err;

    await r.dbCreate(config.rethinkdb.db).run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Database lethean-api');
      }
    });

    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.services.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Services Table');
        }
      });
    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.provider.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Provider Table');
        }
      });

    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.feedback.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Feedback Table');
        }
      });

    await r
      .db(config.rethinkdb.db)
      .tableCreate('protocol')
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Protocol Table');
        }
      });

    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.payment_history.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Payment History Table');
        }
      });

    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.provider_history.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Provider History Table');
        }
      });
    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.services_history.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Provider History Table');
        }
      });

    await r
      .db(config.rethinkdb.db)
      .tableCreate(config.rethinkdb.tables.services_checked.name)
      .run(conn, (err, result) => {
        if (err) {
          console.log(err.msg);
        } else {
          console.log('Created Services Checked Table');
        }
      });
    await conn.close();
  },
);
