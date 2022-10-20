const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  title: { type: String },
  description: { type: String },
  cast: { type: String },
  genre: { type: String },
  releaseDate: { type: Date },
  timeLength: { type: String },
  poster: { type: String },
  movie_Id: { type: String,  default: uuid.v4()},
});

module.exports = mongoose.model('Movies', MovieSchema) // we use model function to make schema usable