const AWS = require('aws-sdk');
const SERVICESCHECKED_TABLE = process.env.SERVICESCHECKED_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;
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


exports.favoriteAdd_middleware_controller = function(services, provider, client) {
  uuid = uuidv1()
  console.log(uuid, 'my uuid')
  const param = {
    TableName: SERVICESCHECKED_TABLE,
    Item: {
      uuid: uuid,
      services: services,
      provider: provider,
      client: client
    },
  };
  // dynamoBd from server.js
  dynamoDb.put(param, (error) => {
    if (error) {
      console.log(error);
      return false
    }else{
      return uuid
      //res.status(200).json({ status: '1', message: 'ok'});
    }
  });
};


exports.favoriteRemove_middleware_controller = function(id) {
  const param = {
    TableName: SERVICESCHECKED_TABLE,
    Key: {
      uuid: id
    },
  };

  // dynamoBd from server.js
  dynamoDb.delete(param, (error) => {
    if (error) {
      return false
      //res.status(200).json({ status: '404', message: error});
    }else{
      return true
      //res.status(200).json({ status: '1', message: 'ok'});
    }
  });
};
