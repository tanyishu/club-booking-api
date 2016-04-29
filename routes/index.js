var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

router.post('/login', function(req, res, next) {
  if (req.body.username === 'yishu' && req.body.password === 'password') {
    res.redirect('/')
  } else {
    res.redirect('/login')
  }

});

module.exports = router;
