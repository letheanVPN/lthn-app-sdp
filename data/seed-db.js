r = require('rethinkdb');

r.connect({ host: 'db.dvpm.io', port: 28015 }, async (err, conn) => {
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
  await conn.close();
});
