const express = require('express');
const router = express.Router();


const favoritePostController = require('../../controllers/favorite/post');
const favoriteGetController = require('../../controllers/favorite/get');

/**
 * @swagger
 * /v1/favorite/ServicesChecked/add:
 *   post:
 *     tags:
 *       - favorite
 *     summary: Services List.
 *     description: Retrieve a list of VPN services.
 */
router.post('ServicesChecked/add', favoritePostController.favorite_add);

/**
 * @swagger
 * /v1/favorite/ServicesChecked/remove:
 *   post:
 *     tags:
 *       - favorite
 *     summary: Services List.
 *     description: Retrieve a list of VPN services.
 */
router.post('ServicesChecked/remove', favoritePostController.favorite_remove);

/**
 * @swagger
 * /v1/favorite/ServicesChecked/get/{client}:
 *   get:
 *     tags:
 *       - favorite
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
router.get('ServicesChecked/get/:client', favoriteGetController.favorite_get);

module.exports = router;
