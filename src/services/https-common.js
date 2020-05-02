const axios = require('axios');

const resourceURL =
  process.env.NODE_ENV == 'production'
    ? process.env.VUE_APP_PRODUCTION_CORS_URL
    : 'http://localhost:8080/api';

module.exports = axios.create({
  baseURL: resourceURL,
  headers: {
    'Content-type': 'application/json',
  },
});
