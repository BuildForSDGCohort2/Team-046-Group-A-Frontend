const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://farmconnect-backend/',
      changeOrigin: true,
    })
  );
};