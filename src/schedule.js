// schedule cron
//All Configs
const AWS = require('aws-sdk');
const MONEY = process.env.MONEY;
const SERVERRPC = process.env.SERVERRPC
const PROVIDERS_TABLE = process.env.PROVIDERS_TABLE;
const PAYMENT_HISTORY_TABLE = process.env.PAYMENT_HISTORY_TABLE;
var schedule = require('node-schedule');
var request = require('request');
const IS_OFFLINE = process.env.IS_OFFLINE;
var datetime = require('node-datetime');

const uuidv1 = require('uuid/v1');

let dynamoDb;

// create DB
if (IS_OFFLINE === 'true'){
	dynamoDb = new AWS.DynamoDB.DocumentClient({
		region: 'localhost', endpoint: 'http://localhost:8000'
	});
}else{
	dynamoDb = new AWS.DynamoDB.DocumentClient();
}

// sudo curl -X POST http://wallet.cloud.lethean.io:3000/json_rpc -d'{"jsonrpc":"2.0","id":"0","method":"get_transfers", "params":{"in":true}' -H 'Content-Type: application/json'

module.exports.runSchedule = function(event, context, callback) {
//	var job = schedule.scheduleJob('*/5 * * * * *', function(){
	console.log("call RPC Schedule");
	var options = {
	  uri: SERVERRPC,
	  method: 'POST',
	  json: {
	    "jsonrpc":"2.0",
	    "id":"0",
	    "method":"get_transfers",
	    "params":{"in":true}
	  }
	};

	request(options, function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
		    function sortfunction(a, b){
			  return (a.timestamp - b.timestamp)
			}
			body.result.in.sort(sortfunction)

	    	console.log(JSON.stringify(body.result.in));

			var params = {
				TableName: PROVIDERS_TABLE,
			}

			// dynamoBd from server.js
			dynamoDb.scan(params, (error, proviversFromDynamo) => {
				console.log("scan providers table");

				if (error) {
					console.log("error to get all providers from providers_table");
				}

				/* new code */

				var arrayToExistProvider = [];
				var arrayToNewProvider = [];

				body.result.in.forEach(function(providerPayment) {
					console.log("my timestamp should be in order: " + providerPayment.timestamp);
					console.log("check if the provider exist in table: " + proviversFromDynamo.Items.map(function(e) { return e.id; }).indexOf(providerPayment.payment_id))

					if (proviversFromDynamo.Items.map(function(e) { return e.id; }).indexOf(providerPayment.payment_id) > -1) {
						if (providerPayment.payment_id.length == 64 && MONEY == providerPayment.amount) {
							var queryFilter = {
								TableName: PROVIDERS_TABLE,
								Key:{
									id: providerPayment.payment_id,
								},
							}

							dynamoDb.get(queryFilter, (error, providerFromDynamo) => {
								if (error) {
									console.log("error to get the provider from providers_table");
								}

								if (providerFromDynamo.Item) {
									providerFromDynamo = providerFromDynamo.Item;
									// get the date of last payment from dynamodb
									console.log("this is my ID from dynamodb " + providerFromDynamo.id)
									console.log("my dateEnd from dynamodb " + providerFromDynamo.dateEnd);
									var dynamoDataPayment = new Date(providerFromDynamo.lastPayment).getTime();

									// only add the provider payment if is a new one
									console.log("provider ID " + providerPayment.payment_id);
									console.log("wallet timestamp " + providerPayment.timestamp);
									console.log("dynamodb timestamp " + dynamoDataPayment / 1000);
									console.log("check if the date is higher: " + (providerPayment.timestamp > dynamoDataPayment / 1000));
									if (providerPayment.timestamp > dynamoDataPayment / 1000 && arrayToExistProvider.indexOf(providerPayment.payment_id) == -1) {
										arrayToExistProvider.push(providerPayment.payment_id);
										console.log("Found payment for providerPayment " + JSON.stringify(providerPayment));
										console.log("this is a new payment");
										// set infos from wallet
										var id = providerPayment.payment_id;
										var hash = providerPayment.txid;
										var height = providerPayment.height;

										console.log("Payment height is " + height + " and provider last height is " + providerFromDynamo.height);

										// create a random ID to provider payment history
										var uuid = uuidv1();

										console.log("my ID payment: " + id);
										console.log('my height from DB: --'+ providerFromDynamo.height + "  / my new height from wallet: --" + height);

										console.log("=== New payment - Cheers!! ===");
										const paymentParam = {
											TableName: PAYMENT_HISTORY_TABLE,
											Item: {
												uuid: uuid,
												provider: providerFromDynamo.id,
												nodeType: providerFromDynamo.nodeType,
												name: providerFromDynamo.name,
												certificates: providerFromDynamo.certificates,
												wallet: providerFromDynamo.wallet,
												terms: providerFromDynamo.terms,
												Lastheight: providerFromDynamo.height,
												hash: providerFromDynamo.hash,
												lastPayment: providerFromDynamo.lastPayment,
												LastdateEnd: providerFromDynamo.dateEnd,
												lastProviderUpdate: providerFromDynamo.lastProviderUpdate
											},
										};

										dynamoDb.put(paymentParam, (error) => {
											if (error) {
												console.log(error);
											}
										});

										var dataPayment = new Date(0);
										dataPayment.setUTCSeconds(providerPayment.timestamp); // The 0 there is the key, which sets the date to the epoch
										dataPayment = datetime.create(dataPayment);
										dataPayment = dataPayment.format('m/d/Y H:M:S');

										// existing provider subscription end date
										var subsEnd = datetime.create(providerFromDynamo.dateEnd);

										// check if subscription end has passed
										// if it has, add 31 days from today
										if (providerPayment.timestamp > subsEnd.getTime()/1000) {
											console.log("this provider come back to use the service")
											subsEnd = new Date(0);
											subsEnd.setUTCSeconds(providerPayment.timestamp);
											subsEnd = datetime.create(subsEnd);
										}

										subsEnd.offsetInDays(31);
										subsEnd = subsEnd.format('m/d/Y H:M:S');

										var dt = new Date();
										dt = datetime.create(dt);
										var formatted = dt.format('m/d/Y H:M:S');

										const param = {
											TableName: PROVIDERS_TABLE,
											Item: {
												id: id,
												nodeType: providerFromDynamo.nodeType,
												name: providerFromDynamo.name,
												certificates: providerFromDynamo.certificates,
												wallet: providerFromDynamo.wallet,
												terms: providerFromDynamo.terms,
												height: height,
												hash: hash,
												lastPayment: dataPayment,
												dateEnd: subsEnd,
												lastProviderUpdate: formatted
											},
										};

										dynamoDb.put(param, (error) => {
											if (error) {
												console.log(error);
											} else {
												console.log("Payment add with success from a existend provider");
											}
										});
									}
								}
							});
						}
					} else { // provider does not exist in the database, create it
						if (proviversFromDynamo.Items.map(function(e) { return e.id; }).indexOf(providerPayment.payment_id) == -1 && MONEY == providerPayment.amount && providerPayment.payment_id.length == 64 && arrayToNewProvider.indexOf(providerPayment.payment_id) == -1) {
							console.log("Importing payments from the wallet for the first time");
							console.log("get only first providerPayment");

							arrayToNewProvider.push(providerPayment.payment_id);

							var id = providerPayment.payment_id;
							var hash = providerPayment.txid;
							var height = providerPayment.height;
							var dataNow = providerPayment.timestamp;
							var nodeType = null;
							var name = null;
							var certificates = null;
							var wallet = null;
							var terms = null;

							var dataPayment = new Date(0);
							dataPayment.setUTCSeconds(dataNow); // The 0 there is the key, which sets the date to the epoch
							dataPayment = datetime.create(dataPayment);
							dataPayment = dataPayment.format('m/d/Y H:M:S');

							var subsEnd = datetime.create(dataPayment);
							subsEnd.offsetInDays(31);
							subsEnd = subsEnd.format('m/d/Y H:M:S');

							var dt = new Date();
							dt = datetime.create(dt);
							var formatted = dt.format('m/d/Y H:M:S');

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
									lastProviderUpdate: formatted
								},
							};

							dynamoDb.put(param, (error) => {
								if (error) {
									console.log(error);
								} else {
									console.log("Payment add with success");
									console.log("id " + id);
									console.log("height " + height);
									console.log("hash " + hash);
									console.log("lastPayment " + dataPayment);
									console.log("lastProviderUpdate " + formatted);
									console.log("dateEnd " + subsEnd);
								}
							});
						}
					}
				});

				/* end new code */
			});
		} else {
			console.log(error + " my error from RPC");
			console.log(response.statusCode + " my response Code Status from RPC");
		}
	});
};

