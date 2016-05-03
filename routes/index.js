var express = require('express');
var router = express.Router();
var users = require('../data/users.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

router.post('/login', function(req, res, next) {
  var user = users.find(function (user) {
    return (user.username === req.body.username && user.password === req.body.password)
  })
  console.log(user);
  if (user.length !== 0) {
    res.redirect('/')
  } else {
    res.redirect('/login')
  }

});

module.exports = router;
