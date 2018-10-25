var mongoose = require('mongoose');
var UUID = require('uuid');

var BookSchema = new mongoose.Schema({
  id: { type: String, default: UUID.v4 },
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_date: { type: Date },
  publisher: String,
  updated_date: { type: Date, default: Date.now },  
  category: String,
  genre: String,
  productDimension: String

});

module.exports = mongoose.model('Book', BookSchema);
