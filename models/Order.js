const mongoose = require('mongoose');

const SingleCartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  name: { type: String, required: true },
  name: { type: String, required: true },
  name: { type: String, required: true },
});

const OrderSchema = new mongoose.Schema(
  {
    tax: { type: Number, required: true },
    shippingFee: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    cartItems: [],
    status: {
      type: String,
      enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
      default: 'pending',
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    paymentIntentId: {
      type: String,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model('Order', OrderSchema);
