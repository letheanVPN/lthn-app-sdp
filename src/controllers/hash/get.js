var SHA256 = require("crypto-js/sha256");
//var CryptoJS = require("crypto-js");
var EdDSA = require('elliptic').eddsa;
var ec = new EdDSA('ed25519');
var utf8 = require('utf8');
var URLSafeBase64 = require('urlsafe-base64');

exports.hashCreator = function(body){
	
	var privateKey = SHA256(JSON.stringify(body))
	console.log(privateKey + " pkey")

	// Create key pair from secret
	var key = ec.keyFromSecret(privateKey);
	console.log(key + " key")

	var signature = key.sign(body).toHex();

  	return signature;
}


// curl -H "Content-Type: application/json" -X POST -d '{"sign":"0DFCFC18188978B11AD410BD8C8DA062A8C8DCF67D1EE418D4EC6E8C2EB59B4D723C5723F91CC4AA691D55F03A57E131A4232C11CEAB04BE6014779087796700", "json":{"id":"1B","provider":"ea29a26650aaa58f5106f46892568c9bea29a26650aaa58f5106f46892568c9b","providerName":"FakeProvider","providerWallet":"iz5geyNXU8S9eYbhwHqD5theP4pXyzoc8aQmUCkmWx8hZssyJ2SwvdAAk2xsf5WW4f313wijcF1uPWo161x3tDPh2NgLLtW2y","name":"Proxy","type":"proxy","cost":"0.10000000","firstPrePaidMinutes":2,"firstVerificationsNeeded":1,"subsequentPrePaidMinutes":8,"subsequentVerificationsNeeded":1,"allowRefunds":false,"downloadSpeed":1,"uploadSpeed":1,"proxy":[{"port":"8080/TCP","endpoint":"ec2-13-232-56-100.ap-south-1.compute.amazonaws.com"}],"vpn":[{}],"mSpeed":4.7,"mStability":4.7,"disable":false,"certificates":[{"id":0}],"certArray":[{"certContent":"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUZHRENDQXdDZ0F3SUJBZ0lKQUprZEUrVXRqZ2UxTUEwR0NTcUdTSWIzRFFFQkN3VUFNQmt4RnpBVkJnTlYKQkFNTURrbFVUbE5GWVhONVJHVndiRzk1TUI0WERURTRNRGN4T0RJeE1qVTFNMW9YRFRNNE1EY3hNekl4TWpVMQpNMW93R1RFWE1CVUdBMVVFQXd3T1NWUk9VMFZoYzNsRVpYQnNiM2t3Z2dJaU1BMEdDU3FHU0liM0RRRUJBUVVBCkE0SUNEd0F3Z2dJS0FvSUNBUUM4OXpnMWNMMmVCL0pOZ01LMVVneG5rc002Q3VZQXUzaWpDQ0VWVlJjUUpjODYKWG5IVlVnVldSK0Nsblg2TG1kcGQyd0h5ZWdkRXlNeXNmWUxxbjFsbThUTzJabkRrUHEraFVsdndQdlhhZ01jVAowWmIzOEZ5STMwWnBoOWx4aVVxcERxaEZDWmtjM1VYS2VYdi80VkFKTERWc0h0RDZaRC9nY1hCZi83OVlKakZNCk5xelkrS3gzaXFlalNRME9wNVBOZVZsalZScTcvd1dQTXlYNVN5TWZONjRySjhhUkh5aDBJQXJLdUYvcWZHbjkKMitXU3FHWmNYNGNnb1pBcnJYTFllbkY2YjgwTWtwMTVZMzdReWNOZ2E5Qkxsa1I0aDlDVHdzWTREMmRQNnNJVQordmpmWlkxbDdwNkswTVErcHJVSWZseTF3R29ya0ppNTFKa21IWGg2ZlNlS3UrVm9kclBmMHh5N24xQ09SeCtVCjFFdHdoZ2ZGejV6b0dkWE1DNnlSSXM1ZmZWdkpRM1lnL1p3Y2lua2hEYkp1Z0FTNkhkWVgweHFuYU0rMGVtdTIKQUlELzNOSWdhN09QckxaanNhK2tqclVKQ2MvUDF5UkNRMFZFYUJPenR1b2VHUStMVG03WjhncWZSbWZsekgvdgpSQTJGMTRUZGhsRm8xbGVjVzRpL0Q5TmU0Zk96aThIN0FpT1poNmFHRlNZQVdJVWptZzJGWEF2aUl1RGJoRm5PClZ1MHFlcXdVRC9TTEJkalZ1ZzZ1MmVDZDNubi9lQ1cvd1B2UzVtTngzRGc4c1pya0o5NEh4ZVIvYS9yVzArSUIKOS9PVnlwQzc3M0hiRGl5elpxaHNCVDNVZU41eVI5NWpGRzByT05Ub0dWb20wbURhbU5aaDlOTVVDTng3Q1FJRApBUUFCbzJNd1lUQWRCZ05WSFE0RUZnUVV3MWJzR0QwWi8yUHIxWFFoZkhRaTEyYzlhSlV3SHdZRFZSMGpCQmd3CkZvQVV3MWJzR0QwWi8yUHIxWFFoZkhRaTEyYzlhSlV3RHdZRFZSMFRBUUgvQkFVd0F3RUIvekFPQmdOVkhROEIKQWY4RUJBTUNBWVl3RFFZSktvWklodmNOQVFFTEJRQURnZ0lCQUJqMlZqSXRFVUtQOHlheVVxOFhpOElnbTFpVworakVLRG96enNjOHZSZFBTdzM4aHZnN1NhQzZlTHFkbkU3UnMrbTlnbWVvS1ZSWEFtN1llT0FlQVZ6SXUvbXBKClp0TFpuaW93ZlVrK1lLTDZLemtVaFgxeU45MUkycVQ2cUQ2QUx6ZjdScVdnVUl6OGluVXhreUEzR2NtYW90OGsKdE1JQ050MGFrSkJFWFltblJrQm5DUi9jb3YyR2xiTDN6R3ZjcEt3YjFTR1JiQk9MeEpTeUsycjZQYTBlemlIMwpjNXNHRnJQalVieWV5Sk5wT2VyZUlvaDdVUVRZUzFZSU9OMFdBU05RdG80NjRTRkkxcUVyVmdqaTBXdzZpVldKCmhkMyticTVMS2J1MXR4RElXc2E3alIxNlMyMEFzTDZBWEdJUzhjUGFkamJVMTE4T2xjMGlFUUl4eW9qVUVSK0MKeEVpNGluZ0podGNWQXRNSDZiK0ZSblFkd3QxcElxb29mazRUMXgzM3RRU0F4TFdZdzZoNmE5VWVxRFcrdDZHcgpaTGZ4N2dOclpKWTlSN1ZmdG9EYmswL3JqTE9UdmdZWUllMjMxVlJSeVJzTEhBRjFtc2YwbUVKc3BQemNqWVErCjVBYmY5QnMxemdtWk1LTGVDbzJlL2Mveks3Q3h1UFhaN1B6ZWJydWwyT09NYzVqNWVqREpUVU54MHB2U2phYkoKRFBpcGxrRVc1bXpKUTZGeFVlSHhySGVDaWNjaTZMWDNWOGdXUkRBOHJZMmgxZmNSWm5ZVkd1dU5VVEdhL0xoRApBM0JnSHphcDBXUFM1bVd3SHBKcm5HdWh0cU43R3FCU0hobzE2anRJWER3Qzh6U2hFSFJNeHM2U0JHNEc3dm5WCkhXTTZYQnBlSHNjWC9VcVkKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQ=="}]}}' https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/signature/get


