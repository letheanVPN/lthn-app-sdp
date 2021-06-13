const AWS = require('aws-sdk');
var btoa = require('btoa');
var hashGetController = require('../hash/get')
var createCertificatesMiddleware = require('../../middleware/services')
const { performance } = require('perf_hooks');

const SERVICES_TABLE = process.env.SERVICES_TABLE;
const FEEDBACK_TABLE = process.env.FEEDBACK_TABLE;
const PROVIDERS_TABLE = process.env.PROVIDERS_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;
var datetime = require('node-datetime');
var dt = datetime.create();
var formatted = dt.format('m/d/Y H:M:S');



let dynamoDb;

if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost', endpoint: 'http://localhost:8000'
  });
  console.log(dynamoDb, '<---- my get server offline');
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

// Get User endpoint
// curl -H "Content-Type: application/json" -X GET http://localhost:3000/v1/services/search

// curl -H "Content-Type: application/json" -X GET https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/services/search

exports.servicesSearch_get = function (req, res) {

  var startTime = performance.now();

  var providersCache = {};

  providerQueries = 0;
  providerCacheHits = 0;

  var i = 1
  var array = []
  var params = {
    TableName: SERVICES_TABLE,
  }

  // dynamoBd from server.js
  dynamoDb.scan(params, (error, result) => {
    console.log("dynamoDb.scan");
    console.log("error");
    console.log(error);
    console.log("result");
    console.log(result);


    if (error) {
      res.status(404).json({ error: 'Could not get services' });
      return;
    }

    if (result == undefined || result.Items == undefined) {
      res.status(404).json({ error: "No services found" });
      return;
    }

    if (result.Items.length < 1) {
      res.status(404).json({ error: "We're sorry, there is no \ice available here." });
      return;
    }

    // scan through providers so we can cache results
    var providersQuery = {
      TableName: PROVIDERS_TABLE,
    }

    dynamoDb.scan(providersQuery, (error, providersResult) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error: 'Could not get providers' });
        return;
      }

      if (providersResult == undefined || providersResult.Items == undefined) {
        res.status(404).json({ error: "providers not found" });
        return;
      }

      // save providers to cache
      providersResult.Items.forEach(function (provider) {
        providersCache[provider.id] = { Item: provider };
        //console.log("Added to cache " + provider.id);
      });

      //console.log("Cached providers");
      //console.log(JSON.stringify(providersCache));


      var fb = {
        TableName: FEEDBACK_TABLE
      }

      dynamoDb.scan(fb, (error, fb) => {
        if (error) {
          console.log(error);
          res.status(404).json({ error: 'Could not get feedback' });
          return;
        }

        if (fb == undefined || fb.Items == undefined) {
          res.status(404).json({ error: "Feedback not found" });
          return;
        }

        console.log("Feedback Items " + fb.Count);
        console.log(result.Items);

        result.Items.forEach(function (serv) {
          console.log(serv.provider + " my provider value");


          prov = providersCache[serv.provider];

          console.log("Retrieved provider");
          console.log(prov);

          //format date to compare
          dataEnd = new Date(prov.Item.dateEnd);
          dataStart = new Date(formatted)

          if (serv.disable !== true && dataEnd > dataStart) {
            mSpeed = 0
            mStability = 0
            flag = 0
            fb.Items.forEach(function (feed) {

              if (serv.id === feed.services && serv.provider === feed.provider && feed.speed >= 1 && feed.stability >= 1) {
                mSpeed = mSpeed + feed.speed
                mStability = mStability + feed.stability
                flag++
              }
            });

            mSpeed = mSpeed / flag
            mStability = mStability / flag
            mSpeed = parseFloat(mSpeed.toFixed(1))
            mStability = parseFloat(mStability.toFixed(1))
            var certArray = []

            // NEED TO REMOVE IN PRODUCTION
            // JUST USE UNTIL HAVE THE OLD DB SCHEME
            if (prov.Item.certificates != null) {
              console.log("going to get the certificates");
              for (z = 0; z < serv.certificates.length; z++) {

                for (x = 0; x < prov.Item.certificates.length; x++) {
                  console.log("number of provider certificates: " + prov.Item.certificates.length);
                  if (serv.certificates[z].id == prov.Item.certificates[x].id) {
                    console.log("call my createCertificate");
                    var newCertificate = createCertificatesMiddleware.createCertificates(prov.Item.certificates[x].content)
                    newCertificate = btoa(newCertificate);
                    console.log("my certificate after btoa: " + newCertificate)
                    certArray.push({ "certContent": newCertificate });
                  }
                }

              }

              // default value
              if(serv.freeService != true) {
                serv.freeService = false;
              }

              array.push({
                'id': serv.id,
                'provider': serv.provider,
                'providerName': prov.Item.name,
                'providerWallet': prov.Item.wallet,
                'name': serv.name,
                'type': serv.type,
                'cost': serv.cost,
                'firstPrePaidMinutes': serv.firstPrePaidMinutes,
                'firstVerificationsNeeded': serv.firstVerificationsNeeded,
                'subsequentPrePaidMinutes': serv.subsequentPrePaidMinutes,
                'subsequentVerificationsNeeded': serv.subsequentVerificationsNeeded,
                'allowRefunds': serv.allowRefunds,
                'downloadSpeed': serv.downloadSpeed,
                'uploadSpeed': serv.uploadSpeed,
                'proxy': serv.proxy,
                'vpn': serv.vpn,
                'validity': serv.validity,
                'mSpeed': mSpeed,
                'mStability': mStability,
                'disable': serv.disable,
                'certificates': serv.certificates,
                'certArray': certArray,
                'freeService': serv.freeService,
                'hash': hashGetController.hashCreator({
                  'id': serv.id,
                  'provider': serv.provider,
                  'providerName': prov.Item.name,
                  'providerWallet': prov.Item.wallet,
                  'name': serv.name,
                  'type': serv.type,
                  'cost': serv.cost,
                  'firstPrePaidMinutes': serv.firstPrePaidMinutes,
                  'firstVerificationsNeeded': serv.firstVerificationsNeeded,
                  'subsequentPrePaidMinutes': serv.subsequentPrePaidMinutes,
                  'subsequentVerificationsNeeded': serv.subsequentVerificationsNeeded,
                  'allowRefunds': serv.allowRefunds,
                  'downloadSpeed': serv.downloadSpeed,
                  'uploadSpeed': serv.uploadSpeed,
                  'proxy': serv.proxy,
                  'vpn': serv.vpn,
                  'validity': serv.validity,
                  'mSpeed': mSpeed,
                  'mStability': mStability,
                  'disable': serv.disable,
                  'certificates': serv.certificates,
                  'certArray': certArray
                })
              });
              //console.log(array[i].hash + " my array hash")
            } else {
              console.log("has no certificate");
            }

          }

          // this if cannot be within disabled provider validation or no result will be returned
          if (i == result.Items.length) {
            array.sort(function (a, b) { return a.cost - b.cost });
            res.status(200).send({ protocolVersion: process.env.SDP_VERSION, providers: array });
            console.log("Returning correct response, all items populated");

            var endTime = performance.now();
            console.log("Call took " + (endTime - startTime) + " milliseconds.");

            return;
          }

          i++;


        });

      });


    }); // close providers scan

  });
};

