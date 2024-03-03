const createReview = async (req, res) => {
  res.send(req.body);
};
const getAllReviews = async (req, res) => {
  res.send('getAllReviews');
};
const getSingleReview = async (req, res) => {
  console.log(req.params);
  res.send('getSingleReview');
};
const updateReview = async (req, res) => {
  console.log(req.params);
  res.send('updateReview');
};
const deleteReview = async (req, res) => {
  console.log(req.params);
  res.send('deleteReview');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
