const AWS = require('aws-sdk');
const FEEDBACK_TABLE = process.env.FEEDBACK_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;


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

// Get User endpoint
// curl -H "Content-Type: application/json" -X GET http://localhost:3000/v1/services/search

// curl -H "Content-Type: application/json" -X GET https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/feedback/get/iz45vcxKLtwg5oh228BZdMLLu1bTjZtQdTifKcjXE1bWGkFrtzmNfsE5DAKfC9CyPRSfxyeTjgLaDRWis3qf7sUR21VezCRaN/2C


exports.feedback_get = function(req, res) {
  var array = []
  var fb = {
    TableName: FEEDBACK_TABLE,
  }

  dynamoDb.scan(fb, (error, fb) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get feedback' });
    }

    if (fb.Items) {
      mSpeed = 0
      mStability = 0
      flag = 0
      d2 = datetime.create("01/01/1990 00:00:00")
      fb.Items.forEach(function(feed){
        d1 = datetime.create(feed.date)
        //console.log(feed.services, "feed services")
        //console.log(req.params.id, "req param id")
        if(feed.services === req.params.id && feed.client === req.params.client && feed.speed >=1 && feed.stability >= 1 && d1.getTime() > d2.getTime()){
         // console.log("Im in")
         // console.log(d1)
          d2 = d1
          mSpeed = feed.speed
          mStability = feed.stability
        }

        flag ++
        if(fb.Items.length <= flag){
          array.push({
            'mSpeed': mSpeed,
            'mStability': mStability,
          });

          res.status(200).send(array);
        }

      });
    }
  });
};
