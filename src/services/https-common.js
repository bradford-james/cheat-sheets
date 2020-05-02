const axios = require('axios');

module.exports = axios.create({
  // baseURL: process.env.PRODUCTION_CORS_URL || 'http://localhost:8080/api',
  baseURL: 'https://cheat-sheets-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
