r = require('rethinkdb');
//db.dvpm.io
r.connect({ host: 'localhost', port: 28015 }, async (err, conn) => {
  if (err) throw err;

  await r.dbCreate('lethean-api').run(conn, (err, result) => {
    if (err) {
      console.log(err.msg);
    } else {
      console.log('Created Database lethean-api');
    }
  });

  await r
    .db('lethean-api')
    .tableCreate('services')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Services Table');
      }
    });
  await r
    .db('lethean-api')
    .tableCreate('provider')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Provider Table');
      }
    });

  await r
    .db('lethean-api')
    .tableCreate('feedback')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Feedback Table');
      }
    });

  await r
    .db('lethean-api')
    .tableCreate('protocol')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Protocol Table');
      }
    });

  await r
    .db('lethean-api')
    .tableCreate('payment_history')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Payment History Table');
      }
    });

  await r
    .db('lethean-api')
    .tableCreate('provider_history')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Provider History Table');
      }
    });
  await r
    .db('lethean-api')
    .tableCreate('services_history')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Provider History Table');
      }
    });

  await r
    .db('lethean-api')
    .tableCreate('services_checked')
    .run(conn, (err, result) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log('Created Services Checked Table');
      }
    });
  await conn.close();
});
