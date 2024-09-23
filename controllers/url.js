const crypto = require('crypto');
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
    const shortId = crypto.randomBytes(4).toString('hex');
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: 'url is required' });

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    });

    return res.json({ id: shortId });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId: shortId });

    if (!result) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    return res.json({ 
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = { handleGenerateNewShortUrl, handleGetAnalytics }; // Ensure both are exported
