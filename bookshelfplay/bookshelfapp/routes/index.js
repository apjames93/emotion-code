var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Author = require('../models/author');
var Author_Book = require('../models/author_book');

/* GET home page. */
router.get('/', function(request, response, next) {
  Book.fetchAll({ withRelated: 'authors' }).then(function(books) {
    response.render('index', { books: books.toJSON() });
  });
});

module.exports = router;
