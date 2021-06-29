const jwt = require('jsonwebtoken');

/**
 *
 * @param {object} payload - The payload to transform into a token
 * @param {string} payload.pseudo - The username
 * @param {string} payload.email - The email
 * @param  {'OFFLINE' | 'BUSY' | 'ONLINE'}payload.status - The status
 * @param  {string}payload.job - The job
 * @returns {string} Signed JWT
 */
function generateJWT(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: '5m',
  });
}

module.exports = generateJWT;
