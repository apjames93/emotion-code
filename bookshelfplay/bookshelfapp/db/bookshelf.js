var environment = process.env.NODE_ENV || 'development';
var knex = require('knex')(config);
// add in to avid circular dependencies
Bookshelf.plugin('registry');
// require bookshelf with knex
module.exports = require('bookshelf')(knex);
