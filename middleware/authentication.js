const CustomError = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    console.log(error);
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const authorizePermissions = (req, res, next) => {
  const { role } = req.user;
  console.log(req.user);

  if (role !== 'admin') {
    throw new CustomError.UnauthenticatedError(
      'Unauthorized to use this route'
    );
  }
  next();
};

module.exports = { authenticateUser, authorizePermissions };
