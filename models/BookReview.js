var mongoose = require('mongoose');

var BookReviewSchema = new mongoose.Schema({
  id: String,
  updated_date: { type: Date, default: Date.now },
  avarageRating: Number,
  reviewCount: Number,
  reviews: [
    {
      id: String,
      title: String,
      description: String,
      rating: Number,
      reviewBy: String,
      reviewDate: { type: Date },
      updated_date: { type: Date, default: Date.now }
    }
  ],
  book: {
    id: String,
    title: String
  }


});

module.exports = mongoose.model('BookReview', BookReviewSchema);
