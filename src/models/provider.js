var ProviderValidator = require('jsonschema').Validator;
var providerV = new ProviderValidator();
 
var providerSchema = {
  id: '/Provider',
  type: 'object',
  properties: {
    id: { type: 'string', minLength: 64, maxLength:64, description: 'ID of the Provider', pattern:'[A-F0-9+/=]'},
    nodeType: { type: 'string', enum: ['residential', 'commercial', 'government'], description: 'Node Type' },
    name: { type: 'string', maxLength:16, description: 'Name of the Provider', pattern: '^[a-zA-Z0-9 ,.-_]+$' },
    certificates: {
      type: 'array',
      description: 'Base 64 encoded certificate content',
      properties:{
            content:{type: 'string', description: 'Base 64 encoded', pattern: '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'},
            id:{type: 'number'},
            //certificates:{type: 'array', description: 'Base 64 encoded strings of certificates for Proxy service only', pattern: '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'},
            //cn: {type: 'string', description: 'Common name of certificates', pattern:"[a-zA-z .]"}
      }

    },
    wallet: {type: 'string', maxLength:97, minLength:97, description: 'Wallet address', pattern: 'iz[a-zA-Z0-9]'},
    terms: {type: 'string', maxLength: 50000, description: 'Terms of the Provider as a whole', pattern: "[:print:]"}
  },
  required: ['id', 'nodeType', 'name', 'certificates', 'wallet', 'terms'],
  additionalItems: false
};

exports.providerCheckSchema = function(prov){
  if(providerV.validate(prov, providerSchema).errors.length === 0){
    return true
  }else{
    return providerV.validate(prov, providerSchema).errors
  }
};

