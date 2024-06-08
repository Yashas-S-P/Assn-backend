const jwt = require('jsonwebtoken');

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
