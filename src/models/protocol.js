var ProtocolValidator = require('jsonschema').Validator;
var protocolV = new ProtocolValidator();
 
var protocolSchema = {
  id: '/Protocol',
  type: 'object',
  properties: {
    protocolVersion: {type: 'number', minimum: 1, maximum: 10, description: 'Protocol Version'}
  },
  required: ['protocolVersion'],
  additionalItems: false
};

// If results.errors is an empty array, then this validated successfully.
exports.protocolCheckSchema = function(prot){
  //console.log(prot)
  if(protocolV.validate(prot, protocolSchema).errors.length === 0){
    //console.log('TRUEEEEEE protocol')
    return true
  }else{
    //console.log('FALSEEEE protocol')
    return protocolV.validate(prot, protocolSchema).errors
  }
};

        