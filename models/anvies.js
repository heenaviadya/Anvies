const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AnviesSchema = new Schema({
  
    title: {type: String,
        required: true,},
    year: {type: Date
    },
    runtime: {
      
    },
  
    poster:{},
    plot:{} ,
    
    genres: {},
    directors: {},
      rating: {
        "$numberDouble": "7.3"
      },
    
    cast: [
      "Madeleine Koehler"
    ],
    countries: [
      "France"
    ],
   

      viewer: {
        "rating": {
          "$numberDouble": "3.7"
        },
        "numReviews": {
          "$numberInt": "59"
        }
      },
      lastUpdated: {
        "$date": {
          "$numberLong": "1441993589000"
        }
      }
    }); //createdAt: //updatedAt:

module.exports = mongoose.model('Anvies',AnviesSchema) // we use model function to make schema usable