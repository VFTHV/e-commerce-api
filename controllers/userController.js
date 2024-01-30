const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'uuser' });

  if (!users.length) {
    throw new CustomError.NotFoundError('Nothing found');
  }

  const usersNoPassword = users.map((user) => {
    const { _id, name, email, role } = user;
    return { _id, name, email, role };
    // return { ...user, password: 'hidden' };
  });

  res.status(StatusCodes.OK).send({ users: usersNoPassword });
};

const getSingleUser = async (req, res) => {
  res.send('getSingleUser');
  console.log(req.params);
};

const showCurrentUser = async (req, res) => {
  res.send('showCurrentUse');
  console.log('showCurrentUse');
};

const updateUser = async (req, res) => {
  res.send(req.body);
  console.log('updateUser');
};

const updateUserPassword = async (req, res) => {
  res.send(req.body);
  console.log('updateUserPassword');
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
