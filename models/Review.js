
const mongoose = require('mongoose');
const { stringify } = require('uuid');
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
  rating: Number,
  review: String,
  userName: String,
  movieId: String
});

module.exports = mongoose.model('Reviews', ReviewSchema);

