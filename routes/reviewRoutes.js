const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

router
  .route('/createReview')
  .post(authenticateUser, authorizePermissions('user'), createReview);

router.route('/getAllReviews').get(getAllReviews);
router.route('/getSingleReview').get(getSingleReview);
router
  .route('/updateReview')
  .patch(authenticateUser, authorizePermissions('user'), updateReview);

router
  .route('/deleteReview')
  .delete(authenticateUser, authorizePermissions('user'), deleteReview);

module.exports = router;
