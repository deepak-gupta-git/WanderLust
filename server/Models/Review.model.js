// models/Review.model.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  // listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  user: { type: String, required: true }, // You can change this to store user data like user ID if needed
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// reviewSchema.pre('find', function() {
//     this.populate('listingId');
// });  

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
