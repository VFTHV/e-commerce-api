const getAllUsers = (req, res) => {
  res.send('GetAllUsers');
  console.log('GetAllUsers');
};

const getSingleUser = (req, res) => {
  res.send('getSingleUser');
  console.log('getSingleUser');
};

const showCurrentUser = (req, res) => {
  res.send('showCurrentUse');
  console.log('showCurrentUse');
};

const updateUser = (req, res) => {
  res.send('updateUser');
  console.log('updateUser');
};

const updateUserPassword = (req, res) => {
  res.send('updateUserPassword');
  console.log('updateUserPassword');
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
