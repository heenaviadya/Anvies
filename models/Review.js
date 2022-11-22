const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
  rating: Number,
  review: String,
  userName: String,
  Movie: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Movie"
    }
    ]
});




module.exports = mongoose.model('Reviews', ReviewSchema);

