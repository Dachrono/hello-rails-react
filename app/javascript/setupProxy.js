// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/geetings/api', // Cambia '/api' por la ruta de tu API en Rails
    createProxyMiddleware({
      target: 'http://localhost:3000', // Cambia por la URL de tu servidor Rails
      changeOrigin: true,
    })
  );
};
