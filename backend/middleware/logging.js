// Request logging middleware for debugging and monitoring requests
const requestLogger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
};

module.exports = {
  requestLogger
};
