const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getDiceOptions (testDb) {
  const db = testDb || connection
  return db('dice_options')
  .join('dice_names', )
}

//module.exports = connection