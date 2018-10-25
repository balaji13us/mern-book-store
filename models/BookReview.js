var mongoose = require('mongoose');
var UUID = require('uuid');
var BookReviewSchema = new mongoose.Schema({
  id: { type: String, default: UUID.v4 },
  updated_date: { type: Date, default: Date.now },
  avarageRating: Number,
  reviewCount: Number,
  reviews: [
    {
      id: { type: String, default: UUID.v4 },
      title: String,
      description: String,
      rating: Number,
      reviewBy: String,
      reviewDate: { type: Date },
      updated_date: { type: Date, default: Date.now }
    }
  ],
  book: {
    id: { type: String, default: UUID.v4 },
    title: String
  }


});

module.exports = mongoose.model('BookReview', BookReviewSchema);
