const express = require('express');
const router = express.Router();

const feedbackSetupController = require('../../controllers/feedback/setup');
const feedbackPostController = require('../../controllers/feedback/post');
const feedbackGetController = require('../../controllers/feedback/get');
const statsController = require('../../controllers/stats/getFeedbacks');


// POST request for creating Services.
router.post('/add', feedbackPostController.feedback_post);
// POST request for creating Services.
router.post('/setup', feedbackSetupController.feedback_setup);

/**
 * @swagger
 * /v1/feedback/get/{client}/{id}:
 *   get:
 *     tags:
 *       - feedback
 *     summary: Services List.
 *     description: Retrieve a list of VPN services.
 *     parameters:
 *       - in: path
 *         name: client
 *         required: false
 *         description: Numeric ID of the Provider to retrieve.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: id
 *         required: false
 *         description: Numeric ID of the Provider to retrieve.
 *         schema:
 *           type: integer
 */
router.get('/get/:client/:id', feedbackGetController.feedback_get);

/**
 * @swagger
 * /v1/stats/feedbacks:
 *   get:
 *     tags:
 *       - feedback
 *     summary: Services List.
 *     description: Retrieve a list of VPN services.
 */
router.get( '/stats/feedbacks', statsController.feedbacks_get);

module.exports = router;
