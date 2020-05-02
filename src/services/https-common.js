const axios = require('axios');

const resourceURL =
  process.env.NODE_ENV == 'production'
    ? process.env.PRODUCTION_CORS_URL
    : 'http://localhost:8080/api';

module.exports = axios.create({
  baseURL: resourceURL,
  // baseURL: 'https://cheat-sheets-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
