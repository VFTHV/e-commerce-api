const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please provide rating'],
    },
    title: {
      type: String,
      trim: true,
      required: [true, 'Please provide review title'],
      maxlength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema);
