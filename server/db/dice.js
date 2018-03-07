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
    .insert({dice_name: data.body.dice_name, user_id: data.body.user_id, active: data.body.active}, 'id')
}

function addNewDiceOptions(result, data, testDb) {
  const db = testDb || connection
  return db('dice_options')
    .insert([{'dice_option': data.body.dice_option_1,'position': data.body.position_1, 'dice_names_id': result[0]},
            {'dice_option': data.body.dice_option_2,'position': data.body.position_2, 'dice_names_id': result[0]},
            {'dice_option': data.body.dice_option_3,'position': data.body.position_3, 'dice_names_id': result[0]},
            {'dice_option': data.body.dice_option_4,'position': data.body.position_4, 'dice_names_id': result[0]},
            {'dice_option': data.body.dice_option_5,'position': data.body.position_5, 'dice_names_id': result[0]}], 'id')
}

function inactiveDice(id, testDb) {
  const db = testDb || connection
  return db('dice_names')
  .where('id', id)
  .update({'active': false})
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users')
    .select()
}

function getDiceHistory(testDb) {
  const db = testDb || connection
  return db('previous_dice_rolls')
    .select()
}

function addNewRoll(data, testDb) {
  const db = testDb || connection
  return db('previous_dice_rolls')
    .insert({roll_score: data.body.roll_score, user_id: data.body.user_id, dice_name_id: data.body.dice_name_id, dice_option_id: data.body.dice_option_id}, 'id')
}

module.exports = {
  getDiceOptions,
  getDiceNames,
  addNewDice,
  addNewDiceOptions,
  connection,
  getUsers,
  getDiceHistory,
  addNewRoll,
  inactiveDice
}
