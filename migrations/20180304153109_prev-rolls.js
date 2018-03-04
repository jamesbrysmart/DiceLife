
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('previous_dice_rolls', table => {
    table.increments('prid')
    table.integer('user_id')
    table.integer('roll_score')
    table.integer('dice_name_id')
    table.integer('dice_option_id')
    table.timestamp('rolled_on').default(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('previous_dice_rolls')
};
