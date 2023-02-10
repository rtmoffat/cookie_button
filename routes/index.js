var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Push the button, win a cookie!' });
});

router.get('/cookie', function(req, res, next) {
  res.send("You win a cookie!");
});

module.exports = router;
