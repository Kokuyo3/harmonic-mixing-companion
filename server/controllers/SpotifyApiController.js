import SpotifyApiService from '../services/SpotifyApiService.mjs';
// const SpotifyApiService = require('../services/SpotifyApiService.mjs');
// const handleHttpError = require('../handlers/handleHttpError');
import handleHttpError from '../handlers/handleHttpError';

class SpotifyApiController {
  constructor(spotifyApiService) {
    this.spotifyApi = spotifyApiService;
  }

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
      handleHttpError(error);

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
      });

      parsedData.items = parsedData.items.map((item) => (
        { ...item, features: featuresMap.get(item.id) }
      ));

      return parsedData;
    } catch (error) {
      handleHttpError(error);

      return null;
    }
  };

  getTrack = async (trackId) => {
    try {
      const response = await this.spotifyApi.get(`/tracks/${trackId}`);

      return await response.data;
    } catch (error) {
      handleHttpError(error);

      return null;
    }
  };
}

module.exports = new SpotifyApiController(SpotifyApiService);
