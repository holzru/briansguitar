const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author_name: String,
  title: String,
  stars: Number,
  body: String,
  pending: Boolean,
});

const Review = mongoose.model('Brian\'s Reviews', reviewSchema);

module.exports = Review;