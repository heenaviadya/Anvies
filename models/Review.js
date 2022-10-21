const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
  rating: Number,
  review: String,
  userName: String,
  movie_id: { type: String },
  reviewid: { type: String, default: uuid.v4() }
});

module.exports = mongoose.model('Reviews', ReviewSchema);

