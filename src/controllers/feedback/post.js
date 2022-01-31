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

const Feedback = require('../../models/feedback')

// Require controller modules.
var feedbackMiddlewareController = require('../../middleware/feedback');

// Post Feedback endpoint
/*
offline
curl -H "Content-Type: application/json" -X POST -d '{"id": "c0d1f8c0-42ff-11e8-9b93-675523fe3fda", "speed":1, "stability": 1}' http://localhost:3000/v1/feedback/add

online
curl -H "Content-Type: application/json" -X POST -d '{"id": "fc2250f0-57b3-11e8-a984-417d0b6f978f", "speed":5, "stability": 4}' https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/feedback/add


*/

exports.feedback_post = function(req, res) {

	const makeRequest = async () => {
	  	if(await Feedback.feedbackCheckSchema(req.body) === true){
			var param = {
			    TableName: FEEDBACK_TABLE,
				Key: {
					uuid: req.body.id,
				},
				/*
				FilterExpression: 'provider = :prov_id and services = :serv_id',
				ExpressionAttributeValues: {
					':prov_id': req.body.provider,
					':serv_id': req.body.services
				},
				*/
			}
			dynamoDb.get(param, (error, result) => {
				if (error) {
				    console.log(error);
				}
				if (result.Item) {
					feedbackMiddlewareController.feedbackPost_middleware_controller(req.body, result.Item)
					setTimeout(function () {
					  res.status(200).json({ status: '0', message: 'Feedback was add'});
					}, 700)
				}else{
					res.status(400).json({ status: '6000', message: 'You dont have permission'});
				}
			})
		}else{
			res.status(400).json({ status: '7000', message: Feedback.feedbackCheckSchema(req.body)});
		}
	}
	makeRequest()
};








