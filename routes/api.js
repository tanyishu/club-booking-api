var express = require('express');
var router = express.Router();
var clubs = require('../data/clubs.json')
var users = require('../data/users.json')
var tables = require('../data/tables.json')

router.get('/clubs', function(req, res, next) {
  res.json(clubs);
});

router.get('/users', function(req, res, next) {
  res.json(users);
});

router.get('/tables', function(req, res, next) {
  res.json(tables);
});

module.exports = router;
