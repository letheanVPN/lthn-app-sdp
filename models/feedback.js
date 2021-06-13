var FeedbackValidator = require('jsonschema').Validator;
var feedbackV = new FeedbackValidator();
 
var feedbackSchema = {
  id: '/Feedback',
  type: 'object',
  properties: {
    //id: {type: 'string', maxLength:97, minLength:97, description: 'User ID', pattern: 'iz[a-zA-Z0-9]'},
    //provider: { type: 'string', minLength: 64, maxLength:64, description: 'Provider ID', pattern:'[A-Za-z0-9+/=!@#$&:;.,{}]'},
    //services: {type: 'string', maxLength: 2, minLength: 2, description: 'Services ID', pattern: '[0-9A-F]{1}[1-9A-F]{1}'},
    speed: {type:'number', minimum: 0, maximum: 5, description: "Feedback-Speed - [0-5]", pattern: '[0-5]{1}'},
    stability: {type:'number', minimum: 0, maximum: 5, description: "Feedback-Stability- [0-5]", pattern: '[0-5]{1}'}  
  },
  required: ['speed', 'stability'],
  additionalItems: false
};

// If results.errors is an empty array, then this validated successfully.
exports.feedbackCheckSchema = function(feedback){
  //console.log(prot)
  if(feedbackV.validate(feedback, feedbackSchema).errors.length === 0){
    //console.log('TRUEEEEEE protocol')
    return true
  }else{
    //console.log('FALSEEEE protocol')
    return feedbackV.validate(feedback, feedbackSchema).errors
  }
};

        