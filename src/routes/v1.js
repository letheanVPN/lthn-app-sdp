const express = require('express');
const router = express.Router();
const apicache = require('apicache');
let cache = apicache.middleware;
const serviceRoutes = require('./v1/services')
const favoriteRoutes = require('./v1/favorite')
const feedbackRoutes = require('./v1/feedback')
// set up rate limiter: maximum of five requests per minute
let RateLimit = require('express-rate-limit');
var limiter = RateLimit.rateLimit({
    windowMs: 1*60*1000, // 1 minute
    max: 5
});

// apply rate limiter to all requests
router.use(limiter);

router.use('/services', serviceRoutes)
router.use('/favorite', favoriteRoutes)
router.use('/feedback', feedbackRoutes)


const signPostController = require('../controllers/hash/get');
const providerSincController = require('../controllers/provider/sinc');



const CACHE_SWITCH = process.env.CACHE === 'true';
const CACHE_TIME = CACHE_SWITCH ? process.env.CACHE_TIME : "0";
const CACHE_VISIBILITY = process.env.CACHE_VISIBILITY === 'true';
// cache only if settings are active to save responses in cache
const onlyActiveCache = (req, res) => (CACHE_SWITCH === true && res.statusCode === 200);
const cacheSuccesses = cache(CACHE_TIME + ' minutes', onlyActiveCache);

// Sinc providers from old structure
router.get('sinc/provider', providerSincController.provider_sinc);
// POST request for check sign.
router.post('signature/get', signPostController.singVerify);
// show cache if enabled in the config
router.get( '/cache/index', (req, res) => {
    console.log("Cache visibility is " + CACHE_VISIBILITY);
    if (!CACHE_VISIBILITY) {
        res.status(404).json({ error: "Cache Index not found" });
    }
    else {
        res.json(apicache.getIndex());
    }
});
console.log("Caching is " + CACHE_SWITCH + " " + CACHE_TIME + " MINUTES");


module.exports = router;






