const AWS = require('aws-sdk');
const FEEDBACK_TABLE = process.env.FEEDBACK_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;
const uuidv1 = require('uuid/v1');
var datetime = require('node-datetime');
var dt = datetime.create();
var formatted = dt.format('m/d/Y H:M:S');

let dynamoDb;

// create DB
if (IS_OFFLINE === 'true'){
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost', endpoint: 'http://localhost:8000'
  });
}else{
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}


exports.feedbackSetup_middleware_controller = function(services, provider, feedback, client) {  
  uuid = uuidv1()
  console.log(uuid, 'my uuid')
  const param = {
    TableName: FEEDBACK_TABLE,
    Item: {
      uuid: uuid,
      id: feedback,
      services: services,
      provider: provider,
      client: client,
      date: formatted
    },
  };
  console.log(param, 'my param')
  // dynamoBd from server.js
  dynamoDb.put(param, (error) => {
    if (error) {
      console.log(error);
      return false
    }else{
      //res.status(200).json({ status: '1', message: 'ok'});
    }
  });
  return uuid
};


exports.feedbackPost_middleware_controller = function(feedback, data) {  
  const param = {
    TableName: FEEDBACK_TABLE,
    Item: {
      uuid: feedback.id,
      id: data.id,
      provider: data.provider,
      services: data.services,
      client: data.client,
      date: data.date,
      speed: feedback.speed,
      stability: feedback.stability,
      dateFB: formatted
    },
  };

  // dynamoBd from server.js
  dynamoDb.put(param, (error) => {
    if (error) {
      console.log(error);
      return false
    }else{
      //res.status(200).json({ status: '1', message: 'ok'});
    }
  });
};