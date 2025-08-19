const express = require('express');
const currencyRoutes = require('./routes/currency');
const {
  helmetMiddleware,
  corsMiddleware,
  requestLogger,
  errorHandler,
  notFoundHandler
} = require('./middleware');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware setup for security, CORS, and request parsing
app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware for debugging and monitoring
app.use(requestLogger);

// Main API routes for currency data operations
app.use('/api/v1/currency', currencyRoutes);

// Test endpoint for server health check and debugging
app.get('/test', (req, res) => {
  res.status(200).json({ 
    message: 'Test endpoint working',
    timestamp: new Date().toISOString(),
    headers: req.headers
  });
});

// Global error handling middleware to catch and format errors
app.use(errorHandler);

// 404 handler for unmatched routes
app.use('*', notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/test`);
  console.log(`API endpoint: http://localhost:${PORT}/api/v1/currency`);
});

module.exports = app;
