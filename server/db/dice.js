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

function addNewDice(data, testDb) {
  const db = testDb || connection
  return db('dice_names')
    .insert({dice_name: data.body.dice_name, user_id: data.body.user_id})
}

function addNewDiceOptions(result, data, testDb) {
  const db = testDb || connection
  return db('dice_options')
    .insert({'dice_option': data.body.dice_option,'position': data.body.position, 'dice_names_id': result[0]})
}

module.exports = {
  getDiceOptions,
  getDiceNames,
  addNewDice,
  addNewDiceOptions,
  connection
}
