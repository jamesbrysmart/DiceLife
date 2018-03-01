const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getDiceOptions (testDb) {
  const db = testDb || connection
  return db('dice_names')
  .join('dice_options', 'dice_names.id', 'dice_options.dice_names_id')
  }

function getDiceNames (testDb) {
  const db = testDb || connection
  return db('dice_names')
    .select()
}

module.exports = {
  getDiceOptions,
  getDiceNames,
  connection
}
