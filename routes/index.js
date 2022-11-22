var express = require('express');
var router = express.Router();

const Movie = require('../models/Movie');
const Review = require('../models/Review');
const User = require('../models/User');

/* GET home page. */

router.get('/admin', async function (req, res, next) {
  const movie = await Movie.find();
  res.render('admin', { movieList: movie });
});



router.get('/create-m-post', function (req, res, next) {
  res.render('create-new');
});


router.post('/submit-movie', async function (req, res, next) {
  

  await Movie.create([
    {
      title: req.body.title,
      genre: req.body.genre,
      description: req.body.description,
      cast: req.body.cast,
      releaseDate: req.body.releaseDate,
      timeLength: req.body.timeLength,
      poster: req.body.poster,
    },
  ]);
 
  //  Movie is the schema we want to use

  res.redirect('/');
})
 
//Takes you to movies page and displays all the movies
router.get('/index', async function (req, res, next) {
  const movie = await Movie.find();
  res.render('index', { movieList: movie });
});

//Takes you to home page
 router.get('/home',async function(req,res,next){
  res.render('home');
 });



 //takes you to specific movie detail page 
router.get('/specific/:id', async function (req, res, next) {
 
 const movie = await Movie.findOne({_id: req.params.id})
  const review = await Review.find({movieId: req.params.id} ) 
  var total = 0;
           for(var i = 0; i < review.length; i++) {
               total += review[i].rating;
           }
           var avg = total / review.length;
  res.render('specific',{movie:movie,reviewList : review, avgrating:avg})
 
});


//takes you to review writing form
router.get('/create-review/:id', async function (req, res, next) {
  const movie_id = req.params.id;
  res.render('review-form', { movie_id: movie_id });
});

//for submiting review
router.post('/submit-review/:id', async function(req,res,next){
  movie = req.params.id;
  await Review.insertMany([{userName: req.body.userName, rating: req.body.rating,review:req.body.review, movieId: movie}])
  res.redirect('/index');
})



module.exports = router;
