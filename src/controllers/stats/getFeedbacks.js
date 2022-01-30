const AWS = require('aws-sdk');
const FEEDBACK_TABLE = process.env.FEEDBACK_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;


let dynamoDb;

// create DB
if (IS_OFFLINE === 'true'){
    dynamoDb = new AWS.DynamoDB.DocumentClient({
        region: 'localhost', endpoint: 'http://localhost:8000'
    });
}else{
    dynamoDb = new AWS.DynamoDB.DocumentClient();
}


// number of feedback elements
var itemCount;
// number of completed feedback elements, where scores have been provided
var completedCount;

var response;


// this is reused in the recursive query to add the last evaluated key
var queryParameters;


exports.feedbacks_get = function(request, res) {
    // save to a local variable so it can be reused on scan callback
    response = res;

    // initialize variables
    queryParameters = {
        TableName: FEEDBACK_TABLE,
    }

    itemCount = 0;
    completedCount = 0;

    res.send('eeee')
    // dynamoDb.scan(queryParameters, onScan);
};


function onScan(error, result) {
    if (error) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        response.status(400).json({ error: 'Could not get existing feedbacks' });
        return;
    }
    else {
        console.log("Scan succeeded.");
        console.log("Count: " + result.Count);
        console.log("ScannedCount: " + result.ScannedCount);


        // count the completed feedbacks, which have the feedback date filled in
        result.Items.forEach(function(itemdata) {
            if (typeof itemdata.dateFB != "undefined") {
                ++completedCount;
            }
        });

        // add the scan count including non completed feedbacks
        itemCount += result.Count;

        // continue scanning if we have more items
        if (typeof result.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            queryParameters.ExclusiveStartKey = result.LastEvaluatedKey;

            // recursive scans so we can get all items
            dynamoDb.scan(queryParameters, onScan);
        }
        else { // return the response once we're done
            response.status(200).send({
                Count: itemCount,
                Completed: completedCount
            });
        }
    }
}