exports.provider_get = function (req, res, next) {
  var i = 1
  var array = []
  var params = {
    TableName: SERVICES_TABLE,
  }

  // dynamoBd from server.js
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      res.status(404).json({ error: 'Could not get services' });
      return;
    }

    if (result == undefined || result.Items == undefined) {
      res.status(404).json({ error: "No services found" });
      return;
    }

    if (result.Items.length < 1) {
      res.status(404).json({ error: "We're sorry, there is no \ice available here." });
      return;
    }

    var fb = {
      TableName: FEEDBACK_TABLE
    }

    dynamoDb.scan(fb, (error, fb) => {
      if (error) {
        res.status(404).json({ error: 'Could not get feedback' });
        return;
      }

      result.Items.forEach(function (serv) {
        var prov = {
          TableName: PROVIDERS_TABLE,
          Key: {
            id: serv.provider,
          },
        }

        dynamoDb.get(prov, (error, prov) => {
          if (error) {
            res.status(404).json({ error: 'Could not get provider' });
            return;
          } else if (prov.Item) {




            // get only provider ID
            if (prov.Item.id !== req.params.client) return;

            mSpeed = 0
            mStability = 0
            flag = 0
            fb.Items.forEach(function (feed) {

              if (serv.id === feed.services && serv.provider === feed.provider && feed.speed >= 1 && feed.stability >= 1) {
                mSpeed = mSpeed + feed.speed
                mStability = mStability + feed.stability
                flag++
              }
            });

            mSpeed = mSpeed / flag
            mStability = mStability / flag
            mSpeed = parseFloat(mSpeed.toFixed(1))
            mStability = parseFloat(mStability.toFixed(1))
            var certArray = []
            for (z = 0; z < serv.certificates.length; z++) {

              for (x = 0; x < prov.Item.certificates.length; x++) {
                if (serv.certificates[z].id == prov.Item.certificates[x].id) {
                  prov.Item.certificates[x].content = createCertificatesMiddleware.createCertificates(prov.Item.certificates[x].content)
                  prov.Item.certificates[x].content = btoa(prov.Item.certificates[x].content);
                  certArray.push({ "certContent": prov.Item.certificates[x].content });
                }
              }

            }

            array.push({
              'id': serv.id,
              'provider': serv.provider,
              'providerName': prov.Item.name,
              'providerWallet': prov.Item.wallet,
              'name': serv.name,
              'type': serv.type,
              'cost': serv.cost,
              'firstPrePaidMinutes': serv.firstPrePaidMinutes,
              'firstVerificationsNeeded': serv.firstVerificationsNeeded,
              'subsequentPrePaidMinutes': serv.subsequentPrePaidMinutes,
              'subsequentVerificationsNeeded': serv.subsequentVerificationsNeeded,
              'allowRefunds': serv.allowRefunds,
              'downloadSpeed': serv.downloadSpeed,
              'uploadSpeed': serv.uploadSpeed,
              'proxy': serv.proxy,
              'vpn': serv.vpn,
              'validity': serv.validity,
              'mSpeed': mSpeed,
              'mStability': mStability,
              'disable': serv.disable,
              'certificates': serv.certificates,
              'certArray': certArray,
              'hash': hashGetController.hashCreator({
                'id': serv.id,
                'provider': serv.provider,
                'providerName': prov.Item.name,
                'providerWallet': prov.Item.wallet,
                'name': serv.name,
                'type': serv.type,
                'cost': serv.cost,
                'firstPrePaidMinutes': serv.firstPrePaidMinutes,
                'firstVerificationsNeeded': serv.firstVerificationsNeeded,
                'subsequentPrePaidMinutes': serv.subsequentPrePaidMinutes,
                'subsequentVerificationsNeeded': serv.subsequentVerificationsNeeded,
                'allowRefunds': serv.allowRefunds,
                'downloadSpeed': serv.downloadSpeed,
                'uploadSpeed': serv.uploadSpeed,
                'proxy': serv.proxy,
                'vpn': serv.vpn,
                'validity': serv.validity,
                'mSpeed': mSpeed,
                'mStability': mStability,
                'disable': serv.disable,
                'certificates': serv.certificates,
                'certArray': certArray
              })
            });



            // this if cannot be within disabled provider validation or no result will be returned
            if (i == result.Items.length) {
              array.sort(function (a, b) { return a.cost - b.cost });
              res.status(200).send({ protocolVersion: process.env.SDP_VERSION, providers: array });
              console.log("Returning correct response, all items populated");
              return;
            }
            i++;

          }
        });
      });
    });
  });
};
