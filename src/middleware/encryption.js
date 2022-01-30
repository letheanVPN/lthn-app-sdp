
// returns a header from the given body
exports.generateHeader = function(body) {

  console.log("Generating header for response");

  // get configuration private and public keys
  var publicKey = process.env.ENCRYPTION_PUBLIC_KEY;
  var privateKey = process.env.ENCRYPTION_PRIVATE_KEY;

  var EdDSA = require('elliptic').eddsa;

  // Create and initialize EdDSA context
  var encryptionContext = new EdDSA('ed25519');

  var privateKeyHex = privateKey.toString('hex');
  var publicKeyHex = publicKey.toString('hex');

  // Create key pair from secret
  var key = encryptionContext.keyFromSecret(privateKeyHex); // hex string, array or Buffer
  var bodyString = JSON.stringify(body);

  var jsonResponseEncoded = Buffer.from(bodyString);

  // Sign the message's hash (input must be an array, or a hex-string)
  var signature = key.sign(jsonResponseEncoded);
  var signatureHex = signature.toHex();

  // Verify signature
  //console.log("Verifying signature using private key");
  //console.log(key.verify(jsonResponseEncoded, signatureHex));

  // CHECK WITH NO PRIVATE KEY

  // Import public key
  var key = encryptionContext.keyFromPublic(publicKey, 'hex');
  // Verify signature
  console.log("Verifying signature using public key");
  console.log(key.verify(jsonResponseEncoded, signatureHex));

  var headerAlgo = '{"alg":"EdDSA"}';
  var header = Buffer.from(headerAlgo).toString('base64') + ".";

  // if enabled in the config, append the body to the header
  if (process.env.ENCRYPTION_RETURN_BODY) {
    header += Buffer.from(jsonResponseEncoded) + ".";
  }

  header += Buffer.from(signatureHex);

  console.log("signature ==> " + header);
  console.log("body ==> " + jsonResponseEncoded);

  return header;
};
