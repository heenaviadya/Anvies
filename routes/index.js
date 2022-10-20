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
  const movie = await Movie.findOne({ _id: req.params.id })
  res.render('specific', { movie: movie })

});
module.exports = router;
