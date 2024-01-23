const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError(`Email already exists`);
  }

  // first registered user is an admin

  const isFirstAccount = (await User.countDocuments({})) === 0;
  let role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ email, name, password, role });
  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  const token = jwt.sign(tokenUser, 'jwtSecret', {
    expiresIn: '1d',
  });

  res.status(StatusCodes.CREATED).send({ user: tokenUser, token });
};

const login = async (req, res) => {
  console.log(req.body);
  res.send('login controller');
};

const logout = async (req, res) => {
  console.log(req.body);
  res.send('logout controller');
};

module.exports = { register, login, logout };
