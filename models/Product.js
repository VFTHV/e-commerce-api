const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    image: { type: String, default: '/uploads/example.jpeg' },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: ['office', 'kitchen', 'bedroom'],
    },
    company: {
      type: String,
      required: [true, 'Please provide company'],
      enum: {
        values: ['ikea', 'liddy', 'marcos'],
        message: '{VALUE} is not supported',
      },
    },
    colors: { type: [String], default: ['#222'], required: true },
    featured: { type: Boolean, default: false },
    freeShipping: { type: Boolean, default: false },
    inventory: { type: Number, required: true, default: 15 },
    averageRating: { type: Number, default: 0 },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// virtual properties that don't exist but extracted by logics
ProductSchema.virtual(
  'reviews', // property created in .populate method
  {
    ref: 'Review', // referencing Review model
    foreignField: 'product', // referencing field in Review model
    localField: '_id', // referencing field in current model
    justOne: false,
  }
);
// productSchema pre

ProductSchema.pre('remove', async function (next) {
  try {
    await this.model('Review').deleteMany({ product: this._id });
  } catch (error) {
    console.log(error);
  }
});

module.exports = mongoose.model('Product', ProductSchema);
