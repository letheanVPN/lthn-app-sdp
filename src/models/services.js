var ServicesValidator = require('jsonschema').Validator;
var servicesV = new ServicesValidator();

var servicesSchema = {
  id: '/Services',
  type: 'object',
  properties:{
    services:{
      type: 'array',
      items:{
      properties:{
        id: {type: 'string', maxLength: 2, minLength: 2, description: 'ID of the service', pattern: '[0-9A-F]{1}[0-9A-F]{1}'},
        name: {type: 'string', maxLength: 32, description: 'Name of the service', pattern: '^[a-zA-Z0-9 ,.-_]+$'},
        type: {type: 'string', enum: ['vpn', 'proxy'], description: 'Type of the service'},
        cost: {type: 'string', maxLength: 14, description: 'Per minute Cost of the service', pattern: '([0-9]{1,5}|[.]{1}[0-9]{1,8})'},
        firstPrePaidMinutes: {type: 'integer', minimum: 10, maximum: 1440, description: 'Amount of pre-paid minutes for first payment'},
        firstVerificationsNeeded: {type: 'integer', minimum: 0, maximum: 2, description: 'Number of verifications needed for first payment', default: 1},
        subsequentPrePaidMinutes: {type: 'integer', minimum: 10, maximum: 1440, description: 'Amount of pre-paid minutes for subsequent payments', default: 10},
        subsequentVerificationsNeeded: {type: 'integer', minimum: 0, maximum: 1, default: 0, description: 'Number of verifications needed for subsequent payments'},
        allowRefunds: {type: 'boolean', default: false, description: 'Whether or not refunds are allowed'},
        downloadSpeed: {type: 'number', minimum: 0, maximum: 99999999999, default: 0,description: 'Service download speed in Mbits'},
        uploadSpeed: {type: 'number', minimum: 0, maximum: 99999999999, default: 0, description: 'Service upload speed in Mbits'},
        proxy:{
          type: 'array',
          description: 'array containing Proxy related settings. only available if service is of type proxy, null otherwise',
          properties:{
            endpoint:{type: 'string', description: 'IP Address of endpoints for Proxy service only', pattern: '/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))|(^\s*((?=.{1,255}$)(?=.*[A-Za-z].*)[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?)*)\s*$)/'},
            port:{type: 'string', pattern: '^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])\/([tT][cC][pP]|[uU][dD][pP])$'},
            terms: {type: 'string', description: 'Terms for the service', pattern:"[:print:]"},
            policy: {type: 'array', description: 'a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server'},
        
            dependencies: {'ip': ['port'], 'port': ['ip']},
          }
        },
        vpn:{
          type: 'array',
          description: 'array containing VPN related settings. only available if service is of type vpn, null otherwise',
          properties:{
            endpoint:{type: 'string', description: 'IP Addresses of endpoints for VPN service only', pattern: '/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))|(^\s*((?=.{1,255}$)(?=.*[A-Za-z].*)[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|\b-){0,61}[0-9A-Za-z])?)*)\s*$)/'},
            port:{type: 'string', pattern: '^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])\/([tT][cC][pP]|[uU][dD][pP])$'} ,
            parameters: {type: 'string', description: 'mtu size parameter for vpn service only'},
            terms: {type: 'string', description: 'Terms for the service', pattern:"[:print:]"},
            policy: {type: 'array', description: 'a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server'},

          },
          dependencies: {'ip': ['port'], 'port': ['ip']},
        },
        validity:{
          type: 'object',
          properties:{
            from:{type:'string', format:'date-time', description:"YYYY-MM-DDT00:00:00Z"},
            to:{type:'string', format:'date-time', description:"YYYY-MM-DDT00:00:00Z"},
          }
        },
        disable:{type:'boolean', default: false, description:'disable or not the service'},
        certificates:{
          type: 'array',
          description: 'inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level.',
          properties:{
            id:{type: 'number', description: 'ID only'},
          }
        },
      },

      required: ['id', 'name', 'type', 'cost', 'downloadSpeed', 'uploadSpeed', 'disable'],
      additionalItems: false
      }
    }
    
  }
};
 
// If results.errors is an empty array, then this validated successfully.
exports.servicesCheckSchema = function(serv){
  if(servicesV.validate(serv, servicesSchema).errors.length === 0){
    return true
  }else{
    return servicesV.validate(serv, servicesSchema).errors
  }
};

