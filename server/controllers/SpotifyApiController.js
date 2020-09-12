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
    }).catch((error) => {
      console.error(error);
    });
  }

  authorizeApp = async () => {
    const authHeader = `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
      .toString('base64')}`;

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

  search = async (q, type = 'track', market = 'US', limit = '20') => {
    try {
      const { data: { tracks } } = await this.spotifyApi.get('/search', {
        params: {
          q,
          type,
          market,
          limit,
        },
      });

      const itemIds = [];

      const parsedData = {
        href: tracks.href,
        next: tracks.next,
        previous: tracks.previous,
        offset: tracks.offset,
        total: tracks.total,
        items: [],
      };

      tracks.items.forEach((item) => {
        if (item.type === 'track') {
          itemIds.push(item.id);

          parsedData.items.push({
            albumId: item.album.id,
            albumArtUrl: item.album.images[1].url,
            albumName: item.album.name,
            artists: item.artists,
            id: item.id,
            name: item.name,
          });
        } else {
          throw new Error(`Unhandled search result item type: ${item.type}\n\t${item}`);
        }
      });

      const { data: { audio_features: audioFeatures } } = await this.spotifyApi.get('/audio-features',
        { params: { ids: itemIds.join(',') } });

      const featuresMap = new Map();

      audioFeatures.forEach((trackFeature) => {
        featuresMap.set(trackFeature.id, {
          danceability: trackFeature.danceability,
          energy: trackFeature.energy,
          key: trackFeature.key,
          mode: trackFeature.mode,
          instrumentalness: trackFeature.instrumentalness,
          valence: trackFeature.valence,
          tempo: trackFeature.tempo,
          duration: trackFeature.duration_ms,
        });

        parsedData.items = parsedData.items.map((item) => (
          { ...item, features: featuresMap.get(item.id) }
        ));
      });

      return parsedData;
    } catch (error) {
      this.handleHttpError(error);

      return null;
    }
  };

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
      const { data } = await this.spotifyApi.get(`/audio-features/${trackId}`);

      return {
        danceability: data.danceability,
        energy: data.energy,
        key: data.key,
        mode: data.mode,
        instrumentalness: data.instrumentalness,
        valence: data.valence,
        tempo: data.tempo,
        duration: data.duration_ms,
      };
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
