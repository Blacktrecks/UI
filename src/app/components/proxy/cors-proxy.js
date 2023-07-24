const cors_proxy = require('cors-anywhere');

// Configure CORS Anywhere
const host = '0.0.0.0';
const port = 8080;
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`CORS Anywhere is running on ${host}:${port}`);
});
