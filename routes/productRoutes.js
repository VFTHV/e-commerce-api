const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/productController');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

router.post(
  '/createProduct',
  authenticateUser,
  authorizePermissions('admin'),
  createProduct
);
router.get('/getAllProducts', getAllProducts);
router.post(
  '/uploadImage',
  authenticateUser,
  authorizePermissions('admin'),
  uploadImage
);
router
  .route('/:id')
  .all(authenticateUser, authorizePermissions('admin'))
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
