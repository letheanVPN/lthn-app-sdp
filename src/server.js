const path = require('path');
const express = require('express')
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const apiRoutesV1 = require(path.join(__dirname, 'routes', 'v1'))
// //All Configs
// const config = require('./config');
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Lethean VPN Marketplace API',
        version: '1.0.0',
        description: 'This is a realtime rest API for the lethean marketplace',
        contact: {
            name: 'Lethean Discord',
            url: 'http://discord.lt.hn'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development Server'
            }
        ]

    },
};

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, 'routes', 'v1', '*.js')],
};
const swaggerSpec = swaggerJSDoc(options);

// encryption middleware to attach headers
var encryptionMiddleware = require(path.join(__dirname, 'middleware', 'encryption'));


const app = express()
const port = 3000



// Error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(express.json({strict: false}));
app.use('/v1', apiRoutesV1);



// process all responses to add ed25519
app.use(function(req, res, next) {
    const oldResJson = res.json;


    res.json = function(body) {
    	console.log(body);

        res.setHeader('JWS', encryptionMiddleware.generateHeader(body));
        oldResJson.call(res, body);
    }

    next();

    console.log("Application Request processed");
});


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})


process.on('SIGINT', function() {
    app.stop(function(err) {
        process.exit(err ? 1 : 0);
    });
});
