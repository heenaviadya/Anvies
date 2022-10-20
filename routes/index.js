var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req,res,next){
  res.render('admin');
});


router.get('/create-m-post', function(req,res,next){
  res.render('create-new');
});


router.get('/specific', function(req,res,next){
  res.render('specific');
});
module.exports = router;
