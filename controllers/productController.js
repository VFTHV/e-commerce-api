const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;

  if (!req.body) {
    throw new CustomError.BadRequestError('Please provide product details');
  }

  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  res.send('getAllProducts');
};

const getSingleProduct = async (req, res) => {
  res.send({ id: req.params.id, msg: 'getSingleProduct' });
};

const updateProduct = async (req, res) => {
  res.send({ id: req.params.id, msg: 'updateProduct' });
};

const deleteProduct = async (req, res) => {
  res.send({ id: req.params.id, msg: 'deleteProduct' });
};

const uploadImage = async (req, res) => {
  res.send('uploadImage');
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
