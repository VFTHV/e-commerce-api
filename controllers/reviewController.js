const Review = require('../models/Review');
const Product = require('../models/Product');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');
const { checkPermissions } = require('../utils');

const createReview = async (req, res) => {
  const { product: productId } = req.body;

  const isValidProduct = await Product.findOne({ _id: productId });

  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id ${productId}`);
  }

  req.body.user = req.user.userId;
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
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
