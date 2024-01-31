const CustomAPIError = require('./custom-api');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./not-found');
const BadRequestError = require('./bad-request');
const UnauthorizedError = require('./unauthorized');
module.exports = {
  CustomAPIError,
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
};
