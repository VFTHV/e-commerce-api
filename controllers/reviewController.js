const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');
const Review = require('../models/Review');

const createReview = async (req, res) => {
  const { product } = req.body;

  if (!product) {
    throw new CustomError.BadRequestError('Product not found');
  }

  req.body.user = req.user.userId;

  const review = await Review.create({ review: req.body.review });

  res.status(StatusCodes.CREATED).json(req.body);
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
