
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('dice_options', table => {
  table.increments('id')
  table.string('dice_option')
  table.integer('position')
  table.integer('dice_names_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dice_options')
};
