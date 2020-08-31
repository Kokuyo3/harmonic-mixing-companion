const express = require('express');
const querystring = require('querystring');

const router = express.Router();

router.get('/spotify', (req, res) => {
  const scopes = querystring.encode('streaming playlist-read-collaborative playlist-read-private user-read-private');
  const redirectUri = querystring.encode(`${process.env.SERVER_URL}/auth/callback`);

  res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`);
});

router.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  res.redirect(`${process.env.CLIENT_URL}?code=${code}&state=${state}`);
});

module.exports = router;
