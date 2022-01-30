const express = require('express');
const router = express.Router();

const servicesGetController = require('../../controllers/services/get');
const servicesPostController = require('../../controllers/services/post');

/**
 * @swagger
 * /v1/services/search:
 *   get:
 *     tags:
 *       - services
 *     summary: Services List.
 *     description: Retrieve a list of VPN services.
 */
router.get('/search', servicesGetController.servicesSearch_get)

/**
 * @swagger
 * /v1/services/search/{client}:
 *   get:
 *     tags:
 *       - services
 *     summary: Return provider details.
 *     description: Retrieve a list of VPN services.
 *     parameters:
 *       - in: path
 *         name: client
 *         required: false
 *         description: Numeric ID of the Provider to retrieve.
 *         schema:
 *           type: integer
 */
router.get('/search/:client', servicesGetController.provider_get);

/**
 * @swagger
 * /v1/services/add:
 *   post:
 *     tags:
 *       - services
 *     summary: Register a Service.
 *     description: Add a service to the market place.
 */
router.post('/add', servicesPostController.services_post);

module.exports = router;
