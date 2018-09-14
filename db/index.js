const configuration = require('../knexfile'); 
const database = require('knex')(configuration); 

module.exports = database;