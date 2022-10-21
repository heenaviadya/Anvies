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

  await Movie.create([{ title: req.body.title, genre: req.body.genre, description: req.body.description, cast: req.body.cast, releaseDate: req.body.releaseDate, timeLength: req.body.timeLength, poster: req.body.poster }])
  //  Movie is the schema we want to use
  
  res.redirect('/');
})

router.get('/', async function (req, res, next) {
  const movie = await Movie.find();
  res.render('index', { movieList: movie });
});



router.get('/specific/:id', async function (req, res, next) {
  const movie = await Movie.findOne({ movie_id: req.params.id })
  const review = await Review.find({movie_id: req.params.id });
  console.log(review,movie);
  if(movie)
  res.render('specific', { movie: movie,reviewList:review ,  movie_id: req.params.id })
});

router.get('/create-review/:movie_id', async function (req, res, next) {

  res.render('review-form')

});


router.post('/submit-review/:movie_id', async function (req, res, next) {

  await Review.create([{ userName:req.body.username, rating:req.body.rating,
    review:req.body.review
    }])
  //  Review is the schema we want to use

  res.redirect('/');
})








module.exports = router;
