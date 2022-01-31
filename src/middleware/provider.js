const AWS = require('aws-sdk');
const PROVIDERS_TABLE = process.env.PROVIDERS_TABLE;
const PROVIDER_HISTORY_TABLE = process.env.PROVIDER_HISTORY_TABLE;
const PAYMENT_HISTORY_TABLE = process.env.PAYMENT_HISTORY_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;
const DYNAMODB_URI = process.env.DYNAMODB_URI;

var datetime = require('node-datetime');

const uuidv1 = require('uuid/v1');

let dynamoDb;

// create DB
if (IS_OFFLINE === 'true'){
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost', endpoint: DYNAMODB_URI
  });
}else{
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

// from POST
exports.providerAdd_middleware_controller = function(value, data){

  uuid = uuidv1();
  var dt = new Date();
  dt = datetime.create(dt);
  var dateNow = dt.format('m/d/Y H:M:S');

  nodeType = null;
  name = null;
  certificates = null;
  wallet = null;
  terms = null;
  lastProviderUpdate = null;

  if (value.wallet != null) {
    console.log("Has wallet value")
    nodeType = value.nodeType;
    name = value.name;
    certificates = value.certificates;
    wallet = value.wallet;
    terms = value.terms;
    lastProviderUpdate = value.lastProviderUpdate;

    const historyAdd = {
      TableName: PROVIDER_HISTORY_TABLE,
      Item: {
        uuid: uuid,
        provider: value.id,
        nodeType: nodeType,
        name: name,
        certificates: certificates,
        wallet: wallet,
        terms: terms,
        height: value.height,
        hash: value.hash,
        lastPayment: value.lastPayment,
        dateEnd: value.dateEnd,
        lastProviderUpdate: lastProviderUpdate
      },
    };

    // save my history
    dynamoDb.put(historyAdd, (error, result) => {
      if (error) {
        console.log(error);
      }
    });
  }

  const providerAdd = {
    TableName: PROVIDERS_TABLE,
    Item: {
      id: value.id,
      nodeType: data.nodeType,
      name: data.name,
      certificates: data.certificates,
      wallet: data.wallet,
      height: value.height,
      hash: value.hash,
      dateEnd: value.dateEnd,
      lastPayment: value.lastPayment,
      terms: data.terms,
      lastProviderUpdate: dateNow
    },
  };

  // save my provider info
  dynamoDb.put(providerAdd, (error, result) => {
    if (error) {
      console.log(error);
    }
  });

  console.log("new user updated");
}


exports.addProvider = async(id, hash, height, dataNow) => {
  uuid = uuidv1();

  var paramProvider = {
      TableName: PROVIDERS_TABLE,
      Key: {
        id: id,
      },
  }

  await dynamoDb.get(paramProvider, (error, result) => {
    nodeType = null;
    name = null;
    certificates = null;
    wallet = null;
    terms = null;
    lastProviderUpdate = null;

    if (error) {
      console.log(error);
    }
    if (result.Item != null) {
      value = result.Item;
      if (value.wallet != null) {
        nodeType = value.nodeType;
        name = value.name;
        certificates = value.certificates;
        wallet = value.wallet;
        terms = value.terms;
        lastProviderUpdate = value.lastProviderUpdate;
      }

      Lastheight = value.height;
      Lasthash = value.hash;
      lastPayment = value.lastPayment;
      LastdateEnd = value.dateEnd;
    }else{
      value = false
    }

    var blockheight = 0;

    if(value.height != null){
      var blockheight = value.height
    }

    console.log("my ID payment: " + id);
    console.log('my height from DB: --'+ blockheight + "  / my new height from wallet: --" + height);

    var dataPayment = new Date(0);
    dataPayment.setUTCSeconds(dataNow); // The 0 there is the key, which sets the date to the epoch
    dataPayment = datetime.create(dataPayment);
    dataPayment = dataPayment.format('m/d/Y H:M:S')

    if(blockheight != 0 && hash !== value.hash && height >= blockheight){
      console.log("=== New payment - Cheers!! ===");

      const paymentParam = {
        TableName: PAYMENT_HISTORY_TABLE,
        Item: {
          uuid: uuid,
          provider:id,
          nodeType:nodeType,
          name:name,
          certificates:certificates,
          wallet: wallet,
          terms: terms,
          Lastheight: Lastheight,
          hash: Lasthash,
          lastPayment: lastPayment,
          LastdateEnd: LastdateEnd,
          lastProviderUpdate: lastProviderUpdate
        },
      };

      dynamoDb.put(paymentParam, (error) => {
        if (error) {
          console.log(error);
        }
      });
    }


    if(height >= blockheight && hash !== value.hash) {

      var subsEnd = new Date(0);
      subsEnd.setUTCSeconds(dataNow);

      if(value.dateEnd != null){
          subsEnd = datetime.create(value.dateEnd);
          subsEnd.offsetInDays(31)
          subsEnd = subsEnd.format('m/d/Y H:M:S')
      } else {
          subsEnd = datetime.create(dataPayment);
          subsEnd.offsetInDays(31);
          subsEnd = subsEnd.format('m/d/Y H:M:S');
      }

      var dt = new Date();
      dt = datetime.create(dt);
      var formatted = dt.format('m/d/Y H:M:S');
      var dateNow = new Date(formatted);

      const param = {
        TableName: PROVIDERS_TABLE,
        Item: {
          id:id,
          nodeType:nodeType,
          name:name,
          certificates:certificates,
          wallet: wallet,
          terms: terms,
          height: height,
          hash: hash,
          lastPayment: dataPayment,
          dateEnd: subsEnd,
          lastProviderUpdate: dateNow
        },
      };

      dynamoDb.put(param, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Payment add with success");
        }
      });
    }
  });
}



