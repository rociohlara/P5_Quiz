var router = express.Router();
var express = require('express');

const sequelize = require('../models/index.js');

//gert home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'ROCIO' });
});

router.get('/quizzes', function(req, res, next) {
  sequelize.models.quiz.findAll()
	.then(quiz => {
		res.render ('quizzes', {array: quiz});

	})
	.catch(error => next(error));
});

module.exports = router;
