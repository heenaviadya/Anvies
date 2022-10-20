const mongoose = require('mongoose')

const Schema = mongoose.Schema;
import { v4 } from 'uuid';



const ReviewSchema = new Schema({
  rating: Number,
  description: String,
  userName: String,
  movie_Id: String,
});

 module.exports= mongoose.model('Reviews', ReviewSchema);

