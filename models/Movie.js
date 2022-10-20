const mongoose = require('mongoose')

const Schema = mongoose.Schema;


  
  const MovieSchema = new Schema({
    title: String,
    description: String,
    cast: [String],
    genre: [String],
    releaseDate: String,
    timeLength: String,
    movie_Id: { type: String, default: v4() },
  });
  

module.exports = mongoose.model('Movies', MoviesSchema) // we use model function to make schema usable