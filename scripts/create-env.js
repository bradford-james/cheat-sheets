const fs = require('fs');
fs.writeFileSync(
  './.env',
  `PRODUCTION_CORS_URL=${process.env.PRODUCTION_CORS_URL}\n`
);
