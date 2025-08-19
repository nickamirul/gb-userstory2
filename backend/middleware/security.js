const helmet = require('helmet');
const cors = require('cors');

// Helmet security middleware configuration for setting security headers
const helmetMiddleware = helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
});

// CORS middleware configuration for handling cross-origin requests
const corsMiddleware = cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

module.exports = {
  helmetMiddleware,
  corsMiddleware
};
