const express = require('express');
const SpotifyApiController = require('../controllers/SpotifyApiController');

const router = express.Router();

router.get('/track/:id', (req, res) => {
  SpotifyApiController.getTrack(req.params.id).then((trackData) => { res.json(trackData); })
    .catch((error) => { console.log(error); });
});

router.get('/search', (req, res) => {
  SpotifyApiController.search(req.query.q, req.query.type, req.query.market, req.query.limit)
    .then((results) => { res.json(results); })
    .catch((error) => { console.log(error); });
});

router.get('/track-features/:id', (req, res) => {
  SpotifyApiController.getTrackFeatures(req.params.id)
    .then((trackFeaturesData) => { res.json(trackFeaturesData); })
    .catch((error) => { console.log(error); });
});

module.exports = router;
