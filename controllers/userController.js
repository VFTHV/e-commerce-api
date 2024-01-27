const getAllUsers = async (req, res) => {
  res.send('GetAllUsers');
  console.log('GetAllUsers');
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
  res.send('updateUser');
  console.log('updateUser');
};

const updateUserPassword = async (req, res) => {
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
