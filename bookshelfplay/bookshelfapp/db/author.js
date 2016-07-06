var bookshelf = require('./bookshelf');
require('./book')
var Book = bookshelf.Model.extend({
  tableName: 'author',
  authors: function() {
    return this.belongsToMany(book);
  }
});

module.exports =  bookshelf.Model('author', author)
