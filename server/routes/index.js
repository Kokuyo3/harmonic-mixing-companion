const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  const scopes = 'streaming playlist-read-collaborative playlist-read-private user-read-private';
  const redirectUri = `http://localhost:${process.env.SERVER_PORT}/callback`;

  res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&show_dialog=true`);
});

router.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  res.redirect(`http://localhost:8000?code=${code}&state=${state}`);
});

module.exports = router;
