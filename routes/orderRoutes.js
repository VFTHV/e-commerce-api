const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require('../controllers/orderController');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

router
  .route('/getAllOrders')
  .get(authenticateUser, authorizePermissions('admim'), getAllOrders);

router.route('/showAllMyOrders').get(getCurrentUserOrders);
router
  .route('/:id')
  .get(authenticateUser, getSingleOrder)
  .post(authenticateUser, createOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
