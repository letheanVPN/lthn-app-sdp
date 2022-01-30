const AWS = require('aws-sdk');
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

exports.createCertificates = function(cert){
  var certificate = cert.replace("-----BEGIN CERTIFICATE-----", '')
  certificate = certificate.replace("-----END CERTIFICATE-----", '')
  certificate = certificate.replace(/(\r\n|\n|\r)/gm, "");
  var prefix = '-----BEGIN CERTIFICATE-----\n';
  var postfix = '-----END CERTIFICATE-----';
  var pemText = prefix + certificate.toString('base64').match(/.{0,64}/g).join('\n') + postfix;
  console.log("certificate ready to use: " + pemText);
  return pemText
}