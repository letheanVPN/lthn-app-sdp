const AWS = require('aws-sdk');
const SERVICESCHECKED_TABLE = process.env.SERVICESCHECKED_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;

let dynamoDb;
dynamoDb = new AWS.DynamoDB.DocumentClient();


exports.favorite_get = function(req, res) {
  var array = []
  var flag = 1
  var fav = {
    TableName: SERVICESCHECKED_TABLE
  }

  dynamoDb.scan(fav, (error, fav) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get favorite' });
    }

    if (fav.Items) {
      fav.Items.forEach(function(favorite){
        if(favorite.client === req.params.client){
          array.push({
            'uuid': favorite.uuid,
            'provider': favorite.provider,
            'services': favorite.services,
          });
          //res.status(200).send(callback:true)
        }
        if(fav.Items.length == flag){
          res.status(200).send(array);
        }
        flag ++
      });
      
    }
  });  
};