exports.singVerify = function(req, res){
	var privateKey = SHA256(JSON.stringify(req.body.json))
	var key = ec.keyFromSecret(privateKey);

	//res.status(200).send(JSON.stringify({'privateKey': privateKey, 'sign': req.body.sign}))

	if(key.verify(req.body.json, req.body.sign)){
		res.status(200).send(true);
	}else{
		res.status(400).send(false);
	}
}

exports.singHeaderVerify = function(header){
	

	const makeRequest = async () => {
		var signingInput = await header.jws.substring(0, header.jws.indexOf("."));
		var signedPayload = await header.jws.substring(header.jws.indexOf(".") + 1, header.jws.lastIndexOf("."));

		console.log(signedPayload + " my data")
		signingInput = await utf8.decode(signingInput)
		signedPayload = await utf8.decode(signedPayload)

		console.log(signedPayload + " my decode")
		signedPayload = await URLSafeBase64.decode(signedPayload);
		console.log(signedPayload + " my url decode")
		var publicKey = await JSON.parse(signedPayload)
		var key = await ec.keyFromSecret(publicKey.provider.id)
		var signingInput = await key.sign(publicKey).toHex();
		if(await key.verify(publicKey, signingInput)){
			console.log('return true')
			return true
		}else{
			console.log('return false')
			return false
		}
	}
	makeRequest();
}