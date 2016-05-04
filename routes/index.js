var express = require('express');
var router = express.Router();
var users = require('../data/users.json');
var reservationsController = require ('../controllers/reservationsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

// router.post('/submit', function(req, res, next) {
//   reservation.createReservation;
// });

router.route('/submit')
  .post(reservationsController.createReservation)

router.post('/login', function(req, res, next) {
  var user = users.find(function (user) {
    return (user.username === req.body.username && user.password === req.body.password);
  });
  console.log(user);
  if (user.length !== 0) {
    res.redirect('/');
  } else {
    res.redirect('/login');
  }

});

module.exports = router;
