const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  jwt.sign(payload, procss.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

module.exports = createJWT;
