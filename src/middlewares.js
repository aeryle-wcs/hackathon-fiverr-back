const jwt = require('jsonwebtoken');

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

function authenticateJWT(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    res.status(403);

    return next(new Error('Missing token.'));
  }

  return jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return next(new Error(err.message));
    }

    req.user = user;

    return next();
  });
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
}

module.exports = {
  notFound,
  errorHandler,
  authenticateJWT
};
