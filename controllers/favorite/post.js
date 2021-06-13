const AWS = require('aws-sdk');

// Require controller modules.
var favoriteMiddlewareController = require('../../middleware/favorite');


//curl -H "Content-Type: application/json" -X POST -d '{"services":"2C", "provider":"ea29a26650aaa58f5106f46892568c9bea29a26650aaa58f5106f46892568c9b", "client":"iz45vcxKLtwg5oh228BZdMLLu1bTjZtQdTifKcjXE1bWGkFrtzmNfsE5DAKfC9CyPRSfxyeTjgLaDRWis3qf7sUR21VezCRaN"}' https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/servicesChecked/add

//curl -H "Content-Type: application/json" -X POST -d '{"uuid":"3a4b5620-9a7f-11e8-ba1a-6d72f51797d8"}' https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/servicesChecked/remove


exports.favorite_add = function(req, res) {
	favoriteMiddlewareController.favoriteAdd_middleware_controller(req.body.services, req.body.provider, req.body.client)
};


exports.favorite_remove = function(req, res) {
	favoriteMiddlewareController.favoriteRemove_middleware_controller(req.body.uuid)
};







