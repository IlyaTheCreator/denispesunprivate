import defaultAxios from 'axios';
import { BASE_URL } from '../constants/api.js';

const axios = defaultAxios.create({
  baseURL: BASE_URL,
});

axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios