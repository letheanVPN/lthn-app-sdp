const AWS = require('aws-sdk');
//const SERVICES_TABLE = process.env.SERVICES_TABLE;
const FEEDBACK_TABLE = process.env.FEEDBACK_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;
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

const Feedback = require('../../models/feedbackSetup')

// Require controller modules.
var feedbackMiddlewareController = require('../../middleware/feedback');

// Setup Feedback endpoint
/*

offline
curl -H "Content-Type: application/json" -X POST -d '{"id": "iz5RCx5nsRAdvpfGnTjqB4Q8rv5zKkvJS1skjD6m7w2pdGbSX44QsETVK6Gcrgz6U99Ar4o3a8SMFQPzzC7tJ64H1bZcfgYAJ", "provider": "ea29a26650fcc58f5106f46892568c9bea29a26650fcc58f5106f46892568c9b", "services": "2C"}' http://localhost:3000/v1/feedback/setup

online
curl -H "Content-Type: application/json" -X POST -d '{"id": "iz5RCx5nsRAdvpfGnTjqB4Q8rv5zKkvJS1skjD6m7w2pdGbSX44QsETVK6Gcrgz6U99Ar4o3a8SMFQPzzC7tJ64H1bZcfgYAJ", "provider": "ea29a26650fcc58f5106f46892568c9bea29a26650fcc58f5106f46892568c9b", "services": "2C"}' https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/feedback/setup

*/



exports.feedback_setup = function(req, res) {
	if(Feedback.feedbackCheckSchema(req.body) === true){
	if(feedbackMiddlewareController.feedbackSetup_middleware_controller(req.body.services, req.body.provider, req.body.id, req.body.client)){
		setTimeout(function () {
		  res.status(200).json({ status: '0', message: 'Feedback was created', id: uuid});
		}, 700)
	}
	}else{
		res.status(400).json({ status: '7000', message: Feedback.feedbackCheckSchema(req.body)});
	}
	//console.log(feedbackMiddlewareController.feedbackSetup_middleware_controller(req.body.services, req.body.provider, req.body.id))
};





