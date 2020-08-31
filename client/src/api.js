import axios from '../../node_modules/axios';

export default axios.create({
  baseURL: process.env.SERVER_URL,
});
