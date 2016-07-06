
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book',
    function(table){
    table.integer('author_id').references('author.id');
      table.integer('book_id').references('book.id');
    }
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('author_book')
};
