var bookshelf = require('bookshelf')
require('./author')
var Book = bookshelf.Model.extend({
  tableName: 'books',
  authors: function() {
    return this.belongsToMany(Author);
  }
});

module.exports =  bookshelf.Model('book', book)
