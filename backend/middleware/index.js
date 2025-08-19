const { helmetMiddleware, corsMiddleware } = require('./security');
const { requestLogger } = require('./logging');
const { errorHandler, notFoundHandler } = require('./errorHandler');

module.exports = {
  helmetMiddleware,
  corsMiddleware,
  requestLogger,
  errorHandler,
  notFoundHandler
};
