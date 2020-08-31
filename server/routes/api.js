const express = require('express');
const querystring = require('querystring');
const SpotifyApiController = require('../controllers/SpotifyApiController');

const router = express.Router();

router.get('/getTrack/:id', (req, res) => {
  SpotifyApiController.getTrack(req.params.id).then((trackData) => { res.json(trackData); })
    .catch((error) => { console.log(error); });
});

module.exports = router;
