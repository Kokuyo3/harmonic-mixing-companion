import axios from 'axios';
import querystring from 'querystring';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import handleHttpError from '../handlers/handleHttpError';

/**
 * Set the time interval for refreshing the access token. Refresh interval is set with
 * a 10 second buffer period to avoid downtime, then converted to milliseconds.
 *
 * @param time the time in seconds between refreshing authorization
 */
const calculateRefreshInterval = (time) => {
  this.tokenRefreshInterval = (time - 10) * 1000;
};

const authorizeApp = async () => {
  const authHeader = `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
    .toString('base64')}`;

  const options = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: { Authorization: authHeader },
    data: querystring.encode({ grant_type: 'client_credentials' }),
  };

  try {
    const { data } = await axios(options);

    return data.access_token;
  } catch (error) {
    handleHttpError(error);

    return null;
  }
};

const createApiService = async () => {
  const accessToken = await authorizeApp();

  console.log(accessToken);

  const authHeader = { Authorization: `Bearer ${accessToken}` };

  const axiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: authHeader,
  });

  createAuthRefreshInterceptor(axiosInstance, authorizeApp);

  return axiosInstance;
};

const SpotifyApiService = await createApiService();

export default SpotifyApiService;
