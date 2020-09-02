const querystring = require('querystring');
const axios = require('../../node_modules/axios');

class SpotifyApiController {
  constructor() {
    this.authHeader = null;
    this.accessToken = null;
    this.spotifyApi = null;

    this.authorizeApp().then((accessToken) => {
      this.setAccessToken(accessToken);
      this.setAuthHeader({ Authorization: `Bearer ${this.accessToken}` });
      this.spotifyApi = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: this.authHeader,
      });

      console.log(this.authHeader); // TODO: remove
    }).catch((error) => {
      console.error(error);
    });
  }

  getTrack = async (trackId) => {
    try {
      const response = await this.spotifyApi.get(`/tracks/${trackId}`);

      return await response.data;
    } catch (error) {
      this.handleHttpError(error);

      return null;
    }
  };

  getTrackFeatures = async (trackId) => {
    try {
      const response = await this.spotifyApi.get(`/audio-features/${trackId}`);

      return {
        key: response.data.key,
        mode: response.data.mode,
        danceability: response.data.danceability,
        energy: response.data.energy,
        tempo: response.data.tempo,
        id: response.data.id,
      };
    } catch (error) {
      this.handleHttpError(error);

      return null;
    }
  }

  search = async (q, type = 'track', market = 'US', limit = '15') => {
    try {
      const response = await this.spotifyApi.get('/search', {
        params: {
          q,
          type,
          market,
          limit,
        },
      });

      return await response.data;
    } catch (error) {
      this.handleHttpError(error);

      return null;
    }
  }

  authorizeApp = async () => {
    const authHeader = `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`;

    const options = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: { Authorization: authHeader },
      data: querystring.encode({ grant_type: 'client_credentials' }),
    };

    try {
      const response = await axios(options);

      return response.data.access_token;
    } catch (error) {
      this.handleHttpError(error);

      return null;
    }
  };

  setAccessToken = (token) => {
    this.accessToken = token;
  };

  setAuthHeader = (authHeader) => {
    this.authHeader = authHeader;
  };

  handleHttpError = (error) => {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
  };
}

module.exports = new SpotifyApiController();
