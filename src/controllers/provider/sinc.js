const AWS = require('aws-sdk');
const PROVIDER_TABLE = process.env.PROVIDER_TABLE;
const PROVIDERS_TABLE = process.env.PROVIDERS_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;

var datetime = require('node-datetime');

const uuidv1 = require('uuid/v1');
const DYNAMODB_URI = process.env.DYNAMODB_URI;
let dynamoDb;

// create DB
if (IS_OFFLINE === 'true'){
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost', endpoint: DYNAMODB_URI
  });
}else{
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

var providerMiddlewareController = require('../../middleware/provider');

exports.provider_sinc = function(req, res) {
  console.log("call update!")
  var params = {
    TableName: PROVIDER_TABLE,
  }

  var i = 0;
  var lastIndex = 0;

  // get all providers -- old table
  dynamoDb.scan(params, function getAllOldProvider(error, result) {
    console.log("== call my PROVIDER scan ==")
    if (error) {
      res.status(404).json({ error: 'Error to update - PROVIDER table problem' });
      return;
    }

    if (result.Items) {
      var param = {
        TableName: PROVIDERS_TABLE,
      }

      dynamoDb.scan(param, (error, providers) => {
        console.log("== call my PROVIDERS scan ==")
        if (error) {
          res.status(404).json({ error: 'Error to update - PROVIDERS table problem' });
          return;
        }

        if (providers.Items) {

          result.Items.forEach(function(providerold) {
            providers.Items.forEach(function(providernew) {
              var dt = new Date();
              dt = datetime.create(dt);
              var dateNow = dt.format('m/d/Y H:M:S');
              // make update
              if (providerold.id === providernew.id) {
                var data = providerold;
                const providerAddNew = {
                  TableName: PROVIDERS_TABLE,
                  Item: {
                    id: providernew.id,
                    nodeType: data.nodeType,
                    name: data.name,
                    certificates: data.certificates,
                    wallet: data.wallet,
                    height: providernew.height,
                    hash: providernew.hash,
                    dateEnd: providernew.dateEnd,
                    lastPayment: providernew.lastPayment,
                    terms: data.terms,
                    lastProviderUpdate: dateNow
                  },
                };

                // save my provider info
                dynamoDb.put(providerAddNew, (error, resultAddNew) => {
                  if (error) {
                    console.log(error);
                  }
                });
              }
            });

            console.log(providers.Items.indexOf(providerold.id) + " provider out of new table: " + providerold.id)

            if (providers.Items.indexOf(providerold.id) === -1) {

              var dt = new Date();
              dt = datetime.create(dt);
              var dateNow = dt.format('m/d/Y H:M:S');
              const providerAdd = {
                TableName: PROVIDERS_TABLE,
                Item: {
                  id: providerold.id,
                  nodeType: providerold.nodeType,
                  name: providerold.name,
                  certificates: providerold.certificates,
                  wallet: providerold.wallet,
                  height: providerold.height,
                  hash: providerold.hash,
                  dateEnd: providerold.dateEnd,
                  lastPayment: providerold.date,
                  terms: providerold.terms,
                  lastProviderUpdate: dateNow
                },
              };

              // save my provider info
              dynamoDb.put(providerAdd, (error, resultAdd) => {
                if (error) {
                  console.log(error);
                }
              });
            }


            i++;
            console.log(result.Items.length + " items total to update");
            console.log(i + " my i");
            //if (result.LastEvaluatedKey && lastIndex != result.LastEvaluatedKey) {
            //if (i == lastIndex+result.Items.length-1) {
            if (result.LastEvaluatedKey !== result.ExclusiveStartKey && i === lastIndex+result.Items.length) {
              console.log("Get next scan from PROVIDER table");
              params.ExclusiveStartKey = result.LastEvaluatedKey;
              //lastIndex = result.LastEvaluatedKey;
              lastIndex = lastIndex + result.Items.length
              console.log(lastIndex + " this is my new LASTINDEX");

              dynamoDb.scan(params, getAllOldProvider);

            } else {
              console.log("check with i > lastIndex+result.Items.length-1");
              if (i === lastIndex+result.Items.length) {
                console.log("i > lastIndex+result.Items.length-1 is true");
                setTimeout(function () {
                  res.status(200).json({ providerSynched: i, message: 'Provider up-to-date'});
                }, 500)
              }
            }



          });
        }
      });
    }
  });
};
