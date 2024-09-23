const express = require('express');
const { handleGenerateNewShortUrl, handleGetAnalytics } = require("../controllers/url"); // Ensure correct import
const router = express.Router();

router.post('/', handleGenerateNewShortUrl);
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;  // Export the router directly
