
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
  rating: Number,
  description: String,
  userName: String,
  movie_Id: String,
});

module.exports = mongoose.model('Reviews', ReviewSchema);

